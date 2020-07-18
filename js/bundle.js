/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_review_full_text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/review-full-text.js */ "./source/js/modules/review-full-text.js");
/* harmony import */ var _modules_photo_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/photo-popup.js */ "./source/js/modules/photo-popup.js");
/* harmony import */ var _modules_rating_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/rating.js */ "./source/js/modules/rating.js");



var reviewFullText = new _modules_review_full_text_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var photoPopup = new _modules_photo_popup_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
var rating = new _modules_rating_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
reviewFullText.render();
photoPopup.render();
rating.setRatingWidth();

/***/ }),

/***/ "./source/js/modules/components/photo-popup-component.js":
/*!***************************************************************!*\
  !*** ./source/js/modules/components/photo-popup-component.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhotoPopupComponent; });
/* harmony import */ var src_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils.js */ "./source/js/modules/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var createPhotoPopupTemplate = function createPhotoPopupTemplate(src, alt) {
  return "<div class=\"photo-popup\">\n      <div class=\"photo-popup__container\">\n        <img class=\"photo-popup__image\" src=\"".concat(src, "\" alt=\"").concat(alt, "\">\n        <div class=\"photo-popup__close-btn-wrapper\">\n          <button class=\"photo-popup__close-btn\" type=\"button\" aria-label=\"\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043E\u043A\u043D\u043E\"></button>\n        </div>\n      </div>\n     </div>");
};

var PhotoPopupComponent = /*#__PURE__*/function () {
  function PhotoPopupComponent(src, alt) {
    _classCallCheck(this, PhotoPopupComponent);

    this._element = null;
    this._src = src;
    this._alt = alt;
  }

  _createClass(PhotoPopupComponent, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createPhotoPopupTemplate(this._src, this._alt);
    }
  }, {
    key: "getElement",
    value: function getElement() {
      if (!this._element) {
        this._element = Object(src_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
      }

      return this._element;
    }
  }, {
    key: "removeElement",
    value: function removeElement() {
      this._element = null;
    }
  }, {
    key: "setCloseBtnClickHandler",
    value: function setCloseBtnClickHandler(handler) {
      this.getElement().querySelector(".photo-popup__close-btn").addEventListener("click", handler);
    }
  }]);

  return PhotoPopupComponent;
}();



/***/ }),

/***/ "./source/js/modules/photo-popup.js":
/*!******************************************!*\
  !*** ./source/js/modules/photo-popup.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhotoPopup; });
/* harmony import */ var src_components_photo_popup_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/components/photo-popup-component.js */ "./source/js/modules/components/photo-popup-component.js");
/* harmony import */ var src_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/utils.js */ "./source/js/modules/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var PhotoPopup = /*#__PURE__*/function () {
  function PhotoPopup() {
    _classCallCheck(this, PhotoPopup);

    this._containerElement = null;
    this._photoPopupComponent = null;
    this._src = null;
    this._alt = null;
  }

  _createClass(PhotoPopup, [{
    key: "render",
    value: function render() {
      this._createPhotoHandlers();
    }
  }, {
    key: "setReviewImageClickHandler",
    value: function setReviewImageClickHandler(handler) {
      var _this = this;

      var reviewImagesElements = document.querySelector(".review__images-wrapper");
      reviewImagesElements.addEventListener("click", function (evt) {
        evt.preventDefault();
        var element = evt.target;

        if (element.tagName !== "IMG" && !element.classList.contains("review__image")) {
          return;
        }

        _this._src = evt.target.src;
        _this._alt = evt.target.alt;
        handler();
      });
    }
  }, {
    key: "_createPhotoHandlers",
    value: function _createPhotoHandlers() {
      var _this2 = this;

      var reviewImageClickHandler = function reviewImageClickHandler() {
        _this2._openPopup(_this2._src, _this2._alt);
      };

      this.setReviewImageClickHandler(reviewImageClickHandler);
    }
  }, {
    key: "_openPopup",
    value: function _openPopup(src, alt) {
      this._renderPopup(src, alt);
    }
  }, {
    key: "_closePopup",
    value: function _closePopup() {
      Object(src_utils_js__WEBPACK_IMPORTED_MODULE_1__["removeElement"])(this._containerElement, this._photoPopupComponent);

      this._photoPopupComponent.getElement().classList.remove("photo-popup--show");
    }
  }, {
    key: "_createPopupHandlers",
    value: function _createPopupHandlers() {
      var _this3 = this;

      var popupCloseBtnClickHandler = function popupCloseBtnClickHandler() {
        _this3._closePopup();
      };

      this._photoPopupComponent.setCloseBtnClickHandler(popupCloseBtnClickHandler);
    }
  }, {
    key: "_renderPopup",
    value: function _renderPopup(src, alt) {
      this._photoPopupComponent = new src_components_photo_popup_component_js__WEBPACK_IMPORTED_MODULE_0__["default"](src, alt);
      this._containerElement = document.querySelector("main");
      Object(src_utils_js__WEBPACK_IMPORTED_MODULE_1__["appendElement"])(this._containerElement, this._photoPopupComponent);

      var imageElement = this._photoPopupComponent.getElement().querySelector(".photo-popup__image");

      imageElement.src = this._src;
      imageElement.alt = this._alt;

      this._photoPopupComponent.getElement().classList.add("photo-popup--show");

      this._createPopupHandlers();
    }
  }]);

  return PhotoPopup;
}();



