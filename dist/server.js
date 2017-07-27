'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 8080;

//Log with Morgan
app.use((0, _morgan2.default)('dev'));

//accept encoded data as well as json format
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

//Static files
app.use(_express2.default.static(__dirname));

var imageList = [{
	key: 0,
	url: "https://process.filestackapi.com/sharpen/negative/sb5RRdoQiiy5l5JUglB1"
}, {
	key: 1,
	url: "https://process.filestackapi.com/sharpen/oil_paint/urjTyRrAQA6sUzK2qIsd"
}, {
	key: 2,
	url: "https://process.filestackapi.com/sepia/modulate/wxYyL4yQyyRH1RQLZ6gL"
}, {
	key: 3,
	url: "https://process.filestackapi.com/blur/pixelate/O9vo0AynTNaNZlRyRBUm"
}, {
	key: 4,
	url: "https://process.filestackapi.com/blackwhite/kcirovLQC2eJmA6pkrMD"
}, {
	key: 5,
	url: "https://process.filestackapi.com/sharpen/modulate/5V2ZH22ZTWGXv2lMvvVT"
}];

app.route('/image').get(function (req, res) {
	return res.json(imageList);
}).post(function (req, res) {
	var url = req.body.url;

	imageList.push({
		key: imageList.length,
		url: url
	});
	res.json({
		success: 1,
		message: 'Image Successfully added!'
	});
});

app.listen(port);

console.log('listening on port ' + port);
//# sourceMappingURL=server.js.map