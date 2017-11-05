webpackJsonp([0],{

/***/ "0OKz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "26cW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Demo_vue__ = __webpack_require__("4Z64");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_425d3357_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Demo_vue__ = __webpack_require__("ndDm");
function injectStyle (ssrContext) {
  __webpack_require__("d7J2")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Demo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_425d3357_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Demo_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "4GhW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"upload"},[_c('button',{ref:"uploadBtn",staticClass:"upload-btn",on:{"click":_vm.onShowUpload}},[_vm._v(_vm._s(_vm.txt))]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],ref:"dropdown",staticClass:"upload-dropdown",style:(_vm.dropdownStyle),on:{"click":function($event){$event.stopPropagation();}}},[_c('div',{staticClass:"upload-main"},[_c('div',{staticClass:"upload-trigger",on:{"click":_vm.onSelectTrigger}},[_vm._v("+选择文件")]),_vm._v(" "),_c('input',{ref:"fileInput",staticStyle:{"display":"none"},attrs:{"type":"file"},on:{"change":_vm.onSelect}})]),_vm._v(" "),_c('div',{staticClass:"upload-tip"},[(_vm.status==0)?_c('div',{staticClass:"upload-tip-error"},[_vm._v("上传失败")]):_vm._e(),_vm._v(" "),(_vm.status==1)?_c('div',{staticClass:"upload-tip-progress"},[_vm._v("上传中..."+_vm._s(_vm.percent)+"%")]):_vm._e(),_vm._v(" "),(_vm.status==2)?_c('div',{staticClass:"upload-tip-success"},[_vm._v("上传成功"),_c('br'),_vm._v(_vm._s(_vm.name))]):_vm._e(),_vm._v(" "),(_vm.status==4)?_c('div',{staticClass:"upload-tip-error"},[_vm._v(_vm._s(_vm.errorMsg))]):_vm._e()])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "4Z64":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Upload_vue__ = __webpack_require__("jd+X");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'app',
    components: {
        Upload: __WEBPACK_IMPORTED_MODULE_0__Upload_vue__["a" /* default */]
    },
    data: function () {
        return {
            //formData里提交的其他参数
            extroData: {
                id: 123,
                name: 'mick'
            },
            fileUrl: ''
        };
    },
    methods: {
        onUploadSuccess(e) {
            console.log(e);
            this.fileUrl = e.fileUrl;
        }
    }
});

/***/ }),

/***/ "APWZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'upload',
    props: {
        txt: {
            type: String,
            default: '上传文件'
        },
        url: {
            type: String,
            default: ''
        },
        types: {
            type: String,
            default: 'image'
        },
        maxSize: {
            type: Number,
            default: '1000*1024*1024'
        },
        extroData: {
            default: {}
        }
    },
    data() {
        return {
            status: 3, //1：上传中，2：成功，0：失败，3：未上传，4：其他错误提示
            show: false,
            errorMsg: '',
            percent: '0',
            name: '',
            dropdownStyle: {}
        };
    },
    methods: {
        onShowUpload() {
            this.reset();
            this.show = !this.show;
            let dropdownWidth = 200,
                $uploadBtn = this.$refs.uploadBtn,
                $dropdown = this.$refs.dropdown,
                btnOffset = $uploadBtn.getBoundingClientRect(),
                btnWidth = $uploadBtn.offsetWidth,
                btnHeight = $uploadBtn.offsetHeight;
            this.dropdownStyle = {
                top: btnOffset.top + btnHeight + 8 + 'px',
                left: btnOffset.left + btnWidth / 2 - dropdownWidth / 2 + 'px'
            };
        },

        onSelectTrigger() {
            this.reset();
            this.$refs.fileInput.click();
        },

        reset() {
            this.errorMsg = '';
            this.status = 3;
        },

        onSelect(e) {
            let file = e.target.files[0];
            this.onCheckFile(file);
        },

        onCheckFile(file) {
            if (file.size > this.maxSize) {
                this.status = 4;
                this.errorMsg = '文件过大';
                return false;
            }
            let typeValid = false;
            this.types.split('|').forEach(function (item) {
                typeValid = typeValid || file.type.indexOf(item) != -1;
            });
            if (!typeValid) {
                this.status = 4;
                this.errorMsg = '文件类型错误';
                return false;
            }

            this.onUpload(file);
        },

        onUpload(file) {
            let that = this,
                formData = new FormData();
            formData.append('file', file);
            Object.keys(this.extroData).forEach(key => {
                formData.append(key, this.extroData[key]);
            });
            let uploadProgress = function (event) {
                if (event.lengthComputable) {
                    this.status = 1;
                    that.percent = 100 * Math.round(event.loaded) / event.total;
                    if (that.percent == 100) {
                        that.status = 2;
                    }
                }
            };

            new Promise(function (resolve, reject) {
                let xhr = new XMLHttpRequest();
                xhr.open('POST', that.url, true);
                xhr.onreadystatechange = function () {
                    if (this.readyState !== 4) {
                        return;
                    }
                    if (this.status === 200) {
                        resolve(JSON.parse(this.responseText));
                    } else {
                        reject(JSON.parse(this.responseText));
                    }
                };
                xhr.upload.addEventListener("progress", uploadProgress, false);
                xhr.send(formData);
            }).then(
            // 成功
            function (res) {
                that.status = 2;
                that.name = file.name;
                that.$emit('on-success', res);
                // setTimeout(() => {
                //     that.show = false;
                // }, 1 * 1000);
            },
            // 失败
            function (res) {
                that.status = 0;
                console.log(res);
                that.errorMsg = res.errorMsg;
            });
        }
    }
});

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c6b14c08_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("WfQ8");
function injectStyle (ssrContext) {
  __webpack_require__("0OKz")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c6b14c08_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].prototype.hasAuth = function () {
  return true;
};

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "WfQ8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Demo__ = __webpack_require__("26cW");




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
		routes: [{
				path: '/',
				name: 'demo',
				component: __WEBPACK_IMPORTED_MODULE_2__components_Demo__["a" /* default */]
		}]
}));

/***/ }),

/***/ "d7J2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dPKf":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "jd+X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Upload_vue__ = __webpack_require__("APWZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b4914516_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Upload_vue__ = __webpack_require__("4GhW");
function injectStyle (ssrContext) {
  __webpack_require__("dPKf")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b4914516"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Upload_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b4914516_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_vue_loader_lib_selector_type_template_index_0_Upload_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "ndDm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"container"}},[_c('upload',{attrs:{"txt":"点击上传","url":"/upload","types":"jpg|jpeg|png|gif|html","max-size":10*1024*1024,"extroData":_vm.extroData},on:{"on-success":_vm.onUploadSuccess,"on-error":[_vm.onUploadSuccess,_vm.onUploadSuccess]}}),_vm._v(" "),(_vm.fileUrl !='')?_c('div',[_c('a',{attrs:{"href":_vm.fileUrl,"target":"_blank"}},[_vm._v("预览")])]):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'app'
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.3bdec56992b1f8ce865b.js.map