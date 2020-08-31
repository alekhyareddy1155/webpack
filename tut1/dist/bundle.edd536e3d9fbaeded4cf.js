/*! For license information please see bundle.edd536e3d9fbaeded4cf.js.LICENSE.txt */
!function(e){var n={};function o(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)o.d(r,t,function(n){return e[n]}.bind(null,t));return r},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s="./src/index.js")}({"./src/components/heading/heading.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _heading_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading.scss */ "./src/components/heading/heading.scss");\n/* harmony import */ var _heading_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_heading_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Heading = /*#__PURE__*/function () {\n  function Heading() {\n    _classCallCheck(this, Heading);\n  }\n\n  _createClass(Heading, [{\n    key: "render",\n    value: function render() {\n      var h1 = document.createElement(\'h1\');\n      var body = document.querySelector(\'body\');\n      h1.innerHTML = \'Webpack is awesome\';\n      body.appendChild(h1);\n    }\n  }]);\n\n  return Heading;\n}();\n\n/* harmony default export */ __webpack_exports__["default"] = (Heading);\n\n//# sourceURL=webpack:///./src/components/heading/heading.js?')},"./src/components/heading/heading.scss":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/heading/heading.scss?")},"./src/components/hello-world-button/hello-world-button.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hello_world_button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello-world-button.scss */ \"./src/components/hello-world-button/hello-world-button.scss\");\n/* harmony import */ var _hello_world_button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hello_world_button_scss__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar HelloWorldButton = /*#__PURE__*/function () {\n  function HelloWorldButton() {\n    _classCallCheck(this, HelloWorldButton);\n\n    this.buttonCssClass = 'hello-world-button';\n  }\n\n  _createClass(HelloWorldButton, [{\n    key: \"render\",\n    value: function render() {\n      var button = document.createElement('button');\n      button.innerHTML = 'Hello world';\n      button.classList.add('hello-world-button');\n      var body = document.querySelector('body');\n\n      button.onclick = function () {\n        var p = document.createElement('p');\n        p.innerHTML = 'Hello world';\n        p.classList.add(this.buttonCssClass);\n        body.appendChild(p);\n      };\n\n      body.appendChild(button);\n    }\n  }]);\n\n  return HelloWorldButton;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HelloWorldButton);\n\n//# sourceURL=webpack:///./src/components/hello-world-button/hello-world-button.js?")},"./src/components/hello-world-button/hello-world-button.scss":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/hello-world-button/hello-world-button.scss?")},"./src/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_hello_world_button_hello_world_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hello-world-button/hello-world-button.js */ "./src/components/hello-world-button/hello-world-button.js");\n/* harmony import */ var _components_heading_heading_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/heading/heading.js */ "./src/components/heading/heading.js");\n\n\nvar heading = new _components_heading_heading_js__WEBPACK_IMPORTED_MODULE_1__["default"]();\nheading.render();\nvar helloWorldButton = new _components_hello_world_button_hello_world_button_js__WEBPACK_IMPORTED_MODULE_0__["default"]();\nhelloWorldButton.render();\n\nif (false) {} else if (true) {\n  console.log(\'development mode\');\n}\n\n_components_hello_world_button_hello_world_button_js__WEBPACK_IMPORTED_MODULE_0__["default"].method1();\n\n//# sourceURL=webpack:///./src/index.js?')}});