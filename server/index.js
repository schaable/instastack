import throng from 'throng';

import start from './start';

const workers = process.env.WEB_CONCURRENCY || 1;

throng({
    workers,
    lifetime: Infinity
}, start);
