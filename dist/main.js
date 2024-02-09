/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

:root {
  --button-color: #f5f1e3;
  --accent-color: #9ad5a8;
  --dark-main-color: #07383c;
  --border-radius: 10px;
  --paragraph-weight: 300;
  --heading-weight: 500;
  --mobile-heading-size: 29px;
  --mobile-paragraph-size: 18px;
  font-family: 'Fira Sans Extra Condensed', sans-serif;
  --paragraph-font-family: 'Fira Sans Condensed', sans-serif;
  --paragraph-color: #4b4b4b;
  letter-spacing: 0.6px;
  --card-heading-mobile: 22px;
  --card-subheading-mobile: 18px;
  --card-paragraph-mobile: 16px;
}
@keyframes bounce {
  50% {
    transform: translateY(-15px);
  }
}
@keyframes fade-in {
  0% {
    /* opacity: 0; */
    transform: translateY(1000px);
  }
  75% {
    opacity: 0.75;
    transform: translateY(-15px);
  }
  100% {
    opacity: 1;
  }
}
@keyframes grow {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.slide-left {
  transform: translateX(1000px);
}
.slide-right {
  transform: translateX(-1000px);
}

.disappear {
  transform: scale(0);
}
html {
  width: 100vw;
  box-sizing: border-box;
  overflow-x: hidden;
}
body {
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}
nav {
  display: flex;
  gap: 10px;
  align-self: flex-end;
}
nav li {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 10px;
  background-color: var(--button-color);
  border-radius: var(--border-radius);
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.25);
  transition: all 0.1s ease-in-out;
}
nav li:hover {
  transform: scale(1.2);
  cursor: pointer;
}
nav img {
  height: auto;
  width: 25px;
}

.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  background: linear-gradient(#07383c, #9ad5a8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 25px 20px;
  box-sizing: border-box;
  min-height: 450px;
}
.hero-text {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 245px;
  color: var(--button-color);
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.25);
  line-height: 1.1;
}
.hero-content {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.hero-heading {
  font-size: 45px;
  font-weight: bold;
}
.hero-subheading {
  font-size: 22px;
  font-weight: bold;
}
.job-title {
  font-size: 16px;
  font-weight: bold;
}
.hero-btn {
  width: 155px;
  height: 55px;
  border-radius: var(--border-radius);
  border: none;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  align-self: flex-end;
  margin-top: 20px;
  background-color: var(--button-color);
  transition: all 0.1s ease-in-out;
}
.hero-btn:hover {
  transform: scale(1.1);
  background: rgba(255, 0, 0, 0);
  border: 2px solid var(--button-color);
  color: var(--button-color);
}
.scribble {
  padding-bottom: 20px;
  animation-name: bounce;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-duration: 2s;
}
.text-highlight {
  color: var(--accent-color);
}
main {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #07383c;
}

/* about me section */
.about-me {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 70px 40px;
  box-sizing: border-box;
  gap: 20px;
  background: linear-gradient(#9ad5a8, #f5f1e3);
}
.about-me-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: var(--heading-weight);
  font-size: var(--mobile-heading-size);
}
.about-me-title {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.about-me-text {
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-weight: var(--paragraph-weight);
  font-size: var(--mobile-paragraph-size);
  line-height: 1.2;
  font-family: var(--paragraph-font-family);
  color: var(--paragraph-color);
}
.line {
  width: 110px;
  height: 1.5px;
  background-color: black;
}
/* skills section */

.languages-i-speak {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100%; */
  background-color: var(--button-color);
  padding: 50px 0px;
  box-sizing: border-box;
  overflow: visible;
}
.languages-header {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}
.language-header-txt {
  transition: transform 0.4s ease-in-out;
}
.languages-header img {
  width: 45px;
}
.languages-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#0a3b3d, #309a87);
  padding: 75px 60px;
  gap: 40px;
  box-sizing: border-box;
  border-radius: 15px;
  overflow: hidden;
  box-sizing: border-box;
  min-width: 200px;
  border: none;
}

.languages-icons {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 430px;
  /* padding: 20px 20px; */
  box-sizing: border-box;
  /* padding: 0 40px; */
}
.languages-header h2 {
  text-align: center;
  color: var(--button-color);
  font-size: var(--mobile-heading-size);
  font-weight: var(--heading-weight);
}
.icon {
  height: 89px;
  width: 89px;
}
.top-icons,
.lower-icons {
  display: flex;
  justify-content: center;
  gap: 25px;
  transition: all 1s ease-in;
}
.top-icons {
  animation-name: slide-left;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: infinite;
}

.slider-selectors {
  display: flex;
  gap: 20px;
}
.selector-line {
  width: 80px;
  height: 4px;
  background-color: white;
  border-radius: 10px;
}
.experience {
  background-color: var(--button-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 40px 20px;
  gap: 40px;
}

.card-collection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 20px;
}
.experience-heading {
  align-self: flex-start;
  font-size: var(--mobile-heading-size);
  font-weight: var(--heading-weight);
}
.experience-card {
  display: flex;
  flex-direction: column;
  max-width: 340px;
  border: 2px solid black;
  border-radius: 15px;
  box-sizing: border-box;
  opacity: 0;
}
.experience-card > img {
  height: auto;
  width: 100%;
}
.card-heading {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}
.card-heading-text {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.card-icons img {
  height: 32px;
  width: 32px;
}
.card-icons {
  display: flex;
  gap: 10px;
}
.project-title {
  font-size: var(--card-heading-mobile);
  font-weight: var(--heading-weight);
}
.card-subheading {
  font-size: var(--card-subheading-mobile);
}
.project-para {
  font-size: var(--card-paragraph-mobile);
  font-family: var(--paragraph-font-family);
  line-height: 1.2;
  color: var(--paragraph-color);
}
.card-text {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px;
  box-sizing: border-box;
}
.contact {
  width: 100%;
  padding: 70px 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  gap: 30px;
  background-color: var(--dark-main-color);
  padding-bottom: 80px;
  opacity: 0;
}
.contact > h2 {
  text-align: center;
  font-size: var(--mobile-heading-size);
  font-weight: var(--heading-weight);
  color: var(--button-color);
  max-width: 315px;
}
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
}

.contact-info input {
  border: none;
  /* border-bottom: 2px solid black; */
  box-shadow: none;
  border-radius: 0px;
  font-size: var(--mobile-paragraph-size);
  font-family: var(--paragraph-font-family);
  outline: none;
  border-bottom: rgb(0, 0, 0) 2px solid;
  background-color: var(--dark-main-color);
  color: var(--button-color);
}
::placeholder {
  color: var(--button-color);
}
textarea::placeholder {
  color: rgb(76, 76, 76);
}
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  align-items: center;
  max-width: 315px;
}
textarea {
  font-size: var(--mobile-paragraph-size);
  font-family: var(--paragraph-font-family);
  width: 100%;
  border-radius: 15px;
  padding: 10px;
}
.slant {
  width: 100%;
  height: auto;
}
footer {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 50px 20px;
  box-sizing: border-box;
  /* flex-direction: column; */
  align-items: center;
  gap: 20px;
  font-size: var(--mobile-paragraph-size);
  font-weight: var(--heading-weight);
}

