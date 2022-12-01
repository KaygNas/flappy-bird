var K=Object.defineProperty,Z=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var b=(n,t,e)=>t in n?K(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,P=(n,t)=>{for(var e in t||(t={}))L.call(t,e)&&b(n,e,t[e]);if(W)for(var e of W(t))H.call(t,e)&&b(n,e,t[e]);return n},R=(n,t)=>Z(n,z(t));var i=(n,t,e)=>(b(n,typeof t!="symbol"?t+"":t,e),e);import{l as V}from"./vendor.40dced45.js";const j=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const h of s)if(h.type==="childList")for(const r of h.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const h={};return s.integrity&&(h.integrity=s.integrity),s.referrerpolicy&&(h.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?h.credentials="include":s.crossorigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(s){if(s.ep)return;s.ep=!0;const h=e(s);fetch(s.href,h)}};j();class g{constructor(t){i(this,"top");i(this,"left");i(this,"width");i(this,"height");i(this,"color");i(this,"imgEle");i(this,"imgX");i(this,"imgY");if(this.top=t.top,this.left=t.left,this.width=t.width,this.height=t.height,this.color=t.color||"#000",this.imgX=0,this.imgY=0,t.imgSrc){const e=new Image;e.onload=()=>{this.imgEle=e},e.src=t.imgSrc}}get right(){return this.left+this.width}get bottom(){return this.top+this.height}render(t){this.imgEle?t.drawImage(this.imgEle,this.imgX,this.imgY,this.width,this.height,this.left,this.top,this.width,this.height):(t.fillStyle=this.color,t.fillRect(this.left,this.top,this.width,this.height))}isOverlay(t){const e=[this.left,this.right],o=[this.top,this.bottom];return this.getCoordination(t).some(([h,r])=>this.isInRange(h,e)&&this.isInRange(r,o))||t.isContain(this)}isContain(t){const e=[this.left,this.right],o=[this.top,this.bottom];return this.getCoordination(t).every(([h,r])=>this.isInRange(h,e)&&this.isInRange(r,o))}isInRange(t,e){return t>=e[0]&&t<=e[1]}getCoordination({top:t,left:e,right:o,bottom:s}){return[[e,t],[o,t],[o,s],[e,s]]}}class J extends g{constructor(t){super(t)}isCollidedWith(t){return this.isOverlay(t)}}class w{add(t){return this.create(this.value+t.value)}substract(t){return this.create(this.value-t.value)}multiple(t){return this.create(this.value*t)}}const X=Symbol();var At;const F=class extends w{constructor(t){super();i(this,At);i(this,"value");i(this,"unit");this.value=t,this.unit="px/s"}create(t){return new F(t)}};let I=F;At=X;const _=Symbol();var at;const f=class extends w{constructor(t){super();i(this,at);i(this,"value");i(this,"unit");this.value=t,this.unit="s"}create(t){return new f(t)}};let T=f;at=_;const q=Symbol();var lt;const k=class extends w{constructor(t){super();i(this,lt);i(this,"value");i(this,"unit");this.value=t,this.unit="px/s\xB2"}create(t){return new k(t)}};let v=k;lt=q;const $=new T(1),u={WIDTH:window.innerWidth,HEIGHT:window.innerHeight},B={GRAVITY:new v(u.HEIGHT*2/$.value**2),PIPE_WIDTH:138,GAP:200,GAP_BETWEEN_TWO_PIPE:64*4},a={SPEED_H:new I(120),SPEED_V:new I(0),SPEED_FLAP:new I(B.GRAVITY.value/3),LEFT:50,TOP:u.HEIGHT/2,WIDTH:92,HEIGHT:64,COLOR:"#ff0000"};var tt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARQAAABACAYAAADbGIgsAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENUU3ODRGODg5MTcxMUUzQkM4MUMwODVFQjk3NkM0MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENUU3ODRGOTg5MTcxMUUzQkM4MUMwODVFQjk3NkM0MyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ1RTc4NEY2ODkxNzExRTNCQzgxQzA4NUVCOTc2QzQzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ1RTc4NEY3ODkxNzExRTNCQzgxQzA4NUVCOTc2QzQzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+B/b3DwAAAu1JREFUeNrs3b9KHFEUB+CZIELeIE1IYZfKVrAXe8kzZLGwyhLTiE2U7SzEPIOkl7RBSBlfwELS+AaBNBsTEMQ5153xzsz++77yuuPO/HY53DlzvZbj8biYtp2NrWmeRBkNfv3xrVhU8pZ3V3m/KAAUFEBBARQUgEnKrpqyTRpRo/PdrPcavjutjH25PKt17PvNQTKbxwOz3DiUt7xnIW8zFMAtD6CgAAoKgIIC9KiVpzxRx7tJZ/v39bDW6w7234TjdTveTSS64zPxJELe8p7VvM1QALc8gIICKCgAk600eXFquXHUoKrbiGrD9eWvytja5utax6aWJkeNsLvXjoNMOttvQt7d5Z27R0m0HP7w6Gbp8zZDAdzyAAoKoKAATJZsykZNq1TTqc+G4KKSd7/Z5u5REokatU99jmYoAAoKoKAACgqgoABkWZmnk011yw8+fq6MfTj+VBmLlit3sddEW1L7Y/SV7bLlnSv15KjuMv1FyNsMBVBQAAUFUFAAJktuUp27X0QTXSxN7rOhmcr28cD9HhJ9LQVP6WIvj3nLO7rel2ujrBNI/UlElM2i5m2GArjlARQUQEEBmOz/Stl5b1pFx5+9+jPVYAe3q1FTu2ySTVd5F0VeQ28O8y6Dawi+88PWc2n6XZ73vM1QALc8gIICKCgACgrQo+R+KLlPGCKpLvjJ9lV18Ht1aO9iPTw+6ngPblenGuzdOZVP/LjWU4eiOM08C3mnHB7d1PwM6gtzTWQbWYS8zVAAtzyAggIoKACTtbJJdbTEO2rAJptWNaWOHwTNrL6WJrfVHGvSJMzNcdnyvt8X5aGdja3sHORthgK45QEUFEBBAXiOXjep7qu59U9q1WHbUisGo2ZW1Bx8kHeTtx3LOy/vhp+BvGvmbYYCuOUBFBRAQQFQUIAeJZfej853y5xfHC3H39tf7+3fm55sX1XOf/Xn25n9IJosD4+uLbJ3Ie+urk3eZiiAggIoKICCAvBcfwUYAPqPfQLD+W0zAAAAAElFTkSuQmCC";class G extends J{constructor(t,e){super({top:a.TOP,left:a.LEFT,width:a.WIDTH,height:a.HEIGHT,color:a.COLOR,imgSrc:tt});i(this,"speedVertical");i(this,"speedHorizontal");i(this,"changeFrame",V.exports.throttle(()=>{if(this.imgEle){const t=this.imgX+this.width;this.imgX=t>=this.imgEle.width?0:t}},100));this.speedVertical=t,this.speedHorizontal=e}flap(){this.speedVertical=a.SPEED_FLAP}drop(t,e){this.speedVertical=this.speedVertical.substract(new I(t.value*e.value))}fly(t,e){this.top+=-this.speedVertical.value*e.value,this.changeFrame(),t.moveOn(this.speedHorizontal,e)}}class U extends g{constructor(t){super(R(P({},t),{width:0,height:0}));i(this,"text");i(this,"font");i(this,"textAlign");i(this,"textBaseLine");this.text=t.text,this.font=t.font,this.textAlign=t.textAlign||"center",this.textBaseLine=t.textBaseLine||"middle"}render(t){t.fillStyle=this.color,t.textAlign=this.textAlign,t.font=this.font,t.textBaseline=this.textBaseLine,t.fillText(this.text,this.left,this.top)}}var S;(function(n){n.GAME_NAME="\u6572\u597D\u73A9\u7684 Flappy Bird! \u{1F425}",n.GAME_OVER="Never mind, \u518D\u51B2\u4E00\u6B21!"})(S||(S={}));var C;(function(n){n.START="\u5F00\u59CB",n.RESTART="\u51B2\u51B2\u51B2!\u{1F431}\u200D\u{1F3CD}"})(C||(C={}));class M extends g{constructor(t,e){super({width:t,height:e,top:0,left:0,color:"#cbcbcbcc"});i(this,"_onStart");i(this,"_onRestart");i(this,"_button");i(this,"_buttonText");i(this,"_gameTitle");i(this,"_scoreText");i(this,"visible");this.visible=!1;const o=Math.max(t/10,200),s=o/3,h={top:e/2+s,left:t/2-o/2,width:o,height:s,color:"#ffa500"};this._button=new g(h);const r=s/2;this._buttonText=new U({left:h.left+o/2,top:h.top+s/2,color:"#fff",text:C.START,font:`${r}px Microsoft Yahei`,textAlign:"center",textBaseLine:"middle"});const l=s;this._gameTitle=new U({left:h.left+o/2,top:h.top-s*2,color:"#ff0000",text:S.GAME_NAME,font:`${l}px Microsoft Yahei`,textAlign:"center",textBaseLine:"bottom"}),this._scoreText=new U({left:this._gameTitle.left,top:this._gameTitle.top+r,color:"#fff",text:"",font:`${r}px Microsoft Yahei`,textBaseLine:"top"})}onStart(t){this._onStart=t}onRestart(t){this._onRestart=t}boot(){console.log("welcome playing flappy bird! enjoy it!"),this.show()}show(){this.visible=!0}hide(){this.visible=!1}showPause(){this.show(),this._gameTitle.text=S.GAME_NAME,this._buttonText.text=C.START}showGameover(t){this.show(),this._scoreText.text=`\u5F97\u5206 ${t}\u5206 `,this._gameTitle.text=S.GAME_OVER,this._buttonText.text=C.RESTART}click(t,e){const o=new g({top:t.offsetY,left:t.offsetX,width:0,height:0});if(this._button.isOverlay(o))switch(e){case A.GAME_OVER:this._onRestart&&this._onRestart();break;case A.READY:this._onStart&&this._onStart();break;case A.PAUSED:this._onStart&&this._onStart();break}}render(t){!this.visible||(super.render(t),this._button.render(t),this._buttonText.render(t),this._gameTitle.render(t),this._scoreText.text&&(this._scoreText.render(t),this._scoreText.text=""))}}var et="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAAMZCAYAAADfnawUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODE0NUY0MkQ5OEE1OTg3NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3Mzg1MThFNjg5NDgxMUUzOTkzRkJDMEM4MDJDNEY2OCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3Mzg1MThFNTg5NDgxMUUzOTkzRkJDMEM4MDJDNEY2OCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ4MDExNzQwNzIwNjgxMTgxNDVGNDJEOThBNTk4NzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgxNDVGNDJEOThBNTk4NzYiLz4gPC9yZGY6RGVzY3Jp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CAWhIBSEglAQCkIBoSAUhIJQEApCQSggFISCUBAKQkEoCAWEglAQCkJBKAgFoYBQEApCQSgIBaEgFBAKQkEoCAWhIBSEAkJBKAgFoSAUhIJQHAKEglAQCkJBKAgFhIJQEApCQSgIBaGAUBAKQkEoCAWhIBQQCkJBKAgFoSAUhAJCQSgIBaEgFISCUEAoCAWhIBSEglAQCggFoSAUhIJQEApCAaEgFISCUBAKQkEoIBSEglAQCkJBKAgFhIJQEApCQSgIBaGAUBAKQkEoCAWhIBQQCkJBKAgFoSAUhAJCQSgIBaEgFISCUEAoCAWhIBSEglAQCggFoSAUhIJQEApCAaEgFISCUBAKQkEoIBSEglAQCkJBKAgFhIJQEApCQSgIBaGAUBAKQkEoCAWhIBQQCkJBKAgFoSAUhAJCQSgIBaEgFISCUEAoCAWhIBSEglAQCggFoSAUhIJQEApCAaEgFISCUBAKQkEoIBSEglAQCkJBKAgFhIJQEApCQSgIBaGAUBAKQkEoCAWhIBQQCkJBKAgFoSAUhAJCQSgIBaEgFISCUEAoCAWhIBSEglAQCggFoSAUhMK1878AAwDAUxw9p1dTiwAAAABJRU5ErkJggg==";class N extends J{constructor(t,e,o,s,h){super({top:t,left:e,height:s,width:o,color:"#008000",imgSrc:et});i(this,"position");this.position=h}render(t){if(this.position==="above"){const e=this.left+this.width/2,o=this.top+this.height/2;t.translate(e,o),t.rotate(Math.PI),t.translate(-e,-o),super.render(t),t.setTransform(1,0,0,1,0,0)}else super.render(t)}}class it{static create(t,e,o,s){const h=100,r=Math.round(Math.random()*(o-s-h)),l=r+s,c=o-r-s,p=new N(0,t,e,r,"above"),E=new N(l,t,e,c,"below");return[p,E]}}class D extends g{constructor(t,e){const o={width:t,height:e,top:0,left:0,color:"#e3e3e3"};super(o);i(this,"pipePairs");i(this,"pipeWidth");i(this,"gap");i(this,"gapBetweenPipes");i(this,"grvaity");i(this,"totalDistance");this.pipePairs=[],this.pipeWidth=B.PIPE_WIDTH,this.gap=B.GAP,this.gapBetweenPipes=B.GAP_BETWEEN_TWO_PIPE,this.grvaity=B.GRAVITY,this.totalDistance=0,this.fillPipePairs(u.WIDTH/3)}moveOn(t,e){const o=t.value*e.value;this.totalDistance+=o,this.pipePairs.forEach(([s,h])=>{s.left-=o,h.left-=o})}changeStyle(t){Object.assign(this,t)}render(t){this.fillPipePairs(),super.render(t),this.pipePairs.forEach(e=>{e.forEach(o=>o.render(t))})}isCollided(t){return this.isCollidedAnyPipe(t)||this.isCollidedMapBoundary(t)}isCollidedMapBoundary(t){return!this.isContain(t)}isCollidedAnyPipe(t){return this.pipePairs.some(e=>e.some(o=>o.isCollidedWith(t)))}fillPipePairs(t=0){const e=this.width-t,o=this.height,s=this.pipeWidth,h=this.gap,r=this.gapBetweenPipes,l=this.pipePairs.length;let c=l,p=l;for(let d=0;d<l;d++){const[Q]=this.pipePairs[d];if(Q.left+Q.width>=0){c=d;break}}const[E]=c<p?this.pipePairs[p-1]:[],m=E?E.left+E.width:0,x=e-m>0?e-m:0,O=Math.ceil(x/(s+h)),Y=this.pipePairs.slice(c,p),y=new Array(O).fill(0).map((d,Q)=>it.create(m+(h+s)*(Q+1)-s+t,s,o,r));this.pipePairs=Y.concat(y)}}class st{constructor(t){i(this,"animId");i(this,"lastTimeRender");i(this,"renderFn");this.renderFn=t}run(){const t=e=>{const o=this.lastTimeRender?e-this.lastTimeRender:0,s=new T(o/1e3);this.lastTimeRender=e,this.renderFn(s),this.animId=window.requestAnimationFrame(t)};this.animId=window.requestAnimationFrame(t)}stop(){this.animId&&(window.cancelAnimationFrame(this.animId),this.animId=void 0,this.lastTimeRender=void 0)}}var A;(function(n){n.READY="ready",n.PLAYING="playing",n.PAUSED="paused",n.GAME_OVER="gameOver"})(A||(A={}));class ot{constructor(t){i(this,"bird");i(this,"map");i(this,"bootScreen");i(this,"score");i(this,"ctx");i(this,"anim");i(this,"canvasEle");i(this,"status");this.canvasEle=t;const e=t.getContext("2d");if(!e)throw new Error("can not get canvas context 2d");this.ctx=e,this.bird=new G(a.SPEED_V,a.SPEED_H),this.map=new D(t.width,t.height),this.anim=new st(this.playing.bind(this)),this.bootScreen=new M(t.width,t.height),this.score=0,this.status=A.READY,this.registerListener(),this.bootScreen.boot(),this.render()}start(){console.log("start"),this.status=A.PLAYING,this.bootScreen.hide(),this.anim.run()}restart(){console.log("restart"),this.resetGame(),this.start()}playing(t){if(this.status!==A.GAME_OVER&&(this.bird.drop(this.map.grvaity,t),this.bird.fly(this.map,t),this.render(),this.map.isCollided(this.bird)))return this.gameOver()}pause(){console.log("pause"),this.status=A.PAUSED,this.bootScreen.showPause(),this.anim.stop()}gameOver(){this.pause(),this.status=A.GAME_OVER,this.score=Math.round(this.map.totalDistance),this.bootScreen.showGameover(this.score),this.render(),console.log("gameOver, your score:",this.score)}birdFlap(){this.bird.flap()}resetGame(){const t=this.canvasEle;this.bird=new G(a.SPEED_V,a.SPEED_H),this.map=new D(t.width,t.height),this.bootScreen=new M(t.width,t.height),this.score=0,this.registerListener()}render(){this.map.render(this.ctx),this.bird.render(this.ctx),this.bootScreen.render(this.ctx)}registerListener(){this.bootScreen.onStart(this.start.bind(this)),this.bootScreen.onRestart(this.restart.bind(this)),this.canvasEle.onclick=t=>{this.status===A.PLAYING?this.birdFlap():this.bootScreen.click(t,this.status)}}}window.onload=()=>{const n=document.querySelector("#gameWindow");n.width=u.WIDTH,n.height=u.HEIGHT,new ot(n)};