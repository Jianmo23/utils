(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.utils = {}));
}(this, function (exports) { 'use strict';

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /*
   * 判断数据类型
   */
  var TYPE = function TYPE(o) {
    return Object.prototype.toString.call(o).replace(/\[object\s|\]/ig, '');
  };

  var isArray = function isArray(arr) {
    return !!Array.isArray && Array.isArray(arr) || TYPE(arr) === 'Array';
  };

  var isObject = function isObject(obj) {
    return !obj ? false : TYPE(obj) === 'Object';
  };

  var isFunction = function isFunction(fn) {
    return !fn ? false : TYPE(fn) === 'Function';
  };

  var isString = function isString(str) {
    return TYPE(str) === 'String';
  };

  var isNumber = function isNumber(num) {
    return TYPE(num) === 'Number';
  }; // [谈谈Javascript中的void操作符](https://segmentfault.com/a/1190000000474941)


  var isUndefined = function isUndefined(param) {
    return param === void 0;
  };

  var searchParams = function searchParams() {
    var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.search;
    var tmp = str.replace(/\?/ig, '');
    var obj = {};

    if (!window.URLSearchParams) {
      var params = new URLSearchParams(tmp);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = params[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          obj[key] = value;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } else {
      var arr = str && str.split('&');

      for (var i = 0, len = arr.length; i < len; i++) {
        var tmpArr = arr[i].split('=');
        obj[tmpArr[0]] = tmpArr[1];
      }
    }

    return obj;
  };

  var toArray = function toArray() {
    var arraylike = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return !!Array.from && (Array.from(arraylike) || []).slice(startIndex) || [].slice.call(arraylike, startIndex);
  };

  var each = function each(arraylike, fn) {
    arraylike = toArray(arraylike);

    if (!![].forEach) {
      arraylike.forEach(fn);
    } else {
      for (var i = 0, len = arraylike.length; i < len; i++) {
        fn && fn(arraylike[i], i);
      }
    }
  }; // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat


  var flat = function flat() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if ([].flat) {
      return arr.flat(Infinity);
    } else {
      return arr.reduce(function (init, cur) {
        return isArray(cur) ? init.concat(flat(cur)) : init.concat(cur);
      }, []);
    }
  };

  var isEmptyArray = function isEmptyArray(arr) {
    return !toArray(arr).length;
  };

  var copyArray = function copyArray() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return _toConsumableArray(arr);
  };

  var uniqueArray = function uniqueArray() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return _toConsumableArray(new Set(arr));
  }; // 混淆数组


  var randomArray = function randomArray() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return arr.slice().sort(function () {
      return Math.random() - 0.5;
    });
  };

  // 常用格式化方法
  // 格式化金钱
  var formatMoney = function formatMoney(money) {
    return money && money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // 数值运算常用方法

  /* 运算符：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_Operators */
  // 指数运算符（**）
  // 精确小数
  var roundNum = function roundNum(num) {
    var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return Math.round(num * Math.pow(10, decimal)) / Math.pow(10, decimal);
  }; // roundNum(1.69, 1) 1.7
  // roundNum(1.69, 2) 1.69
  // 判断奇偶


  var oddEven = function oddEven(num) {
    return num & 1 ? 'odd' : 'even';
  }; // 取最大值


  var max = function max() {
    return Math.max.apply(Math, arguments);
  }; // 取最小值


  var min = function min() {
    return Math.min.apply(Math, arguments);
  }; // 在指定范围内，生成随机数


  var randomNUm = function randomNUm(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  /*
   * 对象常用方法
   */

  var isEmptyObject = function isEmptyObject(obj) {
    return isObject(obj) ? !Object.keys(obj) : true;
  };

  var copyObject = function copyObject() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // return {...obj};
    return JSON.parse(JSON.stringify(obj));
  };

  var extendObject = function extendObject() {
    var oo = {};

    for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    for (var _i = 0, _rest = rest; _i < _rest.length; _i++) {
      var item = _rest[_i];
      var tmp = copyObject(item) || {};

      for (var key in tmp) {
        oo[key] = tmp[key];
      }
    }

    return oo;
  };

  exports.copyArray = copyArray;
  exports.copyObject = copyObject;
  exports.each = each;
  exports.extendObject = extendObject;
  exports.flat = flat;
  exports.formatMoney = formatMoney;
  exports.isArray = isArray;
  exports.isEmptyArray = isEmptyArray;
  exports.isEmptyObject = isEmptyObject;
  exports.isFunction = isFunction;
  exports.isNumber = isNumber;
  exports.isObject = isObject;
  exports.isString = isString;
  exports.isUndefined = isUndefined;
  exports.max = max;
  exports.min = min;
  exports.oddEven = oddEven;
  exports.randomArray = randomArray;
  exports.randomNUm = randomNUm;
  exports.roundNum = roundNum;
  exports.searchParams = searchParams;
  exports.toArray = toArray;
  exports.uniqueArray = uniqueArray;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
