(() => {
    "use strict";
    var __webpack_modules__ = ([
(() => {
console.log("Hello, world!");
})()
    ]);
    var __webpack_module_cache__ = {};
    
    function __webpack_require__(moduleId) {
    
        if(__webpack_module_cache__[moduleId]) {
            return __webpack_module_cache__[moduleId].exports;
        }
    
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
    
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    
        return module.exports;
    }
    
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for(var key in definition) {
                if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                }
            }
        };
    })();
    
    (() => {
        __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    })();
    
    (() => {
        __webpack_require__.r = (exports) => {
            if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            }
            Object.defineProperty(exports, '__esModule', { value: true });
        };
    })();
    
    (() => {
        __webpack_require__.p = "";
    })();
    
    (() => {
        var inProgress = {};
        var dataWebpackPrefix = "main:";
        function loadScript(url, options) {
            if(inProgress[url]) return Promise.resolve();
            if(!options) options = {};
            inProgress[url] = true;
            var script = document.createElement('script');
            script.charset = 'utf-8';
            script.timeout = options.timeout || 120000;
            if (__webpack_require__.nc) {
                script.setAttribute("nonce", __webpack_require__.nc);
            }
            script.src = url;
            var error = new Error();
            var loadingEnded = function(eventType) {
                script.onerror = script.onload = null;
                clearTimeout(timeout);
                var counter = inProgress[url];
                if(counter) {
                    if(eventType === 'load') counter--;
                    if(counter === 0) {
                        var err = inProgress[url + 'failed'];
                        if(err) {
                            error.message = err;
                            __webpack_require__.oe(error);
                        }
                        delete inProgress[url];
                    }
                }
            };
            var timeout = setTimeout(function() {
                loadingEnded('timeout');
            }, script.timeout);
            script.onerror = function() {
                loadingEnded('error');
            };
            script.onload = function() {
                loadingEnded('load');
            };
            (document.head || document.body).appendChild(script);
            return new Promise(function(resolve, reject) {
                script.onerror = function() {
                    var err = new Error('Loading script ' + url + ' failed');
                    err.code = 'SCRIPT_LOAD_ERROR';
                    reject(err);
                };
                script.onload = function() {
                    resolve();
                };
            });
        }
        __webpack_require__.l = function(urls, options, callback) {
            if(typeof urls === 'string') urls = [urls];
            if(urls.length === 0)
                callback();
        };
    })();
    
    __webpack_require__.l([0], (function(__webpack_require__) {
        return __webpack_require__(0);
    }));
})();
