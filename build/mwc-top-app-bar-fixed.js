import{g as s,v as e,w as r,T as t,x as a,k as l,_ as o,d as i}from"./core.js";var n=function(r){function t(){var s=null!==r&&r.apply(this,arguments)||this;return s.wasScrolled_=!1,s}return s(t,r),t.prototype.handleTargetScroll=function(){this.adapter.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter.removeClass(e.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter.addClass(e.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)},t}(r);class c extends t{constructor(){super(...arguments),this.mdcFoundationClass=n}barClasses(){return Object.assign(Object.assign({},super.barClasses()),{"mdc-top-app-bar--fixed":!0})}registerListeners(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,a)}unregisterListeners(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}}let d=class extends c{};d.styles=l,d=o([i("mwc-top-app-bar-fixed")],d);export{d as TopAppBarFixed};
