'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _file = require('./file');

var _file2 = _interopRequireDefault(_file);

var _select = require('./select');

var _select2 = _interopRequireDefault(_select);

var _textarea = require('./textarea');

var _textarea2 = _interopRequireDefault(_textarea);

var _date = require('./date');

var _date2 = _interopRequireDefault(_date);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _buttonsList = require('./buttons-list');

var _buttonsList2 = _interopRequireDefault(_buttonsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  text: _input2.default,
  password: _input2.default,
  email: _input2.default,
  number: _input2.default,
  select: _select2.default,
  file: _file2.default,
  textarea: _textarea2.default,
  date: _date2.default,
  checkbox: _checkbox2.default,
  buttons: _buttonsList2.default
};