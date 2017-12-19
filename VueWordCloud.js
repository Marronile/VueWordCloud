!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.VueWordCloud=e()}(this,function(){"use strict";function t(t){return function(){return t}}function e(t){return"function"==typeof t}function n(){}function r(){return[]}function i(t){return new Promise(function(e){e(t())})}function o(t,e,n){return i(function(){var r=new Worker(e),i=function(){r.terminate()};t.onInterrupt(i),r.postMessage(n);var o=function(t){return new Promise(function(e,n){var r,i=function(t){r(t),e(t.data)},o=function(t){r(t),n(t)};r=function(e){e.preventDefault(),t.removeEventListener("message",i),t.removeEventListener("error",o)},t.addEventListener("message",i),t.addEventListener("error",o)})}(r);return o.then(i,i),o})}function a(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function u(t){return Math.pow(2,Math.ceil(function(t){return Math.log(t)/Math.LN2}(t)))}function f(t,e){if(t.length>0)return e&&(t=t.map(e)),t.reduce(function(t,e){return Math.min(t,e)})}function c(t,e){if(t.length>0)return e&&(t=t.map(e)),t.reduce(function(t,e){return Math.max(t,e)})}function h(t,e,n,r,i){return r+(t-e)*(i-r)/(n-e)}function s(t,e,n){return[Math.ceil(t*Math.abs(Math.cos(n))+e*Math.abs(Math.sin(n))),Math.ceil(t*Math.abs(Math.sin(n))+e*Math.abs(Math.cos(n)))]}function d(t){return 2*t*Math.PI}function l(t,e,r,o,a,u,f){return i(function(){f=d(f);var c=[e,r,o,a+"px",u].join(" ");return function(t,e){return i(function(){return document.fonts.load(t,e)})}(c,t).catch(n).then(function(){var e=document.createElement("canvas").getContext("2d");e.font=c;var n=e.measureText(t).width,r=a,i=s(n,r,f),o=i[0],u=i[1],h=Math.max(e.measureText("m").width,a),d=s(n+2*h,r+2*h,f);return[n,r,o,u,d[0],d[1]]})})}function v(t,e,n,r){return i(function(){var t=function(t,e){var n={};if(t.length>0){var r=f(t,function(t){return t.weight}),i=c(t,function(t){return t.weight});if(r<i&&e>0&&e<1/0)e<1&&(e=1/e),t.forEach(function(t){var o=t.key,a=t.weight;n[o]=h(a,r,i,1,e)});else if(r>0)t.forEach(function(t){var e=t.key,i=t.weight;n[e]=i/r});else{var o=1+Math.abs(r)+Math.abs(i);t.forEach(function(t){var e=t.key,a=t.weight;n[e]=h(a,r,i,1,o)})}}return n}(e,r);return Promise.all(e.map(function(e){var r=e.key,i=e.text,o=e.rotation,a=e.fontFamily,f=e.fontStyle,c=e.fontVariant,h=e.fontWeight,s=Math.pow(n-1,2)*t[r]+1;return l(i,f,c,h,s,a,o).then(function(t){var r=t[0],l=t[1],v=t[2],g=t[3],p=t[4],m=t[5],y=Math.max(u(p),Math.pow(n,2)),w=Math.max(u(m),Math.pow(n,2)),W=function(t,e,n,r,i,o,a,u,f){f=d(f);var c=[e,n,r,i+"px",o].join(" "),h=document.createElement("canvas").getContext("2d");h.canvas.width=a,h.canvas.height=u,h.translate(a/2,u/2),h.rotate(f),h.font=c,h.textAlign="center",h.textBaseline="middle",h.fillText(t,0,0),h.lineWidth=i/8,h.strokeText(t,0,0);for(var s=new Uint8Array(a*u),l=h.getImageData(0,0,a,u).data,v=0,g=s.length;v<g;++v)s[v]=l[4*v+3];return s}(i,f,c,h,s,a,y,w,o);return Object.assign({fontSize:s,textWidth:r,textHeight:l,rectWidth:v,rectHeight:g,image:W,imageWidth:y,imageHeight:w},e)})}))})}var g=function(){this.interrupted=!1,this.interruptHandlers=new Set};g.prototype.throwIfInterrupted=function(){if(this.interrupted)throw new Error},g.prototype.interrupt=function(){this.interrupted||(this.interrupted=!1,this.interruptHandlers.forEach(function(t){t()}))},g.prototype.onInterrupt=function(t){this.interrupted&&(this.interruptHandlers.has(t)||t()),this.interruptHandlers.add(t)};var p={measuredWords:{get:function(t){return v(0,this.populatedWords,4,this.fontSizeRatio)},default:r}},m={boundedWords:{code:'!function(){"use strict";function r(r,t,n,a,i,e){var o=function(r,t,n){for(var a=[],i=0;i<t;++i)for(var e=0;e<n;++e)r[t*e+i]&&a.push([i,e]);return a}(a,i,e);return function(r,t,n){if(r>0&&t>0){var a,i;r>t?(a=1,i=t/r):t>r?(i=1,a=r/t):a=i=1;var e=Math.floor(r/2),o=Math.floor(t/2),f=r-e,v=t-o;if(e<f)for(var u=e;u<=f;++u){var h=[u,o];if(n(h))return h}else if(o<v)for(var c=o;c<=v;++c){var g=[e,c];if(n(g))return g}for(var l=e,s=o,M=f,d=v;f<r||v<t;){e-=a,o-=i,f+=a,v+=i;var m=Math.floor(e),W=Math.floor(o),p=Math.ceil(f),w=Math.ceil(v);if(p>M)for(var y=W;y<w;++y){var H=[p,y];if(n(H))return H}if(w>d)for(var x=p;x>m;--x){var S=[x,w];if(n(S))return S}if(m<l)for(var k=w;k>W;--k){var z=[m,k];if(n(z))return z}if(W<s)for(var A=m;A<p;++A){var L=[A,W];if(n(L))return L}l=m,s=W,M=p,d=w}}}(t-i,n-e,function(n){for(var a=n[0],i=n[1],e=0,f=o.length;e<f;++e){var v=o[e],u=v[0],h=v[1];if(r[t*(h+i)+(u+a)])return!1}return!0})}function t(r,t,n,a){for(var i=t/a,e=n/a,o=new Uint8Array(i*e),f=0;f<i;++f)for(var v=0;v<e;++v)r:for(var u=0;u<a;++u)for(var h=0;h<a;++h){var c=r[t*(v*a+h)+(f*a+u)];if(c){o[i*v+f]=c;break r}}return[o,i,e]}function n(r,t,n,a,i,e,o,f){for(var v=0;v<o;++v)for(var u=0;u<f;++u){var h=e[o*u+v];if(h){var c=v+a;if(c>0&&c<t){var g=u+i;g>0&&g<n&&(r[t*g+c]=h)}}}}var a=function(a,i,e,o){if(e>0&&o>0){var f,v=e/o;return a=a.map(function(r){var t=r.imageWidth,n=r.imageHeight;return[function(r){return Math.log(r)/Math.LN2}(Math.min(t,n)/Math.pow(i,2)),r]}),a=function(r,t){return r.map(function(r){return[t(r),r]}).sort(function(r,t){var n=r[0],a=t[0];return n>a?1:n<a?-1:0}).map(function(r){return r[1]})}(a,function(r){return-r[0]}),a=a.map(function(a){for(var i=a[0],e=a[1],o=e.originalWord,u=e.key,h=e.text,c=e.weight,g=e.rotation,l=e.fontFamily,s=e.fontStyle,M=e.fontVariant,d=e.fontWeight,m=e.color,W=e.fontSize,p=e.textWidth,w=e.textHeight,y=e.rectWidth,H=e.rectHeight,x=e.image,S=e.imageWidth,k=e.imageHeight,z=[[x,S,k]],A=1;A<i;++A){var L;x=(L=t(x,S,k,2))[0],S=L[1],k=L[2],z.push([x,S,k])}if(void 0===f){var U=Math.pow(2,16),F=Math.floor(Math.sqrt(v*U)),V=Math.floor(U/F),b=new Uint8Array(F*V);f=[[b,F,V]];for(var q=1;q<z.length;++q)F*=2,V*=2,b=new Uint8Array(F*V),f.unshift([b,F,V])}var E=f[z.length-1],N=E[0],P=E[1],T=E[2],j=r(N,P,T,x,S,k),B=j[0],C=j[1];n(N,P,T,B,C,x,S,k);for(var D=z.length-1;D-- >0;){B*=2,C*=2;var G,I;n(N=(G=f[D])[0],P=G[1],T=G[2],B,C,x=(I=z[D])[0],S=I[1],k=I[2])}return{originalWord:o,key:u,text:h,weight:c,rotation:g,fontFamily:l,fontStyle:s,fontVariant:M,fontWeight:d,color:m,fontSize:W,textWidth:p,textHeight:w,rectLeft:B+(S-y)/2,rectTop:C+(k-H)/2,rectWidth:y,rectHeight:H}})}return[]};self.addEventListener("message",function(r){var t=r.data,n=t.words,i=t.fontSizePower,e=t.containerWidth,o=t.containerHeight;self.postMessage(a(n,i,e,o))})}();\n',data:function(){return{words:this.measuredWords,fontSizePower:4,containerWidth:this.containerWidth,containerHeight:this.containerHeight}},default:r}};Object.entries(m).forEach(function(t){var e=t[0],n=t[1],r=n.code,i=n.data,a=n.default,u=n.errorHandler,f=URL.createObjectURL(new Blob([r]));p[e]={get:function(t){return o(t,f,i.call(this))},default:a,errorHandler:u}});var y={name:"VueWordCloud",props:{words:{type:Array,default:r},text:{type:[String,Function],default:""},weight:{type:[Number,Function],default:1},rotation:{type:[String,Function],default:function(){var t=[0,.75];return function(){return function(t){return t[Math.floor(t.length*Math.random())]}(t)}}},fontFamily:{type:[String,Function],default:"serif"},fontStyle:{type:[String,Function],default:"normal"},fontVariant:{type:[String,Function],default:"normal"},fontWeight:{type:[String,Function],default:"normal"},color:{type:[String,Function],default:"Black"},fontSizeRatio:{type:Number,default:0},maxFontSize:{type:Number,default:1/0},animationDuration:{type:Number,default:5e3},intervalBetweenUpdateContainerSize:{type:Number,default:1e3}},data:function(){var t={containerWidth:0,containerHeight:0};return Object.keys(p).forEach(function(e){t["asyncComputed$trigger$"+e]={}}),t},computed:{getText:function(){var n=this.text;return e(n)?n:t(n)},getWeight:function(){var n=this.weight;return e(n)?n:t(n)},getRotation:function(){var n=this.rotation;return e(n)?n:t(n)},getFontFamily:function(){var n=this.fontFamily;return e(n)?n:t(n)},getFontStyle:function(){var n=this.fontStyle;return e(n)?n:t(n)},getFontVariant:function(){var n=this.fontVariant;return e(n)?n:t(n)},getFontWeight:function(){var n=this.fontWeight;return e(n)?n:t(n)},getColor:function(){var n=this.color;return e(n)?n:t(n)},keyedPopulatedWords:function(){return function(t,e,n,r,i,o,u,f,c){var h={};return t.forEach(function(t){var s,d,l,v,g,p,m,y,w;if(t)if(function(t){return"string"==typeof t}(t))d=t;else if(Array.isArray(t)){var W;d=(W=t)[0],l=W[1]}else if(function(t){return t&&"object"==typeof t}(t)){var x;s=(x=t).key,d=x.text,l=x.weight,v=x.rotation,g=x.fontFamily,p=x.fontStyle,m=x.fontVariant,y=x.fontWeight,w=x.color}for(void 0===d&&(d=e(t)),void 0===l&&(l=n(t)),void 0===v&&(v=r(t)),void 0===g&&(g=i(t)),void 0===p&&(p=o(t)),void 0===m&&(m=u(t)),void 0===y&&(y=f(t)),void 0===w&&(w=c(t)),void 0===s&&(s=JSON.stringify([d,g,p,m,y]));a(h,s);)s+="!";h[s]={originalWord:t,key:s,text:d,weight:l,rotation:v,fontFamily:g,fontStyle:p,fontVariant:m,fontWeight:y,color:w}}),h}(this.words,this.getText,this.getWeight,this.getRotation,this.getFontFamily,this.getFontStyle,this.getFontVariant,this.getFontWeight,this.getColor)},populatedWords:function(){return Object.values(this.keyedPopulatedWords)},scaledBoundedWords:function(){return function(t,e,n,r){var i=f(t,function(t){return t.rectLeft}),o=c(t,function(t){return t.rectLeft+t.rectWidth}),a=o-i,u=f(t,function(t){return t.rectTop}),h=c(t,function(t){return t.rectTop+t.rectHeight}),s=h-u,d=Math.min(e/a,n/s),l=c(t,function(t){return t.fontSize})*d;return l>r&&(d*=r/l),t.map(function(t){var e=t.fontSize,n=t.textWidth,r=t.textHeight,a=t.rectLeft,f=t.rectTop,c=t.rectWidth,s=t.rectHeight;return e*=d,n*=d,r*=d,a=(a-(i+o)/2)*d,f=(f-(u+h)/2)*d,c*=d,s*=d,Object.assign({},t,{fontSize:e,textWidth:n,textHeight:r,rectLeft:a,rectTop:f,rectWidth:c,rectHeight:s})})}(this.boundedWords,this.containerWidth,this.containerHeight,this.maxFontSize)},transitionDuration:function(){var t=this.scaledBoundedWords.length,e=this.animationDuration;return t>0?e/Math.min(4,t):0},transitionDelay:function(){var t=this.scaledBoundedWords.length,e=this.animationDuration,n=this.transitionDuration;return t>1?(e-n)/(t-1):0},startToUpdateContainerSize:function(){return function(){var t=this;this._isDestroyed||(setTimeout(function(){requestAnimationFrame(function(){t.startToUpdateContainerSize()})},this.intervalBetweenUpdateContainerSize),this.updateContainerSize())}}},beforeCreate:function(){var t=this;Object.entries(p).forEach(function(r){var o=r[0],a=r[1],u=a.get,f=a.default,c=a.errorHandler;void 0===c&&(c=n);var h;t.$options.computed[o]=function(){return this["asyncComputed$promise$"+o],this["asyncComputed$trigger$"+o],f},t.$options.computed["asyncComputed$promise$"+o]=function(){var t=this;h?h.interrupt():e(f)&&(f=f.call(this));var n=h=new g;return i(function(){return u.call(t,n)}).then(function(e){if(t._isDestroyed)throw new Error;n.throwIfInterrupted(),f=e,t["asyncComputed$trigger$"+o]={}}).catch(c)}})},mounted:function(){this.startToUpdateContainerSize()},methods:{updateContainerSize:function(){var t=this.$el.getBoundingClientRect(),e=t.width,n=t.height;this.containerWidth=e,this.containerHeight=n}},render:function(t){return function(t,e,n,r,i){return t("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden"}},[t("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},n.map(function(n,o){var a=n.originalWord,u=n.key,f=n.text,c=n.weight,h=n.rotation,s=n.fontFamily,d=n.fontStyle,l=n.fontVariant,v=n.fontWeight,g=n.color,p=n.fontSize,m=(n.textWidth,n.textHeight,n.rectLeft),y=n.rectTop,w=n.rectWidth,W=n.rectHeight;return t("div",{key:u,style:{position:"absolute",top:y+W/2+"px",left:m+w/2+"px",transform:"rotate("+h+"turn)",color:g,transition:["all",r+"ms","ease-in-out",i*o+"ms"].join(" "),font:[d,l,v,p+"px/1",s].join(" ")}},[t("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",whiteSpace:"nowrap"}},[e.default({originalWord:a,text:f,weight:c,rotation:h,fontFamily:s,fontStyle:d,fontVariant:l,fontWeight:v,color:g,fontSize:p})])])}))])}(t,Object.assign({default:function(t){return t.text}},this.$scopedSlots),this.scaledBoundedWords,this.transitionDuration,this.transitionDelay)}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(y.name,y),y});