/***/ }),

/***/ "./source/js/modules/rating.js":
/*!*************************************!*\
  !*** ./source/js/modules/rating.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rating; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var STAR_WIDTH = 15;

var replaceComma = function replaceComma(number) {
  return number.toString().replace(",", ".");
};

var Rating = /*#__PURE__*/function () {
  function Rating() {
    _classCallCheck(this, Rating);
  }

  _createClass(Rating, [{
    key: "setRatingWidth",
    value: function setRatingWidth() {
      var ratingInputElements = document.querySelectorAll(".rating__input--fifth");
      var totalRatingCountElement = document.querySelector(".rating__total-count").textContent;
      ratingInputElements.forEach(function (ratingInputElement) {
        var width = STAR_WIDTH * replaceComma(totalRatingCountElement);
        ratingInputElement.style.width = "".concat(width, "px");
      });
    }
  }]);

  return Rating;
}();



/***/ }),

/***/ "./source/js/modules/review-full-text.js":
/*!***********************************************!*\
  !*** ./source/js/modules/review-full-text.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReviewFullText; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ReviewFullText = /*#__PURE__*/function () {
  function ReviewFullText() {
    _classCallCheck(this, ReviewFullText);
  }

  _createClass(ReviewFullText, [{
    key: "render",
    value: function render() {
      this.renderText();

      this._createReviewTextHandlers();
    }
  }, {
    key: "renderText",
    value: function renderText() {
      var reviewTextElements = document.querySelectorAll(".review__text");
      reviewTextElements.forEach(function (reviewTextElement) {
        reviewTextElement.classList.add("review__text--croped");
      });
    }
  }, {
    key: "setMoreBtnClickHandlers",
    value: function setMoreBtnClickHandlers(handler) {
      var reviewListElement = document.querySelector(".reviews__list");
      reviewListElement.addEventListener("click", handler);
    }
  }, {
    key: "_createReviewTextHandlers",
    value: function _createReviewTextHandlers(kek) {
      var _this = this;

      var moreBtnClickHandler = function moreBtnClickHandler(evt) {
        var element = evt.target;

        if (element.tagName !== "BUTTON" && !element.classList.contains("review__btn-more")) {
          return;
        }

        if (element.previousElementSibling.classList.contains("review__text--croped")) {
          _this._showReviewText(element);

          element.previousElementSibling.classList.remove("review__text--croped");
        } else {
          _this._hideReviewText(element);

          element.previousElementSibling.classList.add("review__text--croped");
        }
      };

      this.setMoreBtnClickHandlers(moreBtnClickHandler);
    }
  }, {
    key: "_showReviewText",
    value: function _showReviewText(element) {
      element.classList.remove("review__btn-more--hide");
      element.classList.toggle("review__btn-more--show");
      element.textContent = "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C";
    }
  }, {
    key: "_hideReviewText",
    value: function _hideReviewText(element) {
      element.classList.remove("review__btn-more--show");
      element.classList.add("review__btn-more--hide");
      element.textContent = "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435";
    }
  }]);

  return ReviewFullText;
}();



/***/ }),

/***/ "./source/js/modules/utils.js":
/*!************************************!*\
  !*** ./source/js/modules/utils.js ***!
  \************************************/
/*! exports provided: createElement, appendElement, removeElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendElement", function() { return appendElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeElement", function() { return removeElement; });
var createElement = function createElement(template) {
  var newElement = document.createElement("div");
  newElement.innerHTML = template;
  return newElement.firstChild;
};

var appendElement = function appendElement(parent, component) {
  var element = component.getElement();
  parent.appendChild(element);
};

var removeElement = function removeElement(parent, component) {
  var removedElement = component.getElement();
  parent.removeChild(removedElement);
};



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map