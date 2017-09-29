class ImagesRepository {
    constructor(db, pgp) {
        this.db = db;
        this.pgp = pgp;
    }

    all() {
        return this.db.any('SELECT * FROM images');
    }

}

export default ImagesRepository;