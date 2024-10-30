/**
 * Jquery Mask Plugin by Igor Escobar
 * https://igorescobar.github.io/jQuery-Mask-Plugin/
 */
"use strict";!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery||Zepto)}(function(t){var a=function(a,e,n){var r={invalid:[],getCaret:function(){try{var t,e=0,n=a.get(0),s=document.selection,o=n.selectionStart;return s&&-1===navigator.appVersion.indexOf("MSIE 10")?(t=s.createRange(),t.moveStart("character",-r.val().length),e=t.text.length):(o||"0"===o)&&(e=o),e}catch(c){}},setCaret:function(t){try{if(a.is(":focus")){var e,n=a.get(0);n.setSelectionRange?(n.focus(),n.setSelectionRange(t,t)):(e=n.createTextRange(),e.collapse(!0),e.moveEnd("character",t),e.moveStart("character",t),e.select())}}catch(r){}},events:function(){a.on("keydown.mask",function(t){a.data("mask-keycode",t.keyCode||t.which)}).on(t.jMaskGlobals.useInput?"input.mask":"keyup.mask",r.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){a.keydown().keyup()},100)}).on("change.mask",function(){a.data("changed",!0)}).on("blur.mask",function(){c===r.val()||a.data("changed")||a.trigger("change"),a.data("changed",!1)}).on("blur.mask",function(){c=r.val()}).on("focus.mask",function(a){n.selectOnFocus===!0&&t(a.target).select()}).on("focusout.mask",function(){n.clearIfNotMatch&&!s.test(r.val())&&r.val("")})},getRegexMask:function(){for(var t,a,n,r,s,c,i=[],l=0;l<e.length;l++)t=o.translation[e.charAt(l)],t?(a=t.pattern.toString().replace(/.{1}$|^.{1}/g,""),n=t.optional,r=t.recursive,r?(i.push(e.charAt(l)),s={digit:e.charAt(l),pattern:a}):i.push(n||r?a+"?":a)):i.push(e.charAt(l).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));return c=i.join(""),s&&(c=c.replace(new RegExp("("+s.digit+"(.*"+s.digit+")?)"),"($1)?").replace(new RegExp(s.digit,"g"),s.pattern)),new RegExp(c)},destroyEvents:function(){a.off(["input","keydown","keyup","paste","drop","blur","focusout",""].join(".mask "))},val:function(t){var e,n=a.is("input"),r=n?"val":"text";return arguments.length>0?(a[r]()!==t&&a[r](t),e=a):e=a[r](),e},getMCharsBeforeCount:function(t,a){for(var n=0,r=0,s=e.length;s>r&&t>r;r++)o.translation[e.charAt(r)]||(t=a?t+1:t,n++);return n},caretPos:function(t,a,n,s){var c=o.translation[e.charAt(Math.min(t-1,e.length-1))];return c?Math.min(t+n-a-s,n):r.caretPos(t+1,a,n,s)},behaviour:function(e){e=e||window.event,r.invalid=[];var n=a.data("mask-keycode");if(-1===t.inArray(n,o.byPassKeys)){var s=r.getCaret(),c=r.val(),i=c.length,l=r.getMasked(),u=l.length,f=r.getMCharsBeforeCount(u-1)-r.getMCharsBeforeCount(i-1),h=i>s;return r.val(l),h&&(8!==n&&46!==n&&(s=r.caretPos(s,i,u,f)),r.setCaret(s)),r.callbacks(e)}},getMasked:function(t,a){var s,c,i=[],l=void 0===a?r.val():a+"",u=0,f=e.length,h=0,v=l.length,d=1,k="push",p=-1;for(n.reverse?(k="unshift",d=-1,s=0,u=f-1,h=v-1,c=function(){return u>-1&&h>-1}):(s=f-1,c=function(){return f>u&&v>h});c();){var g=e.charAt(u),m=l.charAt(h),M=o.translation[g];M?(m.match(M.pattern)?(i[k](m),M.recursive&&(-1===p?p=u:u===s&&(u=p-d),s===p&&(u-=d)),u+=d):M.optional?(u+=d,h-=d):M.fallback?(i[k](M.fallback),u+=d,h-=d):r.invalid.push({p:h,v:m,e:M.pattern}),h+=d):(t||i[k](g),m===g&&(h+=d),u+=d)}var y=e.charAt(s);return f!==v+1||o.translation[y]||i.push(y),i.join("")},callbacks:function(t){var s=r.val(),o=s!==c,i=[s,t,a,n],l=function(t,a,e){"function"==typeof n[t]&&a&&n[t].apply(this,e)};l("onChange",o===!0,i),l("onKeyPress",o===!0,i),l("onComplete",s.length===e.length,i),l("onInvalid",r.invalid.length>0,[s,t,a,r.invalid,n])}};a=t(a);var s,o=this,c=r.val();e="function"==typeof e?e(r.val(),void 0,a,n):e,o.mask=e,o.options=n,o.remove=function(){var t=r.getCaret();return r.destroyEvents(),r.val(o.getCleanVal()),r.setCaret(t-r.getMCharsBeforeCount(t)),a},o.getCleanVal=function(){return r.getMasked(!0)},o.getMaskedVal=function(t){return r.getMasked(!1,t)},o.init=function(e){if(e=e||!1,n=n||{},o.clearIfNotMatch=t.jMaskGlobals.clearIfNotMatch,o.byPassKeys=t.jMaskGlobals.byPassKeys,o.translation=t.extend({},t.jMaskGlobals.translation,n.translation),o=t.extend(!0,{},o,n),s=r.getRegexMask(),e===!1){n.placeholder&&a.attr("placeholder",n.placeholder),a.data("mask")&&a.attr("autocomplete","off"),r.destroyEvents(),r.events();var c=r.getCaret();r.val(r.getMasked()),r.setCaret(c+r.getMCharsBeforeCount(c,!0))}else r.events(),r.val(r.getMasked())},o.init(!a.is("input"))};t.maskWatchers={};var e=function(){var e=t(this),r={},s="data-mask-",o=e.attr("data-mask");return e.attr(s+"reverse")&&(r.reverse=!0),e.attr(s+"clearifnotmatch")&&(r.clearIfNotMatch=!0),"true"===e.attr(s+"selectonfocus")&&(r.selectOnFocus=!0),n(e,o,r)?e.data("mask",new a(this,o,r)):void 0},n=function(a,e,n){n=n||{};var r=t(a).data("mask"),s=JSON.stringify,o=t(a).val()||t(a).text();try{return"function"==typeof e&&(e=e(o)),"object"!=typeof r||s(r.options)!==s(n)||r.mask!==e}catch(c){}},r=function(t){var a,e=document.createElement("div");return t="on"+t,a=t in e,a||(e.setAttribute(t,"return;"),a="function"==typeof e[t]),e=null,a};t.fn.mask=function(e,r){r=r||{};var s=this.selector,o=t.jMaskGlobals,c=o.watchInterval,i=r.watchInputs||o.watchInputs,l=function(){return n(this,e,r)?t(this).data("mask",new a(this,e,r)):void 0};return t(this).each(l),s&&""!==s&&i&&(clearInterval(t.maskWatchers[s]),t.maskWatchers[s]=setInterval(function(){t(document).find(s).each(l)},c)),this},t.fn.masked=function(t){return this.data("mask").getMaskedVal(t)},t.fn.unmask=function(){return clearInterval(t.maskWatchers[this.selector]),delete t.maskWatchers[this.selector],this.each(function(){var a=t(this).data("mask");a&&a.remove().removeData("mask")})},t.fn.cleanVal=function(){return this.data("mask").getCleanVal()},t.applyDataMask=function(a){a=a||t.jMaskGlobals.maskElements;var n=a instanceof t?a:t(a);n.filter(t.jMaskGlobals.dataMaskAttr).each(e)};var s={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,useInput:r("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};t.jMaskGlobals=t.jMaskGlobals||{},s=t.jMaskGlobals=t.extend(!0,{},s,t.jMaskGlobals),s.dataMask&&t.applyDataMask(),setInterval(function(){t.jMaskGlobals.watchDataMask&&t.applyDataMask()},s.watchInterval)});

/**
 * Cria a mascara
 */
var masks=["(00) 00000-0000","(00) 0000-00009"],maskBehavior=function(s,a,e,k){return s.length>14?masks[0]:masks[1]};$(".wpcf7-tel").mask(maskBehavior,{onKeyPress:function(s,a,e,k){e.mask(maskBehavior(s,a,e,k),k)}});