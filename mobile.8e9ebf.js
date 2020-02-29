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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	(function webpackMissingModule() { throw new Error("Cannot find module \"babel-polyfill\""); }());
	module.exports = __webpack_require__(417);


/***/ }),

/***/ 18:
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

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _addClass = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"dom101/add-class\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _addClass2 = _interopRequireDefault(_addClass);

	var _removeClass = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"dom101/remove-class\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _removeClass2 = _interopRequireDefault(_removeClass);

	var _after = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"dom101/after\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _after2 = _interopRequireDefault(_after);

	var _browser = __webpack_require__(419);

	var _browser2 = _interopRequireDefault(_browser);

	var _fix = __webpack_require__(420);

	var _fix2 = _interopRequireDefault(_fix);

	var _util = __webpack_require__(18);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// fix hexo 不支持的配置
	function isPathMatch(path, href) {
		var reg = /\/|index.html/g;
		return path.replace(reg, '') === href.replace(reg, '');
	}
	// 浏览器判断


	function tabActive() {
		var $tabs = document.querySelectorAll('.js-header-menu li a');
		var path = window.location.pathname;

		for (var i = 0, len = $tabs.length; i < len; i++) {
			var $tab = $tabs[i];
			if (isPathMatch(path, $tab.getAttribute('href'))) {
				(0, _addClass2.default)($tab, 'active');
			}
		}
	}

	function getElementLeft(element) {
		var actualLeft = element.offsetLeft;
		var current = element.offsetParent;
		while (current !== null) {
			actualLeft += current.offsetLeft;
			current = current.offsetParent;
		}
		return actualLeft;
	}
	function getElementTop(element) {
		var actualTop = element.offsetTop;
		var current = element.offsetParent;
		while (current !== null) {
			actualTop += current.offsetTop;
			current = current.offsetParent;
		}
		return actualTop;
	}

	function scrollStop($dom, top, limit, zIndex, diff) {
		var nowLeft = getElementLeft($dom);
		var nowTop = getElementTop($dom) - top;

		if (nowTop - limit <= diff) {
			var $newDom = $dom.$newDom;
			if (!$newDom) {
				$newDom = $dom.cloneNode(true);
				(0, _after2.default)($dom, $newDom);
				$dom.$newDom = $newDom;
				$newDom.style.position = 'fixed';
				$newDom.style.top = (limit || nowTop) + 'px';
				$newDom.style.left = nowLeft + 'px';
				$newDom.style.zIndex = zIndex || 2;
				$newDom.style.width = '100%';
				$newDom.style.color = '#fff';
			}
			$newDom.style.visibility = 'visible';
			$dom.style.visibility = 'hidden';
		} else {
			$dom.style.visibility = 'visible';
			var _$newDom = $dom.$newDom;
			if (_$newDom) {
				_$newDom.style.visibility = 'hidden';
			}
		}
	}

	function handleScroll() {
		var $overlay = document.querySelector('.js-overlay');
		var $menu = document.querySelector('.js-header-menu');
		scrollStop($overlay, document.body.scrollTop, -63, 2, 0);
		scrollStop($menu, document.body.scrollTop, 1, 3, 0);
	}

	function bindScroll() {
		document.querySelector('#container').addEventListener('scroll', function (e) {
			handleScroll();
		});

		window.addEventListener('scroll', function (e) {
			handleScroll();
		});
		handleScroll();
	}

	function init() {
		if (_browser2.default.versions.mobile && window.screen.width < 800) {
			tabActive();
			bindScroll();
		}
	}

	init();

	(0, _util.addLoadEvent)(function () {
		_fix2.default.init();
	});

	module.exports = {};

/***/ }),

/***/ 419:
/***/ (function(module, exports) {

	'use strict';

	var browser = {
	    versions: function () {
	        var u = window.navigator.userAgent;
	        return {
	            trident: u.indexOf('Trident') > -1, //IE内核
	            presto: u.indexOf('Presto') > -1, //opera内核
	            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
	            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
	            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
	            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
	            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
	            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者安卓QQ浏览器
	            iPad: u.indexOf('iPad') > -1, //是否为iPad
	            webApp: u.indexOf('Safari') == -1, //是否为web应用程序，没有头部与底部
	            weixin: u.indexOf('MicroMessenger') == -1 //是否为微信浏览器
	        };
	    }()
	};

	module.exports = browser;

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

	'use strict';

	function init() {
		// 由于hexo分页不支持，手工美化
		var $nav = document.querySelector('#page-nav');
		if ($nav && !document.querySelector('#page-nav .extend.prev')) {
			$nav.innerHTML = '<a class="extend prev disabled" rel="prev">&laquo; Prev</a>' + $nav.innerHTML;
		}
		if ($nav && !document.querySelector('#page-nav .extend.next')) {
			$nav.innerHTML = $nav.innerHTML + '<a class="extend next disabled" rel="next">Next &raquo;</a>';
		}

		// 新窗口打开
		if (yiliaConfig && yiliaConfig.open_in_new) {
			var $a = document.querySelectorAll('.article-entry a:not(.article-more-a)');
			$a.forEach(function ($em) {
				var target = $em.getAttribute('target');
				if (!target || target === '') {
					$em.setAttribute('target', '_blank');
				}
			});
		}
		// 目录序号
		if (yiliaConfig && yiliaConfig.toc_hide_index) {
			var _$a = document.querySelectorAll('.toc-number');
			_$a.forEach(function ($em) {
				$em.style.display = 'none';
			});
		}

		// about me 转义
		var $aboutme = document.querySelector('#js-aboutme');
		if ($aboutme && $aboutme.length !== 0) {
			$aboutme.innerHTML = $aboutme.innerText;
		}
	}

	module.exports = {
		init: init
	};

/***/ })

/******/ });