footer img {
  height: auto;
  width: 25px;
}
.footer-icons {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
}
.fade-in {
  animation: fade-in 1s ease-in-out 0s 1;
  opacity: 1;
}
.grow {
  animation: grow 1s ease-in-out 0s 1;
  transform: scale(1);
  opacity: 1;
}
/*  */
@media (max-width: 320px) {
  .languages-card {
    width: 100%;
    min-width: none;
    padding: 50px 50px;
  }
  .languages-header h2 {
    font-size: 25px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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sB;EACtB,QAAQ;AACV;AACA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,qCAAqC;EACrC,kCAAkC;AACpC;AACA;EACE,wCAAwC;AAC1C;AACA;EACE,uCAAuC;EACvC,yCAAyC;EACzC,gBAAgB;EAChB,6BAA6B;AAC/B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;EACtB,SAAS;EACT,wCAAwC;EACxC,oBAAoB;EACpB,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,qCAAqC;EACrC,kCAAkC;EAClC,0BAA0B;EAC1B,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;EAClB,uCAAuC;EACvC,yCAAyC;EACzC,aAAa;EACb,qCAAqC;EACrC,wCAAwC;EACxC,0BAA0B;AAC5B;AACA;EACE,0BAA0B;AAC5B;AACA;EACE,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,WAAW;EACX,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,uCAAuC;EACvC,yCAAyC;EACzC,WAAW;EACX,mBAAmB;EACnB,aAAa;AACf;AACA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,aAAa;EACb,6BAA6B;EAC7B,WAAW;EACX,kBAAkB;EAClB,sBAAsB;EACtB,4BAA4B;EAC5B,mBAAmB;EACnB,SAAS;EACT,uCAAuC;EACvC,kCAAkC;AACpC;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,sCAAsC;EACtC,UAAU;AACZ;AACA;EACE,mCAAmC;EACnC,mBAAmB;EACnB,UAAU;AACZ;AACA,KAAK;AACL;EACE;IACE,WAAW;IACX,eAAe;IACf,kBAAkB;EACpB;EACA;IACE,eAAe;EACjB;AACF","sourcesContent":["html,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  font-size: 100%;\r\n  font: inherit;\r\n  vertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\nbody {\r\n  line-height: 1;\r\n}\r\nol,\r\nul {\r\n  list-style: none;\r\n}\r\nblockquote,\r\nq {\r\n  quotes: none;\r\n}\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n  content: '';\r\n  content: none;\r\n}\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\n:root {\r\n  --button-color: #f5f1e3;\r\n  --accent-color: #9ad5a8;\r\n  --dark-main-color: #07383c;\r\n  --border-radius: 10px;\r\n  --paragraph-weight: 300;\r\n  --heading-weight: 500;\r\n  --mobile-heading-size: 29px;\r\n  --mobile-paragraph-size: 18px;\r\n  font-family: 'Fira Sans Extra Condensed', sans-serif;\r\n  --paragraph-font-family: 'Fira Sans Condensed', sans-serif;\r\n  --paragraph-color: #4b4b4b;\r\n  letter-spacing: 0.6px;\r\n  --card-heading-mobile: 22px;\r\n  --card-subheading-mobile: 18px;\r\n  --card-paragraph-mobile: 16px;\r\n}\r\n@keyframes bounce {\r\n  50% {\r\n    transform: translateY(-15px);\r\n  }\r\n}\r\n@keyframes fade-in {\r\n  0% {\r\n    /* opacity: 0; */\r\n    transform: translateY(1000px);\r\n  }\r\n  75% {\r\n    opacity: 0.75;\r\n    transform: translateY(-15px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes grow {\r\n  0% {\r\n    transform: scale(0);\r\n  }\r\n  50% {\r\n    transform: scale(1.1);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n.slide-left {\r\n  transform: translateX(1000px);\r\n}\r\n.slide-right {\r\n  transform: translateX(-1000px);\r\n}\r\n\r\n.disappear {\r\n  transform: scale(0);\r\n}\r\nhtml {\r\n  width: 100vw;\r\n  box-sizing: border-box;\r\n  overflow-x: hidden;\r\n}\r\nbody {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  overflow-x: hidden;\r\n}\r\nnav {\r\n  display: flex;\r\n  gap: 10px;\r\n  align-self: flex-end;\r\n}\r\nnav li {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  list-style: none;\r\n  padding: 10px;\r\n  background-color: var(--button-color);\r\n  border-radius: var(--border-radius);\r\n  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.25);\r\n  transition: all 0.1s ease-in-out;\r\n}\r\nnav li:hover {\r\n  transform: scale(1.2);\r\n  cursor: pointer;\r\n}\r\nnav img {\r\n  height: auto;\r\n  width: 25px;\r\n}\r\n\r\n.hero {\r\n  position: relative;\r\n  height: 100vh;\r\n  width: 100%;\r\n  background: linear-gradient(#07383c, #9ad5a8);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  padding: 25px 20px;\r\n  box-sizing: border-box;\r\n  min-height: 450px;\r\n}\r\n.hero-text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  max-width: 245px;\r\n  color: var(--button-color);\r\n  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.25);\r\n  line-height: 1.1;\r\n}\r\n.hero-content {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n}\r\n.hero-heading {\r\n  font-size: 45px;\r\n  font-weight: bold;\r\n}\r\n.hero-subheading {\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n}\r\n.job-title {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n}\r\n.hero-btn {\r\n  width: 155px;\r\n  height: 55px;\r\n  border-radius: var(--border-radius);\r\n  border: none;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.25);\r\n  cursor: pointer;\r\n  align-self: flex-end;\r\n  margin-top: 20px;\r\n  background-color: var(--button-color);\r\n  transition: all 0.1s ease-in-out;\r\n}\r\n.hero-btn:hover {\r\n  transform: scale(1.1);\r\n  background: rgba(255, 0, 0, 0);\r\n  border: 2px solid var(--button-color);\r\n  color: var(--button-color);\r\n}\r\n.scribble {\r\n  padding-bottom: 20px;\r\n  animation-name: bounce;\r\n  animation-timing-function: ease-in-out;\r\n  animation-delay: 1s;\r\n  animation-iteration-count: infinite;\r\n  animation-duration: 2s;\r\n}\r\n.text-highlight {\r\n  color: var(--accent-color);\r\n}\r\nmain {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #07383c;\r\n}\r\n\r\n/* about me section */\r\n.about-me {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  padding: 70px 40px;\r\n  box-sizing: border-box;\r\n  gap: 20px;\r\n  background: linear-gradient(#9ad5a8, #f5f1e3);\r\n}\r\n.about-me-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n  font-weight: var(--heading-weight);\r\n  font-size: var(--mobile-heading-size);\r\n}\r\n.about-me-title {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n.about-me-text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  font-weight: var(--paragraph-weight);\r\n  font-size: var(--mobile-paragraph-size);\r\n  line-height: 1.2;\r\n  font-family: var(--paragraph-font-family);\r\n  color: var(--paragraph-color);\r\n}\r\n.line {\r\n  width: 110px;\r\n  height: 1.5px;\r\n  background-color: black;\r\n}\r\n/* skills section */\r\n\r\n.languages-i-speak {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  /* width: 100%; */\r\n  background-color: var(--button-color);\r\n  padding: 50px 0px;\r\n  box-sizing: border-box;\r\n  overflow: visible;\r\n}\r\n.languages-header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n.language-header-txt {\r\n  transition: transform 0.4s ease-in-out;\r\n}\r\n.languages-header img {\r\n  width: 45px;\r\n}\r\n.languages-card {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background: linear-gradient(#0a3b3d, #309a87);\r\n  padding: 75px 60px;\r\n  gap: 40px;\r\n  box-sizing: border-box;\r\n  border-radius: 15px;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n  min-width: 200px;\r\n  border: none;\r\n}\r\n\r\n.languages-icons {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 30px;\r\n  max-width: 430px;\r\n  /* padding: 20px 20px; */\r\n  box-sizing: border-box;\r\n  /* padding: 0 40px; */\r\n}\r\n.languages-header h2 {\r\n  text-align: center;\r\n  color: var(--button-color);\r\n  font-size: var(--mobile-heading-size);\r\n  font-weight: var(--heading-weight);\r\n}\r\n.icon {\r\n  height: 89px;\r\n  width: 89px;\r\n}\r\n.top-icons,\r\n.lower-icons {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 25px;\r\n  transition: all 1s ease-in;\r\n}\r\n.top-icons {\r\n  animation-name: slide-left;\r\n  animation-duration: 2s;\r\n  animation-timing-function: ease-in-out;\r\n  animation-delay: 1s;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n.slider-selectors {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n.selector-line {\r\n  width: 80px;\r\n  height: 4px;\r\n  background-color: white;\r\n  border-radius: 10px;\r\n}\r\n.experience {\r\n  background-color: var(--button-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  padding: 40px 20px;\r\n  gap: 40px;\r\n}\r\n\r\n.card-collection {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  width: 100%;\r\n  gap: 20px;\r\n}\r\n.experience-heading {\r\n  align-self: flex-start;\r\n  font-size: var(--mobile-heading-size);\r\n  font-weight: var(--heading-weight);\r\n}\r\n.experience-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-width: 340px;\r\n  border: 2px solid black;\r\n  border-radius: 15px;\r\n  box-sizing: border-box;\r\n  opacity: 0;\r\n}\r\n.experience-card > img {\r\n  height: auto;\r\n  width: 100%;\r\n}\r\n.card-heading {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  gap: 15px;\r\n}\r\n.card-heading-text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n.card-icons img {\r\n  height: 32px;\r\n  width: 32px;\r\n}\r\n.card-icons {\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n.project-title {\r\n  font-size: var(--card-heading-mobile);\r\n  font-weight: var(--heading-weight);\r\n}\r\n.card-subheading {\r\n  font-size: var(--card-subheading-mobile);\r\n}\r\n.project-para {\r\n  font-size: var(--card-paragraph-mobile);\r\n  font-family: var(--paragraph-font-family);\r\n  line-height: 1.2;\r\n  color: var(--paragraph-color);\r\n}\r\n.card-text {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  padding: 30px;\r\n  box-sizing: border-box;\r\n}\r\n.contact {\r\n  width: 100%;\r\n  padding: 70px 40px;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  box-sizing: border-box;\r\n  gap: 30px;\r\n  background-color: var(--dark-main-color);\r\n  padding-bottom: 80px;\r\n  opacity: 0;\r\n}\r\n.contact > h2 {\r\n  text-align: center;\r\n  font-size: var(--mobile-heading-size);\r\n  font-weight: var(--heading-weight);\r\n  color: var(--button-color);\r\n  max-width: 315px;\r\n}\r\n.contact-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  width: 80%;\r\n}\r\n\r\n.contact-info input {\r\n  border: none;\r\n  /* border-bottom: 2px solid black; */\r\n  box-shadow: none;\r\n  border-radius: 0px;\r\n  font-size: var(--mobile-paragraph-size);\r\n  font-family: var(--paragraph-font-family);\r\n  outline: none;\r\n  border-bottom: rgb(0, 0, 0) 2px solid;\r\n  background-color: var(--dark-main-color);\r\n  color: var(--button-color);\r\n}\r\n::placeholder {\r\n  color: var(--button-color);\r\n}\r\ntextarea::placeholder {\r\n  color: rgb(76, 76, 76);\r\n}\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n  width: 100%;\r\n  align-items: center;\r\n  max-width: 315px;\r\n}\r\ntextarea {\r\n  font-size: var(--mobile-paragraph-size);\r\n  font-family: var(--paragraph-font-family);\r\n  width: 100%;\r\n  border-radius: 15px;\r\n  padding: 10px;\r\n}\r\n.slant {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\nfooter {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  padding: 50px 20px;\r\n  box-sizing: border-box;\r\n  /* flex-direction: column; */\r\n  align-items: center;\r\n  gap: 20px;\r\n  font-size: var(--mobile-paragraph-size);\r\n  font-weight: var(--heading-weight);\r\n}\r\n\r\nfooter img {\r\n  height: auto;\r\n  width: 25px;\r\n}\r\n.footer-icons {\r\n  display: flex;\r\n  gap: 12px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.fade-in {\r\n  animation: fade-in 1s ease-in-out 0s 1;\r\n  opacity: 1;\r\n}\r\n.grow {\r\n  animation: grow 1s ease-in-out 0s 1;\r\n  transform: scale(1);\r\n  opacity: 1;\r\n}\r\n/*  */\r\n@media (max-width: 320px) {\r\n  .languages-card {\r\n    width: 100%;\r\n    min-width: none;\r\n    padding: 50px 50px;\r\n  }\r\n  .languages-header h2 {\r\n    font-size: 25px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/contactFadeIn.js":
/*!*****************************************!*\
  !*** ./src/components/contactFadeIn.js ***!
  \*****************************************/
/***/ (() => {

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector('.contact').classList.add('grow');
    }
  });
});
observer.observe(document.querySelector('.contact'));


