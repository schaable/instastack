import * as promiseLib from 'bluebird';
import pgp from 'pg-promise';
import * as repos from './repos';

const initOptions = {
    promiseLib,
    extend: (obj, dc) => {
        obj.images = new repos.Images(obj, pgp);
    }
};

const pgPromise = pgp(initOptions);
const db = pgPromise(process.env.DATABASE_URL);

export default db;