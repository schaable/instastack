
require('dotenv').load();

var b2v = require('buffer-to-vinyl');
var gulp = require('gulp');
var path = require('path');

gulp.task('configFrontend', function() {
    var distConfigDir = path.join(__dirname, 'dist');
    var json = JSON.stringify({
        FILESTACK_API_KEY: process.env.FILESTACK_API_KEY
    });

    b2v.stream(new Buffer('var frontendConfig = ' + json + ';'), 'frontend.config.js')
        .pipe(gulp.dest(distConfigDir));
});