/***/ }),

/***/ "./src/components/domstuff.js":
/*!************************************!*\
  !*** ./src/components/domstuff.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _experience__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experience */ "./src/components/experience.js");
/* harmony import */ var _experienceCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experienceCard */ "./src/components/experienceCard.js");



const container = document.querySelector('.card-collection');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function domstuff() {
  const createProjectCards = () => {
    _experience__WEBPACK_IMPORTED_MODULE_0__["default"].forEach((project) => {
      const div = document.createElement('div');
      div.classList.add('experience-card');
      div.innerHTML = (0,_experienceCard__WEBPACK_IMPORTED_MODULE_1__["default"])(project);
      container.append(div);
      console.log('im broke');
    });
  };

  return { createProjectCards };
})());


/***/ }),

/***/ "./src/components/experience.js":
/*!**************************************!*\
  !*** ./src/components/experience.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_micamera_studios_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/micamera-studios.png */ "./src/images/micamera-studios.png");


class Project {
  constructor(title, subheading, description, img) {
    this.title = title;
    this.subheading = subheading;
    this.description = description;
    this.img = img;
  }

  print() {
    console.log(this);
  }
}

const micamera = new Project(
  'Micamera Studios',
  'Photography Web App',
  'Designed and developed a personalized, api linked application for client to funnel new interest and receive new lead information. Click on image to see live preview',
  _images_micamera_studios_png__WEBPACK_IMPORTED_MODULE_0__
);

const battleship = new Project(
  'Battleship',
  'Game App',
  'A javascript heavy version of battleship. The AI will never make the same move twice. Click on image to see live preview',
  _images_micamera_studios_png__WEBPACK_IMPORTED_MODULE_0__
);
const taskApp = new Project(
  'Task Organizer',
  'Productivity App',
  'A Javascript based app designed for keeping track of daily and weekly tasks. Click on image to see live preview',
  _images_micamera_studios_png__WEBPACK_IMPORTED_MODULE_0__
);

const projects = [micamera, battleship, taskApp];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);


/***/ }),

/***/ "./src/components/experienceCard.js":
/*!******************************************!*\
  !*** ./src/components/experienceCard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ card)
/* harmony export */ });
/* harmony import */ var _images_github_logo_mobile_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/github-logo-mobile.png */ "./src/images/github-logo-mobile.png");
/* harmony import */ var _images_share_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/share.png */ "./src/images/share.png");



function card(project) {
  return `
    <img
      src=${project.img}
      alt="micamera studios photography website project"
    />
    <div class="card-text">
      <div class="card-heading">
        <div class="card-heading-text">
          <h3 class="project-title">${project.title}</h3>
          <p class="card-subheading">${project.subheading}</p>
        </div>
        <div class="card-icons">
          <img src=${_images_github_logo_mobile_png__WEBPACK_IMPORTED_MODULE_0__} alt="github link" />
          <img src=${_images_share_png__WEBPACK_IMPORTED_MODULE_1__} alt="share with others link" />
        </div>
      </div>
      <p class="project-para">
        ${project.description}
      </p>
    </div>
 `;
}


/***/ }),

/***/ "./src/components/experienceFadeIn.js":
/*!********************************************!*\
  !*** ./src/components/experienceFadeIn.js ***!
  \********************************************/
/***/ (() => {

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const projects = document.querySelectorAll('.experience-card');
      projects.forEach((project) => {
        project.classList.add('fade-in');
      });
    }
  });
});
observer.observe(document.querySelector('.experience'));


/***/ }),

/***/ "./src/components/skillsSlider.js":
/*!****************************************!*\
  !*** ./src/components/skillsSlider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_css_logo_mobile_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/css-logo-mobile.png */ "./src/images/css-logo-mobile.png");
/* harmony import */ var _images_html_5_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/html-5-logo.png */ "./src/images/html-5-logo.png");
/* harmony import */ var _images_react_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/react-logo.png */ "./src/images/react-logo.png");
/* harmony import */ var _images_js_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/js-logo.png */ "./src/images/js-logo.png");
/* harmony import */ var _images_express_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/express.png */ "./src/images/express.png");
/* harmony import */ var _images_mongoDB_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/mongoDB.png */ "./src/images/mongoDB.png");
/* harmony import */ var _images_nodeJS_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/nodeJS.png */ "./src/images/nodeJS.png");
/* harmony import */ var _images_typescript_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/typescript.png */ "./src/images/typescript.png");









const topIcons = document.querySelector('.top-icons');
const lowerIcons = document.querySelector('.lower-icons');
const header = document.querySelector('.language-header-txt');
const currentLanguages = [_images_css_logo_mobile_png__WEBPACK_IMPORTED_MODULE_0__, _images_html_5_logo_png__WEBPACK_IMPORTED_MODULE_1__, _images_react_logo_png__WEBPACK_IMPORTED_MODULE_2__, _images_js_logo_png__WEBPACK_IMPORTED_MODULE_3__];
const inProgressSkills = [_images_typescript_png__WEBPACK_IMPORTED_MODULE_7__, _images_nodeJS_png__WEBPACK_IMPORTED_MODULE_6__, _images_express_png__WEBPACK_IMPORTED_MODULE_4__, _images_mongoDB_png__WEBPACK_IMPORTED_MODULE_5__];

