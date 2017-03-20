'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_express2.default.static(_path2.default.join(__dirname, '../build')));

app.get('*', function (request, response) {
  response.sendFile(_path2.default.resolve(__dirname, '../build', 'index.html'));
});

app.listen(3000, function () {
  console.log('Server started on PORT 3000');
});
