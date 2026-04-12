import{d as fe,p as N,H as nn,I as ln,J as Ze,K as ft,L as c,M as on,N as an,O as bt,P as _t,Q as $,R as D,S as ue,T as Rt,U as ye,V as rn,W as vt,X as sn,e as P,Y as be,Z as Ye,$ as St,a0 as it,a1 as Pe,a2 as Mt,a3 as ht,a4 as ae,a5 as dt,a6 as Ot,a7 as te,a8 as un,a9 as dn,s as Te,aa as cn,ab as at,ac as pt,ad as fn,ae as vn,af as hn,ag as bn,ah as Qe,ai as pn,aj as mn,ak as gn,al as yn,F as qe,am as wn,an as mt,ao as xn,ap as Cn,aq as Fn,ar as ct,as as _n,at as Rn,au as Sn,av as Mn,aw as On,ax as gt,ay as Pn,az as Tn,aA as ce,u as kn,G as Oe,o as ge,g as je,l as V,w as Z,h as S,m as He,t as A,j as d,i as zn,y as Ne,c as Ke,n as Bn,A as In,aB as $n,E as Ln}from"./index-a0e4cff7.js";import{_ as An}from"./InputNumber-aafedc3a.js";import{u as Pt}from"./use-locale-20f95e05.js";import{u as Nn}from"./use-form-item-da8f8500.js";import{_ as rt}from"./Tag-edecc68c.js";import{N as Dn}from"./Input-4f0988d3.js";import{V as En,F as Vn,m as Wn}from"./FocusDetector-ee7bc19d.js";import{_ as Un}from"./Alert-4958010f.js";import{_ as jn}from"./FormItem-b0d5f045.js";import"./Remove-83107a0b.js";import"./Button-d5c48d61.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";function Hn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function st(e){const l=e.filter(o=>o!==void 0);if(l.length!==0)return l.length===1?l[0]:o=>{e.forEach(a=>{a&&a(o)})}}const Ce="v-hidden",Kn=an("[v-hidden]",{display:"none!important"}),yt=fe({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:l}){const o=N(null),a=N(null);function n(){const{value:b}=o,{getCounter:s,getTail:L}=e;let y;if(s!==void 0?y=s():y=a.value,!b||!y)return;y.hasAttribute(Ce)&&y.removeAttribute(Ce);const{children:g}=b,x=b.offsetWidth,_=[],M=l.tail?L?.():null;let m=M?M.offsetWidth:0,O=!1;const W=b.children.length-(l.tail?1:0);for(let F=0;F<W-1;++F){if(F<0)continue;const T=g[F];if(O){T.hasAttribute(Ce)||T.setAttribute(Ce,"");continue}else T.hasAttribute(Ce)&&T.removeAttribute(Ce);const U=T.offsetWidth;if(m+=U,_[F]=U,m>x){const{updateCounter:G}=e;for(let j=F;j>=0;--j){const H=W-1-j;G!==void 0?G(H):y.textContent=`${H}`;const ee=y.offsetWidth;if(m-=_[j],m+ee<=x||j===0){O=!0,F=j-1,M&&(F===-1?(M.style.maxWidth=`${x-ee}px`,M.style.boxSizing="border-box"):M.style.maxWidth="");break}}}}const{onUpdateOverflow:w}=e;O?w!==void 0&&w(!0):(w!==void 0&&w(!1),y.setAttribute(Ce,""))}const p=nn();return Kn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:ln,ssr:p}),Ze(n),{selfRef:o,counterRef:a,sync:n}},render(){const{$slots:e}=this;return ft(this.sync),c("div",{class:"v-overflow",ref:"selfRef"},[on(e,"default"),e.counter?e.counter():c("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Tt(e,l){l&&(Ze(()=>{const{value:o}=e;o&&bt.registerHandler(o,l)}),_t(()=>{const{value:o}=e;o&&bt.unregisterHandler(o)}))}const qn=fe({name:"Checkmark",render(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},c("g",{fill:"none"},c("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Qn=fe({name:"Empty",render(){return c("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),c("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Gn=$("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[D("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[ue("+",[D("description",`
 margin-top: 8px;
 `)])]),D("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),D("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Zn=Object.assign(Object.assign({},ye.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Yn=fe({name:"Empty",props:Zn,setup(e){const{mergedClsPrefixRef:l,inlineThemeDisabled:o}=Rt(e),a=ye("Empty","-empty",Gn,rn,e,l),{localeRef:n}=Pt("Empty"),p=vt(sn,null),b=P(()=>{var g,x,_;return(g=e.description)!==null&&g!==void 0?g:(_=(x=p?.mergedComponentPropsRef.value)===null||x===void 0?void 0:x.Empty)===null||_===void 0?void 0:_.description}),s=P(()=>{var g,x;return((x=(g=p?.mergedComponentPropsRef.value)===null||g===void 0?void 0:g.Empty)===null||x===void 0?void 0:x.renderIcon)||(()=>c(Qn,null))}),L=P(()=>{const{size:g}=e,{common:{cubicBezierEaseInOut:x},self:{[be("iconSize",g)]:_,[be("fontSize",g)]:M,textColor:m,iconColor:O,extraTextColor:W}}=a.value;return{"--n-icon-size":_,"--n-font-size":M,"--n-bezier":x,"--n-text-color":m,"--n-icon-color":O,"--n-extra-text-color":W}}),y=o?Ye("empty",P(()=>{let g="";const{size:x}=e;return g+=x[0],g}),L,e):void 0;return{mergedClsPrefix:l,mergedRenderIcon:s,localizedDescription:P(()=>b.value||n.value.description),cssVars:o?void 0:L,themeClass:y?.themeClass,onRender:y?.onRender}},render(){const{$slots:e,mergedClsPrefix:l,onRender:o}=this;return o?.(),c("div",{class:[`${l}-empty`,this.themeClass],style:this.cssVars},this.showIcon?c("div",{class:`${l}-empty__icon`},e.icon?e.icon():c(St,{clsPrefix:l},{default:this.mergedRenderIcon})):null,this.showDescription?c("div",{class:`${l}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?c("div",{class:`${l}-empty__extra`},e.extra()):null)}});function Jn(e,l){return c(Mt,{name:"fade-in-scale-up-transition"},{default:()=>e?c(St,{clsPrefix:l,class:`${l}-base-select-option__check`},{default:()=>c(qn)}):null})}const wt=fe({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:l,pendingTmNodeRef:o,multipleRef:a,valueSetRef:n,renderLabelRef:p,renderOptionRef:b,labelFieldRef:s,valueFieldRef:L,showCheckmarkRef:y,nodePropsRef:g,handleOptionClick:x,handleOptionMouseEnter:_}=vt(ht),M=it(()=>{const{value:w}=o;return w?e.tmNode.key===w.key:!1});function m(w){const{tmNode:F}=e;F.disabled||x(w,F)}function O(w){const{tmNode:F}=e;F.disabled||_(w,F)}function W(w){const{tmNode:F}=e,{value:T}=M;F.disabled||T||_(w,F)}return{multiple:a,isGrouped:it(()=>{const{tmNode:w}=e,{parent:F}=w;return F&&F.rawNode.type==="group"}),showCheckmark:y,nodeProps:g,isPending:M,isSelected:it(()=>{const{value:w}=l,{value:F}=a;if(w===null)return!1;const T=e.tmNode.rawNode[L.value];if(F){const{value:U}=n;return U.has(T)}else return w===T}),labelField:s,renderLabel:p,renderOption:b,handleMouseMove:W,handleMouseEnter:O,handleClick:m}},render(){const{clsPrefix:e,tmNode:{rawNode:l},isSelected:o,isPending:a,isGrouped:n,showCheckmark:p,nodeProps:b,renderOption:s,renderLabel:L,handleClick:y,handleMouseEnter:g,handleMouseMove:x}=this,_=Jn(o,e),M=L?[L(l,o),p&&_]:[Pe(l[this.labelField],l,o),p&&_],m=b?.(l),O=c("div",Object.assign({},m,{class:[`${e}-base-select-option`,l.class,m?.class,{[`${e}-base-select-option--disabled`]:l.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:n,[`${e}-base-select-option--pending`]:a,[`${e}-base-select-option--show-checkmark`]:p}],style:[m?.style||"",l.style||""],onClick:st([y,m?.onClick]),onMouseenter:st([g,m?.onMouseenter]),onMousemove:st([x,m?.onMousemove])}),c("div",{class:`${e}-base-select-option__content`},M));return l.render?l.render({node:O,option:l,selected:o}):s?s({node:O,option:l,selected:o}):O}}),xt=fe({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:l,labelFieldRef:o,nodePropsRef:a}=vt(ht);return{labelField:o,nodeProps:a,renderLabel:e,renderOption:l}},render(){const{clsPrefix:e,renderLabel:l,renderOption:o,nodeProps:a,tmNode:{rawNode:n}}=this,p=a?.(n),b=l?l(n,!1):Pe(n[this.labelField],n,!1),s=c("div",Object.assign({},p,{class:[`${e}-base-select-group-header`,p?.class]}),b);return n.render?n.render({node:s,option:n}):o?o({node:s,option:n,selected:!1}):s}}),Xn=$("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[$("scrollbar",`
 max-height: var(--n-height);
 `),$("virtual-list",`
 max-height: var(--n-height);
 `),$("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[D("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),$("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),$("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),D("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),D("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),D("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),$("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),$("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[ae("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ue("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ue("&:active",`
 color: var(--n-option-text-color-pressed);
 `),ae("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),ae("pending",[ue("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),ae("selected",`
 color: var(--n-option-text-color-active);
 `,[ue("&::before",`
 background-color: var(--n-option-color-active);
 `),ae("pending",[ue("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),ae("disabled",`
 cursor: not-allowed;
 `,[dt("selected",`
 color: var(--n-option-text-color-disabled);
 `),ae("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),D("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Ot({enterScale:"0.5"})])])]),el=fe({name:"InternalSelectMenu",props:Object.assign(Object.assign({},ye.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const l=ye("InternalSelectMenu","-internal-select-menu",Xn,un,e,te(e,"clsPrefix")),o=N(null),a=N(null),n=N(null),p=P(()=>e.treeMate.getFlattenedNodes()),b=P(()=>dn(p.value)),s=N(null);function L(){const{treeMate:u}=e;let i=null;const{value:E}=e;E===null?i=u.getFirstAvailableNode():(e.multiple?i=u.getNode((E||[])[(E||[]).length-1]):i=u.getNode(E),(!i||i.disabled)&&(i=u.getFirstAvailableNode())),ne(i||null)}function y(){const{value:u}=s;u&&!e.treeMate.getNode(u.key)&&(s.value=null)}let g;Te(()=>e.show,u=>{u?g=Te(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?L():y(),ft(f)):y()},{immediate:!0}):g?.()},{immediate:!0}),_t(()=>{g?.()});const x=P(()=>cn(l.value.self[be("optionHeight",e.size)])),_=P(()=>at(l.value.self[be("padding",e.size)])),M=P(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),m=P(()=>{const u=p.value;return u&&u.length===0});function O(u){const{onToggle:i}=e;i&&i(u)}function W(u){const{onScroll:i}=e;i&&i(u)}function w(u){var i;(i=n.value)===null||i===void 0||i.sync(),W(u)}function F(){var u;(u=n.value)===null||u===void 0||u.sync()}function T(){const{value:u}=s;return u||null}function U(u,i){i.disabled||ne(i,!1)}function G(u,i){i.disabled||O(i)}function j(u){var i;Qe(u,"action")||(i=e.onKeyup)===null||i===void 0||i.call(e,u)}function H(u){var i;Qe(u,"action")||(i=e.onKeydown)===null||i===void 0||i.call(e,u)}function ee(u){var i;(i=e.onMousedown)===null||i===void 0||i.call(e,u),!e.focusable&&u.preventDefault()}function ve(){const{value:u}=s;u&&ne(u.getNext({loop:!0}),!0)}function re(){const{value:u}=s;u&&ne(u.getPrev({loop:!0}),!0)}function ne(u,i=!1){s.value=u,i&&f()}function f(){var u,i;const E=s.value;if(!E)return;const q=b.value(E.key);q!==null&&(e.virtualScroll?(u=a.value)===null||u===void 0||u.scrollTo({index:q}):(i=n.value)===null||i===void 0||i.scrollTo({index:q,elSize:x.value}))}function R(u){var i,E;!((i=o.value)===null||i===void 0)&&i.contains(u.target)&&((E=e.onFocus)===null||E===void 0||E.call(e,u))}function J(u){var i,E;!((i=o.value)===null||i===void 0)&&i.contains(u.relatedTarget)||(E=e.onBlur)===null||E===void 0||E.call(e,u)}pt(ht,{handleOptionMouseEnter:U,handleOptionClick:G,valueSetRef:M,pendingTmNodeRef:s,nodePropsRef:te(e,"nodeProps"),showCheckmarkRef:te(e,"showCheckmark"),multipleRef:te(e,"multiple"),valueRef:te(e,"value"),renderLabelRef:te(e,"renderLabel"),renderOptionRef:te(e,"renderOption"),labelFieldRef:te(e,"labelField"),valueFieldRef:te(e,"valueField")}),pt(pn,o),Ze(()=>{const{value:u}=n;u&&u.sync()});const X=P(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:i},self:{height:E,borderRadius:q,color:ke,groupHeaderTextColor:ze,actionDividerColor:Be,optionTextColorPressed:Fe,optionTextColor:_e,optionTextColorDisabled:he,optionTextColorActive:ie,optionOpacityDisabled:Re,optionCheckColor:pe,actionTextColor:Ie,optionColorPending:we,optionColorActive:xe,loadingColor:$e,loadingSize:Le,optionColorActivePending:Ae,[be("optionFontSize",u)]:Se,[be("optionHeight",u)]:Me,[be("optionPadding",u)]:se}}=l.value;return{"--n-height":E,"--n-action-divider-color":Be,"--n-action-text-color":Ie,"--n-bezier":i,"--n-border-radius":q,"--n-color":ke,"--n-option-font-size":Se,"--n-group-header-text-color":ze,"--n-option-check-color":pe,"--n-option-color-pending":we,"--n-option-color-active":xe,"--n-option-color-active-pending":Ae,"--n-option-height":Me,"--n-option-opacity-disabled":Re,"--n-option-text-color":_e,"--n-option-text-color-active":ie,"--n-option-text-color-disabled":he,"--n-option-text-color-pressed":Fe,"--n-option-padding":se,"--n-option-padding-left":at(se,"left"),"--n-option-padding-right":at(se,"right"),"--n-loading-color":$e,"--n-loading-size":Le}}),{inlineThemeDisabled:Q}=e,le=Q?Ye("internal-select-menu",P(()=>e.size[0]),X,e):void 0,oe={selfRef:o,next:ve,prev:re,getPendingTmNode:T};return Tt(o,e.onResize),Object.assign({mergedTheme:l,virtualListRef:a,scrollbarRef:n,itemSize:x,padding:_,flattenedNodes:p,empty:m,virtualListContainer(){const{value:u}=a;return u?.listElRef},virtualListContent(){const{value:u}=a;return u?.itemsElRef},doScroll:W,handleFocusin:R,handleFocusout:J,handleKeyUp:j,handleKeyDown:H,handleMouseDown:ee,handleVirtualListResize:F,handleVirtualListScroll:w,cssVars:Q?void 0:X,themeClass:le?.themeClass,onRender:le?.onRender},oe)},render(){const{$slots:e,virtualScroll:l,clsPrefix:o,mergedTheme:a,themeClass:n,onRender:p}=this;return p?.(),c("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,n,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?c("div",{class:`${o}-base-select-menu__loading`},c(vn,{clsPrefix:o,strokeWidth:20})):this.empty?c("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0,"data-action":!0},bn(e.empty,()=>[c(Yn,{theme:a.peers.Empty,themeOverrides:a.peerOverrides.Empty})])):c(hn,{ref:"scrollbarRef",theme:a.peers.Scrollbar,themeOverrides:a.peerOverrides.Scrollbar,scrollable:this.scrollable,container:l?this.virtualListContainer:void 0,content:l?this.virtualListContent:void 0,onScroll:l?void 0:this.doScroll},{default:()=>l?c(En,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:b})=>b.isGroup?c(xt,{key:b.key,clsPrefix:o,tmNode:b}):b.ignored?null:c(wt,{clsPrefix:o,key:b.key,tmNode:b})}):c("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(b=>b.isGroup?c(xt,{key:b.key,clsPrefix:o,tmNode:b}):c(wt,{clsPrefix:o,key:b.key,tmNode:b})))}),fn(e.action,b=>b&&[c("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},b),c(Vn,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),tl=ue([$("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[$("base-loading",`
 color: var(--n-loading-color);
 `),$("base-selection-tags","min-height: var(--n-height);"),D("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),D("state-border",`
 z-index: 1;
 border-color: #0000;
 `),$("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[D("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),$("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[D("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),$("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[D("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),$("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),$("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[$("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[D("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),D("render-label",`
 color: var(--n-text-color);
 `)]),dt("disabled",[ue("&:hover",[D("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ae("focus",[D("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ae("active",[D("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),$("base-selection-label","background-color: var(--n-color-active);"),$("base-selection-tags","background-color: var(--n-color-active);")])]),ae("disabled","cursor: not-allowed;",[D("arrow",`
 color: var(--n-arrow-color-disabled);
 `),$("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[$("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),D("render-label",`
 color: var(--n-text-color-disabled);
 `)]),$("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),$("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),$("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[D("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),D("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ae(`${e}-status`,[D("state-border",`border: var(--n-border-${e});`),dt("disabled",[ue("&:hover",[D("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ae("active",[D("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),$("base-selection-label",`background-color: var(--n-color-active-${e});`),$("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ae("focus",[D("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),$("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),$("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ue("&:last-child","padding-right: 0;"),$("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[D("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),nl=fe({name:"InternalSelection",props:Object.assign(Object.assign({},ye.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const l=N(null),o=N(null),a=N(null),n=N(null),p=N(null),b=N(null),s=N(null),L=N(null),y=N(null),g=N(null),x=N(!1),_=N(!1),M=N(!1),m=ye("InternalSelection","-internal-selection",tl,mn,e,te(e,"clsPrefix")),O=P(()=>e.clearable&&!e.disabled&&(M.value||e.active)),W=P(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Pe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),w=P(()=>{const r=e.selectedOption;if(r)return r[e.labelField]}),F=P(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function T(){var r;const{value:h}=l;if(h){const{value:K}=o;K&&(K.style.width=`${h.offsetWidth}px`,e.maxTagCount!=="responsive"&&((r=y.value)===null||r===void 0||r.sync()))}}function U(){const{value:r}=g;r&&(r.style.display="none")}function G(){const{value:r}=g;r&&(r.style.display="inline-block")}Te(te(e,"active"),r=>{r||U()}),Te(te(e,"pattern"),()=>{e.multiple&&ft(T)});function j(r){const{onFocus:h}=e;h&&h(r)}function H(r){const{onBlur:h}=e;h&&h(r)}function ee(r){const{onDeleteOption:h}=e;h&&h(r)}function ve(r){const{onClear:h}=e;h&&h(r)}function re(r){const{onPatternInput:h}=e;h&&h(r)}function ne(r){var h;(!r.relatedTarget||!(!((h=a.value)===null||h===void 0)&&h.contains(r.relatedTarget)))&&j(r)}function f(r){var h;!((h=a.value)===null||h===void 0)&&h.contains(r.relatedTarget)||H(r)}function R(r){ve(r)}function J(){M.value=!0}function X(){M.value=!1}function Q(r){!e.active||!e.filterable||r.target!==o.value&&r.preventDefault()}function le(r){ee(r)}function oe(r){if(r.key==="Backspace"&&!u.value&&!e.pattern.length){const{selectedOptions:h}=e;h?.length&&le(h[h.length-1])}}const u=N(!1);let i=null;function E(r){const{value:h}=l;if(h){const K=r.target.value;h.textContent=K,T()}e.ignoreComposition&&u.value?i=r:re(r)}function q(){u.value=!0}function ke(){u.value=!1,e.ignoreComposition&&re(i),i=null}function ze(r){var h;_.value=!0,(h=e.onPatternFocus)===null||h===void 0||h.call(e,r)}function Be(r){var h;_.value=!1,(h=e.onPatternBlur)===null||h===void 0||h.call(e,r)}function Fe(){var r,h;if(e.filterable)_.value=!1,(r=b.value)===null||r===void 0||r.blur(),(h=o.value)===null||h===void 0||h.blur();else if(e.multiple){const{value:K}=n;K?.blur()}else{const{value:K}=p;K?.blur()}}function _e(){var r,h,K;e.filterable?(_.value=!1,(r=b.value)===null||r===void 0||r.focus()):e.multiple?(h=n.value)===null||h===void 0||h.focus():(K=p.value)===null||K===void 0||K.focus()}function he(){const{value:r}=o;r&&(G(),r.focus())}function ie(){const{value:r}=o;r&&r.blur()}function Re(r){const{value:h}=s;h&&h.setTextContent(`+${r}`)}function pe(){const{value:r}=L;return r}function Ie(){return o.value}let we=null;function xe(){we!==null&&window.clearTimeout(we)}function $e(){e.active||(xe(),we=window.setTimeout(()=>{F.value&&(x.value=!0)},100))}function Le(){xe()}function Ae(r){r||(xe(),x.value=!1)}Te(F,r=>{r||(x.value=!1)}),Ze(()=>{gn(()=>{const r=b.value;r&&(e.disabled?r.removeAttribute("tabindex"):r.tabIndex=_.value?-1:0)})}),Tt(a,e.onResize);const{inlineThemeDisabled:Se}=e,Me=P(()=>{const{size:r}=e,{common:{cubicBezierEaseInOut:h},self:{borderRadius:K,color:De,placeholderColor:Je,textColor:Xe,paddingSingle:et,paddingMultiple:tt,caretColor:Ee,colorDisabled:Ve,textColorDisabled:We,placeholderColorDisabled:nt,colorActive:lt,boxShadowFocus:Ue,boxShadowActive:me,boxShadowHover:t,border:v,borderFocus:C,borderHover:I,borderActive:z,arrowColor:k,arrowColorDisabled:B,loadingColor:Y,colorActiveWarning:de,boxShadowFocusWarning:ot,boxShadowActiveWarning:$t,boxShadowHoverWarning:Lt,borderWarning:At,borderFocusWarning:Nt,borderHoverWarning:Dt,borderActiveWarning:Et,colorActiveError:Vt,boxShadowFocusError:Wt,boxShadowActiveError:Ut,boxShadowHoverError:jt,borderError:Ht,borderFocusError:Kt,borderHoverError:qt,borderActiveError:Qt,clearColor:Gt,clearColorHover:Zt,clearColorPressed:Yt,clearSize:Jt,arrowSize:Xt,[be("height",r)]:en,[be("fontSize",r)]:tn}}=m.value;return{"--n-bezier":h,"--n-border":v,"--n-border-active":z,"--n-border-focus":C,"--n-border-hover":I,"--n-border-radius":K,"--n-box-shadow-active":me,"--n-box-shadow-focus":Ue,"--n-box-shadow-hover":t,"--n-caret-color":Ee,"--n-color":De,"--n-color-active":lt,"--n-color-disabled":Ve,"--n-font-size":tn,"--n-height":en,"--n-padding-single":et,"--n-padding-multiple":tt,"--n-placeholder-color":Je,"--n-placeholder-color-disabled":nt,"--n-text-color":Xe,"--n-text-color-disabled":We,"--n-arrow-color":k,"--n-arrow-color-disabled":B,"--n-loading-color":Y,"--n-color-active-warning":de,"--n-box-shadow-focus-warning":ot,"--n-box-shadow-active-warning":$t,"--n-box-shadow-hover-warning":Lt,"--n-border-warning":At,"--n-border-focus-warning":Nt,"--n-border-hover-warning":Dt,"--n-border-active-warning":Et,"--n-color-active-error":Vt,"--n-box-shadow-focus-error":Wt,"--n-box-shadow-active-error":Ut,"--n-box-shadow-hover-error":jt,"--n-border-error":Ht,"--n-border-focus-error":Kt,"--n-border-hover-error":qt,"--n-border-active-error":Qt,"--n-clear-size":Jt,"--n-clear-color":Gt,"--n-clear-color-hover":Zt,"--n-clear-color-pressed":Yt,"--n-arrow-size":Xt}}),se=Se?Ye("internal-selection",P(()=>e.size[0]),Me,e):void 0;return{mergedTheme:m,mergedClearable:O,patternInputFocused:_,filterablePlaceholder:W,label:w,selected:F,showTagsPanel:x,isComposing:u,counterRef:s,counterWrapperRef:L,patternInputMirrorRef:l,patternInputRef:o,selfRef:a,multipleElRef:n,singleElRef:p,patternInputWrapperRef:b,overflowRef:y,inputTagElRef:g,handleMouseDown:Q,handleFocusin:ne,handleClear:R,handleMouseEnter:J,handleMouseLeave:X,handleDeleteOption:le,handlePatternKeyDown:oe,handlePatternInputInput:E,handlePatternInputBlur:Be,handlePatternInputFocus:ze,handleMouseEnterCounter:$e,handleMouseLeaveCounter:Le,handleFocusout:f,handleCompositionEnd:ke,handleCompositionStart:q,onPopoverUpdateShow:Ae,focus:_e,focusInput:he,blur:Fe,blurInput:ie,updateCounter:Re,getCounter:pe,getTail:Ie,renderLabel:e.renderLabel,cssVars:Se?void 0:Me,themeClass:se?.themeClass,onRender:se?.onRender}},render(){const{status:e,multiple:l,size:o,disabled:a,filterable:n,maxTagCount:p,bordered:b,clsPrefix:s,onRender:L,renderTag:y,renderLabel:g}=this;L?.();const x=p==="responsive",_=typeof p=="number",M=x||_,m=c(wn,null,{default:()=>c(Dn,{clsPrefix:s,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var W,w;return(w=(W=this.$slots).arrow)===null||w===void 0?void 0:w.call(W)}})});let O;if(l){const{labelField:W}=this,w=f=>c("div",{class:`${s}-base-selection-tag-wrapper`,key:f.value},y?y({option:f,handleClose:()=>{this.handleDeleteOption(f)}}):c(rt,{size:o,closable:!f.disabled,disabled:a,onClose:()=>{this.handleDeleteOption(f)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>g?g(f,!0):Pe(f[W],f,!0)})),F=()=>(_?this.selectedOptions.slice(0,p):this.selectedOptions).map(w),T=n?c("div",{class:`${s}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},c("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:a,value:this.pattern,autofocus:this.autofocus,class:`${s}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),c("span",{ref:"patternInputMirrorRef",class:`${s}-base-selection-input-tag__mirror`},this.pattern)):null,U=x?()=>c("div",{class:`${s}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},c(rt,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:a})):void 0;let G;if(_){const f=this.selectedOptions.length-p;f>0&&(G=c("div",{class:`${s}-base-selection-tag-wrapper`,key:"__counter__"},c(rt,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:a},{default:()=>`+${f}`})))}const j=x?n?c(yt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:F,counter:U,tail:()=>T}):c(yt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:F,counter:U}):_?F().concat(G):F(),H=M?()=>c("div",{class:`${s}-base-selection-popover`},x?F():this.selectedOptions.map(w)):void 0,ee=M?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,re=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?c("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`},c("div",{class:`${s}-base-selection-placeholder__inner`},this.placeholder)):null,ne=n?c("div",{ref:"patternInputWrapperRef",class:`${s}-base-selection-tags`},j,x?null:T,m):c("div",{ref:"multipleElRef",class:`${s}-base-selection-tags`,tabindex:a?void 0:0},j,m);O=c(qe,null,M?c(yn,Object.assign({},ee,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>ne,default:H}):ne,re)}else if(n){const W=this.pattern||this.isComposing,w=this.active?!W:!this.selected,F=this.active?!1:this.selected;O=c("div",{ref:"patternInputWrapperRef",class:`${s}-base-selection-label`},c("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${s}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:a,disabled:a,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),F?c("div",{class:`${s}-base-selection-label__render-label ${s}-base-selection-overlay`,key:"input"},c("div",{class:`${s}-base-selection-overlay__wrapper`},y?y({option:this.selectedOption,handleClose:()=>{}}):g?g(this.selectedOption,!0):Pe(this.label,this.selectedOption,!0))):null,w?c("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:"placeholder"},c("div",{class:`${s}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,m)}else O=c("div",{ref:"singleElRef",class:`${s}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?c("div",{class:`${s}-base-selection-input`,title:Hn(this.label),key:"input"},c("div",{class:`${s}-base-selection-input__content`},y?y({option:this.selectedOption,handleClose:()=>{}}):g?g(this.selectedOption,!0):Pe(this.label,this.selectedOption,!0))):c("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:"placeholder"},c("div",{class:`${s}-base-selection-placeholder__inner`},this.placeholder)),m);return c("div",{ref:"selfRef",class:[`${s}-base-selection`,this.themeClass,e&&`${s}-base-selection--${e}-status`,{[`${s}-base-selection--active`]:this.active,[`${s}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${s}-base-selection--disabled`]:this.disabled,[`${s}-base-selection--multiple`]:this.multiple,[`${s}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},O,b?c("div",{class:`${s}-base-selection__border`}):null,b?c("div",{class:`${s}-base-selection__state-border`}):null)}});function Ge(e){return e.type==="group"}function kt(e){return e.type==="ignored"}function ut(e,l){try{return!!(1+l.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function ll(e,l){return{getIsGroup:Ge,getIgnored:kt,getKey(a){return Ge(a)?a.name||a.key||"key-required":a[e]},getChildren(a){return a[l]}}}function ol(e,l,o,a){if(!l)return e;function n(p){if(!Array.isArray(p))return[];const b=[];for(const s of p)if(Ge(s)){const L=n(s[a]);L.length&&b.push(Object.assign({},s,{[a]:L}))}else{if(kt(s))continue;l(o,s)&&b.push(s)}return b}return n(e)}function il(e,l,o){const a=new Map;return e.forEach(n=>{Ge(n)?n[o].forEach(p=>{a.set(p[l],p)}):a.set(n[l],n)}),a}const al=ue([$("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),$("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Ot({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),rl=Object.assign(Object.assign({},ye.props),{to:ct.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),sl=fe({name:"Select",props:rl,setup(e){const{mergedClsPrefixRef:l,mergedBorderedRef:o,namespaceRef:a,inlineThemeDisabled:n}=Rt(e),p=ye("Select","-select",al,Pn,e,l),b=N(e.defaultValue),s=te(e,"value"),L=mt(s,b),y=N(!1),g=N(""),x=P(()=>{const{valueField:t,childrenField:v}=e,C=ll(t,v);return xn(f.value,C)}),_=P(()=>il(re.value,e.valueField,e.childrenField)),M=N(!1),m=mt(te(e,"show"),M),O=N(null),W=N(null),w=N(null),{localeRef:F}=Pt("Select"),T=P(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:F.value.placeholder}),U=Cn(e,["items","options"]),G=[],j=N([]),H=N([]),ee=N(new Map),ve=P(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:v,valueField:C}=e;return I=>({[v]:String(I),[C]:I})}return t===!1?!1:v=>Object.assign(t(v),{value:v})}),re=P(()=>H.value.concat(j.value).concat(U.value)),ne=P(()=>{const{filter:t}=e;if(t)return t;const{labelField:v,valueField:C}=e;return(I,z)=>{if(!z)return!1;const k=z[v];if(typeof k=="string")return ut(I,k);const B=z[C];return typeof B=="string"?ut(I,B):typeof B=="number"?ut(I,String(B)):!1}}),f=P(()=>{if(e.remote)return U.value;{const{value:t}=re,{value:v}=g;return!v.length||!e.filterable?t:ol(t,ne.value,v,e.childrenField)}});function R(t){const v=e.remote,{value:C}=ee,{value:I}=_,{value:z}=ve,k=[];return t.forEach(B=>{if(I.has(B))k.push(I.get(B));else if(v&&C.has(B))k.push(C.get(B));else if(z){const Y=z(B);Y&&k.push(Y)}}),k}const J=P(()=>{if(e.multiple){const{value:t}=L;return Array.isArray(t)?R(t):[]}return null}),X=P(()=>{const{value:t}=L;return!e.multiple&&!Array.isArray(t)?t===null?null:R([t])[0]||null:null}),Q=Nn(e),{mergedSizeRef:le,mergedDisabledRef:oe,mergedStatusRef:u}=Q;function i(t,v){const{onChange:C,"onUpdate:value":I,onUpdateValue:z}=e,{nTriggerFormChange:k,nTriggerFormInput:B}=Q;C&&ce(C,t,v),z&&ce(z,t,v),I&&ce(I,t,v),b.value=t,k(),B()}function E(t){const{onBlur:v}=e,{nTriggerFormBlur:C}=Q;v&&ce(v,t),C()}function q(){const{onClear:t}=e;t&&ce(t)}function ke(t){const{onFocus:v,showOnFocus:C}=e,{nTriggerFormFocus:I}=Q;v&&ce(v,t),I(),C&&he()}function ze(t){const{onSearch:v}=e;v&&ce(v,t)}function Be(t){const{onScroll:v}=e;v&&ce(v,t)}function Fe(){var t;const{remote:v,multiple:C}=e;if(v){const{value:I}=ee;if(C){const{valueField:z}=e;(t=J.value)===null||t===void 0||t.forEach(k=>{I.set(k[z],k)})}else{const z=X.value;z&&I.set(z[e.valueField],z)}}}function _e(t){const{onUpdateShow:v,"onUpdate:show":C}=e;v&&ce(v,t),C&&ce(C,t),M.value=t}function he(){oe.value||(_e(!0),M.value=!0,e.filterable&&We())}function ie(){_e(!1)}function Re(){g.value="",H.value=G}const pe=N(!1);function Ie(){e.filterable&&(pe.value=!0)}function we(){e.filterable&&(pe.value=!1,m.value||Re())}function xe(){oe.value||(m.value?e.filterable?We():ie():he())}function $e(t){var v,C;!((C=(v=w.value)===null||v===void 0?void 0:v.selfRef)===null||C===void 0)&&C.contains(t.relatedTarget)||(y.value=!1,E(t),ie())}function Le(t){ke(t),y.value=!0}function Ae(t){y.value=!0}function Se(t){var v;!((v=O.value)===null||v===void 0)&&v.$el.contains(t.relatedTarget)||(y.value=!1,E(t),ie())}function Me(){var t;(t=O.value)===null||t===void 0||t.focus(),ie()}function se(t){var v;m.value&&(!((v=O.value)===null||v===void 0)&&v.$el.contains(Tn(t))||ie())}function r(t){if(!Array.isArray(t))return[];if(ve.value)return Array.from(t);{const{remote:v}=e,{value:C}=_;if(v){const{value:I}=ee;return t.filter(z=>C.has(z)||I.has(z))}else return t.filter(I=>C.has(I))}}function h(t){K(t.rawNode)}function K(t){if(oe.value)return;const{tag:v,remote:C,clearFilterAfterSelect:I,valueField:z}=e;if(v&&!C){const{value:k}=H,B=k[0]||null;if(B){const Y=j.value;Y.length?Y.push(B):j.value=[B],H.value=G}}if(C&&ee.value.set(t[z],t),e.multiple){const k=r(L.value),B=k.findIndex(Y=>Y===t[z]);if(~B){if(k.splice(B,1),v&&!C){const Y=De(t[z]);~Y&&(j.value.splice(Y,1),I&&(g.value=""))}}else k.push(t[z]),I&&(g.value="");i(k,R(k))}else{if(v&&!C){const k=De(t[z]);~k?j.value=[j.value[k]]:j.value=G}Ve(),ie(),i(t[z],t)}}function De(t){return j.value.findIndex(C=>C[e.valueField]===t)}function Je(t){m.value||he();const{value:v}=t.target;g.value=v;const{tag:C,remote:I}=e;if(ze(v),C&&!I){if(!v){H.value=G;return}const{onCreate:z}=e,k=z?z(v):{[e.labelField]:v,[e.valueField]:v},{valueField:B,labelField:Y}=e;U.value.some(de=>de[B]===k[B]||de[Y]===k[Y])||j.value.some(de=>de[B]===k[B]||de[Y]===k[Y])?H.value=G:H.value=[k]}}function Xe(t){t.stopPropagation();const{multiple:v}=e;!v&&e.filterable&&ie(),q(),v?i([],[]):i(null,null)}function et(t){!Qe(t,"action")&&!Qe(t,"empty")&&t.preventDefault()}function tt(t){Be(t)}function Ee(t){var v,C,I,z,k;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((v=O.value)===null||v===void 0)&&v.isComposing)){if(m.value){const B=(C=w.value)===null||C===void 0?void 0:C.getPendingTmNode();B?h(B):e.filterable||(ie(),Ve())}else if(he(),e.tag&&pe.value){const B=H.value[0];if(B){const Y=B[e.valueField],{value:de}=L;e.multiple&&Array.isArray(de)&&de.some(ot=>ot===Y)||K(B)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;m.value&&((I=w.value)===null||I===void 0||I.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;m.value?(z=w.value)===null||z===void 0||z.next():he();break;case"Escape":m.value&&(Wn(t),ie()),(k=O.value)===null||k===void 0||k.focus();break}}function Ve(){var t;(t=O.value)===null||t===void 0||t.focus()}function We(){var t;(t=O.value)===null||t===void 0||t.focusInput()}function nt(){var t;m.value&&((t=W.value)===null||t===void 0||t.syncPosition())}Fe(),Te(te(e,"options"),Fe);const lt={focus:()=>{var t;(t=O.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=O.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=O.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=O.value)===null||t===void 0||t.blurInput()}},Ue=P(()=>{const{self:{menuBoxShadow:t}}=p.value;return{"--n-menu-box-shadow":t}}),me=n?Ye("select",void 0,Ue,e):void 0;return Object.assign(Object.assign({},lt),{mergedStatus:u,mergedClsPrefix:l,mergedBordered:o,namespace:a,treeMate:x,isMounted:Fn(),triggerRef:O,menuRef:w,pattern:g,uncontrolledShow:M,mergedShow:m,adjustedTo:ct(e),uncontrolledValue:b,mergedValue:L,followerRef:W,localizedPlaceholder:T,selectedOption:X,selectedOptions:J,mergedSize:le,mergedDisabled:oe,focused:y,activeWithoutMenuOpen:pe,inlineThemeDisabled:n,onTriggerInputFocus:Ie,onTriggerInputBlur:we,handleTriggerOrMenuResize:nt,handleMenuFocus:Ae,handleMenuBlur:Se,handleMenuTabOut:Me,handleTriggerClick:xe,handleToggle:h,handleDeleteOption:K,handlePatternInput:Je,handleClear:Xe,handleTriggerBlur:$e,handleTriggerFocus:Le,handleKeydown:Ee,handleMenuAfterLeave:Re,handleMenuClickOutside:se,handleMenuScroll:tt,handleMenuKeydown:Ee,handleMenuMousedown:et,mergedTheme:p,cssVars:n?void 0:Ue,themeClass:me?.themeClass,onRender:me?.onRender})},render(){return c("div",{class:`${this.mergedClsPrefix}-select`},c(_n,null,{default:()=>[c(Rn,null,{default:()=>c(nl,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,l;return[(l=(e=this.$slots).arrow)===null||l===void 0?void 0:l.call(e)]}})}),c(Sn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===ct.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>c(Mt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,l,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Mn(c(el,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(l=this.menuProps)===null||l===void 0?void 0:l.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var a,n;return[(n=(a=this.$slots).empty)===null||n===void 0?void 0:n.call(a)]},action:()=>{var a,n;return[(n=(a=this.$slots).action)===null||n===void 0?void 0:n.call(a)]}}),this.displayDirective==="show"?[[On,this.mergedShow],[gt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[gt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});function zt(e){return e.price*e.quantity}function Bt(e){if(e.feeMode==="direct")return e.feeDirect;const l=zt(e)*(e.feeRate/100);return Math.max(l,e.feeMinimum)}function ul(e){return e.reduce((l,o)=>l+o.quantity,0)}function dl(e){return e.reduce((l,o)=>l+zt(o),0)}function cl(e){return e.reduce((l,o)=>l+Bt(o),0)}function It(e){const l=ul(e),o=dl(e),a=cl(e),n=o+a;return{totalQuantity:l,totalAmount:o,totalBuyFees:a,totalCost:n,averageCost:l>0?n/l:0}}function Ct(e,l,o){if(o.mode==="direct")return o.directFee;const n=e*l*(o.rate/100);return Math.max(n,o.minimum)}function Ft(e,l){return e<=0?null:(l/e-1)*100}function fl(e,l,o){const a=It(e);if(a.totalQuantity<=0)return{...a,estimatedSellFee:0,breakEvenPriceBuyOnly:0,breakEvenPriceWithSell:0,riseNeededBuyOnly:null,riseNeededWithSell:null};const n=a.averageCost;let p=n;if(o.mode==="direct")p=(a.totalCost+o.directFee)/a.totalQuantity;else for(let b=0;b<20;b+=1){const s=Ct(p,a.totalQuantity,o);p=(a.totalCost+s)/a.totalQuantity}return{...a,estimatedSellFee:Ct(p,a.totalQuantity,o),breakEvenPriceBuyOnly:n,breakEvenPriceWithSell:p,riseNeededBuyOnly:Ft(l,n),riseNeededWithSell:Ft(l,p)}}const vl={"mx-auto":"","max-w-960px":""},hl={"mb-4":"",flex:"","flex-wrap":"","gap-3":""},bl={"mb-4":"","text-sm":"","text-neutral-500":""},pl={flex:"","flex-col":"","gap-4":""},ml={class:"tool-grid"},gl={"mt-3":"",flex:"","items-center":"","justify-between":"","gap-3":"","text-sm":"","text-neutral-500":""},yl={"mb-4":"","text-sm":"","text-neutral-500":""},wl={"mb-4":"","text-sm":"","text-neutral-500":""},xl={class:"tool-grid"},Cl={class:"result-grid"},Fl={class:"result-item"},_l={class:"result-item"},Rl={class:"result-item"},Sl={class:"result-item"},Ml={class:"result-item"},Ol={"data-test-id":"average-cost"},Pl={class:"result-item"},Tl={class:"result-grid","mt-4":""},kl={class:"result-item result-item-accent"},zl={class:"result-item result-item-accent"},Bl={"data-test-id":"break-even-price-with-sell"},Il={"data-test-id":"rise-needed-with-sell"},$l=fe({__name:"etf-break-even-calculator.tool",setup(e){const{locale:l}=kn(),o=P(()=>l.value==="zh"?[{label:"直接填手续费",value:"direct"},{label:"按费率计算",value:"rate"}]:[{label:"Direct fee",value:"direct"},{label:"Rate based",value:"rate"}]),a=P(()=>l.value==="zh"?[{label:"直接填预计卖出总费用",value:"direct"},{label:"按费率自动计算",value:"rate"}]:[{label:"Direct fee",value:"direct"},{label:"Rate based",value:"rate"}]),n=P(()=>l.value==="zh"?{addOrder:"新增一笔",resetAll:"清空全部",ordersTitle:"分批买入记录",ordersDescription:"每笔可直接填交割单手续费，或按费率自动计算。",currentPriceTitle:"当前价格基准",currentPriceDescription:"用于计算从当前价还需要上涨多少点，隔天才可能回本。",currentPriceLabel:"当前价 / 收盘价",sellFeeTitle:"卖出费用设置",sellFeeDescription:"可直接输入预计卖出总费用，或按费率自动估算。",sellFeeModeLabel:"卖出费用模式",sellFeeDirectLabel:"预计卖出总费用",sellFeeRateLabel:"卖出费率（%）",sellFeeMinimumLabel:"最低卖出费用",resultsTitle:"计算结果",totalQuantity:"总持仓数量",totalAmount:"总买入成交额",totalBuyFees:"总买入手续费",totalCost:"总买入成本",averageCost:"持仓成本均价",estimatedSellFee:"预估卖出费用",buyOnly:"仅买入回本价",withSellFee:"含卖出费用回本价",targetPrice:"实际要涨到",currentRise:"距当前价还需",buyFeePreview:"估算买入手续费",remove:"删除",note:"当你已知道券商交割单里的实际费用时，直接填费用最准确。",buyPriceLabel:"买入单价",quantityLabel:"数量",feeModeLabel:"手续费模式",buyFeeLabel:"买入手续费",buyFeeRateLabel:"买入费率（%）",buyFeeMinimumLabel:"最低费用"}:{addOrder:"Add order",resetAll:"Reset all",ordersTitle:"Buy orders",ordersDescription:"Add multiple buy orders and either enter the broker fee directly or estimate it by rate.",currentPriceTitle:"Current price",currentPriceDescription:"Used to calculate how much the price needs to rise from the current price to break even.",currentPriceLabel:"Current price / close",sellFeeTitle:"Sell fee settings",sellFeeDescription:"Enter the estimated sell fee directly or calculate it from a rate.",sellFeeModeLabel:"Sell fee mode",sellFeeDirectLabel:"Estimated sell fee",sellFeeRateLabel:"Sell fee rate (%)",sellFeeMinimumLabel:"Minimum sell fee",resultsTitle:"Results",totalQuantity:"Total quantity",totalAmount:"Total buy amount",totalBuyFees:"Total buy fees",totalCost:"Total cost",averageCost:"Average cost",estimatedSellFee:"Estimated sell fee",buyOnly:"Break-even price (buy cost only)",withSellFee:"Break-even price (with sell fee)",targetPrice:"Target price",currentRise:"Need from current price",buyFeePreview:"Estimated buy fee",remove:"Remove",note:"If you already know the real broker-statement fees, direct fee input is the most accurate.",buyPriceLabel:"Buy price",quantityLabel:"Quantity",feeModeLabel:"Fee mode",buyFeeLabel:"Buy fee",buyFeeRateLabel:"Buy fee rate (%)",buyFeeMinimumLabel:"Minimum fee"});function p(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`row-${Date.now()}-${Math.random().toString(36).slice(2,10)}`}function b(){return{id:p(),price:null,quantity:null,feeMode:"direct",feeDirect:0,feeRate:.01,feeMinimum:0}}function s(f,R=null){return typeof f=="number"&&Number.isFinite(f)?f:R}function L(f){return!Array.isArray(f)||f.length===0?[b()]:f.map(R=>({id:typeof R?.id=="string"&&R.id?R.id:p(),price:s(R?.price),quantity:s(R?.quantity),feeMode:R?.feeMode==="rate"?"rate":"direct",feeDirect:s(R?.feeDirect,0),feeRate:s(R?.feeRate,.01),feeMinimum:s(R?.feeMinimum,0)}))}const y=Oe("etf-break-even-calculator--buy-rows",[b()]),g=Oe("etf-break-even-calculator--current-price",null),x=Oe("etf-break-even-calculator--sell-fee-mode","direct"),_=Oe("etf-break-even-calculator--sell-fee-direct",0),M=Oe("etf-break-even-calculator--sell-fee-rate",.01),m=Oe("etf-break-even-calculator--sell-fee-minimum",0);y.value=L(y.value);function O(f){return f.price===null||f.quantity===null||f.price<=0||f.quantity<=0||f.feeMode==="direct"&&(f.feeDirect===null||f.feeDirect<0)||f.feeMode==="rate"&&(f.feeRate===null||f.feeRate<0||f.feeMinimum===null||f.feeMinimum<0)?null:{price:f.price,quantity:f.quantity,feeMode:f.feeMode,feeDirect:f.feeDirect??0,feeRate:f.feeRate??0,feeMinimum:f.feeMinimum??0}}const W=P(()=>{const f=[];for(const R of y.value){const J=O(R);if(!J)return null;f.push(J)}return f}),w=P(()=>W.value?It(W.value):null),F=P(()=>x.value==="direct"?_.value===null||_.value<0?null:{mode:"direct",directFee:_.value,rate:M.value??0,minimum:m.value??0}:M.value===null||M.value<0||m.value===null||m.value<0?null:{mode:"rate",directFee:_.value??0,rate:M.value,minimum:m.value}),T=P(()=>!W.value||g.value===null||g.value<=0||!F.value?null:fl(W.value,g.value,F.value));function U(f){return f==null||Number.isNaN(f)?"--":`¥${f.toFixed(4)}`}function G(f){return f==null||Number.isNaN(f)?"--":`${f.toFixed(4)}%`}function j(f){return f==null||Number.isNaN(f)?"--":f<=0?l.value==="zh"?`已高于回本价 ${G(Math.abs(f))}`:`Already above break-even by ${G(Math.abs(f))}`:l.value==="zh"?`距当前价还需 ${G(f)}`:`Need +${G(f)} from current price`}function H(f,R){y.value=y.value.map(J=>J.id===f?{...J,...R}:J)}function ee(){y.value=[...y.value,b()]}function ve(f){y.value.length!==1&&(y.value=y.value.filter(R=>R.id!==f))}function re(){y.value=[b()],g.value=null,x.value="direct",_.value=0,M.value=.01,m.value=0}function ne(f){const R=O(f);return R?U(Bt(R)):"--"}return(f,R)=>{const J=Bn,X=An,Q=jn,le=sl,oe=In,u=Un;return ge(),je("div",vl,[V(oe,{title:d(n).ordersTitle,"mb-4":""},{default:Z(()=>[S("div",hl,[V(J,{onClick:ee},{default:Z(()=>[He(A(d(n).addOrder),1)]),_:1}),V(J,{onClick:re},{default:Z(()=>[He(A(d(n).resetAll),1)]),_:1})]),S("p",bl,A(d(n).ordersDescription),1),S("div",pl,[(ge(!0),je(qe,null,zn(d(y),(i,E)=>(ge(),Ke(oe,{key:i.id,title:`${d(n).addOrder} ${E+1}`},{default:Z(()=>[S("div",ml,[V(Q,{label:d(n).buyPriceLabel,"label-placement":"top"},{default:Z(()=>[V(X,{value:i.price,"data-test-id":`buy-price-${E}`,min:0,precision:4,placeholder:d(n).buyPriceLabel,"w-full":"","onUpdate:value":q=>H(i.id,{price:q})},null,8,["value","data-test-id","placeholder","onUpdate:value"])]),_:2},1032,["label"]),V(Q,{label:d(n).quantityLabel,"label-placement":"top"},{default:Z(()=>[V(X,{value:i.quantity,"data-test-id":`buy-quantity-${E}`,min:0,precision:4,placeholder:d(n).quantityLabel,"w-full":"","onUpdate:value":q=>H(i.id,{quantity:q})},null,8,["value","data-test-id","placeholder","onUpdate:value"])]),_:2},1032,["label"]),V(Q,{label:d(n).feeModeLabel,"label-placement":"top"},{default:Z(()=>[V(le,{value:i.feeMode,options:d(o),"onUpdate:value":q=>H(i.id,{feeMode:q})},null,8,["value","options","onUpdate:value"])]),_:2},1032,["label"]),i.feeMode==="direct"?(ge(),Ke(Q,{key:0,label:d(n).buyFeeLabel,"label-placement":"top"},{default:Z(()=>[V(X,{value:i.feeDirect,"data-test-id":`buy-fee-direct-${E}`,min:0,precision:4,placeholder:d(n).buyFeeLabel,"w-full":"","onUpdate:value":q=>H(i.id,{feeDirect:q})},null,8,["value","data-test-id","placeholder","onUpdate:value"])]),_:2},1032,["label"])):(ge(),je(qe,{key:1},[V(Q,{label:d(n).buyFeeRateLabel,"label-placement":"top"},{default:Z(()=>[V(X,{value:i.feeRate,min:0,precision:4,placeholder:d(n).buyFeeRateLabel,"w-full":"","onUpdate:value":q=>H(i.id,{feeRate:q})},null,8,["value","placeholder","onUpdate:value"])]),_:2},1032,["label"]),V(Q,{label:d(n).buyFeeMinimumLabel,"label-placement":"top"},{default:Z(()=>[V(X,{value:i.feeMinimum,min:0,precision:4,placeholder:d(n).buyFeeMinimumLabel,"w-full":"","onUpdate:value":q=>H(i.id,{feeMinimum:q})},null,8,["value","placeholder","onUpdate:value"])]),_:2},1032,["label"])],64))]),S("div",gl,[S("span",null,A(d(n).buyFeePreview)+": "+A(ne(i)),1),d(y).length>1?(ge(),Ke(J,{key:0,variant:"text",onClick:q=>ve(i.id)},{default:Z(()=>[He(A(d(n).remove),1)]),_:2},1032,["onClick"])):$n("",!0)])]),_:2},1032,["title"]))),128))])]),_:1},8,["title"]),V(oe,{title:d(n).currentPriceTitle,"mb-4":""},{default:Z(()=>[S("p",yl,A(d(n).currentPriceDescription),1),V(Q,{label:d(n).currentPriceLabel,"label-placement":"top","mb-0":""},{default:Z(()=>[V(X,{value:d(g),"onUpdate:value":R[0]||(R[0]=i=>Ne(g)?g.value=i:null),"data-test-id":"current-price",min:0,precision:4,placeholder:d(n).currentPriceLabel,"w-full":""},null,8,["value","placeholder"])]),_:1},8,["label"])]),_:1},8,["title"]),V(oe,{title:d(n).sellFeeTitle,"mb-4":""},{default:Z(()=>[S("p",wl,A(d(n).sellFeeDescription),1),S("div",xl,[V(Q,{label:d(n).sellFeeModeLabel,"label-placement":"top"},{default:Z(()=>[V(le,{value:d(x),"onUpdate:value":R[1]||(R[1]=i=>Ne(x)?x.value=i:null),options:d(a)},null,8,["value","options"])]),_:1},8,["label"]),d(x)==="direct"?(ge(),Ke(Q,{key:0,label:d(n).sellFeeDirectLabel,"label-placement":"top"},{default:Z(()=>[V(X,{value:d(_),"onUpdate:value":R[2]||(R[2]=i=>Ne(_)?_.value=i:null),"data-test-id":"sell-fee-direct",min:0,precision:4,placeholder:d(n).sellFeeDirectLabel,"w-full":""},null,8,["value","placeholder"])]),_:1},8,["label"])):(ge(),je(qe,{key:1},[V(Q,{label:d(n).sellFeeRateLabel,"label-placement":"top"},{default:Z(()=>[V(X,{value:d(M),"onUpdate:value":R[3]||(R[3]=i=>Ne(M)?M.value=i:null),min:0,precision:4,placeholder:d(n).sellFeeRateLabel,"w-full":""},null,8,["value","placeholder"])]),_:1},8,["label"]),V(Q,{label:d(n).sellFeeMinimumLabel,"label-placement":"top"},{default:Z(()=>[V(X,{value:d(m),"onUpdate:value":R[4]||(R[4]=i=>Ne(m)?m.value=i:null),min:0,precision:4,placeholder:d(n).sellFeeMinimumLabel,"w-full":""},null,8,["value","placeholder"])]),_:1},8,["label"])],64))])]),_:1},8,["title"]),V(oe,{title:d(n).resultsTitle,"mb-4":""},{default:Z(()=>[S("div",Cl,[S("div",Fl,[S("span",null,A(d(n).totalQuantity),1),S("strong",null,A(d(w)?d(w).totalQuantity.toFixed(4):"--"),1)]),S("div",_l,[S("span",null,A(d(n).totalAmount),1),S("strong",null,A(d(w)?U(d(w).totalAmount):"--"),1)]),S("div",Rl,[S("span",null,A(d(n).totalBuyFees),1),S("strong",null,A(d(w)?U(d(w).totalBuyFees):"--"),1)]),S("div",Sl,[S("span",null,A(d(n).totalCost),1),S("strong",null,A(d(w)?U(d(w).totalCost):"--"),1)]),S("div",Ml,[S("span",null,A(d(n).averageCost),1),S("strong",Ol,A(d(w)?U(d(w).averageCost):"--"),1)]),S("div",Pl,[S("span",null,A(d(n).estimatedSellFee),1),S("strong",null,A(d(T)?U(d(T).estimatedSellFee):"--"),1)])]),S("div",Tl,[S("div",kl,[S("span",null,A(d(n).buyOnly),1),S("strong",null,A(d(T)?U(d(T).breakEvenPriceBuyOnly):"--"),1),S("small",null,A(d(n).targetPrice)+": "+A(d(T)?U(d(T).breakEvenPriceBuyOnly):"--"),1),S("small",null,A(d(T)?j(d(T).riseNeededBuyOnly):"--"),1)]),S("div",zl,[S("span",null,A(d(n).withSellFee),1),S("strong",Bl,A(d(T)?U(d(T).breakEvenPriceWithSell):"--"),1),S("small",null,A(d(n).targetPrice)+": "+A(d(T)?U(d(T).breakEvenPriceWithSell):"--"),1),S("small",Il,A(d(T)?j(d(T).riseNeededWithSell):"--"),1)])])]),_:1},8,["title"]),V(u,{type:"info","show-icon":!1},{default:Z(()=>[He(A(d(n).note),1)]),_:1})])}}});const Gl=Ln($l,[["__scopeId","data-v-8df52e1f"]]);export{Gl as default};
