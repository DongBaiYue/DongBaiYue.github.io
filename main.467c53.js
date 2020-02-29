/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(4);

	var _viewer = __webpack_require__(7);

	var _viewer2 = _interopRequireDefault(_viewer);

	var _share = __webpack_require__(14);

	var _share2 = _interopRequireDefault(_share);

	var _aside = __webpack_require__(17);

	var _aside2 = _interopRequireDefault(_aside);

	var _util = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 边缘

	// 图片查看器
	// 样式
	(0, _util.addLoadEvent)(function () {
		_share2.default.init();
		_viewer2.default.init();
		_aside2.default.init();
	});
	// 分享

	// 上报

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!../../node_modules/css-loader/index.js?-autoprefixer!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js!./main.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!../../node_modules/style-loader/addStyles.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?-autoprefixer!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?-autoprefixer!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var jsCookie = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"js-cookie\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"badjs-report\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);return null;
	}
	// 统计用，开发者不需要理会
	if (window.BJ_REPORT) {
		BJ_REPORT.init({
			id: 1
		});
		BJ_REPORT.init({
			id: 1,
			uin: window.location.origin,
			combo: 0,
			delay: 1000,
			url: "//litten.me:9005/badjs/",
			ignore: [/Script error/i],
			random: 1,
			repeat: 500000,
			onReport: function onReport(id, errObj) {},
			ext: {}
		});
		// iframe不上报
		var host = window.location.host;
		var isNotFrame = top === window;
		var isNotLocal = !(/localhost/i.test(host) || /127.0.0.1/i.test(host) || /0.0.0.0/i.test(host));
		isNotFrame && isNotLocal && BJ_REPORT.report('yilia-' + window.location.host);

		// 来源上报
		var from = getQueryString('f');
		var fromKey = 'yilia-from';
		if (from) {
			isNotFrame && BJ_REPORT.report('from-' + from);
			// 种cookie
			jsCookie.set(fromKey, from);
		} else {
			if (document.referrer.indexOf(window.location.host) >= 0) {
				// 取cookie
				from = jsCookie.get(fromKey);
				from && isNotFrame && BJ_REPORT.report('from-' + from);
			} else {
				// 清cookie
				jsCookie.remove(fromKey);
			}
		}
	}

	module.exports = {
		init: function init() {}
	};

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _photoswipe = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"photoswipe\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _photoswipe2 = _interopRequireDefault(_photoswipe);

	var _photoswipeUiDefault = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"photoswipe/dist/photoswipe-ui-default\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _photoswipeUiDefault2 = _interopRequireDefault(_photoswipeUiDefault);

	__webpack_require__(10);

	__webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.PhotoSwipe = _photoswipe2.default;
	window.PhotoSwipeUI_Default = _photoswipeUiDefault2.default;

	function init() {
		var pswpElement = document.querySelectorAll('.pswp')[0];
		var $imgArr = document.querySelectorAll('.article-entry img:not(.reward-img)');

		$imgArr.forEach(function ($em, i) {
			$em.onclick = function () {
				// slider展开状态
				// todo: 这样不好，后面改成状态
				if (document.querySelector('.left-col.show')) return;
				var items = [];
				$imgArr.forEach(function ($em2, i2) {
					var img = $em2.getAttribute('data-idx', i2);
					var src = $em2.getAttribute('data-target') || $em2.getAttribute('src');
					var title = $em2.getAttribute('alt');
					// 获得原图尺寸
					var image = new Image();
					image.src = src;
					items.push({
						src: src,
						w: image.width || $em2.width,
						h: image.height || $em2.height,
						title: title
					});
				});
				var gallery = new _photoswipe2.default(pswpElement, _photoswipeUiDefault2.default, items, {
					index: parseInt(i)
				});
				gallery.init();
			};
		});
	}

	module.exports = {
		init: init
	};

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!../../../css-loader/index.js?-autoprefixer!../../../postcss-loader/index.js!../../../sass-loader/index.js!./default-skin.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!../../../style-loader/addStyles.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../css-loader/index.js?-autoprefixer!../../../postcss-loader/index.js!../../../sass-loader/index.js!./default-skin.css", function() {
				var newContent = require("!!../../../css-loader/index.js?-autoprefixer!../../../postcss-loader/index.js!../../../sass-loader/index.js!./default-skin.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!../../css-loader/index.js?-autoprefixer!../../postcss-loader/index.js!../../sass-loader/index.js!./photoswipe.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!../../style-loader/addStyles.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../css-loader/index.js?-autoprefixer!../../postcss-loader/index.js!../../sass-loader/index.js!./photoswipe.css", function() {
				var newContent = require("!!../../css-loader/index.js?-autoprefixer!../../postcss-loader/index.js!../../sass-loader/index.js!./photoswipe.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _addClass = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"dom101/add-class\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _addClass2 = _interopRequireDefault(_addClass);

	var _removeClass = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"dom101/remove-class\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _removeClass2 = _interopRequireDefault(_removeClass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function generate(url, opts) {
	    var url = url.replace(/<%-sUrl%>/g, encodeURIComponent(opts.sUrl)).replace(/<%-sTitle%>/g, opts.sTitle).replace(/<%-sDesc%>/g, opts.sDesc).replace(/<%-sPic%>/g, encodeURIComponent(opts.sPic));

	    window.open(url);
	}

	function showWX() {
	    var $wx = document.querySelector('.js-wx-box');
	    var $mask = document.querySelector('.mask');
	    (0, _addClass2.default)($wx, 'in');
	    (0, _addClass2.default)($wx, 'ready');
	    (0, _addClass2.default)($mask, 'in');
	}

	function hideWX() {
	    var $wx = document.querySelector('.js-wx-box');
	    var $mask = document.querySelector('.mask');
	    (0, _removeClass2.default)($wx, 'in');
	    (0, _removeClass2.default)($wx, 'ready');
	    (0, _removeClass2.default)($mask, 'in');
	}

	function handleClick(type, opts) {
	    if (type === 'weibo') {
	        generate('http://service.weibo.com/share/share.php?url=<%-sUrl%>&title=<%-sTitle%>&pic=<%-sPic%>', opts);
	    } else if (type === 'qq') {
	        generate('http://connect.qq.com/widget/shareqq/index.html?url=<%-sUrl%>&title=<%-sTitle%>&source=<%-sDesc%>', opts);
	    } else if (type === 'douban') {
	        generate('https://www.douban.com/share/service?image=<%-sPic%>&href=<%-sUrl%>&name=<%-sTitle%>&text=<%-sDesc%>', opts);
	    } else if (type === 'qzone') {
	        generate('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=<%-sUrl%>&title=<%-sTitle%>&pics=<%-sPic%>&summary=<%-sDesc%>', opts);
	    } else if (type === 'facebook') {
	        generate('https://www.facebook.com/sharer/sharer.php?u=<%-sUrl%>', opts);
	    } else if (type === 'twitter') {
	        generate('https://twitter.com/intent/tweet?text=<%-sTitle%>&url=<%-sUrl%>&via=<%-config.url%>', opts);
	    } else if (type === 'google') {
	        generate('https://plus.google.com/share?url=<%-sUrl%>', opts);
	    } else if (type === 'weixin') {
	        showWX();
	    }
	}

	var init = function init() {
	    var $sns = document.querySelectorAll('.share-sns');
	    if (!$sns || $sns.length === 0) return;

	    var sUrl = window.location.href;
	    var sTitle = document.querySelector('title').innerHTML;
	    var $img = document.querySelectorAll('.article-entry img');
	    var sPic = $img.length ? document.querySelector('.article-entry img').getAttribute('src') : '';
	    if (sPic !== '' && !/^(http:|https:)?\/\//.test(sPic)) {
	        sPic = window.location.origin + sPic;
	    }

	    $sns.forEach(function ($em) {
	        $em.onclick = function (e) {
	            var type = $em.getAttribute('data-type');
	            handleClick(type, {
	                sUrl: sUrl,
	                sPic: sPic,
	                sTitle: sTitle,
	                sDesc: sTitle
	            });
	        };
	    });

	    document.querySelector('.mask').onclick = hideWX;
	    document.querySelector('.js-modal-close').onclick = hideWX;
	};

	module.exports = {
	    init: init
	};

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

	'use strict';

	var backTop = function backTop(domE, ctn, distance) {
	    if (!domE) return;
	    var timer = null;
	    var _onscroll = window.onscroll,
	        _onclick = domE.onclick;
	    (ctn || window).onscroll = throttle(function () {
	        typeof _onscroll === 'function' && _onscroll.apply(this, arguments);
	        toggleDomE();
	    }, 100);
	    domE.onclick = function () {
	        typeof _onclick === 'function' && _onclick.apply(this, arguments);
	        var baseCt = ctn.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;
	        timer = setInterval(function () {
	            //设置一个计时器
	            var ct = ctn.scrollTop || document.documentElement.scrollTop || document.body.scrollTop; //获取距离顶部的距离
	            var diff = Math.max(10, ct / 6);
	            ct -= diff;
	            if (ct > 0) {
	                //如果与顶部的距离大于零
	                ctn.scrollTop = ctn.scrollTop - diff;
	                window.scrollTo(0, ct); //向上移动10px
	            } else {
	                //如果距离小于等于零
	                ctn.scrollTop = 0;
	                window.scrollTo(0, 0); //移动到顶部
	                clearInterval(timer); //清除计时器
	            }
	        }, 10); //隔10ms执行一次前面的function，展现一种平滑滑动效果
	    };

	    function toggleDomE() {
	        domE.style.display = (ctn.scrollTop || document.documentElement.scrollTop || document.body.scrollTop) > (distance || 500) ? 'block' : 'none';
	    }
	    function throttle(func, wait) {
	        var timer = null;
	        return function () {
	            var self = this,
	                args = arguments;
	            if (timer) clearTimeout(timer);
	            timer = setTimeout(function () {
	                return typeof func === 'function' && func.apply(self, args);
	            }, wait);
	        };
	    }
	};

	function init() {
	    backTop(document.getElementById('js-jump-container'), document.getElementById('container'));
	}

	module.exports = {
	    init: init
	};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof2 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"babel-runtime/helpers/typeof\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var e = function () {
	    function r(e, r, n) {
	        return r || n ? String.fromCharCode(r || n) : u[e] || e;
	    }
	    function n(e) {
	        return p[e];
	    }
	    var t = /&quot;|&lt;|&gt;|&amp;|&nbsp;|&apos;|&#(\d+);|&#(\d+)/g,
	        o = /['<> "&]/g,
	        u = {
	        "&quot;": '"',
	        "&lt;": "<",
	        "&gt;": ">",
	        "&amp;": "&",
	        "&nbsp;": " "
	    },
	        c = /\u00a0/g,
	        a = /<br\s*\/?>/gi,
	        i = /\r?\n/g,
	        f = /\s/g,
	        p = {};
	    for (var s in u) {
	        p[u[s]] = s;
	    }return u["&apos;"] = "'", p["'"] = "&#39;", {
	        encode: function encode(e) {
	            return e ? ("" + e).replace(o, n).replace(i, "<br/>").replace(f, "&nbsp;") : "";
	        },
	        decode: function decode(e) {
	            return e ? ("" + e).replace(a, "\n").replace(t, r).replace(c, " ") : "";
	        },
	        encodeBase16: function encodeBase16(e) {
	            if (!e) return e;
	            e += "";
	            for (var r = [], n = 0, t = e.length; t > n; n++) {
	                r.push(e.charCodeAt(n).toString(16).toUpperCase());
	            }return r.join("");
	        },
	        encodeBase16forJSON: function encodeBase16forJSON(e) {
	            if (!e) return e;
	            e = e.replace(/[\u4E00-\u9FBF]/gi, function (e) {
	                return escape(e).replace("%u", "\\u");
	            });
	            for (var r = [], n = 0, t = e.length; t > n; n++) {
	                r.push(e.charCodeAt(n).toString(16).toUpperCase());
	            }return r.join("");
	        },
	        decodeBase16: function decodeBase16(e) {
	            if (!e) return e;
	            e += "";
	            for (var r = [], n = 0, t = e.length; t > n; n += 2) {
	                r.push(String.fromCharCode("0x" + e.slice(n, n + 2)));
	            }return r.join("");
	        },
	        encodeObject: function encodeObject(r) {
	            if (r instanceof Array) for (var n = 0, t = r.length; t > n; n++) {
	                r[n] = e.encodeObject(r[n]);
	            } else if ("object" == (typeof r === "undefined" ? "undefined" : (0, _typeof3.default)(r))) for (var o in r) {
	                r[o] = e.encodeObject(r[o]);
	            } else if ("string" == typeof r) return e.encode(r);
	            return r;
	        },
	        loadScript: function loadScript(path) {
	            var $script = document.createElement('script');
	            document.getElementsByTagName('body')[0].appendChild($script);
	            $script.setAttribute('src', path);
	        },
	        addLoadEvent: function addLoadEvent(func) {
	            var oldonload = window.onload;
	            if (typeof window.onload != "function") {
	                window.onload = func;
	            } else {
	                window.onload = function () {
	                    oldonload();
	                    func();
	                };
	            }
	        }
	    };
	}();

	module.exports = e;

/***/ })
/******/ ]);