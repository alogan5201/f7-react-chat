if(!self.define){const a=a=>{"require"!==a&&(a+=".js");let e=Promise.resolve();return r[a]||(e=new Promise((async e=>{if("document"in self){const r=document.createElement("script");r.src=a,document.head.appendChild(r),r.onload=e}else importScripts(a),e()}))),e.then((()=>{if(!r[a])throw new Error(`Module ${a} didn’t register its module`);return r[a]}))},e=(e,r)=>{Promise.all(e.map(a)).then((a=>r(1===a.length?a[0]:a)))},r={require:Promise.resolve(e)};self.define=(e,s,i)=>{r[e]||(r[e]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+e.slice(1)};return Promise.all(s.map((e=>{switch(e){case"exports":return r;case"module":return c;default:return a(e)}}))).then((a=>{const e=i(...a);return r.default||(r.default=e),r}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(a){"use strict";self.addEventListener("message",(a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()})),a.precacheAndRoute([{url:"assets/Contacts.6d4db744.js",revision:"2856e7657934158a58e1b743c2cef798"},{url:"assets/Contacts.fe0947c3.css",revision:"2cc006042dac16388b7d1efd0b460669"},{url:"assets/Framework7Icons-Regular.a42aa071.woff2",revision:"4a39aba9fb8a2f831fa437780e1a058a"},{url:"assets/Framework7Icons-Regular.eba1e821.woff",revision:"d03b787b6492fa2b0141c43fb7e56689"},{url:"assets/index.310de256.js",revision:"71a61eceae52813d2d9a3bc030109922"},{url:"assets/index.37c6d709.css",revision:"b8b4509ce2a0f31520be584e7ab04cc3"},{url:"assets/material-icons.b819e02f.woff2",revision:"d5ddad340d5511b4744d90b1c1cbd01e"},{url:"assets/material-icons.e12180b6.woff",revision:"0f852353a50fc88ea8c8052029e300e3"},{url:"assets/Messages.b58bf6e0.css",revision:"cba1c78597bad1cd7fa0fddf2903c021"},{url:"assets/Messages.f4948488.js",revision:"2443333ab7517c33a97a7d3127bd4b88"},{url:"assets/vendor.5811855d.js",revision:"ab69c990cf80c00545d9f0fbb06351a3"},{url:"avatars/abraham-burton.jpg",revision:"f4ad070f2622b07252dc12e65caa7fda"},{url:"avatars/alexander-p.jpg",revision:"48273272284436caf0a7a3a6fdc29d7c"},{url:"avatars/alim-gray.jpg",revision:"fdf95d6148df794f60e148e3a282e1a1"},{url:"avatars/andrew.jpg",revision:"a0955f31821195178adb7ad430b52e21"},{url:"avatars/anton-alexeev.jpg",revision:"d79422f99a3d461f6f1c0c919eb634f0"},{url:"avatars/bill.jpg",revision:"56581b329fb16d56ff4f49336eda0b33"},{url:"avatars/dmitry-ivanov.jpg",revision:"2a69e8bb923fe8c20fdfbf563272fcb7"},{url:"avatars/elena-k.jpg",revision:"e6b78d8d394efad133abdbfdb9110f41"},{url:"avatars/helen.jpg",revision:"9085a1293d8b2fbdec50176d09871772"},{url:"avatars/jane-hudson.jpg",revision:"0c623b94d464efa77b3645c4b1b171e1"},{url:"avatars/kate-mara.jpg",revision:"d2894b709ccd9e968871287958aef815"},{url:"avatars/konsta-rocks.jpg",revision:"f8e7954f9adb7f4a1cd74555818120f9"},{url:"avatars/mark-zuckerberg.jpg",revision:"b1061cd07264ac063fdccedfc151fbc0"},{url:"avatars/mary.jpg",revision:"cf64bedddd94392c519bfc01e17ca4d4"},{url:"avatars/person-circle.svg",revision:"dd0df25329ea4906d3084e6abc5e1348"},{url:"avatars/peter-karlson.jpg",revision:"3d629e8a5b59d638165c25d470a641d6"},{url:"avatars/phil.jpg",revision:"ef990f78c1cad1065bf63d57f6087497"},{url:"avatars/tim-cook.jpg",revision:"5de3ba97ad04ac17ec14313bdf8b7d94"},{url:"avatars/vlad-t.jpg",revision:"639c8062c2b0a23f1c0127c3a25e3664"},{url:"avatars/vladimir-kharlampidi.jpg",revision:"8afa2dfc03925c662388ecfdf16e4759"},{url:"avatars/zoe-black.jpg",revision:"00d6e009ce96cc54acb9527aafe08ac7"},{url:"icons/128x128.png",revision:"f7b08949fe48740eed053539bfbe161a"},{url:"icons/144x144.png",revision:"39cdcd0fc6182bbe4b6b2a0c8ac56cb1"},{url:"icons/152x152.png",revision:"040c0779d7d987a06a2398108f4043de"},{url:"icons/192x192.png",revision:"bf9d8771216ac1ada419a46afcb0d2a2"},{url:"icons/256x256.png",revision:"662dd1ae50bba3e4fb85faf61323e68a"},{url:"icons/512x512.png",revision:"1d1c90031cecd711514211f146ea09d6"},{url:"icons/apple-touch-icon.png",revision:"662dd1ae50bba3e4fb85faf61323e68a"},{url:"icons/favicon.png",revision:"f7b08949fe48740eed053539bfbe161a"},{url:"index.html",revision:"7cd2a941a7cfa73fc860a6b9c80e89fe"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map
