'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var drawer = function drawer() {
  var state = null;
  return {
    set: function set(data) {
      state = (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' ? _extends({}, state, data) : _extends({}, state);
      state = Object.keys(state).length > 0 ? state : null;
    },
    get: function get(key) {
      return (state || {})[key] || null;
    },
    getAll: function getAll() {
      return state;
    },
    getClone: function getClone(key) {
      var clone = JSON.stringify((state || {})[key] || null);
      return JSON.parse(clone);
    },
    clear: function clear(key) {
      delete (state || {})[key];
    },
    clearAll: function clearAll() {
      state = null;
    },
    isKeyExist: function isKeyExist(key) {
      return Object.keys(state || {}).includes(key);
    },
    isExist: function isExist(key) {
      return !!(state || {})[key];
    }
  };
};
exports.default = drawer();