const setImgs = (imgs) => {
  const icons = document.querySelectorAll('.icon');
  let num = 0;
  icons.forEach((icon) => {
    const pic = icon;
    pic.src = imgs[num];
    num += 1;
  });
};

const checkSlide = () => {
  if (header.textContent.includes('Languages')) {
    header.textContent = 'Skills In Progress';
    return setImgs(inProgressSkills);
  }
  header.textContent = 'Languages I Speak';
  return setImgs(currentLanguages);
};

function cardAnimationLoop() {
  topIcons.classList.add('slide-left');
  lowerIcons.classList.add('slide-right');
  header.classList.add('disappear');
  setTimeout(() => {
    checkSlide();
    header.classList.remove('disappear');
    topIcons.classList.remove('slide-left');
    lowerIcons.classList.remove('slide-right');
  }, 600);
  setTimeout(() => {
    cardAnimationLoop();
  }, 5000);
}

cardAnimationLoop();


/***/ }),

/***/ "./src/images/css-logo-mobile.png":
/*!****************************************!*\
  !*** ./src/images/css-logo-mobile.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/css-logo-mobile";

/***/ }),

/***/ "./src/images/express.png":
/*!********************************!*\
  !*** ./src/images/express.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/express";

/***/ }),

/***/ "./src/images/github-logo-mobile.png":
/*!*******************************************!*\
  !*** ./src/images/github-logo-mobile.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/github-logo-mobile";

/***/ }),

/***/ "./src/images/html-5-logo.png":
/*!************************************!*\
  !*** ./src/images/html-5-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/html-5-logo";

/***/ }),

/***/ "./src/images/js-logo.png":
/*!********************************!*\
  !*** ./src/images/js-logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/js-logo";

/***/ }),

/***/ "./src/images/micamera-studios.png":
/*!*****************************************!*\
  !*** ./src/images/micamera-studios.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/micamera-studios";

/***/ }),

/***/ "./src/images/mongoDB.png":
/*!********************************!*\
  !*** ./src/images/mongoDB.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/mongoDB";

/***/ }),

/***/ "./src/images/nodeJS.png":
/*!*******************************!*\
  !*** ./src/images/nodeJS.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/nodeJS";

/***/ }),

/***/ "./src/images/react-logo.png":
/*!***********************************!*\
  !*** ./src/images/react-logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/react-logo";

/***/ }),

/***/ "./src/images/share.png":
/*!******************************!*\
  !*** ./src/images/share.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/share";

/***/ }),

/***/ "./src/images/typescript.png":
/*!***********************************!*\
  !*** ./src/images/typescript.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/typescript";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _components_skillsSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/skillsSlider */ "./src/components/skillsSlider.js");
/* harmony import */ var _components_experienceFadeIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/experienceFadeIn */ "./src/components/experienceFadeIn.js");
/* harmony import */ var _components_experienceFadeIn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_experienceFadeIn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_contactFadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contactFadeIn */ "./src/components/contactFadeIn.js");
/* harmony import */ var _components_contactFadeIn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_contactFadeIn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_experience__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/experience */ "./src/components/experience.js");
/* harmony import */ var _components_experienceCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/experienceCard */ "./src/components/experienceCard.js");
/* harmony import */ var _components_domstuff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/domstuff */ "./src/components/domstuff.js");








