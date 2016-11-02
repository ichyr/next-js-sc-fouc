webpackHotUpdate(2,{

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _taggedTemplateLiteral2 = __webpack_require__(95);

	var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

	var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #000000;\n  color: white;\n'], ['\n  background-color: #000000;\n  color: white;\n']);

	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _styledComponents = __webpack_require__(102);

	var _styledComponents2 = _interopRequireDefault(_styledComponents);

	var _css = __webpack_require__(91);

	var _css2 = _interopRequireDefault(_css);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Example of a component styled by styled-components
	var StyledComponent = _styledComponents2.default.div(_templateObject);

	// Example from Next's home page
	var glamorStyle = (0, _css2.default)({
	  color: 'red',
	  ':hover': {
	    color: 'blue'
	  },
	  '@media (max-width: 500px)': {
	    color: 'rebeccapurple'
	  }
	});

	exports.default = function () {
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'div',
	      { style: { color: 'green' } },
	      'I am being styled by React\'s built in styling'
	    ),
	    _react2.default.createElement(
	      StyledComponent,
	      null,
	      'I am being styled by styled components'
	    ),
	    _react2.default.createElement(
	      'div',
	      { className: glamorStyle },
	      'I am being styled by next & glamor'
	    )
	  );
	};
	    if (true) {
	      module.hot.accept()
	      if (module.hot.status() !== 'idle') {
	        var Component = module.exports.default || module.exports
	        next.router.update('/', Component)
	      }
	    }
	  

/***/ }

})