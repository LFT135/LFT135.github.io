if(!self.define){let e,i={};const r=(r,c)=>(r=new URL(r+".js",c).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(c,s)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let f={};const a=e=>r(e,d),n={module:{uri:d},exports:f,require:a};i[d]=Promise.all(c.map((e=>n[e]||a(e)))).then((e=>(s(...e),f)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/03/16/hello-world/index.html",revision:"426e9f78763b7c40648f03b4d44d353f"},{url:"2023/03/16/从0开始搭建博客/index.html",revision:"81872f65a9052c2539a14ba5efa1fe04"},{url:"404.html",revision:"ed705be0c2392a06ed4feb90ee143150"},{url:"about/index.html",revision:"707bb7a3e3ec1a1fd59e56fe00ba0755"},{url:"archives/2023/03/index.html",revision:"83f0ead6c7ae261781c1073e062f3ff7"},{url:"archives/2023/index.html",revision:"462d0866d5d4bdb6e33546562e17c700"},{url:"archives/index.html",revision:"b3055b2882fc2c6b317e034d51457845"},{url:"categories/index.html",revision:"8de8af4e12065977dd3a3a0d1dd9aa14"},{url:"categories/教程/index.html",revision:"35431d2a5fc8dc1fa777a150bcd9f212"},{url:"comment/index.html",revision:"84fc01ffebec88d05b6aff7a359e43e2"},{url:"css/index.css",revision:"9c655b549ebe7757cb738c890fae0771"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/banner.png",revision:"c658735dc76324898cc5ba66ca9b35c4"},{url:"img/category.jpg",revision:"11377e54ceee9316f413fe990a932ff2"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/sakura1.png",revision:"18ba1817f2fe23d43fa4922fe2df4d8a"},{url:"img/tag.jpg",revision:"6992591236238e02290bf3411f77ad4b"},{url:"index.html",revision:"99d3c74c96d920785f781d43167a34f0"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"tags/Hexo/index.html",revision:"1f34a3fa19f2cfd8e79e32540006c5fe"},{url:"tags/index.html",revision:"165cf832e7deeffb369507221784b3b5"}],{})}));
//# sourceMappingURL=service-worker.js.map
