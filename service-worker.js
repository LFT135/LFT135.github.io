if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,s)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let d={};const n=e=>c(e,f),a={module:{uri:f},exports:d,require:n};i[f]=Promise.all(r.map((e=>a[e]||n(e)))).then((e=>(s(...e),d)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/03/16/hello-world/index.html",revision:"fffde0c3712d1c062a11171632a97ec9"},{url:"2023/03/16/从0开始搭建博客/index.html",revision:"e89bc501b74dc450dc6bafbb5faf9309"},{url:"404.html",revision:"3247f7802a98308c508b4f2432c309cf"},{url:"about/index.html",revision:"0e238ac085e5af0152b79c3d943dbb98"},{url:"archives/2023/03/index.html",revision:"f3dcd76823d314547167c00411d795d9"},{url:"archives/2023/index.html",revision:"cb612c1c8e652deefbba60943083b04b"},{url:"archives/index.html",revision:"b5eecab2294cb834aa5ef56e58f75bf6"},{url:"categories/index.html",revision:"7fb9eef7e6b223999fb4c8f49cbca806"},{url:"categories/教程/index.html",revision:"199ca17df55ed31fb087d272d55d4f33"},{url:"comment/index.html",revision:"4db84609ff57f7889a46f9ab86cd06b5"},{url:"css/index.css",revision:"9c655b549ebe7757cb738c890fae0771"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/banner.png",revision:"c658735dc76324898cc5ba66ca9b35c4"},{url:"img/category.jpg",revision:"11377e54ceee9316f413fe990a932ff2"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/sakura1.png",revision:"18ba1817f2fe23d43fa4922fe2df4d8a"},{url:"img/tag.jpg",revision:"6992591236238e02290bf3411f77ad4b"},{url:"index.html",revision:"09a9616d5edbe128f8b1b8ae36114ff8"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"tags/Hexo/index.html",revision:"9d66ac831d125953f4be866916493885"},{url:"tags/index.html",revision:"0e61bf07e86e2fd7efd4695bbef44f38"}],{})}));
//# sourceMappingURL=service-worker.js.map
