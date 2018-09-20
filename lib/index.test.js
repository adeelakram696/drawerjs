'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockData = [{
  router: { a: 1 }
}, {
  myobject: { a: 2 }
}];
test('blank add with no error', function () {
  expect(_index2.default.set()).toBe(undefined);
});
test('blank fetch with no error', function () {
  expect(_index2.default.get()).toBe(null);
});
test('blank clear with no error', function () {
  expect(_index2.default.clear()).toBe(undefined);
  expect(_index2.default.clearAll()).toBe(undefined);
});
test('set and get data', function () {
  _index2.default.set(mockData[0]);
  expect(_index2.default.get('router')).toBe(mockData[0].router);
});
test('clear data', function () {
  _index2.default.clear('router');
  expect(_index2.default.get('router')).toBe(null);
});
test('get cloned data', function () {
  _index2.default.set(mockData[1]);
  var temp = _index2.default.getClone('myobject');
  temp.a = 4;
  expect(_index2.default.get('myobject').a).toBe(2);
  _index2.default.clearAll();
  expect(_index2.default.getClone('myobject')).toBe(null);
});
test('clear All data when already empty', function () {
  _index2.default.clearAll();
  expect(_index2.default.get()).toBe(null);
});
test('is key exist', function () {
  _index2.default.set(mockData[0]);
  expect(_index2.default.isKeyExist('router')).toBe(true);
  _index2.default.clearAll();
  expect(_index2.default.isKeyExist('myobject')).toBe(false);
});
test('is data exist', function () {
  _index2.default.set(mockData[0]);
  expect(_index2.default.isExist('router')).toBe(true);
  _index2.default.clearAll();
  expect(_index2.default.isExist('myobject')).toBe(false);
});
test('get All data', function () {
  _index2.default.set(mockData[0]);
  _index2.default.set(mockData[1]);
  expect(_index2.default.getAll().myobject.a).toBe(_extends({}, mockData[0], mockData[1]).myobject.a);
  _index2.default.clearAll();
  expect(_index2.default.getAll()).toBe(null);
});