_components_domstuff__WEBPACK_IMPORTED_MODULE_6__["default"].createProjectCards();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUtBQWlLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sWUFBWSxnQkFBZ0IsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLFFBQVEsVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFB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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ2E7QUFDSTtBQUNIO0FBQ0g7QUFDSTtBQUNRO0FBQzdDO0FBQ0EsNERBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvY29tcG9uZW50cy9jb250YWN0RmFkZUluLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9jb21wb25lbnRzL2RvbXN0dWZmLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9jb21wb25lbnRzL2V4cGVyaWVuY2UuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpZW5jZUNhcmQuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL2NvbXBvbmVudHMvZXhwZXJpZW5jZUZhZGVJbi5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvY29tcG9uZW50cy9za2lsbHNTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwsXHJcbmJvZHksXHJcbmRpdixcclxuc3BhbixcclxuYXBwbGV0LFxyXG5vYmplY3QsXHJcbmlmcmFtZSxcclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNixcclxucCxcclxuYmxvY2txdW90ZSxcclxucHJlLFxyXG5hLFxyXG5hYmJyLFxyXG5hY3JvbnltLFxyXG5hZGRyZXNzLFxyXG5iaWcsXHJcbmNpdGUsXHJcbmNvZGUsXHJcbmRlbCxcclxuZGZuLFxyXG5lbSxcclxuaW1nLFxyXG5pbnMsXHJcbmtiZCxcclxucSxcclxucyxcclxuc2FtcCxcclxuc21hbGwsXHJcbnN0cmlrZSxcclxuc3Ryb25nLFxyXG5zdWIsXHJcbnN1cCxcclxudHQsXHJcbnZhcixcclxuYixcclxudSxcclxuaSxcclxuY2VudGVyLFxyXG5kbCxcclxuZHQsXHJcbmRkLFxyXG5vbCxcclxudWwsXHJcbmxpLFxyXG5maWVsZHNldCxcclxuZm9ybSxcclxubGFiZWwsXHJcbmxlZ2VuZCxcclxudGFibGUsXHJcbmNhcHRpb24sXHJcbnRib2R5LFxyXG50Zm9vdCxcclxudGhlYWQsXHJcbnRyLFxyXG50aCxcclxudGQsXHJcbmFydGljbGUsXHJcbmFzaWRlLFxyXG5jYW52YXMsXHJcbmRldGFpbHMsXHJcbmVtYmVkLFxyXG5maWd1cmUsXHJcbmZpZ2NhcHRpb24sXHJcbmZvb3RlcixcclxuaGVhZGVyLFxyXG5oZ3JvdXAsXHJcbm1lbnUsXHJcbm5hdixcclxub3V0cHV0LFxyXG5ydWJ5LFxyXG5zZWN0aW9uLFxyXG5zdW1tYXJ5LFxyXG50aW1lLFxyXG5tYXJrLFxyXG5hdWRpbyxcclxudmlkZW8ge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbiAgZm9udDogaW5oZXJpdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG5hcnRpY2xlLFxyXG5hc2lkZSxcclxuZGV0YWlscyxcclxuZmlnY2FwdGlvbixcclxuZmlndXJlLFxyXG5mb290ZXIsXHJcbmhlYWRlcixcclxuaGdyb3VwLFxyXG5tZW51LFxyXG5uYXYsXHJcbnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmJvZHkge1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbm9sLFxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlLFxyXG5xIHtcclxuICBxdW90ZXM6IG5vbmU7XHJcbn1cclxuYmxvY2txdW90ZTpiZWZvcmUsXHJcbmJsb2NrcXVvdGU6YWZ0ZXIsXHJcbnE6YmVmb3JlLFxyXG5xOmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBjb250ZW50OiBub25lO1xyXG59XHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG46cm9vdCB7XHJcbiAgLS1idXR0b24tY29sb3I6ICNmNWYxZTM7XHJcbiAgLS1hY2NlbnQtY29sb3I6ICM5YWQ1YTg7XHJcbiAgLS1kYXJrLW1haW4tY29sb3I6ICMwNzM4M2M7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC0tcGFyYWdyYXBoLXdlaWdodDogMzAwO1xyXG4gIC0taGVhZGluZy13ZWlnaHQ6IDUwMDtcclxuICAtLW1vYmlsZS1oZWFkaW5nLXNpemU6IDI5cHg7XHJcbiAgLS1tb2JpbGUtcGFyYWdyYXBoLXNpemU6IDE4cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMgRXh0cmEgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICAtLXBhcmFncmFwaC1mb250LWZhbWlseTogJ0ZpcmEgU2FucyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIC0tcGFyYWdyYXBoLWNvbG9yOiAjNGI0YjRiO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjZweDtcclxuICAtLWNhcmQtaGVhZGluZy1tb2JpbGU6IDIycHg7XHJcbiAgLS1jYXJkLXN1YmhlYWRpbmctbW9iaWxlOiAxOHB4O1xyXG4gIC0tY2FyZC1wYXJhZ3JhcGgtbW9iaWxlOiAxNnB4O1xyXG59XHJcbkBrZXlmcmFtZXMgYm91bmNlIHtcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmYWRlLWluIHtcclxuICAwJSB7XHJcbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMDBweCk7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICBvcGFjaXR5OiAwLjc1O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGdyb3cge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuXHJcbi5zbGlkZS1sZWZ0IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwMHB4KTtcclxufVxyXG4uc2xpZGUtcmlnaHQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwMHB4KTtcclxufVxyXG5cclxuLmRpc2FwcGVhciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxufVxyXG5odG1sIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuYm9keSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxubmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5uYXYgbGkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxufVxyXG5uYXYgbGk6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxubmF2IGltZyB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAyNXB4O1xyXG59XHJcblxyXG4uaGVybyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNzM4M2MsICM5YWQ1YTgpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAyNXB4IDIwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtaW4taGVpZ2h0OiA0NTBweDtcclxufVxyXG4uaGVyby10ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1heC13aWR0aDogMjQ1cHg7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxufVxyXG4uaGVyby1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLmhlcm8taGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiA0NXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5oZXJvLXN1YmhlYWRpbmcge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uam9iLXRpdGxlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmhlcm8tYnRuIHtcclxuICB3aWR0aDogMTU1cHg7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxufVxyXG4uaGVyby1idG46aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMCwgMCwgMCk7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxufVxyXG4uc2NyaWJibGUge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2U7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG59XHJcbi50ZXh0LWhpZ2hsaWdodCB7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbn1cclxubWFpbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzM4M2M7XHJcbn1cclxuXHJcbi8qIGFib3V0IG1lIHNlY3Rpb24gKi9cclxuLmFib3V0LW1lIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiA3MHB4IDQwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBnYXA6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM5YWQ1YTgsICNmNWYxZTMpO1xyXG59XHJcbi5hYm91dC1tZS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctd2VpZ2h0KTtcclxuICBmb250LXNpemU6IHZhcigtLW1vYmlsZS1oZWFkaW5nLXNpemUpO1xyXG59XHJcbi5hYm91dC1tZS10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG4uYWJvdXQtbWUtdGV4dCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTVweDtcclxuICBmb250LXdlaWdodDogdmFyKC0tcGFyYWdyYXBoLXdlaWdodCk7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1tb2JpbGUtcGFyYWdyYXBoLXNpemUpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLXBhcmFncmFwaC1mb250LWZhbWlseSk7XHJcbiAgY29sb3I6IHZhcigtLXBhcmFncmFwaC1jb2xvcik7XHJcbn1cclxuLmxpbmUge1xyXG4gIHdpZHRoOiAxMTBweDtcclxuICBoZWlnaHQ6IDEuNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcbi8qIHNraWxscyBzZWN0aW9uICovXHJcblxyXG4ubGFuZ3VhZ2VzLWktc3BlYWsge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgcGFkZGluZzogNTBweCAwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG4ubGFuZ3VhZ2VzLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sYW5ndWFnZS1oZWFkZXItdHh0IHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlLWluLW91dDtcclxufVxyXG4ubGFuZ3VhZ2VzLWhlYWRlciBpbWcge1xyXG4gIHdpZHRoOiA0NXB4O1xyXG59XHJcbi5sYW5ndWFnZXMtY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMGEzYjNkLCAjMzA5YTg3KTtcclxuICBwYWRkaW5nOiA3NXB4IDYwcHg7XHJcbiAgZ2FwOiA0MHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWluLXdpZHRoOiAyMDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5sYW5ndWFnZXMtaWNvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMzBweDtcclxuICBtYXgtd2lkdGg6IDQzMHB4O1xyXG4gIC8qIHBhZGRpbmc6IDIwcHggMjBweDsgKi9cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8qIHBhZGRpbmc6IDAgNDBweDsgKi9cclxufVxyXG4ubGFuZ3VhZ2VzLWhlYWRlciBoMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tbW9iaWxlLWhlYWRpbmctc2l6ZSk7XHJcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctd2VpZ2h0KTtcclxufVxyXG4uaWNvbiB7XHJcbiAgaGVpZ2h0OiA4OXB4O1xyXG4gIHdpZHRoOiA4OXB4O1xyXG59XHJcbi50b3AtaWNvbnMsXHJcbi5sb3dlci1pY29ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDI1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW47XHJcbn1cclxuLnRvcC1pY29ucyB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlLWxlZnQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcclxuICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG4uc2xpZGVyLXNlbGVjdG9ycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuLnNlbGVjdG9yLWxpbmUge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmV4cGVyaWVuY2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgZ2FwOiA0MHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb2xsZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuLmV4cGVyaWVuY2UtaGVhZGluZyB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICBmb250LXNpemU6IHZhcigtLW1vYmlsZS1oZWFkaW5nLXNpemUpO1xyXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XHJcbn1cclxuLmV4cGVyaWVuY2UtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1heC13aWR0aDogMzQwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLmV4cGVyaWVuY2UtY2FyZCA+IGltZyB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jYXJkLWhlYWRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMTVweDtcclxufVxyXG4uY2FyZC1oZWFkaW5nLXRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDVweDtcclxufVxyXG4uY2FyZC1pY29ucyBpbWcge1xyXG4gIGhlaWdodDogMzJweDtcclxuICB3aWR0aDogMzJweDtcclxufVxyXG4uY2FyZC1pY29ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuLnByb2plY3QtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FyZC1oZWFkaW5nLW1vYmlsZSk7XHJcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctd2VpZ2h0KTtcclxufVxyXG4uY2FyZC1zdWJoZWFkaW5nIHtcclxuICBmb250LXNpemU6IHZhcigtLWNhcmQtc3ViaGVhZGluZy1tb2JpbGUpO1xyXG59XHJcbi5wcm9qZWN0LXBhcmEge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tY2FyZC1wYXJhZ3JhcGgtbW9iaWxlKTtcclxuICBmb250LWZhbWlseTogdmFyKC0tcGFyYWdyYXBoLWZvbnQtZmFtaWx5KTtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGNvbG9yOiB2YXIoLS1wYXJhZ3JhcGgtY29sb3IpO1xyXG59XHJcbi5jYXJkLXRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE1cHg7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5jb250YWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA3MHB4IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZ2FwOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbWFpbi1jb2xvcik7XHJcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4uY29udGFjdCA+IGgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1tb2JpbGUtaGVhZGluZy1zaXplKTtcclxuICBmb250LXdlaWdodDogdmFyKC0taGVhZGluZy13ZWlnaHQpO1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gIG1heC13aWR0aDogMzE1cHg7XHJcbn1cclxuLmNvbnRhY3QtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTBweDtcclxuICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uY29udGFjdC1pbmZvIGlucHV0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgLyogYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrOyAqL1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tbW9iaWxlLXBhcmFncmFwaC1zaXplKTtcclxuICBmb250LWZhbWlseTogdmFyKC0tcGFyYWdyYXBoLWZvbnQtZmFtaWx5KTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IHJnYigwLCAwLCAwKSAycHggc29saWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1tYWluLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxufVxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxufVxyXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiByZ2IoNzYsIDc2LCA3Nik7XHJcbn1cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1heC13aWR0aDogMzE1cHg7XHJcbn1cclxudGV4dGFyZWEge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tbW9iaWxlLXBhcmFncmFwaC1zaXplKTtcclxuICBmb250LWZhbWlseTogdmFyKC0tcGFyYWdyYXBoLWZvbnQtZmFtaWx5KTtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnNsYW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDUwcHggMjBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDIwcHg7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1tb2JpbGUtcGFyYWdyYXBoLXNpemUpO1xyXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XHJcbn1cclxuXHJcbmZvb3RlciBpbWcge1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogMjVweDtcclxufVxyXG4uZm9vdGVyLWljb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTJweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5mYWRlLWluIHtcclxuICBhbmltYXRpb246IGZhZGUtaW4gMXMgZWFzZS1pbi1vdXQgMHMgMTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5ncm93IHtcclxuICBhbmltYXRpb246IGdyb3cgMXMgZWFzZS1pbi1vdXQgMHMgMTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLyogICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIC5sYW5ndWFnZXMtY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDUwcHggNTBweDtcclxuICB9XHJcbiAgLmxhbmd1YWdlcy1oZWFkZXIgaDIge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0Isb0RBQW9EO0VBQ3BELDBEQUEwRDtFQUMxRCwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNG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QUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLHlDQUF5QztFQUN6QyxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHdDQUF3QztFQUN4QywwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHlDQUF5QztFQUN6QyxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCx1Q0FBdUM7RUFDdkMsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxzQ0FBc0M7RUFDdEMsVUFBVTtBQUNaO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjtBQUNBLEtBQUs7QUFDTDtFQUNFO0lBQ0UsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcclxcbmJvZHksXFxyXFxuZGl2LFxcclxcbnNwYW4sXFxyXFxuYXBwbGV0LFxcclxcbm9iamVjdCxcXHJcXG5pZnJhbWUsXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYsXFxyXFxucCxcXHJcXG5ibG9ja3F1b3RlLFxcclxcbnByZSxcXHJcXG5hLFxcclxcbmFiYnIsXFxyXFxuYWNyb255bSxcXHJcXG5hZGRyZXNzLFxcclxcbmJpZyxcXHJcXG5jaXRlLFxcclxcbmNvZGUsXFxyXFxuZGVsLFxcclxcbmRmbixcXHJcXG5lbSxcXHJcXG5pbWcsXFxyXFxuaW5zLFxcclxcbmtiZCxcXHJcXG5xLFxcclxcbnMsXFxyXFxuc2FtcCxcXHJcXG5zbWFsbCxcXHJcXG5zdHJpa2UsXFxyXFxuc3Ryb25nLFxcclxcbnN1YixcXHJcXG5zdXAsXFxyXFxudHQsXFxyXFxudmFyLFxcclxcbmIsXFxyXFxudSxcXHJcXG5pLFxcclxcbmNlbnRlcixcXHJcXG5kbCxcXHJcXG5kdCxcXHJcXG5kZCxcXHJcXG5vbCxcXHJcXG51bCxcXHJcXG5saSxcXHJcXG5maWVsZHNldCxcXHJcXG5mb3JtLFxcclxcbmxhYmVsLFxcclxcbmxlZ2VuZCxcXHJcXG50YWJsZSxcXHJcXG5jYXB0aW9uLFxcclxcbnRib2R5LFxcclxcbnRmb290LFxcclxcbnRoZWFkLFxcclxcbnRyLFxcclxcbnRoLFxcclxcbnRkLFxcclxcbmFydGljbGUsXFxyXFxuYXNpZGUsXFxyXFxuY2FudmFzLFxcclxcbmRldGFpbHMsXFxyXFxuZW1iZWQsXFxyXFxuZmlndXJlLFxcclxcbmZpZ2NhcHRpb24sXFxyXFxuZm9vdGVyLFxcclxcbmhlYWRlcixcXHJcXG5oZ3JvdXAsXFxyXFxubWVudSxcXHJcXG5uYXYsXFxyXFxub3V0cHV0LFxcclxcbnJ1YnksXFxyXFxuc2VjdGlvbixcXHJcXG5zdW1tYXJ5LFxcclxcbnRpbWUsXFxyXFxubWFyayxcXHJcXG5hdWRpbyxcXHJcXG52aWRlbyB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG59XFxyXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcclxcbmFydGljbGUsXFxyXFxuYXNpZGUsXFxyXFxuZGV0YWlscyxcXHJcXG5maWdjYXB0aW9uLFxcclxcbmZpZ3VyZSxcXHJcXG5mb290ZXIsXFxyXFxuaGVhZGVyLFxcclxcbmhncm91cCxcXHJcXG5tZW51LFxcclxcbm5hdixcXHJcXG5zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5vbCxcXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLFxcclxcbnEge1xcclxcbiAgcXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSxcXHJcXG5ibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLFxcclxcbnE6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICBjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tYnV0dG9uLWNvbG9yOiAjZjVmMWUzO1xcclxcbiAgLS1hY2NlbnQtY29sb3I6ICM5YWQ1YTg7XFxyXFxuICAtLWRhcmstbWFpbi1jb2xvcjogIzA3MzgzYztcXHJcXG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIC0tcGFyYWdyYXBoLXdlaWdodDogMzAwO1xcclxcbiAgLS1oZWFkaW5nLXdlaWdodDogNTAwO1xcclxcbiAgLS1tb2JpbGUtaGVhZGluZy1zaXplOiAyOXB4O1xcclxcbiAgLS1tb2JpbGUtcGFyYWdyYXBoLXNpemU6IDE4cHg7XFxyXFxuICBmb250LWZhbWlseTogJ0ZpcmEgU2FucyBFeHRyYSBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1wYXJhZ3JhcGgtZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXHJcXG4gIC0tcGFyYWdyYXBoLWNvbG9yOiAjNGI0YjRiO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xcclxcbiAgLS1jYXJkLWhlYWRpbmctbW9iaWxlOiAyMnB4O1xcclxcbiAgLS1jYXJkLXN1YmhlYWRpbmctbW9iaWxlOiAxOHB4O1xcclxcbiAgLS1jYXJkLXBhcmFncmFwaC1tb2JpbGU6IDE2cHg7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgYm91bmNlIHtcXHJcXG4gIDUwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XFxyXFxuICB9XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIC8qIG9wYWNpdHk6IDA7ICovXFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAwcHgpO1xcclxcbiAgfVxcclxcbiAgNzUlIHtcXHJcXG4gICAgb3BhY2l0eTogMC43NTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGdyb3cge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zbGlkZS1sZWZ0IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAwcHgpO1xcclxcbn1cXHJcXG4uc2xpZGUtcmlnaHQge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzYXBwZWFyIHtcXHJcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxufVxcclxcbmh0bWwge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcbm5hdiBsaSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5uYXYgbGk6aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5uYXYgaW1nIHtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVybyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA3MzgzYywgIzlhZDVhOCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAyNXB4IDIwcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWluLWhlaWdodDogNDUwcHg7XFxyXFxufVxcclxcbi5oZXJvLXRleHQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDI0NXB4O1xcclxcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxyXFxuICB0ZXh0LXNoYWRvdzogM3B4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxyXFxufVxcclxcbi5oZXJvLWNvbnRlbnQge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG4uaGVyby1oZWFkaW5nIHtcXHJcXG4gIGZvbnQtc2l6ZTogNDVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4uaGVyby1zdWJoZWFkaW5nIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4uam9iLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG4uaGVyby1idG4ge1xcclxcbiAgd2lkdGg6IDE1NXB4O1xcclxcbiAgaGVpZ2h0OiA1NXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4uaGVyby1idG46aG92ZXIge1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDApO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcclxcbn1cXHJcXG4uc2NyaWJibGUge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuICBhbmltYXRpb24tbmFtZTogYm91bmNlO1xcclxcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDFzO1xcclxcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XFxyXFxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xcclxcbn1cXHJcXG4udGV4dC1oaWdobGlnaHQge1xcclxcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxufVxcclxcbm1haW4ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDczODNjO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBhYm91dCBtZSBzZWN0aW9uICovXFxyXFxuLmFib3V0LW1lIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiA3MHB4IDQwcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM5YWQ1YTgsICNmNWYxZTMpO1xcclxcbn1cXHJcXG4uYWJvdXQtbWUtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0taGVhZGluZy13ZWlnaHQpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1tb2JpbGUtaGVhZGluZy1zaXplKTtcXHJcXG59XFxyXFxuLmFib3V0LW1lLXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4uYWJvdXQtbWUtdGV4dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1wYXJhZ3JhcGgtd2VpZ2h0KTtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbW9iaWxlLXBhcmFncmFwaC1zaXplKTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tcGFyYWdyYXBoLWZvbnQtZmFtaWx5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wYXJhZ3JhcGgtY29sb3IpO1xcclxcbn1cXHJcXG4ubGluZSB7XFxyXFxuICB3aWR0aDogMTEwcHg7XFxyXFxuICBoZWlnaHQ6IDEuNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcbi8qIHNraWxscyBzZWN0aW9uICovXFxyXFxuXFxyXFxuLmxhbmd1YWdlcy1pLXNwZWFrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcclxcbiAgcGFkZGluZzogNTBweCAwcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxufVxcclxcbi5sYW5ndWFnZXMtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmxhbmd1YWdlLWhlYWRlci10eHQge1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5sYW5ndWFnZXMtaGVhZGVyIGltZyB7XFxyXFxuICB3aWR0aDogNDVweDtcXHJcXG59XFxyXFxuLmxhbmd1YWdlcy1jYXJkIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMGEzYjNkLCAjMzA5YTg3KTtcXHJcXG4gIHBhZGRpbmc6IDc1cHggNjBweDtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtaW4td2lkdGg6IDIwMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFuZ3VhZ2VzLWljb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbiAgbWF4LXdpZHRoOiA0MzBweDtcXHJcXG4gIC8qIHBhZGRpbmc6IDIwcHggMjBweDsgKi9cXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAvKiBwYWRkaW5nOiAwIDQwcHg7ICovXFxyXFxufVxcclxcbi5sYW5ndWFnZXMtaGVhZGVyIGgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1tb2JpbGUtaGVhZGluZy1zaXplKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XFxyXFxufVxcclxcbi5pY29uIHtcXHJcXG4gIGhlaWdodDogODlweDtcXHJcXG4gIHdpZHRoOiA4OXB4O1xcclxcbn1cXHJcXG4udG9wLWljb25zLFxcclxcbi5sb3dlci1pY29ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDI1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuLnRvcC1pY29ucyB7XFxyXFxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtbGVmdDtcXHJcXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XFxyXFxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XFxyXFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1zZWxlY3RvcnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuLnNlbGVjdG9yLWxpbmUge1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBoZWlnaHQ6IDRweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLmV4cGVyaWVuY2Uge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDQwcHggMjBweDtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtY29sbGVjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuLmV4cGVyaWVuY2UtaGVhZGluZyB7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1tb2JpbGUtaGVhZGluZy1zaXplKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XFxyXFxufVxcclxcbi5leHBlcmllbmNlLWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXgtd2lkdGg6IDM0MHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcbi5leHBlcmllbmNlLWNhcmQgPiBpbWcge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5jYXJkLWhlYWRpbmcge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuLmNhcmQtaGVhZGluZy10ZXh0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcbi5jYXJkLWljb25zIGltZyB7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG59XFxyXFxuLmNhcmQtaWNvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuLnByb2plY3QtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1jYXJkLWhlYWRpbmctbW9iaWxlKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1oZWFkaW5nLXdlaWdodCk7XFxyXFxufVxcclxcbi5jYXJkLXN1YmhlYWRpbmcge1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1jYXJkLXN1YmhlYWRpbmctbW9iaWxlKTtcXHJcXG59XFxyXFxuLnByb2plY3QtcGFyYSB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLWNhcmQtcGFyYWdyYXBoLW1vYmlsZSk7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tcGFyYWdyYXBoLWZvbnQtZmFtaWx5KTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICBjb2xvcjogdmFyKC0tcGFyYWdyYXBoLWNvbG9yKTtcXHJcXG59XFxyXFxuLmNhcmQtdGV4dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4uY29udGFjdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDcwcHggNDBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW1haW4tY29sb3IpO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG4uY29udGFjdCA+IGgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tbW9iaWxlLWhlYWRpbmctc2l6ZSk7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0taGVhZGluZy13ZWlnaHQpO1xcclxcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxyXFxuICBtYXgtd2lkdGg6IDMxNXB4O1xcclxcbn1cXHJcXG4uY29udGFjdC1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtaW5mbyBpbnB1dCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICAvKiBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7ICovXFxyXFxuICBib3gtc2hhZG93OiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1tb2JpbGUtcGFyYWdyYXBoLXNpemUpO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLXBhcmFncmFwaC1mb250LWZhbWlseSk7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogcmdiKDAsIDAsIDApIDJweCBzb2xpZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstbWFpbi1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG59XFxyXFxuOjpwbGFjZWhvbGRlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG59XFxyXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoNzYsIDc2LCA3Nik7XFxyXFxufVxcclxcbmZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXgtd2lkdGg6IDMxNXB4O1xcclxcbn1cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLW1vYmlsZS1wYXJhZ3JhcGgtc2l6ZSk7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tcGFyYWdyYXBoLWZvbnQtZmFtaWx5KTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbi5zbGFudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogNTBweCAyMHB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1tb2JpbGUtcGFyYWdyYXBoLXNpemUpO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWhlYWRpbmctd2VpZ2h0KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGltZyB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG59XFxyXFxuLmZvb3Rlci1pY29ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMnB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG4uZmFkZS1pbiB7XFxyXFxuICBhbmltYXRpb246IGZhZGUtaW4gMXMgZWFzZS1pbi1vdXQgMHMgMTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi5ncm93IHtcXHJcXG4gIGFuaW1hdGlvbjogZ3JvdyAxcyBlYXNlLWluLW91dCAwcyAxO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcbi8qICAqL1xcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xcclxcbiAgLmxhbmd1YWdlcy1jYXJkIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1pbi13aWR0aDogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNTBweCA1MHB4O1xcclxcbiAgfVxcclxcbiAgLmxhbmd1YWdlcy1oZWFkZXIgaDIge1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qXHJcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcclxuICB2YXIgbGlzdCA9IFtdO1xyXG5cclxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcclxuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9KS5qb2luKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcclxuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcclxuICAgIH1cclxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcbiAgICBpZiAoZGVkdXBlKSB7XHJcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcclxuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xyXG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XHJcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiBsaXN0O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcclxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XHJcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcclxuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcclxuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xyXG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xyXG4gIH1cclxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XHJcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xyXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XHJcbiAgdmFyIHJlc3VsdCA9IC0xO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XHJcbiAgICAgIHJlc3VsdCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XHJcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcclxuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcclxuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xyXG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcclxuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xyXG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XHJcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgIHZhciBvYmogPSB7XHJcbiAgICAgIGNzczogaXRlbVsxXSxcclxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXHJcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcclxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXHJcbiAgICAgIGxheWVyOiBpdGVtWzVdXHJcbiAgICB9O1xyXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcclxuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcclxuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcclxuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxyXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXHJcbiAgICAgICAgcmVmZXJlbmNlczogMVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XHJcbiAgfVxyXG4gIHJldHVybiBpZGVudGlmaWVycztcclxufVxyXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XHJcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xyXG4gIGFwaS51cGRhdGUob2JqKTtcclxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XHJcbiAgICBpZiAobmV3T2JqKSB7XHJcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXBpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHVwZGF0ZXI7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xyXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xyXG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xyXG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcclxuICAgIH1cclxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xyXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xyXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XHJcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XHJcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcclxuICB9O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIG1lbW8gPSB7fTtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XHJcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcclxuXHJcbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxyXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXHJcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcclxuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcclxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xyXG4gIH1cclxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xyXG59XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XHJcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xyXG4gIGlmICghdGFyZ2V0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xyXG4gIH1cclxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xyXG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xyXG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcclxuICBpZiAobm9uY2UpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XHJcbiAgdmFyIGNzcyA9IFwiXCI7XHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcclxuICB9XHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XHJcbiAgfVxyXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcclxuICB9XHJcbiAgY3NzICs9IG9iai5jc3M7XHJcbiAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XHJcbiAgfVxyXG5cclxuICAvLyBGb3Igb2xkIElFXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xyXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxyXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG59XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcclxuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxyXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XHJcbiAgICB9O1xyXG4gIH1cclxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xyXG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcclxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0JykuY2xhc3NMaXN0LmFkZCgnZ3JvdycpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxub2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdCcpKTtcclxuIiwiaW1wb3J0IHByb2plY3RzIGZyb20gJy4vZXhwZXJpZW5jZSc7XHJcbmltcG9ydCBjYXJkIGZyb20gJy4vZXhwZXJpZW5jZUNhcmQnO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29sbGVjdGlvbicpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGRvbXN0dWZmKCkge1xyXG4gIGNvbnN0IGNyZWF0ZVByb2plY3RDYXJkcyA9ICgpID0+IHtcclxuICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdleHBlcmllbmNlLWNhcmQnKTtcclxuICAgICAgZGl2LmlubmVySFRNTCA9IGNhcmQocHJvamVjdCk7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQoZGl2KTtcclxuICAgICAgY29uc29sZS5sb2coJ2ltIGJyb2tlJyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyBjcmVhdGVQcm9qZWN0Q2FyZHMgfTtcclxufSkoKTtcclxuIiwiaW1wb3J0IE1pY2FtZXJhIGZyb20gJy4uL2ltYWdlcy9taWNhbWVyYS1zdHVkaW9zLnBuZyc7XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgc3ViaGVhZGluZywgZGVzY3JpcHRpb24sIGltZykge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5zdWJoZWFkaW5nID0gc3ViaGVhZGluZztcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuaW1nID0gaW1nO1xyXG4gIH1cclxuXHJcbiAgcHJpbnQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1pY2FtZXJhID0gbmV3IFByb2plY3QoXHJcbiAgJ01pY2FtZXJhIFN0dWRpb3MnLFxyXG4gICdQaG90b2dyYXBoeSBXZWIgQXBwJyxcclxuICAnRGVzaWduZWQgYW5kIGRldmVsb3BlZCBhIHBlcnNvbmFsaXplZCwgYXBpIGxpbmtlZCBhcHBsaWNhdGlvbiBmb3IgY2xpZW50IHRvIGZ1bm5lbCBuZXcgaW50ZXJlc3QgYW5kIHJlY2VpdmUgbmV3IGxlYWQgaW5mb3JtYXRpb24uIENsaWNrIG9uIGltYWdlIHRvIHNlZSBsaXZlIHByZXZpZXcnLFxyXG4gIE1pY2FtZXJhXHJcbik7XHJcblxyXG5jb25zdCBiYXR0bGVzaGlwID0gbmV3IFByb2plY3QoXHJcbiAgJ0JhdHRsZXNoaXAnLFxyXG4gICdHYW1lIEFwcCcsXHJcbiAgJ0EgamF2YXNjcmlwdCBoZWF2eSB2ZXJzaW9uIG9mIGJhdHRsZXNoaXAuIFRoZSBBSSB3aWxsIG5ldmVyIG1ha2UgdGhlIHNhbWUgbW92ZSB0d2ljZS4gQ2xpY2sgb24gaW1hZ2UgdG8gc2VlIGxpdmUgcHJldmlldycsXHJcbiAgTWljYW1lcmFcclxuKTtcclxuY29uc3QgdGFza0FwcCA9IG5ldyBQcm9qZWN0KFxyXG4gICdUYXNrIE9yZ2FuaXplcicsXHJcbiAgJ1Byb2R1Y3Rpdml0eSBBcHAnLFxyXG4gICdBIEphdmFzY3JpcHQgYmFzZWQgYXBwIGRlc2lnbmVkIGZvciBrZWVwaW5nIHRyYWNrIG9mIGRhaWx5IGFuZCB3ZWVrbHkgdGFza3MuIENsaWNrIG9uIGltYWdlIHRvIHNlZSBsaXZlIHByZXZpZXcnLFxyXG4gIE1pY2FtZXJhXHJcbik7XHJcblxyXG5jb25zdCBwcm9qZWN0cyA9IFttaWNhbWVyYSwgYmF0dGxlc2hpcCwgdGFza0FwcF07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0cztcclxuIiwiaW1wb3J0IGdpdEh1YiBmcm9tICcuLi9pbWFnZXMvZ2l0aHViLWxvZ28tbW9iaWxlLnBuZyc7XHJcbmltcG9ydCBzaGFyZSBmcm9tICcuLi9pbWFnZXMvc2hhcmUucG5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcmQocHJvamVjdCkge1xyXG4gIHJldHVybiBgXHJcbiAgICA8aW1nXHJcbiAgICAgIHNyYz0ke3Byb2plY3QuaW1nfVxyXG4gICAgICBhbHQ9XCJtaWNhbWVyYSBzdHVkaW9zIHBob3RvZ3JhcGh5IHdlYnNpdGUgcHJvamVjdFwiXHJcbiAgICAvPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGluZy10ZXh0XCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+JHtwcm9qZWN0LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtc3ViaGVhZGluZ1wiPiR7cHJvamVjdC5zdWJoZWFkaW5nfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pY29uc1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9JHtnaXRIdWJ9IGFsdD1cImdpdGh1YiBsaW5rXCIgLz5cclxuICAgICAgICAgIDxpbWcgc3JjPSR7c2hhcmV9IGFsdD1cInNoYXJlIHdpdGggb3RoZXJzIGxpbmtcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LXBhcmFcIj5cclxuICAgICAgICAke3Byb2plY3QuZGVzY3JpcHRpb259XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gYDtcclxufVxyXG4iLCJjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHBlcmllbmNlLWNhcmQnKTtcclxuICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgnZmFkZS1pbicpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcbm9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmV4cGVyaWVuY2UnKSk7XHJcbiIsImltcG9ydCBDc3MgZnJvbSAnLi4vaW1hZ2VzL2Nzcy1sb2dvLW1vYmlsZS5wbmcnO1xyXG5pbXBvcnQgSHRtbCBmcm9tICcuLi9pbWFnZXMvaHRtbC01LWxvZ28ucG5nJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJy4uL2ltYWdlcy9yZWFjdC1sb2dvLnBuZyc7XHJcbmltcG9ydCBKcyBmcm9tICcuLi9pbWFnZXMvanMtbG9nby5wbmcnO1xyXG5pbXBvcnQgRXhwcmVzcyBmcm9tICcuLi9pbWFnZXMvZXhwcmVzcy5wbmcnO1xyXG5pbXBvcnQgTW9uZ28gZnJvbSAnLi4vaW1hZ2VzL21vbmdvREIucG5nJztcclxuaW1wb3J0IE5vZGVKUyBmcm9tICcuLi9pbWFnZXMvbm9kZUpTLnBuZyc7XHJcbmltcG9ydCBUeXBlU2NyaXB0IGZyb20gJy4uL2ltYWdlcy90eXBlc2NyaXB0LnBuZyc7XHJcblxyXG5jb25zdCB0b3BJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtaWNvbnMnKTtcclxuY29uc3QgbG93ZXJJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3dlci1pY29ucycpO1xyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGFuZ3VhZ2UtaGVhZGVyLXR4dCcpO1xyXG5jb25zdCBjdXJyZW50TGFuZ3VhZ2VzID0gW0NzcywgSHRtbCwgUmVhY3QsIEpzXTtcclxuY29uc3QgaW5Qcm9ncmVzc1NraWxscyA9IFtUeXBlU2NyaXB0LCBOb2RlSlMsIEV4cHJlc3MsIE1vbmdvXTtcclxuXHJcbmNvbnN0IHNldEltZ3MgPSAoaW1ncykgPT4ge1xyXG4gIGNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb24nKTtcclxuICBsZXQgbnVtID0gMDtcclxuICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XHJcbiAgICBjb25zdCBwaWMgPSBpY29uO1xyXG4gICAgcGljLnNyYyA9IGltZ3NbbnVtXTtcclxuICAgIG51bSArPSAxO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgY2hlY2tTbGlkZSA9ICgpID0+IHtcclxuICBpZiAoaGVhZGVyLnRleHRDb250ZW50LmluY2x1ZGVzKCdMYW5ndWFnZXMnKSkge1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1NraWxscyBJbiBQcm9ncmVzcyc7XHJcbiAgICByZXR1cm4gc2V0SW1ncyhpblByb2dyZXNzU2tpbGxzKTtcclxuICB9XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0xhbmd1YWdlcyBJIFNwZWFrJztcclxuICByZXR1cm4gc2V0SW1ncyhjdXJyZW50TGFuZ3VhZ2VzKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNhcmRBbmltYXRpb25Mb29wKCkge1xyXG4gIHRvcEljb25zLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLWxlZnQnKTtcclxuICBsb3dlckljb25zLmNsYXNzTGlzdC5hZGQoJ3NsaWRlLXJpZ2h0Jyk7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Rpc2FwcGVhcicpO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgY2hlY2tTbGlkZSgpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FwcGVhcicpO1xyXG4gICAgdG9wSWNvbnMuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtbGVmdCcpO1xyXG4gICAgbG93ZXJJY29ucy5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS1yaWdodCcpO1xyXG4gIH0sIDYwMCk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBjYXJkQW5pbWF0aW9uTG9vcCgpO1xyXG4gIH0sIDUwMDApO1xyXG59XHJcblxyXG5jYXJkQW5pbWF0aW9uTG9vcCgpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2tpbGxzU2xpZGVyJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZXhwZXJpZW5jZUZhZGVJbic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2NvbnRhY3RGYWRlSW4nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9leHBlcmllbmNlJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZXhwZXJpZW5jZUNhcmQnO1xyXG5pbXBvcnQgZG9tc3R1ZmYgZnJvbSAnLi9jb21wb25lbnRzL2RvbXN0dWZmJztcclxuXHJcbmRvbXN0dWZmLmNyZWF0ZVByb2plY3RDYXJkcygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=