import{g as e,m as r,n as s,_ as t,q as i,p as a,o as n,i as o,B as m,h as l,c,t as d,b as p,d as f}from"./core.js";var u={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function g(e,r){if(function(e){return Boolean(e.document)&&"function"==typeof e.document.createElement}(e)&&r in u){var s=e.document.createElement("div"),t=u[r],i=t.standard,a=t.prefixed;return i in s.style?i:a}return r}var b={CLOSED_CLASS:"mdc-linear-progress--closed",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed"},h={ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},y=function(s){function t(e){return s.call(this,r(r({},t.defaultAdapter),e))||this}return e(t,s),Object.defineProperty(t,"cssClasses",{get:function(){return b},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return h},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},hasClass:function(){return!1},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){this.isDeterminate=!this.adapter.hasClass(b.INDETERMINATE_CLASS),this.isReversed=this.adapter.hasClass(b.REVERSED_CLASS),this.progress=0,this.buffer=1},t.prototype.setDeterminate=function(e){if(this.isDeterminate=e,this.isDeterminate)return this.adapter.removeClass(b.INDETERMINATE_CLASS),this.adapter.setAttribute(h.ARIA_VALUENOW,this.progress.toString()),this.setPrimaryBarProgress(this.progress),void this.setBufferBarProgress(this.buffer);this.isReversed&&(this.adapter.removeClass(b.REVERSED_CLASS),this.adapter.forceLayout(),this.adapter.addClass(b.REVERSED_CLASS)),this.adapter.addClass(b.INDETERMINATE_CLASS),this.adapter.removeAttribute(h.ARIA_VALUENOW),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},t.prototype.getDeterminate=function(){return this.isDeterminate},t.prototype.setProgress=function(e){this.progress=e,this.isDeterminate&&(this.setPrimaryBarProgress(e),this.adapter.setAttribute(h.ARIA_VALUENOW,e.toString()))},t.prototype.getProgress=function(){return this.progress},t.prototype.setBuffer=function(e){this.buffer=e,this.isDeterminate&&this.setBufferBarProgress(e)},t.prototype.setReverse=function(e){this.isReversed=e,this.isDeterminate||(this.adapter.removeClass(b.INDETERMINATE_CLASS),this.adapter.forceLayout(),this.adapter.addClass(b.INDETERMINATE_CLASS)),this.isReversed?this.adapter.addClass(b.REVERSED_CLASS):this.adapter.removeClass(b.REVERSED_CLASS)},t.prototype.open=function(){this.adapter.removeClass(b.CLOSED_CLASS)},t.prototype.close=function(){this.adapter.addClass(b.CLOSED_CLASS)},t.prototype.setPrimaryBarProgress=function(e){var r="scaleX("+e+")",s="undefined"!=typeof window?g(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(s,r)},t.prototype.setBufferBarProgress=function(e){var r=100*e+"%";this.adapter.setBufferBarStyle(h.FLEX_BASIS,r)},t}(s);class _ extends m{constructor(){super(...arguments),this.mdcFoundationClass=y,this.indeterminate=!1,this.progress=0,this.buffer=1,this.reverse=!1,this.closed=!1,this.ariaLabel="",this.bufferFlexBasisValue="",this.primaryTransformValue=""}render(){const e={"mdc-linear-progress--closed":this.closed,"mdc-linear-progress--indeterminate":this.indeterminate,"mdc-linear-progress--reversed":this.reverse},r={"flex-basis":this.bufferFlexBasisValue},s={transform:this.primaryTransformValue};return l`
      <div
          role="progressbar"
          class="mdc-linear-progress ${c(e)}"
          aria-label="${this.ariaLabel}"
          aria-valuemin="0"
          aria-valuemax="1"
          aria-valuenow="0">
        <div class="mdc-linear-progress__buffer">
          <div
            class="mdc-linear-progress__buffer-bar"
            style=${d(r)}>
          </div>
          <div class="mdc-linear-progress__buffer-dots"></div>
        </div>
        <div
            class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
            style=${d(s)}>
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span class="mdc-linear-progress__bar-inner"></span>
        </div>
      </div>`}createAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:e=>this.mdcRoot.classList.contains(e),forceLayout:()=>this.mdcRoot.offsetWidth,removeAttribute:e=>{this.mdcRoot.removeAttribute(e)},setAttribute:(e,r)=>{this.mdcRoot.setAttribute(e,r)},setBufferBarStyle:(e,r)=>{this.bufferFlexBasisValue=r},setPrimaryBarStyle:(e,r)=>{this.primaryTransformValue=r}}}open(){this.closed=!1}close(){this.closed=!0}}t([i(".mdc-linear-progress")],_.prototype,"mdcRoot",void 0),t([a({type:Boolean,reflect:!0}),n((function(e){this.mdcFoundation.setDeterminate(!e)}))],_.prototype,"indeterminate",void 0),t([a({type:Number}),n((function(e){this.mdcFoundation.setProgress(e)}))],_.prototype,"progress",void 0),t([a({type:Number}),n((function(e){this.mdcFoundation.setBuffer(e)}))],_.prototype,"buffer",void 0),t([a({type:Boolean,reflect:!0}),n((function(e){this.mdcFoundation.setReverse(e)}))],_.prototype,"reverse",void 0),t([a({type:Boolean,reflect:!0})],_.prototype,"closed",void 0),t([a()],_.prototype,"ariaLabel",void 0),t([o()],_.prototype,"bufferFlexBasisValue",void 0),t([o()],_.prototype,"primaryTransformValue",void 0);const v=p`@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;background-size:10px 4px;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{visibility:hidden}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%;animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;visibility:visible;animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--reversed .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;order:0;transform:rotate(0)}.mdc-linear-progress--reversed .mdc-linear-progress__buffer-bar{order:1}.mdc-linear-progress--closed{opacity:0;animation:none}.mdc-linear-progress__bar-inner{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}:host{display:block}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6;background-color:var(--mdc-linear-progress-buffer-color, #e6e6e6)}.mdc-linear-progress__buffer-dots{background-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E");background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E"))}`;let E=class extends _{};E.styles=v,E=t([f("mwc-linear-progress")],E);export{E as LinearProgress};
