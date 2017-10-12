import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cool from 'cool-ascii-faces';
import 'dotenv/config';
const im = require('imagemagick');

import db from './db';

// Filestack api key should be accesible now
// console.log(`FILESTACK_API_KEY: ${process.env.FILESTACK_API_KEY}`);

export default function() {
	const app = express();
	const port = process.env.PORT || 8080;
	
	//Log with Morgan
	app.use(morgan('dev'));
	
	//accept encoded data as well as json format
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	
	//Static files
	app.use(express.static(__dirname));
	
	app.route('/image')
		.get((req, res) => db.images.all().then((imageList) => res.json(imageList)))
		.post((req, res) => {
			const { url } = req.body;
			// FIXME
			imageList.push({
				key: imageList.length, 
				url
			});
			res.json({
				success: 1,
				message:'Image Successfully added!'
			});
		});
	
	app.get('/image/details', function(req, res) {
		const srcImage = decodeURIComponent(req.query.url);
		im.identify(srcImage, function(err, output) {
			if (err) throw err;
			res.json({ 'imageDetails': output });
		});
	});
	
	const face = cool();
	
	app.get('/cool', function(req, res) {
		res.json(face);
	});
	
	app.listen(port);
	
	console.log(`listening on port ${port}`);
};
