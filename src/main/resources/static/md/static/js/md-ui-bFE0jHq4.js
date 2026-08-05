const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/js/md-mermaid.core-CTDt-tlI.js","static/js/md-preload-helper-DHWoSnHi.js","static/js/md-purify.es-CaHOtzI7.js","static/js/md-src-CgtiL2qV.js","static/js/md-chunk-X3CZISLH-yj18HzkN.js","static/js/md-rolldown-runtime-Dd_uD5pT.js","static/js/md-chunk-Y2CYZVJY-DsF7k-Jl.js","static/js/md-chunk-ICXQ74PX-SET67TIp.js","static/js/md-math-Bi_r_ZWc.js","static/js/md-linear-CNEal4Ob.js","static/js/md-chunk-WYO6CB5R-C4Oiu6Zx.js","static/js/md-dist-B7qRjWhn.js","static/js/md-chunk-VAUOI2AC-CkTdoN9v.js","static/js/md-chunk-HOUHSVGY-Bzp2GrCa.js","static/js/md-chunk-Q4XR5HBZ-Ci8Lxnqm.js","static/js/md-chunk-7BUUIJ7U-CemupjXk.js","static/js/md-chunk-OGEWGWER-BVGaog_P.js","static/js/md-chunk-C7G6YPKG-DO6Qo0Th.js","static/js/md-chunk-ZGVPDNZ5-Bk8th4tL.js","static/js/md-rough.esm-By172zw-.js","static/js/md-chunk-52WLFC77-CONeNAYg.js","static/js/md-line-BtLAOYls.js","static/js/md-path-COt_16Va.js","static/js/md-array-BifhSqXX.js","static/js/md-chunk-FWX5IMBZ-cohVfJKw.js","static/js/md-chunk-ZIRB5QZD-StE4Cid-.js","static/js/md-esm-KKasSQks.js","static/js/md-isArrayLikeObject-DAE2nXMg.js","static/js/md-merge-DB9B7tZ_.js","static/js/md-_baseClone-DZBX4k5b.js","static/js/md-linear-KY9foyBF.js","static/js/md-defaultLocale-BFoDCU3G.js","static/js/md-init-C-OQMol4.js","static/js/md-hierarchy-CqMyrAty.js","static/js/md-arc-TU1ZWJXX.js","static/js/md-pie-7laHeOse.js","static/js/md-postcss-D9wFxyL6.js","static/js/md-__vite-browser-external-BqtCiL5p.js","static/js/md-formatDoc-C_tIUTCU.js","static/js/md-dist-BSMw0rpf.js","static/js/md-codemirror-Kg8hfmyf.js","static/js/md-dist-w4e4dsVd.js","static/js/md-dist-DOc10VJZ.js","static/js/md-dist-ae-bMbnb.js","static/js/md-dist-DYnm4iKg.js","static/js/md-dist-V0aENKq8.js","static/js/md-dist-CGp4lmzP.js","static/js/md-dist-m2qZeQ9f.js","static/js/md-dist-Nrh6q6oF.js","static/js/md-dist-DLzeOBnw.js","static/js/md-browser-DF3hgwXO.js","static/js/md-marketplace-whMWv4oA.js","static/js/md-vendor_vue-CXnV2pRT.js","static/js/md-storage-CZtcDB3K.js","static/js/md-translate-cE5obo1u.js","static/js/md-vue-i18n-D6O06lti.js","static/js/md-v4-DDdyfk2q.js","static/js/md-lib-DzeogY7u.js","static/js/md-oauth-Cz_7j9o8.js","static/js/md-auth-Bvz9Mevx.js","static/js/md-client-C2N5HoD0.js"])))=>i.map(i=>d[i]);
import{i as e,t}from"./md-rolldown-runtime-Dd_uD5pT.js";import{t as n}from"./md-preload-helper-DHWoSnHi.js";import{a as r,c as i,d as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./md-highlight-i2QVtVCd.js";import{t as m}from"./md-purify.es-CaHOtzI7.js";import{F as h,I as g,L as _,R as v,Z as y,dt as b,lt as x,n as S,st as ee,v as C}from"./md-vendor_vue-CXnV2pRT.js";import{n as te}from"./md-browser-DF3hgwXO.js";import{f as w,p as T,u as E}from"./md-storage-CZtcDB3K.js";import{T as ne,n as re,r as D,v as O,y as k}from"./md-translate-cE5obo1u.js";import{n as A}from"./md-lib-DzeogY7u.js";import{B as ie,C as j,D as ae,E as oe,F as M,G as se,J as ce,L as le,O as N,S as P,T as F,U as ue,Y as I,_ as de,a as fe,at as pe,b as me,ct as he,dt as ge,ft as _e,g as L,gt as ve,ht as ye,i as be,it as xe,j as Se,k as R,lt as Ce,mt as we,n as Te,ot as Ee,pt as De,rt as Oe,st as z,t as ke,u as Ae,ut as je,v as Me,w as Ne,x as Pe,y as Fe}from"./md-codemirror-Kg8hfmyf.js";import{E as B,a as Ie}from"./md-vendor_vueuse-CLyZXAvJ.js";function V(e){return t=>e(t)}function Le(e){return t=>e(t)}function Re(e){return function(t){return e.call(this,t)}}function ze(e){return e.type===`code`}function Be(e,t){return Object.assign(e,{type:t})}var Ve=`data-md-diagram-state`,H={loading:`loading`,error:`error`,ready:`ready`},He={mermaidLoading:`Loading Mermaid…`,mermaidError:`Mermaid render failed: {detail}`,plantumlLoading:`Loading PlantUML diagram…`,plantumlError:`Failed to load PlantUML diagram`,infographicLoading:`Loading infographic…`,infographicError:`Infographic render failed: {detail}`};function Ue(e){return`${Ve}="${e}"`}function We(e){return e??He}function Ge(e,t){return e.replace(`{detail}`,t)}function Ke(e){return e.trimStart().startsWith(`<svg`)}function qe(e){if(!(e instanceof HTMLElement)||e.querySelector(`svg, img`))return!1;let t=e.getAttribute(Ve);return t!==H.error&&t!==H.ready}function Je(e){return e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()}function U(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function Ye(e){return e.replace(/&quot;/g,`"`).replace(/&#39;/g,`'`).replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&amp;/g,`&`)}function Xe(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t=(t<<5)-t+r,t&=t}return Math.abs(t).toString(36)}var Ze=class{maxSize;map=new Map;constructor(e=50){if(this.maxSize=e,e<1)throw RangeError(`LRUMap maxSize must be >= 1, got ${e}`)}get(e){if(!this.map.has(e))return;let t=this.map.get(e);return this.map.delete(e),this.map.set(e,t),t}set(e,t){if(this.map.has(e))this.map.delete(e);else if(this.map.size>=this.maxSize){let e=this.map.keys().next().value;e!==void 0&&this.map.delete(e)}this.map.set(e,t)}get size(){return this.map.size}clear(){this.map.clear()}};function Qe(e=50){return new Ze(e)}var $e={background:`#ffffff`,text:`#262626`,border:`#d9d9d9`,line:`#333333`,surface:`#f5f5f5`},W={background:`#1f1f1f`,text:`#ffffff`,border:`#404040`,line:`#cccccc`,surface:`#2d2d2d`};function et(e){return e===`dark`?`dark`:`light`}function tt(e){return et(e)}var nt=[`skinparam backgroundColor ${$e.background}`,`skinparam defaultFontColor ${$e.text}`,`skinparam shadowing false`].join(`
`),rt=[`skinparam backgroundColor ${W.background}`,`skinparam defaultFontColor ${W.text}`,`skinparam shadowing false`,`skinparam classBackgroundColor ${W.surface}`,`skinparam classBorderColor ${W.border}`,`skinparam activityBackgroundColor ${W.surface}`,`skinparam activityBorderColor ${W.border}`,`skinparam noteBackgroundColor ${W.surface}`,`skinparam noteBorderColor ${W.border}`,`skinparam noteFontColor ${W.text}`,`skinparam sequenceParticipantBackgroundColor ${W.surface}`,`skinparam sequenceLifeLineBorderColor ${W.border}`,`skinparam ArrowColor ${W.line}`].join(`
`);function it(e,t){let n=et(t)===`dark`?rt:nt,r=e.trim(),i=!r.includes(`@start`)||!r.includes(`@end`)?`@startuml\n${r}\n@enduml`:r;return i.includes(n)?i:i.replace(/@startuml\r?\n/i,`@startuml\n${n}\n`)}function at(e){let t=et(e)===`dark`;return{startOnLoad:!1,theme:t?`dark`:`default`,themeVariables:t?{darkMode:!0}:{darkMode:!1}}}var ot=null,st;function ct(){return typeof st==`function`?st():st}function lt(){return We(ct()?.diagramMessages)}function ut(){return ot||=n(()=>import(`./md-mermaid.core-CTDt-tlI.js`).then(e=>(e.default.initialize(at()),e.default)),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])),ot}function dt(e,t){return Xe(`${e}-${tt(t)}`)}var ft=Qe(50);async function pt(e,t){let n=dt(e,t),r=ft.get(n);if(r)return r;let i=await ut();i.initialize(at(t));let a=await i.render(`mermaid-svg-${n}`,e);return ft.set(n,a.svg),a.svg}function mt(e,t,n,r){typeof window>`u`||pt(t,r).then(t=>{ft.set(n,t);let r=document.getElementById(e);r&&(r.innerHTML=t,r.setAttribute(Ve,H.ready))}).catch(t=>{console.error(`Failed to render Mermaid:`,t);let n=document.getElementById(e);if(n){let e=t instanceof Error?t.message:String(t);n.innerHTML=`<div style="color: red; padding: 10px; border: 1px solid red;">${Ge(lt().mermaidError,e)}</div>`,n.setAttribute(Ve,H.error)}})}function ht(e){st=e;let t=`mermaid-diagram`;return{extensions:[{name:`mermaid`,level:`block`,start(e){return e.match(/^```mermaid/m)?.index},tokenizer(e){let t=/^```mermaid\r?\n([\s\S]*?)\r?\n```/.exec(e);if(t)return{type:`mermaid`,raw:t[0],text:t[1].trim()}},renderer:V(e=>{let n=e.text,r=ct()?.themeMode,i=dt(n,r),a=ft.get(i);if(a)return`<!--mermaid-start--><div class="${t}">${a}</div><!--mermaid-end-->`;let o=`mermaid-${i}`;mt(o,n,i,r);let s=lt();return`<!--mermaid-start--><div id="${o}" class="${t}" ${Ue(H.loading)}>${s.mermaidLoading}</div><!--mermaid-end-->`})}],walkTokens(e){ze(e)&&e.lang===`mermaid`&&Be(e,`mermaid`)}}}var gt={bash:a,css:p,javascript:s,json:i,markdown:d,plaintext:l,python:r,shell:o,typescript:u,xml:c},_t=`https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/npm/highlightjs/11.11.1`,vt=new Map;function yt(e){return`${_t}/es/languages/${e}.min.js`}async function bt(e,t){if(t.getLanguage(e))return;if(vt.has(e)){await vt.get(e);return}let r=(async()=>{try{let r=await n(()=>import(yt(e)),[]);t.registerLanguage(e,r.default)}catch(t){throw console.warn(`Failed to load language: ${e}`,t),t}finally{vt.delete(e)}})();vt.set(e,r),await r}function xt(e,t=!1){let n=e;return n=n.replace(/(<span[^>]*>[^<]*<\/span>)(\s+)(<span[^>]*>[^<]*<\/span>)/g,(e,t,n,r)=>t+r.replace(/^(<span[^>]*>)/,`$1${n}`)),n=n.replace(/(\s+)(<span[^>]*>)/g,(e,t,n)=>n.replace(/^(<span[^>]*>)/,`$1${t}`)),n=n.replace(/\t/g,`    `),n=t?n.replace(/\r\n/g,`<br/>`).replace(/\n/g,`<br/>`).replace(/(>[^<]+)|(^[^<]+)/g,e=>e.replace(/\s/g,`&nbsp;`)):n.replace(/(>[^<]+)|(^[^<]+)/g,e=>e.replace(/\s/g,`&nbsp;`)),n}function St(e){let t=[],n=``,r=[],i=0;for(;i<e.length;)if(e[i]===`<`){let t=`<`;for(i++;i<e.length&&e[i]!==`>`;)t+=e[i],i++;i<e.length&&(t+=`>`,i++),n+=t,t.startsWith(`</span`)?r.pop():t.startsWith(`<span`)&&r.push(t)}else if(e[i]===`
`){let e=`</span>`.repeat(r.length);t.push(n+e),n=r.join(``),i++}else n+=e[i],i++;return t.push(n),t}function Ct(e,t,n,r){let i=``;if(r){let r=e.replace(/\r\n/g,`
`),a=n.highlight(r,{language:t}).value,o=St(a).map(e=>{let t=xt(e,!1);return t===``?`&nbsp;`:t});i=`
      <section style="display:flex;align-items:flex-start;overflow-x:hidden;overflow-y:auto;width:100%;max-width:100%;padding:0;box-sizing:border-box">
        <section class="line-numbers" style="text-align:right;padding:8px 0;border-right:1px solid rgba(0,0,0,0.04);user-select:none;background:var(--code-bg,transparent);">${o.map((e,t)=>`<section style="padding:0 10px 0 0;line-height:1.75">${t+1}</section>`).join(``)}</section>
        <section class="code-scroll" style="flex:1 1 auto;overflow-x:auto;overflow-y:visible;padding:8px;min-width:0;box-sizing:border-box">${`<div style="white-space:pre;min-width:max-content;line-height:1.75">${o.join(`<br/>`)}</div>`}</section>
      </section>
    `}else{let r=n.highlight(e,{language:t}).value;i=`<span class="code-block__inner" style="display:block">${xt(r,!0)}</span>`}return i}function wt(e,t,n){let r=e.getAttribute(`data-raw-code`),i=e.getAttribute(`data-show-line-number`)===`true`;r&&(e.innerHTML=Ct(r.replace(/&quot;/g,`"`),t,n,i),e.removeAttribute(`data-language-pending`),e.removeAttribute(`data-raw-code`),e.removeAttribute(`data-show-line-number`))}function Tt(e,t=document){t.querySelectorAll(`code[data-language-pending]`).forEach(t=>{let n=t.getAttribute(`data-language-pending`);n&&(e.getLanguage(n)?wt(t,n,e):bt(n,e).then(()=>{wt(t,n,e)}).catch(()=>{t.removeAttribute(`data-language-pending`),t.removeAttribute(`data-raw-code`),t.removeAttribute(`data-show-line-number`)}))})}var Et=m;m.sanitize.bind(m),m.isSupported,m.addHook.bind(m),m.removeHook.bind(m),m.removeHooks.bind(m),m.removeAllHooks.bind(m),m.setConfig.bind(m),m.clearConfig.bind(m),m.isValidAttribute.bind(m),m.version,m.removed;var Dt=/^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n$]))\1(?=[\s?!.,:？！。，：]|$)/,Ot=/^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n$]))\1/,kt=/^\s{0,3}(\${1,2})[ \t]*\n([\s\S]+?)\n\s{0,3}\1[ \t]*(?:\n|$)/,At=/^\s{0,3}(\$\$)([^\n]+)\1[ \t]*(?:\n|$)/;function jt(e){return e.match(kt)??e.match(At)}function Mt(e){for(let t=0;t<=e.length;t++)if(!(t>0&&e[t-1]!==`
`)&&jt(e.slice(t)))return!0;return!1}var Nt=/^\\\(([^\\]*(?:\\.[^\\]*)*?)\\\)/,Pt=/^\\\[([^\\]*(?:\\.[^\\]*)*?)\\\]/,Ft=/\\\[[^\\]*(?:\\.[^\\]*)*?\\\]/,It=/\\\([^\\]*(?:\\.[^\\]*)*?\\\)/;function Lt(e,t){if(t<=0)return!1;let n=e.charAt(t-1);return/[\d,.]/.test(n)?!0:n===` `&&t>=2&&/\d/.test(e.charAt(t-2))}function Rt(e,t,n){return n?!Lt(e,t):t===0||e.charAt(t-1)===` `}function zt(e,t,n){let r=e,i=0;for(;r;){let e=r.indexOf(`$`);if(e===-1)return;if(Rt(r,e,t)&&r.substring(e).match(n))return i+e;let a=r.substring(e+1).replace(/^\$+/,``);i+=r.length-a.length,r=a}}function Bt(e,t=!0){return Mt(e)||Ft.test(e)||It.test(e)?!0:zt(e,t,t?Ot:Dt)!==void 0}function Vt(e){return e.replace(/<br\s*\/?>\s*(?=<span class="katex-inline)/gi,``)}var Ht=/<!--infographic-start-->[\s\S]*?<!--infographic-end-->/g,Ut=/<!--mermaid-start-->[\s\S]*?<!--mermaid-end-->/g,Wt=/<span data-md-protected="(\d+)"><\/span>/g;function Gt(e){let t=[];return e=e.replace(Ht,e=>(t.push(e),`<span data-md-protected="${t.length-1}"></span>`)),e=e.replace(Ut,e=>(t.push(e),`<span data-md-protected="${t.length-1}"></span>`)),e=Et.sanitize(e,{ADD_TAGS:[`mp-common-profile`]}),e=e.replace(Wt,(e,n)=>t[Number(n)]),e}function Kt(e,t){let{markdownContent:n,readingTime:r}=t.parseFrontMatterAndContent(e),i=t.renderMarkdownToHtml(n);return i=Vt(i),i=Gt(i),{html:i,readingTime:r}}function qt(e,t,n){let r=e;return r=n.buildReadingTime(t)+r,r+=n.buildFootnotes(),r+=n.buildAddition(),r+=`
    <style>
      .hljs.code__pre > .mac-sign {
        display: ${n.getOpts().isMacCodeBlock?`flex`:`none`};
      }
    </style>
  `,r+=`
    <style>
      h2 strong {
        color: inherit !important;
      }
    </style>
  `,n.createContainer(r)}var Jt=`https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/npm/mathjax@3/es5/tex-svg.js`,Yt=`./static/libs/mathjax/tex-svg.js`,Xt=`MathJax-script`;function Zt(){return typeof window<`u`&&window.__MD_UTOOLS__?Yt:Jt}var Qt=`md:mathjax-ready`,$t=null,en=!1;function tn(){return typeof window<`u`&&typeof window.MathJax?.tex2svg==`function`}function nn(){return window.MathJax?.startup?.promise??Promise.resolve()}function rn(){document.getElementById(Xt)?.remove()}function an(){rn();let e=document.createElement(`script`);return e.id=Xt,e.src=Zt(),document.head.appendChild(e),e}function on(){return typeof window>`u`||tn()?Promise.resolve():$t||($t=new Promise((e,t)=>{Object.assign(window,{MathJax:{tex:{tags:`ams`},svg:{fontCache:`none`},startup:{typeset:!1},options:{ignoreHtmlClass:`mathjax-ignore`}}});let n=an();n.onload=()=>{nn().then(e).catch(e=>{rn(),$t=null,t(e)})},n.onerror=()=>{rn(),$t=null,t(Error(`Failed to load MathJax`))}}),$t)}function sn(){let e=tn();return on().then(()=>{typeof window>`u`||e||en||(en=!0,window.dispatchEvent(new CustomEvent(Qt)))})}function cn(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var ln=cn();function un(e){ln=e}var dn={exec:()=>null};function fn(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function G(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(K.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var pn=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),K={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:fn(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:fn(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:fn(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:fn(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:fn(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:fn(e=>RegExp(`^ {0,${e}}>`))},mn=/^(?:[ \t]*(?:\n|$))+/,hn=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,gn=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,_n=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,vn=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,yn=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,bn=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,xn=G(bn).replace(/bull/g,yn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),Sn=G(bn).replace(/bull/g,yn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Cn=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,wn=/^[^\n]+/,Tn=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,En=G(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Tn).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Dn=G(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,yn).getRegex(),On=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,kn=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,An=G(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,kn).replace(`tag`,On).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),jn=e=>G(Cn).replace(`hr`,_n).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace(`list`,e).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,On).getRegex(),Mn=jn(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),Nn=jn(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),Pn={blockquote:G(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,Nn).getRegex(),code:hn,def:En,fences:gn,heading:vn,hr:_n,html:An,lheading:xn,list:Dn,newline:mn,paragraph:Mn,table:dn,text:wn},Fn=G(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,_n).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,On).getRegex(),In={...Pn,lheading:Sn,table:Fn,paragraph:G(Cn).replace(`hr`,_n).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Fn).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,On).getRegex()},Ln={...Pn,html:G(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,kn).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:dn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:G(Cn).replace(`hr`,_n).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,xn).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},Rn=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,zn=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Bn=/^( {2,}|\\)\n(?!\s*$)/,Vn=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Hn=/[\p{P}\p{S}]/u,Un=/[\s\p{P}\p{S}]/u,Wn=/[^\s\p{P}\p{S}]/u,Gn=G(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,Un).getRegex(),Kn=/(?!~)[\p{P}\p{S}]/u,qn=/(?!~)[\s\p{P}\p{S}]/u,Jn=/(?:[^\s\p{P}\p{S}]|~)/u,Yn=G(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,pn?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Xn=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Zn=G(Xn,`u`).replace(/punct/g,Hn).getRegex(),Qn=G(Xn,`u`).replace(/punct/g,Kn).getRegex(),$n=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,er=G($n,`gu`).replace(/notPunctSpace/g,Wn).replace(/punctSpace/g,Un).replace(/punct/g,Hn).getRegex(),tr=G($n,`gu`).replace(/notPunctSpace/g,Jn).replace(/punctSpace/g,qn).replace(/punct/g,Kn).getRegex(),nr=G(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,Wn).replace(/punctSpace/g,Un).replace(/punct/g,Hn).getRegex(),rr=G(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,Hn).getRegex(),ir=G(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,Wn).replace(/punctSpace/g,Un).replace(/punct/g,Hn).getRegex(),ar=G(/\\(punct)/,`gu`).replace(/punct/g,Hn).getRegex(),or=G(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),sr=G(kn).replace(`(?:-->|$)`,`-->`).getRegex(),cr=G(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,sr).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),lr=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,ur=G(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,lr).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),dr=G(/^!?\[(label)\]\[(ref)\]/).replace(`label`,lr).replace(`ref`,Tn).getRegex(),fr=G(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Tn).getRegex(),pr=G(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,dr).replace(`nolink`,fr).getRegex(),mr=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,hr={_backpedal:dn,anyPunctuation:ar,autolink:or,blockSkip:Yn,br:Bn,code:zn,del:dn,delLDelim:dn,delRDelim:dn,emStrongLDelim:Zn,emStrongRDelimAst:er,emStrongRDelimUnd:nr,escape:Rn,link:ur,nolink:fr,punctuation:Gn,reflink:dr,reflinkSearch:pr,tag:cr,text:Vn,url:dn},gr={...hr,link:G(/^!?\[(label)\]\((.*?)\)/).replace(`label`,lr).getRegex(),reflink:G(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,lr).getRegex()},_r={...hr,emStrongRDelimAst:tr,emStrongLDelim:Qn,delLDelim:rr,delRDelim:ir,url:G(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,mr).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:G(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,mr).getRegex()},vr={..._r,br:G(Bn).replace(`{2,}`,`*`).getRegex(),text:G(_r.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},yr={normal:Pn,gfm:In,pedantic:Ln},br={normal:hr,gfm:_r,breaks:vr,pedantic:gr},xr={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Sr=e=>xr[e];function q(e,t){if(t){if(K.escapeTest.test(e))return e.replace(K.escapeReplace,Sr)}else if(K.escapeTestNoEncode.test(e))return e.replace(K.escapeReplaceNoEncode,Sr);return e}function Cr(e){try{e=encodeURI(e).replace(K.percentDecode,`%`)}catch{return null}return e}function wr(e,t){let n=e.replace(K.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(K.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(K.slashPipe,`|`);return n}function Tr(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function Er(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&K.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function Dr(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Or(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function kr(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function Ar(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var jr=class{options;rules;lexer;constructor(e){this.options=e||ln}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:Er(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Ar(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=Tr(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:Tr(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:Tr(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=Tr(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=Or(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]);let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1;if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=Er(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:Tr(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=wr(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:Tr(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(wr(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:Tr(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=Tr(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=Dr(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),kr(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return kr(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},J=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||ln,this.options.tokenizer=this.options.tokenizer||new jr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:K,block:yr.normal,inline:br.normal};this.options.pedantic?(t.block=yr.pedantic,t.inline=br.pedantic):this.options.gfm&&(t.block=yr.gfm,t.inline=this.options.breaks?br.breaks:br.gfm),this.tokenizer.rules=t}static get rules(){return{block:yr,inline:br}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(K.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(K.tabCharGlobal,`    `).replace(K.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e;if(this.tokens.links){let e=Object.keys(this.tokens.links);e.length>0&&(n=n.replace(this.tokenizer.rules.inline.reflinkSearch,t=>e.includes(t.slice(t.lastIndexOf(`[`)+1,-1))?`[`+`a`.repeat(t.length-2)+`]`:t))}n=n.replace(this.tokenizer.rules.inline.anyPunctuation,`++`),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},Mr=class{options;parser;constructor(e){this.options=e||ln}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(K.notSpaceStart)?.[0],i=e.replace(K.endingNewline,``)+`
`;return r?`<pre><code class="language-`+q(r)+`">`+(n?i:q(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:q(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${q(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=Cr(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+q(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Cr(e);if(i===null)return q(n);e=i;let a=`<img src="${e}" alt="${q(n)}"`;return t&&(a+=` title="${q(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:q(e.text)}},Nr=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},Y=class e{options;renderer;textRenderer;constructor(e){this.options=e||ln,this.options.renderer=this.options.renderer||new Mr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Nr}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Pr=class{options;block;constructor(e){this.options=e||ln}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?J.lex:J.lexInline}provideParser(e=this.block){return e?Y.parse:Y.parseInline}},Fr=class{defaults=cn();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Y;Renderer=Mr;TextRenderer=Nr;Lexer=J;Tokenizer=jr;Hooks=Pr;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Mr(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new jr(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Pr;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=Pr.passThroughHooks.has(n)?e=>{if(this.defaults.async&&Pr.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return J.lex(e,t??this.defaults)}parser(e,t){return Y.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?J.lex:J.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?Y.parse:Y.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?J.lex:J.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?Y.parse:Y.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+q(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}},Ir=new Fr;function X(e,t){return Ir.parse(e,t)}X.options=X.setOptions=function(e){return Ir.setOptions(e),X.defaults=Ir.defaults,un(X.defaults),X},X.getDefaults=cn,X.defaults=ln,X.use=function(...e){return Ir.use(...e),X.defaults=Ir.defaults,un(X.defaults),X},X.walkTokens=function(e,t){return Ir.walkTokens(e,t)},X.parseInline=Ir.parseInline,X.Parser=Y,X.parser=Y.parse,X.Renderer=Mr,X.TextRenderer=Nr,X.Lexer=J,X.lexer=J.lex,X.Tokenizer=jr,X.Hooks=Pr,X.parse=X,X.options,X.setOptions,X.use,X.walkTokens,X.parseInline,Y.parse,J.lex;async function Lr(e){let t=new Fr;return t.use(Rr({withoutStyle:!0})),t.use(Pi({nonStandard:!0},!1)),await t.parse(e)}function Rr(e={}){let{className:t=`markdown-alert`,variants:n=[],withoutStyle:r=!1}=e,i=Hr(n);function a(e){let t=e.toLowerCase();return i.find(e=>e.type.toLowerCase()===t)??null}function o(e,n,r,i=!1){let a=n?n.type:`custom`,o=n?n.title??Je(n.type):e,s=r&&r.trim()?r.trim():o;return{className:t,variant:a,icon:n?.icon??``,title:U(s),titleClassName:`${t}-title`,fromContainer:i}}let s=function(e){let{meta:t,tokens:n=[]}=e,i=this.parser.parse(n),a=`<blockquote class="${t.className} ${t.className}-${t.variant}">\n`;return a+=`<p class="${t.titleClassName} alert-title-${t.variant}">`,r||(a+=t.icon.replace(`<svg`,`<svg class="alert-icon-${t.variant}"`)),a+=t.title,a+=`</p>
`,a+=i,a+=`</blockquote>
`,a};return{walkTokens(e){if(e.type!==`blockquote`)return;let t=/^\[!([^\]\n]+)\][ \t]*([^\n]*)/.exec(e.text);if(!t)return;let n=t[1].trim(),r=t[2],i=a(n);Object.assign(e,{type:`alert`,meta:o(n,i,r)});let s=e.tokens?.[0]?.tokens;if(s?.length){let t=!1;for(let e=0;e<s.length;e++){let n=s[e];if(n.type===`br`){s.splice(0,e+1),t=!0;break}if(n.type===`text`&&n.raw.includes(`
`)){let r=n,i=r.raw.slice(r.raw.indexOf(`
`)+1),a=r.text.indexOf(`
`),o=a>=0?r.text.slice(a+1):i;s.splice(0,e),i===``?s.shift():Object.assign(s[0],{raw:i,text:o}),t=!0;break}}(!t||s.length===0)&&e.tokens?.shift()}},extensions:[{name:`alert`,level:`block`,renderer:Re(s)},{name:`alertContainer`,level:`block`,start(e){return e.match(/^:::/)?.index},tokenizer(e,t){let n=/^:::[ \t]*(\S+)[ \t]*([^\n]*)\n([\s\S]*?)\n:::/.exec(e);if(n){let[e,t,r,i]=n,s=a(t);return{type:`alert`,raw:e,text:i.trim(),tokens:this.lexer.blockTokens(i.trim()),meta:o(t,s,r,!0)}}},renderer:Re(s)}]}}var zr=`<svg class="octicon octicon-light-bulb" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg>`,Br=`<svg class="octicon octicon-book" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path></svg>`,Vr=[{type:`note`,icon:`<svg class="octicon octicon-info" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>`},{type:`info`,icon:`<svg class="octicon octicon-info" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>`},{type:`tip`,icon:`<svg class="octicon octicon-light-bulb" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg>`},{type:`important`,icon:`<svg class="octicon octicon-report" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>`},{type:`warning`,icon:`<svg class="octicon octicon-alert" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>`},{type:`caution`,icon:`<svg class="octicon octicon-stop" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>`},{type:`abstract`,title:`Abstract`,icon:`<svg class="octicon octicon-clipboard" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M5.75 1a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75Zm4.5-1.5a2.25 2.25 0 0 1 2.122 1.5H13a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h.628A2.25 2.25 0 0 1 5.75-.5ZM3.5 3v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5Z"></path></svg>`},{type:`summary`,title:`Summary`,icon:`<svg class="octicon octicon-clipboard" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M5.75 1a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75Zm4.5-1.5a2.25 2.25 0 0 1 2.122 1.5H13a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h.628A2.25 2.25 0 0 1 5.75-.5ZM3.5 3v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5Z"></path></svg>`},{type:`tldr`,title:`TL;DR`,icon:`<svg class="octicon octicon-clipboard" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M5.75 1a.75.75 0 0 0-.75.75v.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.5a.75.75 0 0 0-.75-.75Zm4.5-1.5a2.25 2.25 0 0 1 2.122 1.5H13a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h.628A2.25 2.25 0 0 1 5.75-.5ZM3.5 3v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5Z"></path></svg>`},{type:`todo`,title:`Todo`,icon:`<svg class="octicon octicon-checklist" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M2.5 1.75v11.5c0 .138.112.25.25.25h3.17a.75.75 0 0 1 0 1.5H2.75A1.75 1.75 0 0 1 1 13.25V1.75C1 .784 1.784 0 2.75 0h8.5C12.216 0 13 .784 13 1.75v7.736a.75.75 0 0 1-1.5 0V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm10.97 8.72a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1-1.06 1.06l-1.22-1.22v4.94a.75.75 0 0 1-1.5 0v-4.94l-1.22 1.22a.75.75 0 0 1-1.06-1.06Z"></path></svg>`},{type:`success`,title:`Success`,icon:`<svg class="octicon octicon-check-circle" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm3.78-9.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018L6.75 9.19 5.28 7.72a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l2 2a.75.75 0 0 0 1.06 0Z"></path></svg>`},{type:`done`,title:`Done`,icon:`<svg class="octicon octicon-check-circle" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm3.78-9.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018L6.75 9.19 5.28 7.72a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l2 2a.75.75 0 0 0 1.06 0Z"></path></svg>`},{type:`question`,title:`Question`,icon:`<svg class="octicon octicon-question" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.92 6.085h.001a.749.749 0 1 1-1.342-.67c.169-.339.436-.701.849-.977C6.845 4.16 7.369 4 8 4a2.756 2.756 0 0 1 1.637.525c.503.377.863.965.863 1.725 0 .448-.115.83-.329 1.15-.205.307-.47.513-.692.662-.109.072-.22.138-.313.195l-.006.004a6.24 6.24 0 0 0-.26.16.952.952 0 0 0-.276.245.75.75 0 0 1-1.248-.832c.184-.264.42-.489.692-.661.103-.067.207-.132.313-.195l.007-.004c.1-.061.182-.11.258-.161a.969.969 0 0 0 .277-.245C8.96 6.514 9 6.427 9 6.25a.612.612 0 0 0-.262-.525A1.27 1.27 0 0 0 8 5.5c-.369 0-.595.09-.74.187a1.01 1.01 0 0 0-.34.398ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>`},{type:`help`,title:`Help`,icon:`<svg class="octicon octicon-question" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.92 6.085h.001a.749.749 0 1 1-1.342-.67c.169-.339.436-.701.849-.977C6.845 4.16 7.369 4 8 4a2.756 2.756 0 0 1 1.637.525c.503.377.863.965.863 1.725 0 .448-.115.83-.329 1.15-.205.307-.47.513-.692.662-.109.072-.22.138-.313.195l-.006.004a6.24 6.24 0 0 0-.26.16.952.952 0 0 0-.276.245.75.75 0 0 1-1.248-.832c.184-.264.42-.489.692-.661.103-.067.207-.132.313-.195l.007-.004c.1-.061.182-.11.258-.161a.969.969 0 0 0 .277-.245C8.96 6.514 9 6.427 9 6.25a.612.612 0 0 0-.262-.525A1.27 1.27 0 0 0 8 5.5c-.369 0-.595.09-.74.187a1.01 1.01 0 0 0-.34.398ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>`},{type:`faq`,title:`FAQ`,icon:`<svg class="octicon octicon-question" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.92 6.085h.001a.749.749 0 1 1-1.342-.67c.169-.339.436-.701.849-.977C6.845 4.16 7.369 4 8 4a2.756 2.756 0 0 1 1.637.525c.503.377.863.965.863 1.725 0 .448-.115.83-.329 1.15-.205.307-.47.513-.692.662-.109.072-.22.138-.313.195l-.006.004a6.24 6.24 0 0 0-.26.16.952.952 0 0 0-.276.245.75.75 0 0 1-1.248-.832c.184-.264.42-.489.692-.661.103-.067.207-.132.313-.195l.007-.004c.1-.061.182-.11.258-.161a.969.969 0 0 0 .277-.245C8.96 6.514 9 6.427 9 6.25a.612.612 0 0 0-.262-.525A1.27 1.27 0 0 0 8 5.5c-.369 0-.595.09-.74.187a1.01 1.01 0 0 0-.34.398ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>`},{type:`failure`,title:`Failure`,icon:`<svg class="octicon octicon-x-circle" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path></svg>`},{type:`fail`,title:`Fail`,icon:`<svg class="octicon octicon-x-circle" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path></svg>`},{type:`missing`,title:`Missing`,icon:`<svg class="octicon octicon-x-circle" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path></svg>`},{type:`danger`,title:`Danger`,icon:`<svg class="octicon octicon-zap" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M9.504.43a1.516 1.516 0 0 1 2.437 1.713L10.415 5.5h2.123c1.57 0 2.346 1.909 1.22 3.004l-7.34 7.142a1.249 1.249 0 0 1-.871.354h-.302a1.25 1.25 0 0 1-1.157-1.723L5.633 10.5H3.462c-1.57 0-2.346-1.909-1.22-3.004ZM9.98 1.873a.016.016 0 0 0-.016.006L2.252 9.021a.75.75 0 0 0 .488 1.212h3.838a.75.75 0 0 1 .694 1.034L5.545 15.02a.016.016 0 0 0 .003.017.017.017 0 0 0 .018.004h.302a.016.016 0 0 0 .012-.005l7.34-7.142a.75.75 0 0 0-.488-1.212h-3.838a.75.75 0 0 1-.694-1.034l1.527-3.628a.016.016 0 0 0-.003-.017.017.017 0 0 0-.018-.004h-.302Z"></path></svg>`},{type:`error`,title:`Error`,icon:`<svg class="octicon octicon-zap" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M9.504.43a1.516 1.516 0 0 1 2.437 1.713L10.415 5.5h2.123c1.57 0 2.346 1.909 1.22 3.004l-7.34 7.142a1.249 1.249 0 0 1-.871.354h-.302a1.25 1.25 0 0 1-1.157-1.723L5.633 10.5H3.462c-1.57 0-2.346-1.909-1.22-3.004ZM9.98 1.873a.016.016 0 0 0-.016.006L2.252 9.021a.75.75 0 0 0 .488 1.212h3.838a.75.75 0 0 1 .694 1.034L5.545 15.02a.016.016 0 0 0 .003.017.017.017 0 0 0 .018.004h.302a.016.016 0 0 0 .012-.005l7.34-7.142a.75.75 0 0 0-.488-1.212h-3.838a.75.75 0 0 1-.694-1.034l1.527-3.628a.016.016 0 0 0-.003-.017.017.017 0 0 0-.018-.004h-.302Z"></path></svg>`},{type:`bug`,title:`Bug`,icon:`<svg class="octicon octicon-bug" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4.72.22a.75.75 0 0 1 1.06 0l1 .999a3.488 3.488 0 0 1 2.441 0l.999-1a.748.748 0 0 1 1.265.332.75.75 0 0 1-.205.729l-.775.776c.616.63.995 1.493.995 2.444v.327c0 .1-.009.197-.025.292l.727.726a.75.75 0 1 1-1.06 1.06l-.727-.727a2.17 2.17 0 0 1-.292.026H9.25V7.5a.75.75 0 0 1-1.5 0V6.125H6.875a2.17 2.17 0 0 1-.292-.026l-.727.727a.75.75 0 1 1-1.06-1.06l.727-.726a2.17 2.17 0 0 1-.025-.292V4.5c0-.951.379-1.814.995-2.444l-.775-.776a.75.75 0 0 1 0-1.06Zm6.437 6.003A.608.608 0 0 0 11 6.072v-.026a3.999 3.999 0 0 0-.11-.936 2.488 2.488 0 0 0-5.78 0 3.992 3.992 0 0 0-.11.936v.026c0 .05.008.098.02.147h4.937a.612.612 0 0 0 .2-.02ZM2.25 7.5a.75.75 0 0 0 0 1.5h.5v1.25a4.75 4.75 0 0 0 2.478 4.166l.247.137a.75.75 0 1 0 .722-1.313l-.246-.137A3.25 3.25 0 0 1 4.25 10.25V9h7.5v1.25a3.25 3.25 0 0 1-1.701 2.853l-.246.137a.75.75 0 1 0 .722 1.313l.247-.137A4.75 4.75 0 0 0 13.25 10.25V9h.5a.75.75 0 0 0 0-1.5Z"></path></svg>`},{type:`example`,title:`Example`,icon:`<svg class="octicon octicon-list-unordered" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M5.75 2.5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5Zm0 5h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5ZM2 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM2 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>`},{type:`quote`,title:`Quote`,icon:`<svg class="octicon octicon-quote" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.25c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM4 5.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 5.25Zm0 4a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z"></path></svg>`},{type:`cite`,title:`Cite`,icon:`<svg class="octicon octicon-quote" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.25c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM4 5.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 5.25Zm0 4a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z"></path></svg>`},{type:`theorem`,title:`Theorem`,icon:zr},{type:`lemma`,title:`Lemma`,icon:zr},{type:`corollary`,title:`Corollary`,icon:zr},{type:`proposition`,title:`Proposition`,icon:zr},{type:`definition`,title:`Definition`,icon:Br},{type:`axiom`,title:`Axiom`,icon:Br},{type:`postulate`,title:`Postulate`,icon:Br},{type:`assumption`,title:`Assumption`,icon:Br},{type:`proof`,title:`Proof`,icon:`<svg class="octicon octicon-check-circle" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm3.78-9.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018L6.75 9.19 5.28 7.72a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l2 2a.75.75 0 0 0 1.06 0Z"></path></svg>`},{type:`remark`,title:`Remark`,icon:`<svg class="octicon octicon-comment" style="margin-right: 0.25em;" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0 1 13.25 12H9.06l-2.573 2.573A1.458 1.458 0 0 1 4 13.543V12H2.75A1.75 1.75 0 0 1 1 10.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h4.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>`}];function Hr(e){return e.length?Object.values([...Vr,...e].reduce((e,t)=>(e[t.type]=t,e),{})):Vr}var Ur=[{id:`builtin-mp-profile`,name:`MpProfile`,description:`公众号名片组件，展示微信公众号名片`,builtIn:!0,props:[{name:`mpId`,description:`公众号 ID`,required:!0},{name:`nickname`,description:`公众号名称`,required:!0},{name:`headimg`,description:`公众号头像 URL`},{name:`signature`,description:`公众号简介`},{name:`serviceType`,description:`账号类型（1=公众号，2=服务号）`,default:`1`},{name:`verifyStatus`,description:`认证状态（0=无，1=个人，2=企业）`,default:`0`}],template:`<section class="mp_profile_iframe_wrp custom_select_card_wrp" nodeleaf="">
  <mp-common-profile class="mpprofile js_uneditable custom_select_card mp_profile_iframe" data-pluginname="mpprofile" data-id="{{mpId}}" data-nickname="{{nickname}}" data-headimg="{{headimg}}" data-signature="{{signature}}" data-service_type="{{serviceType}}" data-verify_status="{{verifyStatus}}"></mp-common-profile>
  <br class="ProseMirror-trailingBreak">
</section>`,example:`<MpProfile mpId="MzIxNjA5ODQ0OQ==" nickname="Doocs" headimg="https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/doocs/md/images/mp-logo.png" signature="GitHub 开源组织" serviceType="1" verifyStatus="1" />`},{id:`builtin-qrcode`,name:`QRCodeBlock`,description:`二维码组件，将 URL 渲染为可扫描的二维码图片`,builtIn:!0,props:[{name:`url`,description:`二维码内容（URL）`,required:!0},{name:`text`,description:`二维码下方提示文字`,default:`扫码访问`},{name:`size`,description:`二维码尺寸（px）`,default:`150`}],template:`<section style="text-align: center; margin: 20px auto; padding: 16px 0;">
  <img
    src="https://api.qrserver.com/v1/create-qr-code/?size={{size}}x{{size}}&data={{url}}"
    alt="QR Code"
    style="width: {{size}}px; height: {{size}}px; display: block; margin: 0 auto; border-radius: 4px;"
  />
  <p style="text-align: center; font-size: 14px; color: {{_textTertiary_}}; margin-top: 8px; margin-bottom: 0;">{{text}}</p>
</section>`,example:`<QRCodeBlock url="https://md.doocs.org" text="扫码访问" size="150" />`},{id:`builtin-author`,name:`AuthorBlock`,description:`作者信息组件，展示作者头像、名称和简介`,builtIn:!0,props:[{name:`name`,description:`作者名称`,required:!0},{name:`avatar`,description:`头像图片 URL`},{name:`bio`,description:`作者简介`}],template:`<section style="display: table; width: 100%; padding: 16px 0; margin: 16px 0; box-sizing: border-box;">
  <section style="display: table-cell; vertical-align: middle; width: 64px;">
    <img src="{{avatar}}" alt="{{name}}" style="width: 56px; height: 56px; border-radius: 50%; display: block;" />
  </section>
  <section style="display: table-cell; vertical-align: middle; padding-left: 12px;">
    <p style="margin: 0 0 4px; font-size: 15px; font-weight: bold; color: {{_textPrimary_}};">{{name}}</p>
    <p style="margin: 0; font-size: 13px; color: {{_textTertiary_}}; line-height: 1.5;">{{bio}}</p>
  </section>
</section>`,example:`<AuthorBlock name="yanglbme" avatar="https://avatars.githubusercontent.com/u/21008209?v=4" bio="Creator of Doocs" />`},{id:`builtin-tip`,name:`TipBlock`,description:`提示框组件，高亮展示小贴士或注意事项`,builtIn:!0,props:[{name:`type`,description:`类型：info、success、warning、danger`,default:`info`},{name:`title`,description:`标题（可选）`},{name:`content`,description:`提示内容`,required:!0}],template:`<section style="border-left: 4px solid {{borderColor}}; background: {{bgColor}}; padding: 12px 16px; margin: 16px 0; border-radius: 0 6px 6px 0;">
  {{#if title}}<p style="margin: 0 0 6px; font-size: 14px; font-weight: bold; color: {{textColor}};">{{title}}</p>{{/if}}
  <p style="margin: 0; font-size: 14px; color: {{textColor}}; line-height: 1.6;">{{content}}</p>
</section>`,example:`<TipBlock type="info" title="提示" content="这是一条提示信息" />`},{id:`builtin-table`,name:`TableBlock`,description:`表格组件，用 JSON 数组渲染样式化表格，支持斑马纹`,builtIn:!0,props:[{name:`headers`,description:`列标题 JSON 字符串数组`,required:!0,type:`array`},{name:`rows`,description:`数据行 JSON 二维数组`,required:!0,type:`array`},{name:`striped`,description:`斑马纹行（true/false）`,default:`true`},{name:`caption`,description:`表格标题（可选）`}],template:``,example:`<TableBlock headers='["名称","版本","状态"]' rows='[["Vue","3.x","稳定"],["Vite","8.x","稳定"],["pnpm","10.x","稳定"]]' caption="技术栈清单" />`},{id:`builtin-info-grid`,name:`InfoGrid`,description:`信息网格组件，以多列展示键值对信息`,builtIn:!0,props:[{name:`items`,description:`JSON 数组，每项含 label、value 字段`,required:!0,type:`array`},{name:`cols`,description:`列数（1-3）`,default:`2`}],template:``,example:`<InfoGrid items='[{"label":"作者","value":"yanglbme"},{"label":"版本","value":"v1.0"},{"label":"许可证","value":"MIT"},{"label":"语言","value":"TypeScript"}]' cols="2" />`},{id:`builtin-badge-group`,name:`BadgeGroup`,description:`标签组组件，展示一组彩色标签`,builtIn:!0,props:[{name:`tags`,description:`JSON 字符串数组，标签列表`,required:!0,type:`array`},{name:`color`,description:`标签主色调（hex）`,default:`#07c160`}],template:`<section style="display: flex; flex-wrap: wrap; gap: 8px; margin: 12px 0;">
{{#each tags}}<span style="display: inline-block; padding: 3px 10px; border-radius: 12px; font-size: 13px; font-weight: 500; background: {{color}}1a; color: {{color}}; border: 1px solid {{color}}40;">{{item}}</span>{{/each}}
</section>`,example:`<BadgeGroup tags='["Vue 3","TypeScript","Vite","Tailwind CSS"]' color="#07c160" />`}];function Wr(e){let t={};for(let n of e.matchAll(/(\w[\w-]*)=(?:"([^"]*)"|'([^']*)')/g))t[n[1]]=Ye(n[2]===void 0?n[3]??``:n[2]);return t}function Gr(e){return{_bgPrimary_:`var(--md-comp-bg, #fff)`,_bgSecondary_:`var(--md-comp-bg-secondary, #f5f5f5)`,_bgStripe_:`var(--md-comp-bg-stripe, #fafafa)`,_textPrimary_:`var(--md-comp-text-primary, #333)`,_textSecondary_:`var(--md-comp-text-secondary, #666)`,_textTertiary_:`var(--md-comp-text-tertiary, #999)`,_borderDefault_:`var(--md-comp-border-default, #e0e0e0)`,_borderLight_:`var(--md-comp-border-light, #eee)`,...e}}var Z={bg:`var(--md-comp-bg, #fff)`,bgSec:`var(--md-comp-bg-secondary, #f5f5f5)`,bgStripe:`var(--md-comp-bg-stripe, #fafafa)`,txtP:`var(--md-comp-text-primary, #333)`,txtS:`var(--md-comp-text-secondary, #666)`,txtT:`var(--md-comp-text-tertiary, #999)`,border:`var(--md-comp-border-default, #e0e0e0)`,borderL:`var(--md-comp-border-light, #eee)`};function Kr(e){let t=[],n=[];try{t=JSON.parse(e.headers||`[]`)}catch{t=[]}try{let t=JSON.parse(e.rows||`[]`);n=Array.isArray(t)?t:[]}catch{n=[]}let r=e.striped!==`false`,i=e.caption||``,a=`padding: 8px 12px; text-align: left; font-weight: 600; font-size: 13px; color: ${Z.txtS}; background: ${Z.bgSec}; border-bottom: 2px solid ${Z.border};`,o=`padding: 8px 12px; font-size: 13px; color: ${Z.txtP}; border-bottom: 1px solid ${Z.borderL};`,s=`<section style="overflow-x: auto; margin: 16px 0;">
`;if(s+=`  <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
`,i&&(s+=`    <caption style="font-size: 13px; color: ${Z.txtS}; margin-bottom: 8px; text-align: left; caption-side: top;">${U(i)}</caption>\n`),t.length>0){s+=`    <thead>
      <tr>
`;for(let e of t)s+=`        <th style="${a}">${U(String(e))}</th>\n`;s+=`      </tr>
    </thead>
`}s+=`    <tbody>
`;for(let e=0;e<n.length;e++){let t=Array.isArray(n[e])?n[e]:[],i=r&&e%2==1?` style="background: ${Z.bgStripe};"`:``;s+=`      <tr${i}>\n`;for(let e of t)s+=`        <td style="${o}">${U(String(e))}</td>\n`;s+=`      </tr>
`}return s+=`    </tbody>
  </table>
</section>`,s}function qr(e){let t=[];try{t=JSON.parse(e.items||`[]`)}catch{t=[]}let n=Math.min(Math.max(Number(e.cols)||2,1),3),r=`${Math.floor(100/n)}%`,i=`<section style="margin: 16px 0; border: 1px solid ${Z.borderL}; border-radius: 8px; overflow: hidden; background: ${Z.bg};">\n`;i+=`  <section style="display: table; width: 100%; border-collapse: collapse;">
`;for(let e=0;e<t.length;e+=n){i+=`    <section style="display: table-row;">
`;for(let a=0;a<n;a++){let o=t[e+a],s=e+n<t.length?`1px solid ${Z.borderL}`:`none`,c=a<n-1?`1px solid ${Z.borderL}`:`none`;i+=`      <section style="display: table-cell; width: ${r}; padding: 10px 14px; border-bottom: ${s}; border-right: ${c}; vertical-align: top; box-sizing: border-box;">\n`,o&&(i+=`        <p style="margin: 0 0 2px; font-size: 11px; color: ${Z.txtT}; text-transform: uppercase; letter-spacing: 0.5px;">${U(o.label||``)}</p>\n`,i+=`        <p style="margin: 0; font-size: 14px; font-weight: 500; color: ${Z.txtP};">${U(o.value||``)}</p>\n`),i+=`      </section>
`}i+=`    </section>
`}return i+=`  </section>
</section>`,i}var Jr={TableBlock:Kr,InfoGrid:qr},Yr={info:{borderColor:`#1890ff`,bgColor:`#e6f7ff`,textColor:`#0050b3`},success:{borderColor:`#52c41a`,bgColor:`#f6ffed`,textColor:`#135200`},warning:{borderColor:`#faad14`,bgColor:`#fffbe6`,textColor:`#874d00`},danger:{borderColor:`#ff4d4f`,bgColor:`#fff2f0`,textColor:`#a8071a`}};function Xr(e){return{...Yr[e.type||`info`]||Yr.info,...e}}function Zr(e,t){return e=e.replace(/\{\{#each\s+([\w-]+)\}\}([\s\S]*?)\{\{\/each\}\}/g,(e,n,r)=>{let i;try{i=JSON.parse(t[n]||`[]`)}catch{i=[]}return Array.isArray(i)?i.map((e,n)=>{let i=r;if(i=i.replace(/\{\{@index\}\}/g,String(n)),typeof e==`object`&&e){let t=e;i=i.replace(/\{\{item\.([\w-]+)\}\}/g,(e,n)=>t[n]===void 0?``:U(String(t[n])))}else i=i.replace(/\{\{item\}\}/g,U(String(e??``)));return Zr(i,t)}).join(``):``}),e=e.replace(/\{\{#if\s+([\w-]+)\}\}([\s\S]*?)\{\{\/if\}\}/g,(e,n,r)=>{let i=r.indexOf(`{{#else}}`);return i>=0?t[n]?r.slice(0,i):r.slice(i+9):t[n]?r:``}),e=e.replace(/\{\{#unless\s+([\w-]+)\}\}([\s\S]*?)\{\{\/unless\}\}/g,(e,n,r)=>t[n]?``:r),e=e.replace(/\{\{([\w-]+)\}\}/g,(e,n)=>n===`children`?t[n]??``:t[n]===void 0?``:U(t[n])),e}function Qr(e,t){let n={};for(let t of e.props)t.default!==void 0&&(n[t.name]=t.default);Object.assign(n,t);let r=Jr[e.name];if(r)return r(n);let i=Gr(e.name===`TipBlock`?Xr(n):n);return Zr(e.template,i)}function $r(e,t){return Qr(e,t??{})}var ei={};function ti(){let e={};for(let t of Ur)e[t.name]=t;return e}var ni=`Unknown component: {name}`;function ri(e,t){function n(){return e?e():ei}function r(e){return(t?.()?.unknownComponent||ni).split(`{name}`).join(e)}function i(e,t){let n=e.indexOf(`
`,t);return n>=0?n:e.length}function a(e,t){return e.slice(t,i(e,t)).trim()===``}function o(e){let t=0,n=``,r=0;for(let i of e.split(`
`)){let e=i.match(/^ {0,3}([`~]{3,})/);if(n)e&&e[1][0]===n&&e[1].length>=r&&(n=``,r=0);else if(e)n=e[1][0],r=e[1].length;else if(i[0]===`<`&&i[1]>=`A`&&i[1]<=`Z`)return t;t+=i.length+1}}function s(e){function t(e,t,n){let r=`</${t}>`,a=n,o=``,s=0;for(;a<=e.length;){let t=i(e,a),n=e.slice(a,t),c=n.match(/^ {0,3}([`~]{3,})/);if(o)c&&c[1][0]===o&&c[1].length>=s&&(o=``,s=0);else if(c)o=c[1][0],s=c[1].length;else{let e=n.match(/^\s*/)?.[0].length??0;if(n.slice(e).startsWith(r)&&n.slice(e+r.length).trim()===``)return a+e}if(t===e.length)break;a=t+1}return-1}if(e[0]!==`<`||e[1]<`A`||e[1]>`Z`)return null;let n=1;for(;n<e.length&&/\w/.test(e[n]);)n++;let r=e.slice(1,n);if(!r)return null;let o=``,s=n;for(;s<e.length;){let c=e[s];if(o)c===o&&(o=``);else if(c===`"`||c===`'`)o=c;else if(c===`/`&&e[s+1]===`>`)return a(e,s+2)?{raw:e.slice(0,s+2),name:r,propsStr:e.slice(n,s).trim(),children:``}:null;else if(c===`>`){let o=i(e,s+1),c=`</${r}>`,l=e.indexOf(c,s+1);if(l>=0&&l<o){if(e.slice(l+c.length,o).trim()!==``)return null;let t=e.slice(s+1,l);return{raw:e.slice(0,l+c.length),name:r,propsStr:e.slice(n,s).trim(),children:t}}if(!a(e,s+1))return null;let u=t(e,r,o===e.length?o:o+1);if(u<0)return null;let d=e.slice(s+1,u);return{raw:e.slice(0,u+c.length),name:r,propsStr:e.slice(n,s).trim(),children:d}}s++}return null}return{extensions:[{name:`mdComponent`,level:`block`,start(e){return o(e)},tokenizer(e){let t=s(e);if(t)return{type:`mdComponent`,raw:t.raw,name:t.name,propsStr:t.propsStr,children:t.children}},renderer(e){let{name:t,propsStr:i,children:a}=e,o=n()[t];if(!o)return`<p style="color:#f00;font-size:12px;">[${r(t)}]</p>\n`;let s=Wr(i);return a&&s.children===void 0&&(s.children=a),`${Qr(o,s)}\n`}}]}}function ii(){let e=new Map;return{hooks:{preprocess(t){return e.clear(),t}},extensions:[{name:`footnoteDef`,level:`block`,start(e){return e.match(/^\[\^/)?.index},tokenizer(t){let n=t.match(/^\[\^(.*)\]:(.*)/);if(n){let[t,r,i]=n,a=e.size+1;return e.set(r,{index:a,text:i}),{type:`footnoteDef`,raw:t,fnId:r,index:a,text:i}}},renderer(t){let{index:n,text:r,fnId:i}=t,a=`
                <code>${n}.</code> 
                <span>${r}</span> 
                    <a id="fnDef-${i}" href="#fnRef-${i}" style="color: var(--md-primary-color);">\u21A9\uFE0E</a>
                <br>`;return n===1?`
            <p style="font-size: 80%;margin: 0.5em 8px;word-break:break-all;">${a}`:n===e.size?`${a}</p>`:a}},{name:`footnoteRef`,level:`inline`,start(e){return e.match(/\[\^/)?.index},tokenizer(e){let t=e.match(/^\[\^(.*?)\]/);if(t){let[e,n]=t;return{type:`footnoteRef`,raw:e,fnId:n}}},renderer(t){let{fnId:n}=t,r=e.get(n);if(!r)return t.raw;let{index:i}=r;return`<sup style="color: var(--md-primary-color);">
                    <a href="#fnDef-${n}" id="fnRef-${n}">\[${i}\]</a>
                </sup>`}}]}}var ai=Qe(50),oi=new Map,si=new Set,ci=/^```infographic/m,li=/^```infographic\r?\n([\s\S]*?)\r?\n```/,ui=`infographic-`,di=`md-infographic-offscreen-root`,fi=`800px`,pi={theme:`default`,colorBg:$e.background,colorText:$e.text,svgBackground:`transparent`},mi={theme:`dark`,colorBg:W.background,colorText:W.text,svgBackground:W.background};function hi(e,t){return Xe(`${e}-${et(t)}-v2`)}function gi(e){let t=e?.themeMode===`dark`?mi:pi,n;return typeof window<`u`&&(n=getComputedStyle(document.documentElement).getPropertyValue(`--md-primary-color`).trim()||void 0),{theme:t.theme,svgBackground:t.svgBackground,themeConfig:{colorPrimary:n,colorBg:t.colorBg,colorText:t.colorText}}}function _i(e){return typeof e==`function`?e():e}function vi(){let e=document.getElementById(di);return e||(e=document.createElement(`div`),e.id=di,e.style.cssText=`position:fixed;left:-9999px;top:0;width:${fi};visibility:hidden;pointer-events:none;overflow:hidden;`,document.body.appendChild(e)),e}function yi(e){let t=document.createElement(`div`);return t.replaceChildren(e),t.innerHTML}function bi(e,t){let n=document.getElementById(`${ui}${e}`);n&&(n.innerHTML=t,n.setAttribute(Ve,H.ready))}function xi(e,t,n){let r=document.getElementById(e);if(!r)return;let i=t instanceof Error?t.message:String(t);r.innerHTML=`<div style="color: red; padding: 10px; border: 1px solid red;">${Ge(We(n).infographicError,i)}</div>`,r.setAttribute(Ve,H.error)}async function Si(e,t){let r=hi(e,t?.themeMode),i=ai.get(r);if(i)return i;let a=document.createElement(`div`);a.style.width=fi,vi().appendChild(a);try{let{Infographic:i,setDefaultFont:o,setFontExtendFactor:s,exportToSVG:c}=await n(async()=>{let{Infographic:e,setDefaultFont:t,setFontExtendFactor:n,exportToSVG:r}=await import(`./md-esm-KKasSQks.js`);return{Infographic:e,setDefaultFont:t,setFontExtendFactor:n,exportToSVG:r}},__vite__mapDeps([26,5,27,28,29,19,30,3,31,32,33,34,22,8,9,21,23,35,36,37]));s(1.1),o(`-apple-system-font, "system-ui", "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif`);let{theme:l,svgBackground:u,themeConfig:d}=gi(t);return await new Promise((t,n)=>{let o=new i({container:a,svg:{style:{width:`100%`,height:`100%`,background:u},background:!1},theme:l,themeConfig:d});o.on(`loaded`,({node:e})=>{c(e,{removeIds:!0}).then(e=>{let n=yi(e);ai.set(r,n),t(n)}).catch(n)});try{o.render(e)}catch(e){n(e)}})}finally{a.remove()}}async function Ci(e,t,n,r){if(typeof window>`u`)return;oi.set(n,{code:t,options:r});let i=ai.get(n);if(i){bi(n,i);return}if(!si.has(n)){si.add(n);try{bi(n,await Si(t,r))}catch(t){console.error(`Failed to render Infographic:`,t),xi(e,t,r?.diagramMessages)}finally{si.delete(n)}}}function wi(e,t){typeof window>`u`||e.querySelectorAll(`.infographic-diagram`).forEach(e=>{if(e.querySelector(`svg, img`)||e.getAttribute(Ve)===H.error)return;let n=e.id;if(!n?.startsWith(ui))return;let r=n.slice(ui.length),i=ai.get(r);if(i){e.innerHTML=i;return}let a=oi.get(r);a&&Ci(n,a.code,r,t??a.options)})}function Ti(e){let t=`infographic-diagram`;return{extensions:[{name:`infographic`,level:`block`,start(e){return e.match(ci)?.index},tokenizer(e){let t=li.exec(e);if(t)return{type:`infographic`,raw:t[0],text:t[1].trim()}},renderer:V(n=>{let r=n.text,i=_i(e),a=hi(r,i?.themeMode),o=ai.get(a);if(o)return`<!--infographic-start--><div class="${t}" style="width: 100%;">${o}</div><!--infographic-end-->`;let s=`${ui}${a}`;Ci(s,r,a,i);let c=We(i?.diagramMessages);return`<!--infographic-start--><div id="${s}" class="${t}" style="width: 100%;" ${Ue(H.loading)}>${c.infographicLoading}</div><!--infographic-end-->`})}],walkTokens(e){ze(e)&&e.lang===`infographic`&&Be(e,`infographic`)}}}var Ei=`Loading formula…`,Di=!1;function Oi(){tn()||Di||(Di=!0,sn().catch(e=>{Di=!1,console.error(e)}))}function ki(e,t=!0,n){return r=>{let i=r.displayMode??e,a=U(r.raw??r.text);if(typeof window>`u`||!tn())return Oi(),i?`<section class="katex-block katex-pending" data-math-display="true" data-math-raw="${a}"><span>${U(n?.()||Ei)}</span></section>`:`<span class="katex-inline katex-pending" data-math-display="false" data-math-raw="${a}"><span>…</span></span>`;window.MathJax.texReset();let o=window.MathJax.tex2svg(r.text,{display:i}).firstChild,s=o.style[`min-width`]||o.getAttribute(`width`);o.removeAttribute(`width`),t&&(o.style.display=`initial`,o.style.setProperty(`max-width`,`300vw`,`important`),o.style.flexShrink=`0`,o.style.width=s||``);let c=o.querySelector(`g`);return c&&(c.style.fill=`currentColor`,c.style.stroke=`currentColor`,c.setAttribute(`fill`,`currentColor`),c.setAttribute(`stroke`,`currentColor`)),i?`<section class="katex-block" data-math-display="true" data-math-raw="${U(r.raw??r.text)}">${o.outerHTML}</section>`:`<span class="katex-inline" data-math-display="false" data-math-raw="${U(r.raw??r.text)}">${o.outerHTML}</span>`}}function Ai(e,t){let n=e&&e.nonStandard,r=n?Ot:Dt;return{name:`inlineKatex`,level:`inline`,start(e){return zt(e,!!n,r)},tokenizer(e){let t=e.match(r);if(t)return{type:`inlineKatex`,raw:t[0],text:t[2].trim(),displayMode:t[1].length===2}},renderer:Le(t)}}function ji(e,t){return{name:`blockKatex`,level:`block`,start(e){let t=e.search(/^\s{0,3}\$\$/m);return t===-1?void 0:t},tokenizer(e){let t=jt(e);if(t)return{type:`blockKatex`,raw:t[0],text:t[2].trim(),displayMode:!0}},renderer:Le(t)}}function Mi(e,t){return{name:`inlineLatexKatex`,level:`inline`,start(e){let t=e.indexOf(`\\(`);return t===-1?void 0:t},tokenizer(e){let t=e.match(Nt);if(t)return{type:`inlineLatexKatex`,raw:t[0],text:t[1].trim(),displayMode:!1}},renderer:Le(t)}}function Ni(e,t){return{name:`blockLatexKatex`,level:`block`,start(e){let t=e.indexOf(`\\[`);return t===-1?void 0:t},tokenizer(e){let t=e.match(Pt);if(t)return{type:`blockLatexKatex`,raw:t[0],text:t[1].trim(),displayMode:!0}},renderer:Le(t)}}function Pi(e,t=!0){let n=e?.getKatexLoadingMessage;return{extensions:[Ai(e,ki(!1,t,n)),ji(e,ki(!0,t,n)),Mi(e,ki(!1,t,n)),Ni(e,ki(!0,t,n))]}}function Fi(){return{extensions:[{name:`markup_highlight`,level:`inline`,start(e){return e.match(/==(?!=)/)?.index},tokenizer(e){let t=/^==((?:[^=]|=(?!=))+)==/.exec(e);if(t)return{type:`markup_highlight`,raw:t[0],text:t[1]}},renderer:V(e=>`<span class="markup-highlight">${e.text}</span>`)},{name:`markup_underline`,level:`inline`,start(e){return e.match(/\+\+(?!\+)/)?.index},tokenizer(e){let t=/^\+\+((?:[^+]|\+(?!\+))+)\+\+/.exec(e);if(t)return{type:`markup_underline`,raw:t[0],text:t[1]}},renderer:V(e=>`<span class="markup-underline">${e.text}</span>`)},{name:`markup_wavyline`,level:`inline`,start(e){return e.match(/~(?!~)/)?.index},tokenizer(e){let t=/^~([^~\n]+)~(?!~)/.exec(e);if(t)return{type:`markup_wavyline`,raw:t[0],text:t[1]}},renderer:V(e=>`<span class="markup-wavyline">${e.text}</span>`)}]}}var Ii=Qe(50);function Li(e){return e<10?String.fromCharCode(48+e):(e-=10,e<26?String.fromCharCode(65+e):(e-=26,e<26?String.fromCharCode(97+e):(e-=26,e===0?`-`:e===1?`_`:`?`)))}function Ri(e,t,n){let r=e>>2,i=(e&3)<<4|t>>4,a=(t&15)<<2|n>>6,o=n&63,s=``;return s+=Li(r&63),s+=Li(i&63),s+=Li(a&63),s+=Li(o&63),s}function zi(e){let t=``;for(let n=0;n<e.length;n+=3)n+2===e.length?t+=Ri(e.charCodeAt(n),e.charCodeAt(n+1),0):n+1===e.length?t+=Ri(e.charCodeAt(n),0,0):t+=Ri(e.charCodeAt(n),e.charCodeAt(n+1),e.charCodeAt(n+2));return t}function Bi(e){try{let t=new TextEncoder().encode(e),n=te(t,{level:9});return String.fromCharCode(...n)}catch(t){return console.warn(`Deflate compression failed:`,t),e}}function Vi(e){try{return zi(Bi(e))}catch(t){console.warn(`PlantUML encoding failed, using fallback:`,t);let n=new TextEncoder().encode(e);return`~1${btoa(String.fromCharCode(...n)).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=/g,``)}`}}function Hi(e,t){let n=Vi(e),r=t.format===`svg`?`svg`:`png`;return`${t.serverUrl}/${r}/${n}`}function Ui(e,t){return it(e,t)}function Wi(e,t){return Xe(`${e}-${tt(t)}`)}function Gi(e,t,n=!1){return Yi(``,t,e,n)}function Ki(e,t){let n=Ii.get(e);return n?Ke(n)?Gi(n,t):n:null}function qi(e,t,n){let{text:r}=e,i=We(t.getDiagramMessages?.()),a=t.getThemeMode?.(),o=Hi(Ui(r,a),t);if(t.inlineSvg&&t.format===`svg`){let e=`plantuml-${n}`;Ji(o,i.plantumlError).then(r=>{let i=document.querySelector(`[data-placeholder="${e}"]`);if(i){let e=!Ke(r);e||Ii.set(n,r),i.outerHTML=Gi(r,t,e)}});let r=t.styles.container?Object.entries(t.styles.container).map(([e,t])=>`${e.replace(/([A-Z])/g,`-$1`).toLowerCase()}: ${t}`).join(`; `):``;return`<div class="${t.className}" style="${r}" data-placeholder="${e}" ${Ue(H.loading)}>
      <div style="color: #666; font-style: italic;">${i.plantumlLoading}</div>
    </div>`}return Yi(o,t)}async function Ji(e,t){try{let t=await fetch(e);if(!t.ok)throw Error(`HTTP ${t.status}`);return(await t.text()).replace(/(<svg[^>]*)\swidth="[^"]*"/g,`$1`).replace(/(<svg[^>]*)\sheight="[^"]*"/g,`$1`).replace(/(<svg[^>]*style="[^"]*?)width:[^;]*;?/g,`$1`).replace(/(<svg[^>]*style="[^"]*?)height:[^;]*;?/g,`$1`).replace(/preserveAspectRatio="none"/g,`preserveAspectRatio="xMidYMid meet"`)}catch(n){return console.warn(`Failed to fetch SVG content from ${e}:`,n),`<div style="color: #666; font-style: italic;">${t}</div>`}}function Yi(e,t,n,r=!1){let i=t.styles.container?Object.entries(t.styles.container).map(([e,t])=>`${e.replace(/([A-Z])/g,`-$1`).toLowerCase()}: ${t}`).join(`; `):``;if(n){let e=r?H.error:H.ready;return`<div class="${t.className}" style="${i}" ${Ue(e)}>
      ${n}
    </div>`}return`<div class="${t.className}" style="${i}" ${Ue(H.ready)}>
    <img src="${e}" alt="PlantUML Diagram" style="max-width: 100%; height: auto;" />
  </div>`}function Xi(e={}){let t={serverUrl:e.serverUrl||`https://www.plantuml.com/plantuml`,format:e.format||`svg`,className:e.className||`plantuml-diagram`,inlineSvg:e.inlineSvg||!1,getDiagramMessages:e.getDiagramMessages,styles:{container:{textAlign:`center`,margin:`16px 8px`,overflowX:`auto`,...e.styles?.container}}};return{extensions:[{name:`plantuml`,level:`block`,start(e){return e.match(/^```plantuml/m)?.index},tokenizer(e){let t=/^```plantuml\r?\n([\s\S]*?)\r?\n```/.exec(e);if(t){let[e,n]=t;return{type:`plantuml`,raw:e,text:n.trim()}}},renderer:V(e=>{let n=t.getThemeMode?.(),r=Wi(e.text,n);return Ki(r,t)||qi(e,t,r)})}],walkTokens(e){ze(e)&&e.lang===`plantuml`&&Be(e,`plantuml`)}}}function Zi(){return{extensions:[{name:`ruby`,level:`inline`,start(e){return e.match(/\[/)?.index},tokenizer(e){let t=/^\[([^\]]+)\]\{([^}]+)\}/.exec(e);if(t)return{type:`ruby`,raw:t[0],text:t[1].trim(),ruby:t[2].trim(),format:`basic`};if(t=/^\[([^\]]+)\]\^\(([^)]+)\)/.exec(e),t)return{type:`ruby`,raw:t[0],text:t[1].trim(),ruby:t[2].trim(),format:`basic-hat`}},renderer:V(e=>{let{text:t,ruby:n,format:r}=e,i=/[・．。-]/g;if(i.test(n)){let e=n.split(i).filter(e=>e.trim()!==``),a=t.split(``),o=[];if(a.length>=e.length){let t=0;for(let n=0;n<e.length;n++){let i=e[n],s=a.length-t,c=e.length-n,l=1;c===1&&(l=s);let u=a.slice(t,t+l).join(``);o.push(`<ruby data-text="${u}" data-ruby="${i}" data-format="${r}">${u}<rp>(</rp><rt>${i}</rt><rp>)</rp></ruby>`),t+=l}t<a.length&&o.push(a.slice(t).join(``))}else for(let t=0;t<a.length;t++){let n=a[t],i=e[t]||``;i?o.push(`<ruby data-text="${n}" data-ruby="${i}" data-format="${r}">${n}<rp>(</rp><rt>${i}</rt><rp>)</rp></ruby>`):o.push(n)}return o.join(``)}return`<ruby data-text="${t}" data-ruby="${n}" data-format="${r}">${t}<rp>(</rp><rt>${n}</rt><rp>)</rp></ruby>`})}]}}function Qi(){return{extensions:[{name:`horizontalSlider`,level:`block`,start(e){return e.match(/^<!\[/)?.index},tokenizer(e){let t=e.match(/^<(!\[.*?\]\(.*?\)(?:,!\[.*?\]\(.*?\))*)>/);if(t)return{type:`horizontalSlider`,raw:t[0],text:t[1]}},renderer(e){let{text:t}=e,n=t.match(/!\[(.*?)\]\((.*?)\)/g)||[];return n.length===0?``:`
            <section style="box-sizing: border-box; font-size: 16px;">
              <section data-role="outer" style="font-family: 微软雅黑; font-size: 16px;">
                <section data-role="paragraph" style="margin: 0px auto; box-sizing: border-box; width: 100%;">
                  <section style="margin: 0px auto; text-align: center;">
                    <section style="display: inline-block; width: 100%;">
                      <!-- WeChat-compatible horizontal scroll image container -->
                      <section style="overflow-x: scroll; -webkit-overflow-scrolling: touch; white-space: nowrap; width: 100%; text-align: center;">
                        ${n.map(e=>{let t=e.match(/!\[(.*?)\]/)||[],n=e.match(/\]\((.*?)\)/)||[],r=t[1]||``;return{src:n[1]||``,alt:r}}).map((e,t)=>`<section style="display: inline-block; width: 100%; margin-right: 0; vertical-align: top;">
                          <img src="${e.src}" alt="${e.alt}" title="${e.alt}" style="width: 100%; height: auto; border-radius: 4px; vertical-align: top;"/>
                          <p style="margin-top: 5px; font-size: 14px; color: #666; text-align: center; white-space: normal;">${e.alt}</p>
                        </section>`).join(``)}
                      </section>
                    </section>
                  </section>
                </section>
              </section>
              <p style="font-size: 14px; color: #999; text-align: center; margin-top: 5px;"><<< 左右滑动看更多 >>></p>
            </section>
          `}}]}}function $i(){let e=[];return{hooks:{preprocess(t){return e=[],t}},walkTokens(t){if(t.type===`heading`){let n=t.text||``,r=t.depth||1,i=e.length;e.push({text:n,depth:r,index:i})}},extensions:[{name:`toc`,level:`block`,start(e){let t=e.match(/^\s*\[TOC\]\s*$/m);return t?t.index:void 0},tokenizer(e){let t=/^\[TOC\]/.exec(e);if(t)return{type:`toc`,raw:t[0]}},renderer(){let t=e.filter(e=>e.depth!==1);if(!t.length)return``;let n=Math.min(...t.map(e=>e.depth)),r=`<nav class="markdown-toc"><ul class="toc-ul toc-level-${n} pl-4 border-l ml-2">`,i=n;t.forEach(({text:e,depth:t,index:n})=>{if(t>i)for(let e=i+1;e<=t;e++)r+=`<ul class="toc-ul toc-level-${e} pl-4 border-l ml-2">`;else if(t<i)for(let e=i;e>t;e--)r+=`</ul>`;r+=`<li class="toc-li toc-level-${t} mb-1"><a class="text-gray-700 hover:text-blue-600 underline transition-colors" href="#${n}">${e}</a></li>`,i=t});for(let e=i;e>1;e--)r+=`</ul>`;return r+=`</ul></nav>`,r}}]}}function ea(e,t){return t.some(([t,n])=>t<=e&&e<=n)}function ta(e){return typeof e==`string`&&ea(e.charCodeAt(0),[[12352,12447],[19968,40959],[44032,55203],[131072,191456]])}function na(e){return typeof e==`string`&&` 
\r	`.includes(e)}function ra(e){return typeof e==`string`&&ea(e.charCodeAt(0),[[33,47],[58,64],[91,96],[123,126],[12288,12351],[65280,65519]])}function ia(e,t={}){let n=0,r=0,i=e.length-1,a=t.wordsPerMinute||200,o=t.wordBound||na;for(;o(e[r]);)r++;for(;o(e[i]);)i--;let s=`${e}\n`;for(let e=r;e<=i;e++)if((ta(s[e])||!o(s[e])&&(o(s[e+1])||ta(s[e+1])))&&n++,ta(s[e]))for(;e<=i&&(ra(s[e+1])||o(s[e+1]));)e++;let c=n/a,l=Math.round(c*60*1e3);return{text:`${Math.ceil(Number(c.toFixed(2)))} min read`,minutes:c,time:l,words:n}}var aa=t(((e,t)=>{function n(e){return e==null}function r(e){return typeof e==`object`&&!!e}function i(e){return Array.isArray(e)?e:n(e)?[]:[e]}function a(e,t){if(t){let n=Object.keys(t);for(let r=0,i=n.length;r<i;r+=1){let i=n[r];e[i]=t[i]}}return e}function o(e,t){let n=``;for(let r=0;r<t;r+=1)n+=e;return n}function s(e){return e===0&&1/e==-1/0}t.exports.isNothing=n,t.exports.isObject=r,t.exports.toArray=i,t.exports.repeat=o,t.exports.isNegativeZero=s,t.exports.extend=a})),oa=t(((e,t)=>{function n(e,t){let n=``,r=e.reason||`(unknown reason)`;return e.mark?(e.mark.name&&(n+=`in "`+e.mark.name+`" `),n+=`(`+(e.mark.line+1)+`:`+(e.mark.column+1)+`)`,!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),r+` `+n):r}function r(e,t){Error.call(this),this.name=`YAMLException`,this.reason=e,this.mark=t,this.message=n(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack||``}r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.prototype.toString=function(e){return this.name+`: `+n(this,e)},t.exports=r})),sa=t(((e,t)=>{var n=aa();function r(e,t,n,r,i){let a=``,o=``,s=Math.floor(i/2)-1;return r-t>s&&(a=` ... `,t=r-s+a.length),n-r>s&&(o=` ...`,n=r+s-o.length),{str:a+e.slice(t,n).replace(/\t/g,`→`)+o,pos:r-t+a.length}}function i(e,t){return n.repeat(` `,t-e.length)+e}function a(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),typeof t.indent!=`number`&&(t.indent=1),typeof t.linesBefore!=`number`&&(t.linesBefore=3),typeof t.linesAfter!=`number`&&(t.linesAfter=2);let a=/\r?\n|\r|\0/g,o=[0],s=[],c,l=-1;for(;c=a.exec(e.buffer);)s.push(c.index),o.push(c.index+c[0].length),e.position<=c.index&&l<0&&(l=o.length-2);l<0&&(l=o.length-1);let u=``,d=Math.min(e.line+t.linesAfter,s.length).toString().length,f=t.maxLength-(t.indent+d+3);for(let a=1;a<=t.linesBefore&&!(l-a<0);a++){let c=r(e.buffer,o[l-a],s[l-a],e.position-(o[l]-o[l-a]),f);u=n.repeat(` `,t.indent)+i((e.line-a+1).toString(),d)+` | `+c.str+`
`+u}let p=r(e.buffer,o[l],s[l],e.position,f);u+=n.repeat(` `,t.indent)+i((e.line+1).toString(),d)+` | `+p.str+`
`,u+=n.repeat(`-`,t.indent+d+3+p.pos)+`^
`;for(let a=1;a<=t.linesAfter&&!(l+a>=s.length);a++){let c=r(e.buffer,o[l+a],s[l+a],e.position-(o[l]-o[l+a]),f);u+=n.repeat(` `,t.indent)+i((e.line+a+1).toString(),d)+` | `+c.str+`
`}return u.replace(/\n$/,``)}t.exports=a})),Q=t(((e,t)=>{var n=oa(),r=[`kind`,`multi`,`resolve`,`construct`,`instanceOf`,`predicate`,`represent`,`representName`,`defaultStyle`,`styleAliases`],i=[`scalar`,`sequence`,`mapping`];function a(e){let t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(e){t[String(e)]=n})}),t}function o(e,t){if(t||={},Object.keys(t).forEach(function(t){if(r.indexOf(t)===-1)throw new n(`Unknown option "`+t+`" is met in definition of "`+e+`" YAML type.`)}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=a(t.styleAliases||null),i.indexOf(this.kind)===-1)throw new n(`Unknown kind "`+this.kind+`" is specified for "`+e+`" YAML type.`)}t.exports=o})),ca=t(((e,t)=>{var n=oa(),r=Q();function i(e,t){let n=[];return e[t].forEach(function(e){let t=n.length;n.forEach(function(n,r){n.tag===e.tag&&n.kind===e.kind&&n.multi===e.multi&&(t=r)}),n[t]=e}),n}function a(){let e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function t(t){t.multi?(e.multi[t.kind].push(t),e.multi.fallback.push(t)):e[t.kind][t.tag]=e.fallback[t.tag]=t}for(let e=0,n=arguments.length;e<n;e+=1)arguments[e].forEach(t);return e}function o(e){return this.extend(e)}o.prototype.extend=function(e){let t=[],s=[];if(e instanceof r)s.push(e);else if(Array.isArray(e))s=s.concat(e);else if(e&&(Array.isArray(e.implicit)||Array.isArray(e.explicit)))e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(s=s.concat(e.explicit));else throw new n(`Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })`);t.forEach(function(e){if(!(e instanceof r))throw new n(`Specified list of YAML types (or a single Type object) contains a non-Type object.`);if(e.loadKind&&e.loadKind!==`scalar`)throw new n(`There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.`);if(e.multi)throw new n(`There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.`)}),s.forEach(function(e){if(!(e instanceof r))throw new n(`Specified list of YAML types (or a single Type object) contains a non-Type object.`)});let c=Object.create(o.prototype);return c.implicit=(this.implicit||[]).concat(t),c.explicit=(this.explicit||[]).concat(s),c.compiledImplicit=i(c,`implicit`),c.compiledExplicit=i(c,`explicit`),c.compiledTypeMap=a(c.compiledImplicit,c.compiledExplicit),c},t.exports=o})),la=t(((e,t)=>{t.exports=new(Q())(`tag:yaml.org,2002:str`,{kind:`scalar`,construct:function(e){return e===null?``:e}})})),ua=t(((e,t)=>{t.exports=new(Q())(`tag:yaml.org,2002:seq`,{kind:`sequence`,construct:function(e){return e===null?[]:e}})})),da=t(((e,t)=>{t.exports=new(Q())(`tag:yaml.org,2002:map`,{kind:`mapping`,construct:function(e){return e===null?{}:e}})})),fa=t(((e,t)=>{t.exports=new(ca())({explicit:[la(),ua(),da()]})})),pa=t(((e,t)=>{var n=Q();function r(e){if(e===null)return!0;let t=e.length;return t===1&&e===`~`||t===4&&(e===`null`||e===`Null`||e===`NULL`)}function i(){return null}function a(e){return e===null}t.exports=new n(`tag:yaml.org,2002:null`,{kind:`scalar`,resolve:r,construct:i,predicate:a,represent:{canonical:function(){return`~`},lowercase:function(){return`null`},uppercase:function(){return`NULL`},camelcase:function(){return`Null`},empty:function(){return``}},defaultStyle:`lowercase`})})),ma=t(((e,t)=>{var n=Q();function r(e){if(e===null)return!1;let t=e.length;return t===4&&(e===`true`||e===`True`||e===`TRUE`)||t===5&&(e===`false`||e===`False`||e===`FALSE`)}function i(e){return e===`true`||e===`True`||e===`TRUE`}function a(e){return Object.prototype.toString.call(e)===`[object Boolean]`}t.exports=new n(`tag:yaml.org,2002:bool`,{kind:`scalar`,resolve:r,construct:i,predicate:a,represent:{lowercase:function(e){return e?`true`:`false`},uppercase:function(e){return e?`TRUE`:`FALSE`},camelcase:function(e){return e?`True`:`False`}},defaultStyle:`lowercase`})})),ha=t(((e,t)=>{var n=aa(),r=Q();function i(e){return e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102}function a(e){return e>=48&&e<=55}function o(e){return e>=48&&e<=57}function s(e){if(e===null)return!1;let t=e.length,n=0,r=!1;if(!t)return!1;let s=e[n];if((s===`-`||s===`+`)&&(s=e[++n]),s===`0`){if(n+1===t)return!0;if(s=e[++n],s===`b`){for(n++;n<t;n++){if(s=e[n],s!==`0`&&s!==`1`)return!1;r=!0}return r&&isFinite(c(e))}if(s===`x`){for(n++;n<t;n++){if(!i(e.charCodeAt(n)))return!1;r=!0}return r&&isFinite(c(e))}if(s===`o`){for(n++;n<t;n++){if(!a(e.charCodeAt(n)))return!1;r=!0}return r&&isFinite(c(e))}}for(;n<t;n++){if(!o(e.charCodeAt(n)))return!1;r=!0}return r?isFinite(c(e)):!1}function c(e){let t=e,n=1,r=t[0];if((r===`-`||r===`+`)&&(r===`-`&&(n=-1),t=t.slice(1),r=t[0]),t===`0`)return 0;if(r===`0`){if(t[1]===`b`)return n*parseInt(t.slice(2),2);if(t[1]===`x`)return n*parseInt(t.slice(2),16);if(t[1]===`o`)return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function l(e){return c(e)}function u(e){return Object.prototype.toString.call(e)===`[object Number]`&&e%1==0&&!n.isNegativeZero(e)}t.exports=new r(`tag:yaml.org,2002:int`,{kind:`scalar`,resolve:s,construct:l,predicate:u,represent:{binary:function(e){return e>=0?`0b`+e.toString(2):`-0b`+e.toString(2).slice(1)},octal:function(e){return e>=0?`0o`+e.toString(8):`-0o`+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?`0x`+e.toString(16).toUpperCase():`-0x`+e.toString(16).toUpperCase().slice(1)}},defaultStyle:`decimal`,styleAliases:{binary:[2,`bin`],octal:[8,`oct`],decimal:[10,`dec`],hexadecimal:[16,`hex`]}})})),ga=t(((e,t)=>{var n=aa(),r=Q(),i=RegExp(`^(?:[-+]?(?:[0-9]+)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`),a=RegExp(`^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function o(e){return e===null||!i.test(e)?!1:isFinite(parseFloat(e,10))?!0:a.test(e)}function s(e){let t=e.toLowerCase(),n=t[0]===`-`?-1:1;return`+-`.indexOf(t[0])>=0&&(t=t.slice(1)),t===`.inf`?n===1?1/0:-1/0:t===`.nan`?NaN:n*parseFloat(t,10)}var c=/^[-+]?[0-9]+e/;function l(e,t){if(isNaN(e))switch(t){case`lowercase`:return`.nan`;case`uppercase`:return`.NAN`;case`camelcase`:return`.NaN`}else if(e===1/0)switch(t){case`lowercase`:return`.inf`;case`uppercase`:return`.INF`;case`camelcase`:return`.Inf`}else if(e===-1/0)switch(t){case`lowercase`:return`-.inf`;case`uppercase`:return`-.INF`;case`camelcase`:return`-.Inf`}else if(n.isNegativeZero(e))return`-0.0`;let r=e.toString(10);return c.test(r)?r.replace(`e`,`.e`):r}function u(e){return Object.prototype.toString.call(e)===`[object Number]`&&(e%1!=0||n.isNegativeZero(e))}t.exports=new r(`tag:yaml.org,2002:float`,{kind:`scalar`,resolve:o,construct:s,predicate:u,represent:l,defaultStyle:`lowercase`})})),_a=t(((e,t)=>{t.exports=fa().extend({implicit:[pa(),ma(),ha(),ga()]})})),va=t(((e,t)=>{t.exports=_a()})),ya=t(((e,t)=>{var n=Q(),r=RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$`),i=RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$`);function a(e){return e===null?!1:r.exec(e)!==null||i.exec(e)!==null}function o(e){let t=0,n=null,a=r.exec(e);if(a===null&&(a=i.exec(e)),a===null)throw Error(`Date resolve error`);let o=+a[1],s=a[2]-1,c=+a[3];if(!a[4])return new Date(Date.UTC(o,s,c));let l=+a[4],u=+a[5],d=+a[6];if(a[7]){for(t=a[7].slice(0,3);t.length<3;)t+=`0`;t=+t}if(a[9]){let e=+a[10],t=+(a[11]||0);n=(e*60+t)*6e4,a[9]===`-`&&(n=-n)}let f=new Date(Date.UTC(o,s,c,l,u,d,t));return n&&f.setTime(f.getTime()-n),f}function s(e){return e.toISOString()}t.exports=new n(`tag:yaml.org,2002:timestamp`,{kind:`scalar`,resolve:a,construct:o,instanceOf:Date,represent:s})})),ba=t(((e,t)=>{var n=Q();function r(e){return e===`<<`||e===null}t.exports=new n(`tag:yaml.org,2002:merge`,{kind:`scalar`,resolve:r})})),xa=t(((e,t)=>{var n=Q(),r=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function i(e){if(e===null)return!1;let t=0,n=e.length,i=r;for(let r=0;r<n;r++){let n=i.indexOf(e.charAt(r));if(!(n>64)){if(n<0)return!1;t+=6}}return t%8==0}function a(e){let t=e.replace(/[\r\n=]/g,``),n=t.length,i=r,a=0,o=[];for(let e=0;e<n;e++)e%4==0&&e&&(o.push(a>>16&255),o.push(a>>8&255),o.push(a&255)),a=a<<6|i.indexOf(t.charAt(e));let s=n%4*6;return s===0?(o.push(a>>16&255),o.push(a>>8&255),o.push(a&255)):s===18?(o.push(a>>10&255),o.push(a>>2&255)):s===12&&o.push(a>>4&255),new Uint8Array(o)}function o(e){let t=``,n=0,i=e.length,a=r;for(let r=0;r<i;r++)r%3==0&&r&&(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]),n=(n<<8)+e[r];let o=i%3;return o===0?(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]):o===2?(t+=a[n>>10&63],t+=a[n>>4&63],t+=a[n<<2&63],t+=a[64]):o===1&&(t+=a[n>>2&63],t+=a[n<<4&63],t+=a[64],t+=a[64]),t}function s(e){return Object.prototype.toString.call(e)===`[object Uint8Array]`}t.exports=new n(`tag:yaml.org,2002:binary`,{kind:`scalar`,resolve:i,construct:a,predicate:s,represent:o})})),Sa=t(((e,t)=>{var n=Q(),r=Object.prototype.hasOwnProperty,i=Object.prototype.toString;function a(e){if(e===null)return!0;let t={},n=e;for(let e=0,a=n.length;e<a;e+=1){let a=n[e],o=!1;if(i.call(a)!==`[object Object]`)return!1;let s;for(s in a)if(r.call(a,s))if(!o)o=!0;else return!1;if(!o||r.call(t,s))return!1;Object.defineProperty(t,s,{value:!0})}return!0}function o(e){return e===null?[]:e}t.exports=new n(`tag:yaml.org,2002:omap`,{kind:`sequence`,resolve:a,construct:o})})),Ca=t(((e,t)=>{var n=Q(),r=Object.prototype.toString;function i(e){if(e===null)return!0;let t=e,n=Array(t.length);for(let e=0,i=t.length;e<i;e+=1){let i=t[e];if(r.call(i)!==`[object Object]`)return!1;let a=Object.keys(i);if(a.length!==1)return!1;n[e]=[a[0],i[a[0]]]}return!0}function a(e){if(e===null)return[];let t=e,n=Array(t.length);for(let e=0,r=t.length;e<r;e+=1){let r=t[e],i=Object.keys(r);n[e]=[i[0],r[i[0]]]}return n}t.exports=new n(`tag:yaml.org,2002:pairs`,{kind:`sequence`,resolve:i,construct:a})})),wa=t(((e,t)=>{var n=Q(),r=Object.prototype.hasOwnProperty;function i(e){if(e===null)return!0;let t=e;for(let e in t)if(r.call(t,e)&&t[e]!==null)return!1;return!0}function a(e){return e===null?{}:e}t.exports=new n(`tag:yaml.org,2002:set`,{kind:`mapping`,resolve:i,construct:a})})),Ta=t(((e,t)=>{t.exports=va().extend({implicit:[ya(),ba()],explicit:[xa(),Sa(),Ca(),wa()]})})),Ea=t(((e,t)=>{var n=aa(),r=oa(),i=sa(),a=Ta(),o=Object.prototype.hasOwnProperty,s=1,c=2,l=3,u=4,d=1,f=2,p=3,m=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,h=/[\x85\u2028\u2029]/,g=/[,\[\]{}]/,_=/^(?:!|!!|![0-9A-Za-z-]+!)$/,v=/^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i;function y(e){return Object.prototype.toString.call(e)}function b(e){return e===10||e===13}function x(e){return e===9||e===32}function S(e){return e===9||e===32||e===10||e===13}function ee(e){return e===44||e===91||e===93||e===123||e===125}function C(e){if(e>=48&&e<=57)return e-48;let t=e|32;return t>=97&&t<=102?t-97+10:-1}function te(e){return e===120?2:e===117?4:e===85?8:0}function w(e){return e>=48&&e<=57?e-48:-1}function T(e){switch(e){case 48:return`\0`;case 97:return`\x07`;case 98:return`\b`;case 116:return`	`;case 9:return`	`;case 110:return`
`;case 118:return`\v`;case 102:return`\f`;case 114:return`\r`;case 101:return`\x1B`;case 32:return` `;case 34:return`"`;case 47:return`/`;case 92:return`\\`;case 78:return``;case 95:return`\xA0`;case 76:return`\u2028`;case 80:return`\u2029`;default:return``}}function E(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function ne(e,t,n){t===`__proto__`?Object.defineProperty(e,t,{configurable:!0,enumerable:!0,writable:!0,value:n}):e[t]=n}var re=Array(256),D=Array(256);for(let e=0;e<256;e++)re[e]=+!!T(e),D[e]=T(e);function O(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||a,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.maxDepth=typeof t.maxDepth==`number`?t.maxDepth:100,this.maxTotalMergeKeys=typeof t.maxTotalMergeKeys==`number`?t.maxTotalMergeKeys:1e4,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.depth=0,this.totalMergeKeys=0,this.firstTabInLine=-1,this.documents=[],this.anchorMapTransactions=[]}function k(e,t){let n={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return n.snippet=i(n),new r(t,n)}function A(e,t){throw k(e,t)}function ie(e,t){e.onWarning&&e.onWarning.call(null,k(e,t))}function j(e,t,n){let r=e.anchorMapTransactions;if(r.length!==0){let n=r[r.length-1];o.call(n,t)||(n[t]={existed:o.call(e.anchorMap,t),value:e.anchorMap[t]})}e.anchorMap[t]=n}function ae(e){e.anchorMapTransactions.push(Object.create(null))}function oe(e){let t=e.anchorMapTransactions.pop(),n=e.anchorMapTransactions;if(n.length===0)return;let r=n[n.length-1],i=Object.keys(t);for(let e=0,n=i.length;e<n;e+=1){let n=i[e];o.call(r,n)||(r[n]=t[n])}}function M(e){let t=e.anchorMapTransactions.pop(),n=Object.keys(t);for(let r=n.length-1;r>=0;--r){let i=t[n[r]];i.existed?e.anchorMap[n[r]]=i.value:delete e.anchorMap[n[r]]}}function se(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,tag:e.tag,anchor:e.anchor,kind:e.kind,result:e.result}}function ce(e,t){e.position=t.position,e.line=t.line,e.lineStart=t.lineStart,e.lineIndent=t.lineIndent,e.firstTabInLine=t.firstTabInLine,e.tag=t.tag,e.anchor=t.anchor,e.kind=t.kind,e.result=t.result}var le={YAML:function(e,t,n){e.version!==null&&A(e,`duplication of %YAML directive`),n.length!==1&&A(e,`YAML directive accepts exactly one argument`);let r=/^([0-9]+)\.([0-9]+)$/.exec(n[0]);r===null&&A(e,`ill-formed argument of the YAML directive`);let i=parseInt(r[1],10),a=parseInt(r[2],10);i!==1&&A(e,`unacceptable YAML version of the document`),e.version=n[0],e.checkLineBreaks=a<2,a!==1&&a!==2&&ie(e,`unsupported YAML version of the document`)},TAG:function(e,t,n){let r;n.length!==2&&A(e,`TAG directive accepts exactly two arguments`);let i=n[0];r=n[1],_.test(i)||A(e,`ill-formed tag handle (first argument) of the TAG directive`),o.call(e.tagMap,i)&&A(e,`there is a previously declared suffix for "`+i+`" tag handle`),v.test(r)||A(e,`ill-formed tag prefix (second argument) of the TAG directive`);try{r=decodeURIComponent(r)}catch{A(e,`tag prefix is malformed: `+r)}e.tagMap[i]=r}};function N(e,t,n,r){if(t<n){let i=e.input.slice(t,n);if(r)for(let t=0,n=i.length;t<n;t+=1){let n=i.charCodeAt(t);n===9||n>=32&&n<=1114111||A(e,`expected valid JSON character`)}else m.test(i)&&A(e,`the stream contains non-printable characters`);e.result+=i}}function P(e,t,r,i){n.isObject(r)||A(e,`cannot merge mappings; the provided source object is unacceptable`);let a=Object.keys(r);for(let n=0,s=a.length;n<s;n+=1){let s=a[n];e.maxTotalMergeKeys!==-1&&++e.totalMergeKeys>e.maxTotalMergeKeys&&A(e,`merge keys exceeded maxTotalMergeKeys (`+e.maxTotalMergeKeys+`)`),o.call(t,s)||(ne(t,s,r[s]),i[s]=!0)}}function F(e,t,n,r,i,a,s,c,l){if(Array.isArray(i)){i=Array.prototype.slice.call(i);for(let t=0,n=i.length;t<n;t+=1)Array.isArray(i[t])&&A(e,`nested arrays are not supported inside keys`),typeof i==`object`&&y(i[t])===`[object Object]`&&(i[t]=`[object Object]`)}if(typeof i==`object`&&y(i)===`[object Object]`&&(i=`[object Object]`),i=String(i),t===null&&(t={}),r===`tag:yaml.org,2002:merge`)if(Array.isArray(a))for(let r=0,i=a.length;r<i;r+=1)P(e,t,a[r],n);else P(e,t,a,n);else!e.json&&!o.call(n,i)&&o.call(t,i)&&(e.line=s||e.line,e.lineStart=c||e.lineStart,e.position=l||e.position,A(e,`duplicated mapping key`)),ne(t,i,a),delete n[i];return t}function ue(e){let t=e.input.charCodeAt(e.position);t===10?e.position++:t===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):A(e,`a line break is expected`),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function I(e,t,n){let r=0,i=e.input.charCodeAt(e.position);for(;i!==0;){for(;x(i);)i===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),i=e.input.charCodeAt(++e.position);if(t&&i===35)do i=e.input.charCodeAt(++e.position);while(i!==10&&i!==13&&i!==0);if(b(i))for(ue(e),i=e.input.charCodeAt(e.position),r++,e.lineIndent=0;i===32;)e.lineIndent++,i=e.input.charCodeAt(++e.position);else break}return n!==-1&&r!==0&&e.lineIndent<n&&ie(e,`deficient indentation`),r}function de(e){let t=e.position,n=e.input.charCodeAt(t);return!!((n===45||n===46)&&n===e.input.charCodeAt(t+1)&&n===e.input.charCodeAt(t+2)&&(t+=3,n=e.input.charCodeAt(t),n===0||S(n)))}function fe(e,t){t===1?e.result+=` `:t>1&&(e.result+=n.repeat(`
`,t-1))}function pe(e,t,n){let r,i,a,o,s,c,l=e.kind,u=e.result,d=e.input.charCodeAt(e.position);if(S(d)||ee(d)||d===35||d===38||d===42||d===33||d===124||d===62||d===39||d===34||d===37||d===64||d===96)return!1;if(d===63||d===45){let t=e.input.charCodeAt(e.position+1);if(S(t)||n&&ee(t))return!1}for(e.kind=`scalar`,e.result=``,r=i=e.position,a=!1;d!==0;){if(d===58){let t=e.input.charCodeAt(e.position+1);if(S(t)||n&&ee(t))break}else if(d===35){if(S(e.input.charCodeAt(e.position-1)))break}else if(e.position===e.lineStart&&de(e)||n&&ee(d))break;else if(b(d)){if(o=e.line,s=e.lineStart,c=e.lineIndent,I(e,!1,-1),e.lineIndent>=t){a=!0,d=e.input.charCodeAt(e.position);continue}e.position=i,e.line=o,e.lineStart=s,e.lineIndent=c;break}a&&=(N(e,r,i,!1),fe(e,e.line-o),r=i=e.position,!1),x(d)||(i=e.position+1),d=e.input.charCodeAt(++e.position)}return N(e,r,i,!1),e.result?!0:(e.kind=l,e.result=u,!1)}function me(e,t){let n,r,i=e.input.charCodeAt(e.position);if(i!==39)return!1;for(e.kind=`scalar`,e.result=``,e.position++,n=r=e.position;(i=e.input.charCodeAt(e.position))!==0;)if(i===39)if(N(e,n,e.position,!0),i=e.input.charCodeAt(++e.position),i===39)n=e.position,e.position++,r=e.position;else return!0;else b(i)?(N(e,n,r,!0),fe(e,I(e,!1,t)),n=r=e.position):e.position===e.lineStart&&de(e)?A(e,`unexpected end of the document within a single quoted scalar`):(e.position++,x(i)||(r=e.position));A(e,`unexpected end of the stream within a single quoted scalar`)}function he(e,t){let n,r,i,a=e.input.charCodeAt(e.position);if(a!==34)return!1;for(e.kind=`scalar`,e.result=``,e.position++,n=r=e.position;(a=e.input.charCodeAt(e.position))!==0;)if(a===34)return N(e,n,e.position,!0),e.position++,!0;else if(a===92){if(N(e,n,e.position,!0),a=e.input.charCodeAt(++e.position),b(a))I(e,!1,t);else if(a<256&&re[a])e.result+=D[a],e.position++;else if((i=te(a))>0){let t=i,n=0;for(;t>0;t--)a=e.input.charCodeAt(++e.position),(i=C(a))>=0?n=(n<<4)+i:A(e,`expected hexadecimal character`);e.result+=E(n),e.position++}else A(e,`unknown escape sequence`);n=r=e.position}else b(a)?(N(e,n,r,!0),fe(e,I(e,!1,t)),n=r=e.position):e.position===e.lineStart&&de(e)?A(e,`unexpected end of the document within a double quoted scalar`):(e.position++,x(a)||(r=e.position));A(e,`unexpected end of the stream within a double quoted scalar`)}function ge(e,t){let n=!0,r,i,a,o=e.tag,c,l=e.anchor,u,d,f,p,m=Object.create(null),h,g,_,v=e.input.charCodeAt(e.position);if(v===91)u=93,p=!1,c=[];else if(v===123)u=125,p=!0,c={};else return!1;for(e.anchor!==null&&j(e,e.anchor,c),v=e.input.charCodeAt(++e.position);v!==0;){if(I(e,!0,t),v=e.input.charCodeAt(e.position),v===u)return e.position++,e.tag=o,e.anchor=l,e.kind=p?`mapping`:`sequence`,e.result=c,!0;n?v===44&&A(e,`expected the node content, but found ','`):A(e,`missed comma between flow collection entries`),g=h=_=null,d=f=!1,v===63&&S(e.input.charCodeAt(e.position+1))&&(d=f=!0,e.position++,I(e,!0,t)),r=e.line,i=e.lineStart,a=e.position,R(e,t,s,!1,!0),g=e.tag,h=e.result,I(e,!0,t),v=e.input.charCodeAt(e.position),(f||e.line===r)&&v===58&&(d=!0,v=e.input.charCodeAt(++e.position),I(e,!0,t),R(e,t,s,!1,!0),_=e.result),p?F(e,c,m,g,h,_,r,i,a):d?c.push(F(e,null,m,g,h,_,r,i,a)):c.push(h),I(e,!0,t),v=e.input.charCodeAt(e.position),v===44?(n=!0,v=e.input.charCodeAt(++e.position)):n=!1}A(e,`unexpected end of the stream within a flow collection`)}function _e(e,t){let r,i=d,a=!1,o=!1,s=t,c=0,l=!1,u,m=e.input.charCodeAt(e.position);if(m===124)r=!1;else if(m===62)r=!0;else return!1;for(e.kind=`scalar`,e.result=``;m!==0;)if(m=e.input.charCodeAt(++e.position),m===43||m===45)d===i?i=m===43?p:f:A(e,`repeat of a chomping mode identifier`);else if((u=w(m))>=0)u===0?A(e,`bad explicit indentation width of a block scalar; it cannot be less than one`):o?A(e,`repeat of an indentation width identifier`):(s=t+u-1,o=!0);else break;if(x(m)){do m=e.input.charCodeAt(++e.position);while(x(m));if(m===35)do m=e.input.charCodeAt(++e.position);while(!b(m)&&m!==0)}for(;m!==0;){for(ue(e),e.lineIndent=0,m=e.input.charCodeAt(e.position);(!o||e.lineIndent<s)&&m===32;)e.lineIndent++,m=e.input.charCodeAt(++e.position);if(!o&&e.lineIndent>s&&(s=e.lineIndent),b(m)){c++;continue}if(!o&&s===0&&A(e,`missing indentation for block scalar`),e.lineIndent<s){i===p?e.result+=n.repeat(`
`,a?1+c:c):i===d&&a&&(e.result+=`
`);break}r?x(m)?(l=!0,e.result+=n.repeat(`
`,a?1+c:c)):l?(l=!1,e.result+=n.repeat(`
`,c+1)):c===0?a&&(e.result+=` `):e.result+=n.repeat(`
`,c):e.result+=n.repeat(`
`,a?1+c:c),a=!0,o=!0,c=0;let t=e.position;for(;!b(m)&&m!==0;)m=e.input.charCodeAt(++e.position);N(e,t,e.position,!1)}return!0}function L(e,t){let n=e.tag,r=e.anchor,i=[],a=!1;if(e.firstTabInLine!==-1)return!1;e.anchor!==null&&j(e,e.anchor,i);let o=e.input.charCodeAt(e.position);for(;o!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,A(e,`tab characters must not be used in indentation`)),!(o!==45||!S(e.input.charCodeAt(e.position+1))));){if(a=!0,e.position++,I(e,!0,-1)&&e.lineIndent<=t){i.push(null),o=e.input.charCodeAt(e.position);continue}let n=e.line;if(R(e,t,l,!1,!0),i.push(e.result),I(e,!0,-1),o=e.input.charCodeAt(e.position),(e.line===n||e.lineIndent>t)&&o!==0)A(e,`bad indentation of a sequence entry`);else if(e.lineIndent<t)break}return a?(e.tag=n,e.anchor=r,e.kind=`sequence`,e.result=i,!0):!1}function ve(e,t,n){let r,i,a,o,s=e.tag,l=e.anchor,d={},f=Object.create(null),p=null,m=null,h=null,g=!1,_=!1;if(e.firstTabInLine!==-1)return!1;e.anchor!==null&&j(e,e.anchor,d);let v=e.input.charCodeAt(e.position);for(;v!==0;){!g&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,A(e,`tab characters must not be used in indentation`));let y=e.input.charCodeAt(e.position+1),b=e.line;if((v===63||v===58)&&S(y))v===63?(g&&(F(e,d,f,p,m,null,i,a,o),p=m=h=null),_=!0,g=!0,r=!0):g?(g=!1,r=!0):A(e,`incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line`),e.position+=1,v=y;else{if(i=e.line,a=e.lineStart,o=e.position,!R(e,n,c,!1,!0))break;if(e.line===b){for(v=e.input.charCodeAt(e.position);x(v);)v=e.input.charCodeAt(++e.position);if(v===58)v=e.input.charCodeAt(++e.position),S(v)||A(e,`a whitespace character is expected after the key-value separator within a block mapping`),g&&(F(e,d,f,p,m,null,i,a,o),p=m=h=null),_=!0,g=!1,r=!1,p=e.tag,m=e.result;else if(_)A(e,`can not read an implicit mapping pair; a colon is missed`);else return e.tag=s,e.anchor=l,!0}else if(_)A(e,`can not read a block mapping entry; a multiline key may not be an implicit key`);else return e.tag=s,e.anchor=l,!0}if((e.line===b||e.lineIndent>t)&&(g&&(i=e.line,a=e.lineStart,o=e.position),R(e,t,u,!0,r)&&(g?m=e.result:h=e.result),g||(F(e,d,f,p,m,h,i,a,o),p=m=h=null),I(e,!0,-1),v=e.input.charCodeAt(e.position)),(e.line===b||e.lineIndent>t)&&v!==0)A(e,`bad indentation of a mapping entry`);else if(e.lineIndent<t)break}return g&&F(e,d,f,p,m,null,i,a,o),_&&(e.tag=s,e.anchor=l,e.kind=`mapping`,e.result=d),_}function ye(e){let t=!1,n=!1,r,i,a=e.input.charCodeAt(e.position);if(a!==33)return!1;e.tag!==null&&A(e,`duplication of a tag property`),a=e.input.charCodeAt(++e.position),a===60?(t=!0,a=e.input.charCodeAt(++e.position)):a===33?(n=!0,r=`!!`,a=e.input.charCodeAt(++e.position)):r=`!`;let s=e.position;if(t){do a=e.input.charCodeAt(++e.position);while(a!==0&&a!==62);e.position<e.length?(i=e.input.slice(s,e.position),a=e.input.charCodeAt(++e.position)):A(e,`unexpected end of the stream within a verbatim tag`)}else{for(;a!==0&&!S(a);)a===33&&(n?A(e,`tag suffix cannot contain exclamation marks`):(r=e.input.slice(s-1,e.position+1),_.test(r)||A(e,`named tag handle cannot contain such characters`),n=!0,s=e.position+1)),a=e.input.charCodeAt(++e.position);i=e.input.slice(s,e.position),g.test(i)&&A(e,`tag suffix cannot contain flow indicator characters`)}i&&!v.test(i)&&A(e,`tag name cannot contain such characters: `+i);try{i=decodeURIComponent(i)}catch{A(e,`tag name is malformed: `+i)}return t?e.tag=i:o.call(e.tagMap,r)?e.tag=e.tagMap[r]+i:r===`!`?e.tag=`!`+i:r===`!!`?e.tag=`tag:yaml.org,2002:`+i:A(e,`undeclared tag handle "`+r+`"`),!0}function be(e){let t=e.input.charCodeAt(e.position);if(t!==38)return!1;e.anchor!==null&&A(e,`duplication of an anchor property`),t=e.input.charCodeAt(++e.position);let n=e.position;for(;t!==0&&!S(t)&&!ee(t);)t=e.input.charCodeAt(++e.position);return e.position===n&&A(e,`name of an anchor node must contain at least one character`),e.anchor=e.input.slice(n,e.position),!0}function xe(e){let t=e.input.charCodeAt(e.position);if(t!==42)return!1;t=e.input.charCodeAt(++e.position);let n=e.position;for(;t!==0&&!S(t)&&!ee(t);)t=e.input.charCodeAt(++e.position);e.position===n&&A(e,`name of an alias node must contain at least one character`);let r=e.input.slice(n,e.position);return o.call(e.anchorMap,r)||A(e,`unidentified alias "`+r+`"`),e.result=e.anchorMap[r],I(e,!0,-1),!0}function Se(e,t,n,r){let i=se(e);return ae(e),ce(e,t),e.tag=null,e.anchor=null,e.kind=null,e.result=null,ve(e,n,r)&&e.kind===`mapping`?(oe(e),!0):(M(e),ce(e,i),!1)}function R(e,t,n,r,i){let a,d,f=1,p=!1,m=!1,h=null,g,_,v;e.depth>=e.maxDepth&&A(e,`nesting exceeded maxDepth (`+e.maxDepth+`)`),e.depth+=1,e.listener!==null&&e.listener(`open`,e),e.tag=null,e.anchor=null,e.kind=null,e.result=null;let y=a=d=u===n||l===n;if(r&&I(e,!0,-1)&&(p=!0,e.lineIndent>t?f=1:e.lineIndent===t?f=0:e.lineIndent<t&&(f=-1)),f===1)for(;;){let n=e.input.charCodeAt(e.position),r=se(e);if(p&&(n===33&&e.tag!==null||n===38&&e.anchor!==null)||!ye(e)&&!be(e))break;h===null&&(h=r),I(e,!0,-1)?(p=!0,d=y,e.lineIndent>t?f=1:e.lineIndent===t?f=0:e.lineIndent<t&&(f=-1)):d=!1}if(d&&=p||i,f===1||u===n)if(_=s===n||c===n?t:t+1,v=e.position-e.lineStart,f===1)if(d&&(L(e,v)||ve(e,v,_))||ge(e,_))m=!0;else{let t=e.input.charCodeAt(e.position);h!==null&&y&&!d&&t!==124&&t!==62&&Se(e,h,h.position-h.lineStart,_)||a&&_e(e,_)||me(e,_)||he(e,_)?m=!0:xe(e)?(m=!0,(e.tag!==null||e.anchor!==null)&&A(e,`alias node should not have any properties`)):pe(e,_,s===n)&&(m=!0,e.tag===null&&(e.tag=`?`)),e.anchor!==null&&j(e,e.anchor,e.result)}else f===0&&(m=d&&L(e,v));if(e.tag===null)e.anchor!==null&&j(e,e.anchor,e.result);else if(e.tag===`?`){e.result!==null&&e.kind!==`scalar`&&A(e,`unacceptable node kind for !<?> tag; it should be "scalar", not "`+e.kind+`"`);for(let t=0,n=e.implicitTypes.length;t<n;t+=1)if(g=e.implicitTypes[t],g.resolve(e.result)){e.result=g.construct(e.result),e.tag=g.tag,e.anchor!==null&&j(e,e.anchor,e.result);break}}else if(e.tag!==`!`){if(o.call(e.typeMap[e.kind||`fallback`],e.tag))g=e.typeMap[e.kind||`fallback`][e.tag];else{g=null;let t=e.typeMap.multi[e.kind||`fallback`];for(let n=0,r=t.length;n<r;n+=1)if(e.tag.slice(0,t[n].tag.length)===t[n].tag){g=t[n];break}}g||A(e,`unknown tag !<`+e.tag+`>`),e.result!==null&&g.kind!==e.kind&&A(e,`unacceptable node kind for !<`+e.tag+`> tag; it should be "`+g.kind+`", not "`+e.kind+`"`),g.resolve(e.result,e.tag)?(e.result=g.construct(e.result,e.tag),e.anchor!==null&&j(e,e.anchor,e.result)):A(e,`cannot resolve a node with !<`+e.tag+`> explicit tag`)}return e.listener!==null&&e.listener(`close`,e),--e.depth,e.tag!==null||e.anchor!==null||m}function Ce(e){let t=e.position,n=!1,r;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(r=e.input.charCodeAt(e.position))!==0&&(I(e,!0,-1),r=e.input.charCodeAt(e.position),!(e.lineIndent>0||r!==37));){n=!0,r=e.input.charCodeAt(++e.position);let t=e.position;for(;r!==0&&!S(r);)r=e.input.charCodeAt(++e.position);let i=e.input.slice(t,e.position),a=[];for(i.length<1&&A(e,`directive name must not be less than one character in length`);r!==0;){for(;x(r);)r=e.input.charCodeAt(++e.position);if(r===35){do r=e.input.charCodeAt(++e.position);while(r!==0&&!b(r));break}if(b(r))break;for(t=e.position;r!==0&&!S(r);)r=e.input.charCodeAt(++e.position);a.push(e.input.slice(t,e.position))}r!==0&&ue(e),o.call(le,i)?le[i](e,i,a):ie(e,`unknown document directive "`+i+`"`)}if(I(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,I(e,!0,-1)):n&&A(e,`directives end mark is expected`),R(e,e.lineIndent-1,u,!1,!0),I(e,!0,-1),e.checkLineBreaks&&h.test(e.input.slice(t,e.position))&&ie(e,`non-ASCII line breaks are interpreted as content`),e.documents.push(e.result),e.position===e.lineStart&&de(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,I(e,!0,-1));return}e.position<e.length-1&&A(e,`end of the stream or a document separator is expected`)}function we(e,t){e=String(e),t||={},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));let n=new O(e,t),r=e.indexOf(`\0`);for(r!==-1&&(n.position=r,A(n,`null byte is not allowed in input`)),n.input+=`\0`;n.input.charCodeAt(n.position)===32;)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)Ce(n);return n.documents}function Te(e,t,n){typeof t==`object`&&t&&n===void 0&&(n=t,t=null);let r=we(e,n);if(typeof t!=`function`)return r;for(let e=0,n=r.length;e<n;e+=1)t(r[e])}function Ee(e,t){let n=we(e,t);if(n.length!==0){if(n.length===1)return n[0];throw new r(`expected a single document in the stream, but found more`)}}t.exports.loadAll=Te,t.exports.load=Ee})),Da=t(((e,t)=>{var n=aa(),r=oa(),i=Ta(),a=Object.prototype.toString,o=Object.prototype.hasOwnProperty,s=65279,c=9,l=10,u=13,d=32,f=33,p=34,m=35,h=37,g=38,_=39,v=42,y=44,b=45,x=58,S=61,ee=62,C=63,te=64,w=91,T=93,E=96,ne=123,re=124,D=125,O={};O[0]=`\\0`,O[7]=`\\a`,O[8]=`\\b`,O[9]=`\\t`,O[10]=`\\n`,O[11]=`\\v`,O[12]=`\\f`,O[13]=`\\r`,O[27]=`\\e`,O[34]=`\\"`,O[92]=`\\\\`,O[133]=`\\N`,O[160]=`\\_`,O[8232]=`\\L`,O[8233]=`\\P`;var k=[`y`,`Y`,`yes`,`Yes`,`YES`,`on`,`On`,`ON`,`n`,`N`,`no`,`No`,`NO`,`off`,`Off`,`OFF`],A=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function ie(e,t){if(t===null)return{};let n={},r=Object.keys(t);for(let i=0,a=r.length;i<a;i+=1){let a=r[i],s=String(t[a]);a.slice(0,2)===`!!`&&(a=`tag:yaml.org,2002:`+a.slice(2));let c=e.compiledTypeMap.fallback[a];c&&o.call(c.styleAliases,s)&&(s=c.styleAliases[s]),n[a]=s}return n}function j(e){let t,i,a=e.toString(16).toUpperCase();if(e<=255)t=`x`,i=2;else if(e<=65535)t=`u`,i=4;else if(e<=4294967295)t=`U`,i=8;else throw new r(`code point within a string may not be greater than 0xFFFFFFFF`);return`\\`+t+n.repeat(`0`,i-a.length)+a}var ae=1,oe=2;function M(e){this.schema=e.schema||i,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=n.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=ie(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType===`"`?oe:ae,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer==`function`?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result=``,this.duplicates=[],this.usedDuplicates=null}function se(e,t){let r=n.repeat(` `,t),i=0,a=``,o=e.length;for(;i<o;){let t,n=e.indexOf(`
`,i);n===-1?(t=e.slice(i),i=o):(t=e.slice(i,n+1),i=n+1),t.length&&t!==`
`&&(a+=r),a+=t}return a}function ce(e,t){return`
`+n.repeat(` `,e.indent*t)}function le(e,t){for(let n=0,r=e.implicitTypes.length;n<r;n+=1)if(e.implicitTypes[n].resolve(t))return!0;return!1}function N(e){return e===d||e===c}function P(e){return e>=32&&e<=126||e>=161&&e<=55295&&e!==8232&&e!==8233||e>=57344&&e<=65533&&e!==s||e>=65536&&e<=1114111}function F(e){return P(e)&&e!==s&&e!==u&&e!==l}function ue(e,t,n){let r=F(e),i=r&&!N(e);return(n?r:r&&e!==y&&e!==w&&e!==T&&e!==ne&&e!==D)&&e!==m&&!(t===x&&!i)||F(t)&&!N(t)&&e===m||t===x&&i}function I(e){return P(e)&&e!==s&&!N(e)&&e!==b&&e!==C&&e!==x&&e!==y&&e!==w&&e!==T&&e!==ne&&e!==D&&e!==m&&e!==g&&e!==v&&e!==f&&e!==re&&e!==S&&e!==ee&&e!==_&&e!==p&&e!==h&&e!==te&&e!==E}function de(e){return!N(e)&&e!==x}function fe(e,t){let n=e.charCodeAt(t),r;return n>=55296&&n<=56319&&t+1<e.length&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(n-55296)*1024+r-56320+65536:n}function pe(e){return/^\n* /.test(e)}var me=1,he=2,ge=3,_e=4,L=5;function ve(e,t,n,r,i,a,o,s){let c,u=0,d=null,f=!1,p=!1,m=r!==-1,h=-1,g=I(fe(e,0))&&de(fe(e,e.length-1));if(t||o)for(c=0;c<e.length;u>=65536?c+=2:c++){if(u=fe(e,c),!P(u))return L;g&&=ue(u,d,s),d=u}else{for(c=0;c<e.length;u>=65536?c+=2:c++){if(u=fe(e,c),u===l)f=!0,m&&(p||=c-h-1>r&&e[h+1]!==` `,h=c);else if(!P(u))return L;g&&=ue(u,d,s),d=u}p||=m&&c-h-1>r&&e[h+1]!==` `}return!f&&!p?g&&!o&&!i(e)?me:a===oe?L:he:n>9&&pe(e)?L:o?a===oe?L:he:p?_e:ge}function ye(e,t,n,i,a){e.dump=function(){if(t.length===0)return e.quotingType===oe?`""`:`''`;if(!e.noCompatMode&&(k.indexOf(t)!==-1||A.test(t)))return e.quotingType===oe?`"`+t+`"`:`'`+t+`'`;let o=e.indent*Math.max(1,n),s=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),c=i||e.flowLevel>-1&&n>=e.flowLevel;function l(t){return le(e,t)}switch(ve(t,c,e.indent,s,l,e.quotingType,e.forceQuotes&&!i,a)){case me:return t;case he:return`'`+t.replace(/'/g,`''`)+`'`;case ge:return`|`+be(t,e.indent)+xe(se(t,o));case _e:return`>`+be(t,e.indent)+xe(se(Se(t,s),o));case L:return`"`+Ce(t,s)+`"`;default:throw new r(`impossible error: invalid scalar style`)}}()}function be(e,t){let n=pe(e)?String(t):``,r=e[e.length-1]===`
`;return n+(r&&(e[e.length-2]===`
`||e===`
`)?`+`:r?``:`-`)+`
`}function xe(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Se(e,t){let n=/(\n+)([^\n]*)/g,r=function(){let r=e.indexOf(`
`);return r=r===-1?e.length:r,n.lastIndex=r,R(e.slice(0,r),t)}(),i=e[0]===`
`||e[0]===` `,a,o;for(;o=n.exec(e);){let e=o[1],n=o[2];a=n[0]===` `,r+=e+(!i&&!a&&n!==``?`
`:``)+R(n,t),i=a}return r}function R(e,t){if(e===``||e[0]===` `)return e;let n=/ [^ ]/g,r,i=0,a,o=0,s=0,c=``;for(;r=n.exec(e);)s=r.index,s-i>t&&(a=o>i?o:s,c+=`
`+e.slice(i,a),i=a+1),o=s;return c+=`
`,e.length-i>t&&o>i?c+=e.slice(i,o)+`
`+e.slice(o+1):c+=e.slice(i),c.slice(1)}function Ce(e){let t=``,n=0;for(let r=0;r<e.length;n>=65536?r+=2:r++){n=fe(e,r);let i=O[n];!i&&P(n)?(t+=e[r],n>=65536&&(t+=e[r+1])):t+=i||j(n)}return t}function we(e,t,n){let r=``,i=e.tag;for(let i=0,a=n.length;i<a;i+=1){let a=n[i];e.replacer&&(a=e.replacer.call(n,String(i),a)),(z(e,t,a,!1,!1)||a===void 0&&z(e,t,null,!1,!1))&&(r!==``&&(r+=`,`+(e.condenseFlow?``:` `)),r+=e.dump)}e.tag=i,e.dump=`[`+r+`]`}function Te(e,t,n,r){let i=``,a=e.tag;for(let a=0,o=n.length;a<o;a+=1){let o=n[a];e.replacer&&(o=e.replacer.call(n,String(a),o)),(z(e,t+1,o,!0,!0,!1,!0)||o===void 0&&z(e,t+1,null,!0,!0,!1,!0))&&((!r||i!==``)&&(i+=ce(e,t)),e.dump&&l===e.dump.charCodeAt(0)?i+=`-`:i+=`- `,i+=e.dump)}e.tag=a,e.dump=i||`[]`}function Ee(e,t,n){let r=``,i=e.tag,a=Object.keys(n);for(let i=0,o=a.length;i<o;i+=1){let o=``;r!==``&&(o+=`, `),e.condenseFlow&&(o+=`"`);let s=a[i],c=n[s];e.replacer&&(c=e.replacer.call(n,s,c)),z(e,t,s,!1,!1)&&(e.dump.length>1024&&(o+=`? `),o+=e.dump+(e.condenseFlow?`"`:``)+`:`+(e.condenseFlow?``:` `),z(e,t,c,!1,!1)&&(o+=e.dump,r+=o))}e.tag=i,e.dump=`{`+r+`}`}function De(e,t,n,i){let a=``,o=e.tag,s=Object.keys(n);if(e.sortKeys===!0)s.sort();else if(typeof e.sortKeys==`function`)s.sort(e.sortKeys);else if(e.sortKeys)throw new r(`sortKeys must be a boolean or a function`);for(let r=0,o=s.length;r<o;r+=1){let o=``;(!i||a!==``)&&(o+=ce(e,t));let c=s[r],u=n[c];if(e.replacer&&(u=e.replacer.call(n,c,u)),!z(e,t+1,c,!0,!0,!0))continue;let d=e.tag!==null&&e.tag!==`?`||e.dump&&e.dump.length>1024;d&&(e.dump&&l===e.dump.charCodeAt(0)?o+=`?`:o+=`? `),o+=e.dump,d&&(o+=ce(e,t)),z(e,t+1,u,!0,d)&&(e.dump&&l===e.dump.charCodeAt(0)?o+=`:`:o+=`: `,o+=e.dump,a+=o)}e.tag=o,e.dump=a||`{}`}function Oe(e,t,n){let i=n?e.explicitTypes:e.implicitTypes;for(let s=0,c=i.length;s<c;s+=1){let c=i[s];if((c.instanceOf||c.predicate)&&(!c.instanceOf||typeof t==`object`&&t instanceof c.instanceOf)&&(!c.predicate||c.predicate(t))){if(e.tag=n?c.multi&&c.representName?c.representName(t):c.tag:`?`,c.represent){let n=e.styleMap[c.tag]||c.defaultStyle,i;if(a.call(c.represent)===`[object Function]`)i=c.represent(t,n);else if(o.call(c.represent,n))i=c.represent[n](t,n);else throw new r(`!<`+c.tag+`> tag resolver accepts not "`+n+`" style`);e.dump=i}return!0}}return!1}function z(e,t,n,i,o,s,c){e.tag=null,e.dump=n,Oe(e,n,!1)||Oe(e,n,!0);let l=a.call(e.dump),u=i;i&&=e.flowLevel<0||e.flowLevel>t;let d=l===`[object Object]`||l===`[object Array]`,f,p;if(d&&(f=e.duplicates.indexOf(n),p=f!==-1),(e.tag!==null&&e.tag!==`?`||p||e.indent!==2&&t>0)&&(o=!1),p&&e.usedDuplicates[f])e.dump=`*ref_`+f;else{if(d&&p&&!e.usedDuplicates[f]&&(e.usedDuplicates[f]=!0),l===`[object Object]`)i&&Object.keys(e.dump).length!==0?(De(e,t,e.dump,o),p&&(e.dump=`&ref_`+f+e.dump)):(Ee(e,t,e.dump),p&&(e.dump=`&ref_`+f+` `+e.dump));else if(l===`[object Array]`)i&&e.dump.length!==0?(e.noArrayIndent&&!c&&t>0?Te(e,t-1,e.dump,o):Te(e,t,e.dump,o),p&&(e.dump=`&ref_`+f+e.dump)):(we(e,t,e.dump),p&&(e.dump=`&ref_`+f+` `+e.dump));else if(l===`[object String]`)e.tag!==`?`&&ye(e,e.dump,t,s,u);else if(l===`[object Undefined]`)return!1;else{if(e.skipInvalid)return!1;throw new r(`unacceptable kind of an object to dump `+l)}if(e.tag!==null&&e.tag!==`?`){let t=encodeURI(e.tag[0]===`!`?e.tag.slice(1):e.tag).replace(/!/g,`%21`);t=e.tag[0]===`!`?`!`+t:t.slice(0,18)===`tag:yaml.org,2002:`?`!!`+t.slice(18):`!<`+t+`>`,e.dump=t+` `+e.dump}}return!0}function ke(e,t){let n=[],r=[];Ae(e,n,r);let i=r.length;for(let e=0;e<i;e+=1)t.duplicates.push(n[r[e]]);t.usedDuplicates=Array(i)}function Ae(e,t,n){if(typeof e==`object`&&e){let r=t.indexOf(e);if(r!==-1)n.indexOf(r)===-1&&n.push(r);else if(t.push(e),Array.isArray(e))for(let r=0,i=e.length;r<i;r+=1)Ae(e[r],t,n);else{let r=Object.keys(e);for(let i=0,a=r.length;i<a;i+=1)Ae(e[r[i]],t,n)}}}function je(e,t){t||={};let n=new M(t);n.noRefs||ke(e,n);let r=e;return n.replacer&&(r=n.replacer.call({"":r},``,r)),z(n,0,r,!0,!0)?n.dump+`
`:``}t.exports.dump=je})),Oa=t(((e,t)=>{var n=Ea(),r=Da();function i(e,t){return function(){throw Error(`Function yaml.`+e+` is removed in js-yaml 4. Use yaml.`+t+` instead, which is now safe by default.`)}}t.exports.Type=Q(),t.exports.Schema=ca(),t.exports.FAILSAFE_SCHEMA=fa(),t.exports.JSON_SCHEMA=_a(),t.exports.CORE_SCHEMA=va(),t.exports.DEFAULT_SCHEMA=Ta(),t.exports.load=n.load,t.exports.loadAll=n.loadAll,t.exports.dump=r.dump,t.exports.YAMLException=oa(),t.exports.types={binary:xa(),float:ga(),map:da(),null:pa(),pairs:Ca(),set:wa(),timestamp:ya(),bool:ma(),int:ha(),merge:ba(),omap:Sa(),seq:ua(),str:la()},t.exports.safeLoad=i(`safeLoad`,`load`),t.exports.safeLoadAll=i(`safeLoadAll`,`loadAll`),t.exports.safeDump=i(`safeDump`,`dump`)})),ka=e(t(((e,t)=>{var n=Oa(),r=`\\ufeff?`,i=typeof process<`u`?process.platform:``,a=`^(`+r+`(= yaml =|---)$([\\s\\S]*?)^(?:\\2|\\.\\.\\.)\\s*$`+(i===`win32`?`\\r?`:``)+`(?:\\n)?)`,o=new RegExp(a,`m`);t.exports=s,t.exports.test=u;function s(e,t){e||=``;var n={allowUnsafe:!1};t=t instanceof Object?{...n,...t}:n,t.allowUnsafe=!!t.allowUnsafe;var r=e.split(/(\r?\n)/);return r[0]&&/= yaml =|---/.test(r[0])?l(e,t.allowUnsafe):{attributes:{},body:e,bodyBegin:1}}function c(e,t){for(var n=1,r=t.indexOf(`
`),i=e.index+e[0].length;r!==-1;){if(r>=i)return n;n++,r=t.indexOf(`
`,r+1)}return n}function l(e,t){var r=o.exec(e);if(!r)return{attributes:{},body:e,bodyBegin:1};var i=n.load,a=r[r.length-1].replace(/^\s+|\s+$/g,``);return{attributes:i(a)||{},body:e.replace(r[0],``),bodyBegin:c(r,e),frontmatter:a}}function u(e){return e||=``,o.test(e)}}))(),1);Object.entries(gt).forEach(([e,t])=>{f.registerLanguage(e,t)});var Aa=/"/g,ja=/_/g,Ma=/^h\d$/,Na=/^<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/,Pa=/^https?:\/\/mp\.weixin\.qq\.com/,Fa=`{words} words, about {minutes} min read`,Ia=`References`,La=`
    <style>
      .preview-wrapper pre::before {
        position: absolute;
        top: 0;
        right: 0;
        color: #ccc;
        text-align: center;
        font-size: 0.8em;
        padding: 5px 10px 0;
        line-height: 15px;
        height: 15px;
        font-weight: 600;
      }
    </style>
  `;function Ra(e){return e.map(([e,t,n])=>n===t?`<code style="font-size: 90%; opacity: 0.6;">[${e}]</code>: <i style="word-break: break-all">${t}</i><br/>`:`<code style="font-size: 90%; opacity: 0.6;">[${e}]</code> ${t}: <i style="word-break: break-all">${n}</i><br/>`).join(`
`)}function za(e){try{return(e.split(`?`)[0].split(`#`)[0].split(`/`).pop()||``).replace(/\.[^.]*$/,``)}catch{return``}}function Ba(e,t,n,r=``){let i=e.split(`-`);for(let e of i){if(e===`alt`&&t)return t;if(e===`title`&&n)return n;if(e===`filename`&&r){let e=za(r);if(e)return U(e)}}return``}var Va=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="45px" height="13px" viewBox="0 0 450 130">
    <ellipse cx="50" cy="65" rx="50" ry="52" stroke="rgb(220,60,54)" stroke-width="2" fill="rgb(237,108,96)" />
    <ellipse cx="225" cy="65" rx="50" ry="52" stroke="rgb(218,151,33)" stroke-width="2" fill="rgb(247,193,81)" />
    <ellipse cx="400" cy="65" rx="50" ry="52" stroke="rgb(27,161,37)" stroke-width="2" fill="rgb(100,200,86)" />
  </svg>`;function Ha(e,t){let n=f.getLanguage(t),r=n?t:`plaintext`,i=e.split(`
`),a=i.map(e=>e[0]),o=i.map((e,t)=>{let n=a[t];return n===`+`||n===`-`?e.slice(1):e}),s=n?f.highlight(o.join(`
`),{language:r}).value.split(`
`):o.map(U),c=i.map((e,t)=>{let n=a[t],r=s[t]??``,i,o;return n===`+`?(i=`background:rgba(80,200,80,.18);`,o=`<span style="color:#52c41a;user-select:none;">+</span>`):n===`-`?(i=`background:rgba(255,80,80,.18);`,o=`<span style="color:#ff4d4f;user-select:none;">-</span>`):(i=``,o=`<span style="user-select:none;"> </span>`),`<span style="display:block;${i}">${o}${r}</span>`}).join(``);return`<pre class="hljs code__pre">${`<span class="mac-sign" style="padding: 10px 14px 0;">${Va}</span>`}<code class="language-diff-${t}"><span class="code-block__inner" style="display:block">${c}</span></code></pre>`}function Ua(e){try{let t=(0,ka.default)(e),n=t.attributes,r=t.body;return{yamlData:n,markdownContent:r,readingTime:ia(r)}}catch(t){return console.error(`Error parsing front-matter:`,t),{yamlData:{},markdownContent:e,readingTime:ia(e)}}}function Wa(e={}){let t=[],n=0,r=[],i=[],a=new Fr;a.setOptions({breaks:!0});function o(){return e}function s(e,t,n,r){let i=n??e;return`<${i} class="${`${e.replace(ja,`-`)}`}"${Ma.test(i)?` data-heading="true"`:``}${r?` style="${r}"`:``}>${t}</${i}>`}function c(e,r){let i=t.find(([,,e])=>e===r);return i?i[0]:(t.push([++n,e,r]),n)}function l(e){t.length=0,n=0,r.length=0,i.length=0,u(e)}function u(t){e={...e,...t}}function d(t,n){return(e.countMessages?.summary||Fa).split(`{words}`).join(String(t)).split(`{minutes}`).join(String(n))}function p(t){if(!e.countStatus||!t.words)return``;let n=Math.ceil(t.minutes);return`
      <blockquote class="md-blockquote">
        <p class="md-blockquote-p">${d(t.words,n)}</p>
      </blockquote>
    `}return a.use({renderer:{heading({tokens:e,depth:t}){let n=this.parser.parseInline(e);return s(`h${t}`,n)},paragraph({tokens:e}){let t=this.parser.parseInline(e),n=t.includes(`<figure`)&&t.includes(`<img`),r=t.trim()===``,i=/^<section class="katex-block"[\s\S]*<\/section>\s*$/.test(t.trim());return n||r||i?t:s(`p`,t)},blockquote({tokens:e}){return s(`blockquote`,this.parser.parse(e))},code({text:t,lang:n=``}){let r=n.split(` `)[0];if(r.startsWith(`diff-`))return Ha(t,r.slice(5));let i=f.getLanguage(r),a=Ct(t,i?r:`plaintext`,f,!!e.isShowLineNumber),o=`<span class="mac-sign" style="padding: 10px 14px 0;">${Va}</span>`,s=``;return!i&&r!==`plaintext`&&(s=` data-language-pending="${r}" data-raw-code="${t.replace(Aa,`&quot;`)}" data-show-line-number="${e.isShowLineNumber}"`),`<pre class="hljs code__pre">${o}${`<code class="language-${n}"${s}>${a}</code>`}</pre>`},codespan({text:e}){return s(`codespan`,U(e),`code`)},list({ordered:e,items:t,start:n=1}){r.push(e),i.push(Number(n));let a=t.map(e=>this.listitem(e)).join(``);return r.pop(),i.pop(),s(e?`ol`:`ul`,a)},listitem(e){let t=r[r.length-1],n=i[i.length-1];i[i.length-1]=n+1;let a=t?`${n}. `:`• `,o;try{o=this.parser.parseInline(e.tokens)}catch{o=this.parser.parse(e.tokens).replace(Na,`$1`)}return s(`listitem`,`${a}${o}`,`li`)},image({href:t,title:n,text:r}){let i=``,a=``,o=r,c=r.match(/\|(\d+)(?:x(\d+))?$/);c&&(o=r.replace(/\|(\d+)(?:x(\d+))?$/,``),i=c[1]?` width="${c[1]}"`:``,a=c[2]?` height="${c[2]}"`:``);let l=e.legend?Ba(e.legend,o,n,t):``,u=l?s(`figcaption`,l):``;return`<figure><img src="${t}"${n?` title="${n}"`:``}${i}${a} alt="${o}"/>${u}</figure>`},link({href:t,title:n,text:r,tokens:i}){let a=this.parser.parseInline(i);if(Pa.test(t))return`<a href="${t}" title="${n||r}">${a}</a>`;if(t===r)return a;if(e.citeStatus){let e=c(n||r,t);return`<a href="${t}" title="${n||r}">${a}<sup>[${e}]</sup></a>`}return`<a href="${t}" title="${n||r}">${a}</a>`},strong({tokens:e}){return s(`strong`,this.parser.parseInline(e))},em({tokens:e}){return s(`em`,this.parser.parseInline(e))},table({header:e,rows:t}){return`
        <section style="max-width: 100%; overflow: auto; -webkit-overflow-scrolling: touch">
          <table class="preview-table">
            <thead>${e.map(e=>s(`th`,this.parser.parseInline(e.tokens),void 0,`text-align: ${e.align||`left`}`)).join(``)}</thead>
            <tbody>${t.map(e=>s(`tr`,e.map(e=>this.tablecell(e)).join(``))).join(``)}</tbody>
          </table>
        </section>
      `},tablecell(e){return s(`td`,this.parser.parseInline(e.tokens),void 0,`text-align: ${e.align||`left`}`)},hr(e){let t=e.raw.trim(),n=`dash`;return t.includes(`*`)?n=`star`:t.includes(`_`)&&(n=`underscore`),`<hr class="hr hr-${n}">`}}}),a.use(ri(()=>e.components??ti(),()=>e.renderMessages)),a.use(Fi()),a.use($i()),a.use(Qi()),a.use(Rr({})),a.use(Pi({nonStandard:!0,getKatexLoadingMessage:()=>e.renderMessages?.katexLoading},!0)),a.use(ii()),a.use(ht(()=>({themeMode:e.themeMode,diagramMessages:e.diagramMessages}))),a.use(Xi({inlineSvg:!0,getDiagramMessages:()=>e.diagramMessages,getThemeMode:()=>e.themeMode})),a.use(Ti(()=>({themeMode:e.themeMode,diagramMessages:e.diagramMessages}))),a.use(Zi()),{buildAddition:()=>La,buildFootnotes:()=>t.length?s(`h4`,e.renderMessages?.footnoteTitle||Ia)+s(`footnotes`,Ra(t),`p`):``,setOptions:u,reset:l,parseFrontMatterAndContent:Ua,renderMarkdownToHtml(e){return a.parse(e)},buildReadingTime:p,createContainer(e){return s(`container`,e,`section`)},getOpts:o}}function Ga(e){let t=new Map;for(let n of e.matchAll(/--([\w-]+)\s*:\s*([^;}\n]+)/g))t.set(`--${n[1]}`,n[2].trim());return t}function Ka(e){let t=Ga(e),n=/var\(\s*(--[\w-]+)\s*(?:,([^()]*(?:\([^()]*\)[^()]*)*))?\)/g,r=e,i=``,a=0;for(;r!==i&&a<10;)i=r,r=r.replace(n,(e,n,r)=>{let i=t.get(n);return i===void 0?r?r.trim():`var(${n})`:i}),a++;let o=/calc\(([^()]+)\)/g;for(i=``,a=0;r!==i&&a<10;)i=r,r=r.replace(o,(e,t)=>Xa(t.trim())),a++;return r}var qa=`px|em|rem|vw|vh|vmin|vmax|%|pt|pc|cm|mm|in|ex|ch`,Ja=`(-?[\\d.]+)`,Ya=`(-?[\\d.]+)(${qa})?`;function Xa(e){let t=e.match(RegExp(`^${Ya}\\s*\\*\\s*${Ya}$`));if(t){let[,e,n,r,i]=t;if(!n!=!i){let t=n||i;return`${Za(Number.parseFloat(e)*Number.parseFloat(r))}${t}`}}let n=e.match(RegExp(`^${Ya}\\s*/\\s*${Ja}$`));if(n){let[,e,t,,r]=n;return`${Za(Number.parseFloat(e)/Number.parseFloat(r))}${t??``}`}let r=e.match(RegExp(`^${Ya}\\s*([+-])\\s*${Ya}$`));if(r){let[,e,t,n,i,a]=r;if(t===a)return`${Za(n===`+`?Number.parseFloat(e)+Number.parseFloat(i):Number.parseFloat(e)-Number.parseFloat(i))}${t??``}`}return`calc(${e})`}function Za(e){return Math.round(e*1e4)/1e4}var Qa={blockquote_note:`markdown-alert-note`,blockquote_tip:`markdown-alert-tip`,blockquote_info:`markdown-alert-info`,blockquote_important:`markdown-alert-important`,blockquote_warning:`markdown-alert-warning`,blockquote_caution:`markdown-alert-caution`,blockquote_abstract:`markdown-alert-abstract`,blockquote_summary:`markdown-alert-summary`,blockquote_tldr:`markdown-alert-tldr`,blockquote_todo:`markdown-alert-todo`,blockquote_success:`markdown-alert-success`,blockquote_done:`markdown-alert-done`,blockquote_question:`markdown-alert-question`,blockquote_help:`markdown-alert-help`,blockquote_faq:`markdown-alert-faq`,blockquote_failure:`markdown-alert-failure`,blockquote_fail:`markdown-alert-fail`,blockquote_missing:`markdown-alert-missing`,blockquote_danger:`markdown-alert-danger`,blockquote_error:`markdown-alert-error`,blockquote_bug:`markdown-alert-bug`,blockquote_example:`markdown-alert-example`,blockquote_quote:`markdown-alert-quote`,blockquote_cite:`markdown-alert-cite`,blockquote_title:`alert-title`,blockquote_title_note:`alert-title-note`,blockquote_title_tip:`alert-title-tip`,blockquote_title_info:`alert-title-info`,blockquote_title_important:`alert-title-important`,blockquote_title_warning:`alert-title-warning`,blockquote_title_caution:`alert-title-caution`,blockquote_title_abstract:`alert-title-abstract`,blockquote_title_summary:`alert-title-summary`,blockquote_title_tldr:`alert-title-tldr`,blockquote_title_todo:`alert-title-todo`,blockquote_title_success:`alert-title-success`,blockquote_title_done:`alert-title-done`,blockquote_title_question:`alert-title-question`,blockquote_title_help:`alert-title-help`,blockquote_title_faq:`alert-title-faq`,blockquote_title_failure:`alert-title-failure`,blockquote_title_fail:`alert-title-fail`,blockquote_title_missing:`alert-title-missing`,blockquote_title_danger:`alert-title-danger`,blockquote_title_error:`alert-title-error`,blockquote_title_bug:`alert-title-bug`,blockquote_title_example:`alert-title-example`,blockquote_title_quote:`alert-title-quote`,blockquote_title_cite:`alert-title-cite`,blockquote_p:`alert-content`,blockquote_p_note:`alert-content-note`,blockquote_p_tip:`alert-content-tip`,blockquote_p_info:`alert-content-info`,blockquote_p_important:`alert-content-important`,blockquote_p_warning:`alert-content-warning`,blockquote_p_caution:`alert-content-caution`,blockquote_p_abstract:`alert-content-abstract`,blockquote_p_summary:`alert-content-summary`,blockquote_p_tldr:`alert-content-tldr`,blockquote_p_todo:`alert-content-todo`,blockquote_p_success:`alert-content-success`,blockquote_p_done:`alert-content-done`,blockquote_p_question:`alert-content-question`,blockquote_p_help:`alert-content-help`,blockquote_p_faq:`alert-content-faq`,blockquote_p_failure:`alert-content-failure`,blockquote_p_fail:`alert-content-fail`,blockquote_p_missing:`alert-content-missing`,blockquote_p_danger:`alert-content-danger`,blockquote_p_error:`alert-content-error`,blockquote_p_bug:`alert-content-bug`,blockquote_p_example:`alert-content-example`,blockquote_p_quote:`alert-content-quote`,blockquote_p_cite:`alert-content-cite`,code_pre:`code-block`,codespan:`code-inline`,inline_katex:`katex-inline`,block_katex:`katex-block`,markup_highlight:`markup-highlight`,markup_underline:`markup-underline`,markup_wavyline:`markup-wavyline`,listitem:`listitem`};function $a(e,t=`#output`){return e.replace(/([^{}]+)\{([^}]*)\}/g,(e,n,r)=>{let i=n.trim();return i.startsWith(`@`)||i.startsWith(`:root`)?e:`${n.split(`,`).map(e=>{let n=e.trim();if(n.startsWith(t)||!n)return n;n=n.replace(/\.md-container\b/g,`.container`);let r=n.split(/[\s>+~:[]/,1)[0].trim();return r&&Qa[r]&&(n=n.replace(r,`.${Qa[r]}`)),n.match(/^(h[1-6])(\s|$|::|[:[])/)?`${t} section ${n}`:`${t} ${n}`}).filter(Boolean).join(`,
`)} {${r}}`})}function eo(e){return`
:root {
  /* Theme config */
  --md-primary-color: ${e.primaryColor};
  --md-font-family: ${e.fontFamily};
  --md-font-size: ${e.fontSize};
}

/* Paragraph indent & justify */
#output p {
  ${e.isUseIndent?`text-indent: 2em;`:``}
  ${e.isUseJustify?`text-align: justify;`:``}
}
  `.trim()}function to(e){return no(e.headingStyles)}function no(e){if(!e)return``;let t=[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`],n=[];for(let r of t){let t=e[r];t&&t!=="default"&&t!==`custom`&&n.push(ro(r,t))}return n.join(`

`)}function ro(e,t){let n=`
  display: block;
  text-align: left;
  background: transparent;`;switch(t){case`color-only`:return`#output ${e} {
  color: var(--md-primary-color);
  background: transparent;
}`;case`border-bottom`:return`#output ${e} {${n}
  padding-bottom: 0.3em;
  border-bottom: 2px solid var(--md-primary-color);
  color: var(--md-primary-color);
}`;case`border-left`:return`#output ${e} {${n}
  margin-left: 0;
  padding-left: 10px;
  border-left: 4px solid var(--md-primary-color);
  color: var(--md-primary-color);
}`;default:return``}}var io=`/**
 * MD base theme styles
 * Base element styles and CSS variable definitions
 */

/* ==================== Container ==================== */
section,
#output .container {
  font-family: var(--md-font-family);
  font-size: var(--md-font-size);
  line-height: 1.75;
  text-align: left;
}

#output {
  font-family: var(--md-font-family);
  font-size: var(--md-font-size);
  line-height: 1.75;
  text-align: left;
}

#output section > :first-child {
  margin-top: 0 !important;
}

/*
 * Reset for exported HTML / share pages / VSCode preview (no Tailwind preflight).
 * Browser defaults leak in (e.g. blockquote 40px side margins, table border-collapse: separate).
 * Reset horizontal (and top) margins so export matches in-app preview.
 * Vertical spacing comes from theme blockquote { margin-bottom }; do not zero all margins here.
 * section selector covers VSCode preview (no #output; content in section.container).
 */
#output blockquote,
section blockquote {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
}

#output table,
section table {
  border-collapse: collapse;
  min-width: 100%;
}

.mermaid-diagram .nodeLabel p {
  color: unset !important;
  letter-spacing: unset !important;
}
`,ao=`/**
 * MD default theme (classic).
 * Format with Alt/Option + Shift + F.
 * Use var(--md-primary-color) for theme color instead of hard-coded values.
 */

/* ==================== H1 ==================== */
h1 {
  display: table;
  padding: 0 1em;
  border-bottom: 2px solid var(--md-primary-color);
  margin: 2em auto 1em;
  color: hsl(var(--foreground));
  font-size: calc(var(--md-font-size) * 1.2);
  font-weight: bold;
  text-align: center;
}

/* ==================== H2 ==================== */
h2 {
  display: table;
  padding: 0 0.2em;
  margin: 4em auto 2em;
  color: #fff;
  background: var(--md-primary-color);
  font-size: calc(var(--md-font-size) * 1.2);
  font-weight: bold;
  text-align: center;
}

/* ==================== H3 ==================== */
h3 {
  padding-left: 8px;
  border-left: 3px solid var(--md-primary-color);
  margin: 2em 8px 0.75em 0;
  color: hsl(var(--foreground));
  font-size: calc(var(--md-font-size) * 1.1);
  font-weight: bold;
  line-height: 1.2;
}

/* ==================== H4 ==================== */
h4 {
  margin: 2em 8px 0.5em;
  color: var(--md-primary-color);
  font-size: calc(var(--md-font-size) * 1);
  font-weight: bold;
}

/* ==================== H5 ==================== */
h5 {
  margin: 1.5em 8px 0.5em;
  color: var(--md-primary-color);
  font-size: calc(var(--md-font-size) * 1);
  font-weight: bold;
}

/* ==================== H6 ==================== */
h6 {
  margin: 1.5em 8px 0.5em;
  font-size: calc(var(--md-font-size) * 1);
  color: var(--md-primary-color);
}

/* ==================== Paragraph ==================== */
p {
  margin: 1.5em 8px;
  letter-spacing: 0.1em;
  color: hsl(var(--foreground));
}

/* ==================== Blockquote ==================== */
blockquote {
  font-style: normal;
  padding: 1em;
  border-left: 4px solid var(--md-primary-color);
  border-radius: 6px;
  color: hsl(var(--foreground));
  background: var(--blockquote-background);
  margin-bottom: 1em;
}

blockquote > p {
  display: block;
  font-size: 1em;
  letter-spacing: 0.1em;
  color: hsl(var(--foreground));
  margin: 0;
}

/* ==================== GFM alerts ==================== */
.alert-title-note,
.alert-title-tip,
.alert-title-info,
.alert-title-important,
.alert-title-warning,
.alert-title-caution,
.alert-title-abstract,
.alert-title-summary,
.alert-title-tldr,
.alert-title-todo,
.alert-title-success,
.alert-title-done,
.alert-title-question,
.alert-title-help,
.alert-title-faq,
.alert-title-failure,
.alert-title-fail,
.alert-title-missing,
.alert-title-danger,
.alert-title-error,
.alert-title-bug,
.alert-title-example,
.alert-title-quote,
.alert-title-cite,
.alert-title-theorem,
.alert-title-lemma,
.alert-title-corollary,
.alert-title-proposition,
.alert-title-definition,
.alert-title-axiom,
.alert-title-postulate,
.alert-title-assumption,
.alert-title-proof,
.alert-title-remark,
.alert-title-custom {
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 0.5em;
}

.alert-title-note {
  color: #478be6;
}

.alert-title-tip {
  color: #57ab5a;
}

.alert-title-info {
  color: #93c5fd;
}

.alert-title-important {
  color: #986ee2;
}

.alert-title-warning {
  color: #c69026;
}

.alert-title-caution {
  color: #e5534b;
}

/* Obsidian-style callout colors */
.alert-title-abstract,
.alert-title-summary,
.alert-title-tldr {
  color: #00bfff;
}

.alert-title-todo {
  color: #478be6;
}

.alert-title-success,
.alert-title-done {
  color: #57ab5a;
}

.alert-title-question,
.alert-title-help,
.alert-title-faq {
  color: #c69026;
}

.alert-title-failure,
.alert-title-fail,
.alert-title-missing {
  color: #e5534b;
}

.alert-title-danger,
.alert-title-error {
  color: #e5534b;
}

.alert-title-bug {
  color: #e5534b;
}

.alert-title-example {
  color: #986ee2;
}

.alert-title-quote,
.alert-title-cite {
  color: #9ca3af;
}

/* GFM alert SVG icon colors */
.alert-icon-note {
  fill: #478be6;
}

.alert-icon-tip {
  fill: #57ab5a;
}

.alert-icon-info {
  fill: #93c5fd;
}

.alert-icon-important {
  fill: #986ee2;
}

.alert-icon-warning {
  fill: #c69026;
}

.alert-icon-caution {
  fill: #e5534b;
}

/* Obsidian-style callout icon colors */
.alert-icon-abstract,
.alert-icon-summary,
.alert-icon-tldr {
  fill: #00bfff;
}

.alert-icon-todo {
  fill: #478be6;
}

.alert-icon-success,
.alert-icon-done {
  fill: #57ab5a;
}

.alert-icon-question,
.alert-icon-help,
.alert-icon-faq {
  fill: #c69026;
}

.alert-icon-failure,
.alert-icon-fail,
.alert-icon-missing {
  fill: #e5534b;
}

.alert-icon-danger,
.alert-icon-error {
  fill: #e5534b;
}

.alert-icon-bug {
  fill: #e5534b;
}

.alert-icon-example {
  fill: #986ee2;
}

.alert-icon-quote,
.alert-icon-cite {
  fill: #9ca3af;
}

/* ==================== Academic environments (theorem, lemma, definition, …) ==================== */
/* Title colors */
.alert-title-theorem,
.alert-title-lemma,
.alert-title-corollary,
.alert-title-proposition {
  color: #986ee2;
}

.alert-title-definition {
  color: #57ab5a;
}

.alert-title-axiom,
.alert-title-postulate,
.alert-title-assumption {
  color: #478be6;
}

.alert-title-proof {
  color: #9ca3af;
}

.alert-title-remark {
  color: #c69026;
}

/* Icon colors */
.alert-icon-theorem,
.alert-icon-lemma,
.alert-icon-corollary,
.alert-icon-proposition {
  fill: #986ee2;
}

.alert-icon-definition {
  fill: #57ab5a;
}

.alert-icon-axiom,
.alert-icon-postulate,
.alert-icon-assumption {
  fill: #478be6;
}

.alert-icon-proof {
  fill: #9ca3af;
}

.alert-icon-remark {
  fill: #c69026;
}

/* Full border on academic boxes (theorem-style appearance) */
.markdown-alert-theorem,
.markdown-alert-lemma,
.markdown-alert-corollary,
.markdown-alert-proposition {
  border: 1px solid rgba(152, 110, 226, 0.35);
  border-left: 4px solid #986ee2;
}

.markdown-alert-definition {
  border: 1px solid rgba(87, 171, 90, 0.35);
  border-left: 4px solid #57ab5a;
}

.markdown-alert-axiom,
.markdown-alert-postulate,
.markdown-alert-assumption {
  border: 1px solid rgba(71, 139, 230, 0.35);
  border-left: 4px solid #478be6;
}

.markdown-alert-proof {
  border: 1px solid rgba(156, 163, 175, 0.35);
  border-left: 4px solid #9ca3af;
}

.markdown-alert-remark {
  border: 1px solid rgba(198, 144, 38, 0.35);
  border-left: 4px solid #c69026;
}

/* Fallback for custom/unknown names: no icon, theme primary color */
.alert-title-custom {
  color: var(--md-primary-color);
}

.markdown-alert-custom {
  border-left: 4px solid var(--md-primary-color);
}

/* Italic body text in academic environments (math convention) */
.markdown-alert-theorem > :not(.markdown-alert-title),
.markdown-alert-lemma > :not(.markdown-alert-title),
.markdown-alert-corollary > :not(.markdown-alert-title),
.markdown-alert-proposition > :not(.markdown-alert-title),
.markdown-alert-definition > :not(.markdown-alert-title),
.markdown-alert-axiom > :not(.markdown-alert-title),
.markdown-alert-postulate > :not(.markdown-alert-title),
.markdown-alert-assumption > :not(.markdown-alert-title) {
  font-style: italic;
}

/* ==================== Code blocks ==================== */
pre.code__pre,
.hljs.code__pre {
  font-size: 90%;
  overflow-x: auto;
  border-radius: 8px;
  padding: 0 !important;
  line-height: 1.5;
  margin: 10px 8px;
}

/* ==================== Images ==================== */
img {
  display: block;
  max-width: 100%;
  margin: 0.1em auto 0.5em;
  border-radius: 4px;
}

/* ==================== Lists ==================== */
ol {
  padding-left: 1em;
  margin-left: 0;
  color: hsl(var(--foreground));
}

ul {
  list-style: circle;
  padding-left: 1em;
  margin-left: 0;
  color: hsl(var(--foreground));
}

li {
  display: block;
  margin: 0.2em 8px;
  color: hsl(var(--foreground));
}

/* Footnotes */
/* footnotes rendered as <p> in buildFootnotes() */
p.footnotes {
  margin: 0.5em 8px;
  font-size: 80%;
  color: hsl(var(--foreground));
}

/* Diagrams */
figure {
  margin: 1.5em 8px;
  color: hsl(var(--foreground));
}

figcaption,
.md-figcaption {
  text-align: center;
  color: color-mix(in srgb, hsl(var(--foreground)) 50%, transparent);
  font-size: 0.8em;
}

/* ==================== Horizontal rules ==================== */
hr {
  border-style: solid;
  border-width: 2px 0 0;
  border-color: rgba(0, 0, 0, 0.1);
  -webkit-transform-origin: 0 0;
  -webkit-transform: scale(1, 0.5);
  transform-origin: 0 0;
  transform: scale(1, 0.5);
  height: 0.4em;
  margin: 1.5em 0;
}

/* Inline code */
.codespan {
  font-size: 90%;
  color: var(--md-primary-color);
  background: color-mix(in srgb, var(--md-primary-color) 8%, transparent);
  padding: 3px 5px;
  border-radius: 4px;
  border: 1px solid color-mix(in srgb, var(--md-primary-color) 20%, transparent);
}

/* code inside pre (override inline code) */
pre.code__pre > code,
.hljs.code__pre > code {
  display: -webkit-box;
  padding: 0.5em 1em 1em;
  overflow-x: auto;
  text-indent: 0;
  color: inherit;
  background: none;
  white-space: nowrap;
  margin: 0;
}

/* Emphasis */
em {
  font-style: italic;
  font-size: inherit;
}

/* ==================== Links ==================== */
a {
  color: #576b95;
  text-decoration: none;
}

/* ==================== Bold ==================== */
strong {
  color: var(--md-primary-color);
  font-weight: bold;
  font-size: inherit;
}

/* ==================== Tables ==================== */
table {
  color: hsl(var(--foreground));
}

thead {
  font-weight: bold;
  color: hsl(var(--foreground));
}

th {
  border: 1px solid color-mix(in srgb, hsl(var(--foreground)) 15%, transparent);
  padding: 0.25em 0.5em;
  color: hsl(var(--foreground));
  word-break: keep-all;
  background: color-mix(in srgb, hsl(var(--foreground)) 5%, transparent);
}

td {
  border: 1px solid color-mix(in srgb, hsl(var(--foreground)) 15%, transparent);
  padding: 0.25em 0.5em;
  color: hsl(var(--foreground));
  word-break: keep-all;
}

/* ==================== KaTeX ==================== */
.katex-inline {
  max-width: 100%;
  overflow-x: auto;
  cursor: pointer;
}

.katex-block {
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  cursor: pointer;
  padding: 0.5em 0;
  text-align: center;
}

.katex-pending {
  color: hsl(var(--muted-foreground, 0 0% 45%));
  font-size: 0.875em;
}

.katex-block.katex-pending {
  padding: 0.75em 0;
}

.katex-inline.katex-pending {
  opacity: 0.75;
}

/* ==================== Markup highlight ==================== */
.markup-highlight {
  background-color: var(--md-primary-color);
  padding: 2px 4px;
  border-radius: 2px;
  color: #fff;
}

.markup-underline {
  text-decoration: underline;
  text-decoration-color: var(--md-primary-color);
}

.markup-wavyline {
  text-decoration: underline wavy;
  text-decoration-color: var(--md-primary-color);
  text-decoration-thickness: 2px;
}
`,oo=`/**
 * MD grace theme (@brzhang) — refinements on default
 */

/* Headings */
h1 {
  padding: 0.5em 1em;
  border-bottom: 2px solid var(--md-primary-color);
  font-size: calc(var(--md-font-size) * 1.4);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  padding: 0.3em 1em;
  border-radius: 8px;
  font-size: calc(var(--md-font-size) * 1.3);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h3 {
  padding-left: 12px;
  font-size: calc(var(--md-font-size) * 1.2);
  border-left: 4px solid var(--md-primary-color);
  border-bottom: 1px dashed var(--md-primary-color);
}

h4 {
  font-size: calc(var(--md-font-size) * 1.1);
}

h5 {
  font-size: var(--md-font-size);
}

h6 {
  font-size: var(--md-font-size);
}

/* Blockquote */
blockquote {
  font-style: italic;
  padding: 1em 1em 1em 2em;
  border-left: 4px solid var(--md-primary-color);
  border-radius: 6px;
  color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 1em;
}

.markdown-alert {
  font-style: italic;
}

/* Inline code */
.codespan {
  font-family: 'Fira Code', Menlo, Operator Mono, Consolas, Monaco, monospace;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* Code blocks */
pre.code__pre,
.hljs.code__pre {
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
}

pre.code__pre > code,
.hljs.code__pre > code {
  font-family: 'Fira Code', Menlo, Operator Mono, Consolas, Monaco, monospace;
}

/* Images */
img {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

figcaption,
.md-figcaption {
  text-align: center;
  color: #888;
  font-size: 0.8em;
}

/* Lists */
ol {
  padding-left: 1.5em;
}

ul {
  list-style: none;
  padding-left: 1.5em;
}

li {
  margin: 0.5em 8px;
}

/* Horizontal rules */
hr {
  height: 1px;
  border: none;
  margin: 2em 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
}

/* Tables */
table {
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  margin: 1em 8px;
  color: hsl(var(--foreground));
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

thead {
  color: #fff;
}

td {
  padding: 0.5em 1em;
}

/* Emphasis */
em {
  font-style: italic;
  font-size: inherit;
}

/* Links */
a {
  color: #576b95;
  text-decoration: none;
}
`,so=`/**
 * MD simple theme (@okooo5km) — minimal modern layout
 */

/* Headings */
h1 {
  padding: 0.5em 1em;
  font-size: calc(var(--md-font-size) * 1.4);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.05);
}

h2 {
  padding: 0.3em 1.2em;
  font-size: calc(var(--md-font-size) * 1.3);
  border-radius: 8px 24px 8px 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
}

h3 {
  padding-left: 12px;
  font-size: calc(var(--md-font-size) * 1.2);
  border-radius: 6px;
  line-height: 2.4em;
  border-left: 4px solid var(--md-primary-color);
  border-right: 1px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent);
  border-top: 1px solid color-mix(in srgb, var(--md-primary-color) 10%, transparent);
  background: color-mix(in srgb, var(--md-primary-color) 8%, transparent);
}

h4 {
  font-size: calc(var(--md-font-size) * 1.1);
  border-radius: 6px;
}

h5 {
  font-size: var(--md-font-size);
  border-radius: 6px;
}

h6 {
  font-size: var(--md-font-size);
  border-radius: 6px;
}

/* Blockquote */
blockquote {
  font-style: italic;
  padding: 1em 1em 1em 2em;
  color: rgba(0, 0, 0, 0.6);
  border-bottom: 0.2px solid rgba(0, 0, 0, 0.04);
  border-top: 0.2px solid rgba(0, 0, 0, 0.04);
  border-right: 0.2px solid rgba(0, 0, 0, 0.04);
}

/* GFM alert overrides */
.markdown-alert-note,
.markdown-alert-tip,
.markdown-alert-info,
.markdown-alert-important,
.markdown-alert-warning,
.markdown-alert-caution {
  font-style: italic;
}

/* Inline code */
.codespan {
  font-family: 'Fira Code', Menlo, Operator Mono, Consolas, Monaco, monospace;
  border-radius: 6px;
  border: 1px solid color-mix(in srgb, var(--md-primary-color) 15%, transparent);
}

/* Code blocks */
pre.code__pre,
.hljs.code__pre {
  border: 1px solid rgba(0, 0, 0, 0.04);
}

pre.code__pre > code,
.hljs.code__pre > code {
  font-family: 'Fira Code', Menlo, Operator Mono, Consolas, Monaco, monospace;
}

/* Images */
img {
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.04);
}

figcaption,
.md-figcaption {
  text-align: center;
  color: #888;
  font-size: 0.8em;
}

/* Lists */
ol {
  padding-left: 1.5em;
}

ul {
  list-style: none;
  padding-left: 1.5em;
}

li {
  margin: 0.5em 8px;
}

/* Horizontal rules */
hr {
  height: 1px;
  border: none;
  margin: 2em 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
}

/* Emphasis */
em {
  font-style: italic;
  font-size: inherit;
}

/* Links */
a {
  color: #576b95;
  text-decoration: none;
}
`,co=io,lo={default:ao,grace:oo,simple:so};function uo(e){return Object.keys(lo).includes(e)}var fo=class{styleElement=null;styleId=`md-theme`;inject(e){this.styleElement||(this.styleElement=document.createElement(`style`),this.styleElement.id=this.styleId,document.head.appendChild(this.styleElement)),this.styleElement.textContent=e}remove(){this.styleElement&&=(this.styleElement.remove(),null)}isInjected(){return this.styleElement!==null}},po=null;function mo(){return po||=new fo,po}function ho(e,t){if(t!=null&&t.trim())return`${lo.default}\n\n${t}`;let n=lo.default;if(e!=="default"&&uo(e)){let t=lo[e];t&&(n=`${n}\n\n${t}`)}return n}async function go(e){let t=[eo(e.variables),co,$a(ho(e.themeName,e.themeCSS),`#output`),to(e.variables),e.customCSS?$a(e.customCSS,`#output`):``].filter(Boolean).join(`

`);t=Ka(t),mo().inject(t)}function $(e){let t=/[\\/:*?"<>|]/g;if(!t.test(e)&&e.length<=100)return e.trim()||`untitled`;let n=e.replace(t,`_`).trim();return(n.length>100?n.slice(0,100):n)||`untitled`}function _o(e){let t=e.split(`
`),n=t.filter(e=>e.trim()).map(e=>e.match(/(^\s+)?/)[0].length).sort((e,t)=>e-t)[0];return t.map(e=>e.slice(n)).join(`
`)}function vo(e,t,n=`text/plain`){if(typeof document>`u`)throw TypeError(`downloadFile can only be used in browser environment`);let r=document.createElement(`a`);r.download=t,r.style.display=`none`;let i=null;if(e.startsWith(`data:`)||e.startsWith(`blob:`))r.href=e;else if(n===`text/html`)r.href=`data:text/html;charset=utf-8,${encodeURIComponent(e)}`;else{let t=new Blob([e],{type:n});i=URL.createObjectURL(t),r.href=i}document.body.appendChild(r),r.click(),document.body.removeChild(r),i&&URL.revokeObjectURL(i)}function yo(e){return new Promise((t,n)=>{let r=new FileReader;r.readAsDataURL(e),r.onload=()=>t(r.result.split(`,`).pop()),r.onerror=e=>n(e)})}function bo({data:e,rows:t,cols:n}){let r=``;for(let i=0;i<t+2;++i){r+=`| `;let t=[];for(let r=0;r<n;++r){let n=i>1?i-1:i;t.push(i===1?`---`:e[`k_${n}_${r}`]||`     `)}r+=t.join(` | `),r+=` |
`}return r}function xo(e,t,n,r){let i=eo(n),a=[`/**`,` * MD 主题导出`,` * 导出时间: ${new Date().toLocaleString()}`,` * 说明: 该文件包含完整的主题样式，可直接使用`,` */`,``,i,``,t,``,e].filter(Boolean).join(`
`);return vo(a,`${r}.css`,`text/css`),a}var So=2e4,Co=250,wo=`.mermaid-diagram, .plantuml-diagram, .infographic-diagram`;function To(e){return new Promise(t=>window.setTimeout(t,e))}function Eo(e){return e?.themeMode?{themeMode:e.themeMode}:void 0}function Do(e){for(let t of e.querySelectorAll(wo))if(qe(t))return!0;return!1}function Oo(e){if(e.querySelector(`.katex-fallback`))return!0;for(let t of e.querySelectorAll(`.katex-block, .katex-inline`))if(!t.querySelector(`svg, mjx-container`))return!0;return!1}async function ko(e=So,t){await h(),await h();let n=document.getElementById(`output`);if(!n)return!1;let r=Eo(t),i=Date.now()+e;for(;Date.now()<i;){if(wi(n,r),!Do(n)&&!Oo(n))return!0;await To(Co)}return wi(n,r),!Do(n)&&!Oo(n)}function Ao(e){e.querySelectorAll(wo).forEach(e=>{e.querySelector(`svg, img`)||e.getAttribute(Ve)===H.loading&&e.remove()}),e.querySelectorAll(`.katex-pending`).forEach(e=>{e.querySelector(`svg, mjx-container`)||e.remove()})}var jo=S(`editor`,()=>{let e=b(null),t=null;function r(e){t=e}function i(){t=null}function a(){t?.()}return{editor:e,registerContentFlush:r,unregisterContentFlush:i,flushContentToPostStore:a,formatContent:async()=>{if(!e.value)return;let{formatDoc:t}=await n(async()=>{let{formatDoc:e}=await import(`./md-formatDoc-C_tIUTCU.js`);return{formatDoc:e}},__vite__mapDeps([38,5,1])),r=await t(e.value.state.doc.toString());return e.value.dispatch({changes:{from:0,to:e.value.state.doc.length,insert:r}}),r},importContent:t=>{e.value&&e.value.dispatch({changes:{from:0,to:e.value.state.doc.length,insert:t}})},clearContent:()=>{e.value&&(e.value.dispatch({changes:{from:0,to:e.value.state.doc.length,insert:``}}),A.success(D(`store.editor.contentCleared`)))},getContent:()=>e.value?.state.doc.toString()??``,getSelection:()=>{if(!e.value)return``;let t=e.value.state.selection.main;return e.value.state.doc.sliceString(t.from,t.to)},replaceSelection:t=>{e.value&&e.value.dispatch(e.value.state.replaceSelection(t))},replaceText:(t,n)=>{if(!e.value||!t)return!1;let r=e.value.state.doc.toString(),i=e.value.state.selection.main.head,a=-1,o=1/0,s=0;for(;;){let e=r.indexOf(t,s);if(e===-1)break;let n=Math.abs(e-i);n<o&&(o=n,a=e),s=e+1}return a!==-1&&(e.value.dispatch({changes:{from:a,to:a+t.length,insert:n}}),e.value.focus(),!0)},insertAtCursor:t=>{if(!e.value)return;let n=e.value.state.selection.main;e.value.dispatch({changes:{from:n.from,to:n.to,insert:t},selection:{anchor:n.from+t.length}}),e.value.focus()}}});function Mo(e){let t={};for(let n of e.matchAll(/(\w[\w-]*)=(?:"([^"]*)"|'([^']*)')/g))t[n[1]]=n[2]===void 0?n[3]??``:n[2];return t}function No(e){let t=new Set;for(let n of e.matchAll(/(\w[\w-]*)=(?:"[^"]*"|'[^']*')/g))t.add(n[1]);let n=e.match(/(?:^|\s)([A-Z_][\w-]*)\s*=\s*(?:"[^"]*|'[^']*)?$/i);return n&&t.add(n[1]),t}function Po(e){return e.default!==void 0&&e.default!==``?e.default:e.type===`array`?`[]`:e.type===`boolean`?`true`:e.type===`number`?`0`:e.name}function Fo(e,t){return t.includes(`"`)&&!t.includes(`'`)?`${e}='${t}'`:t.includes(`"`)&&t.includes(`'`)?`${e}="${t.replace(/"/g,`'`)}"`:`${e}="${t}"`}function Io(e){let t={};for(let n of e.props)n.required&&(n.default===void 0||n.default===``)?t[n.name]=``:t[n.name]=Po(n);if(e.example){let n=Mo(e.example);Object.assign(t,n)}return t}function Lo(e,t){return e.props.filter(e=>e.required&&!(t[e.name]??``).trim()).map(e=>e.name)}function Ro(e,t){if(t){let n=[];for(let r of e.props){let e=t[r.name],i=e===void 0?``:e;i===``&&!r.required||n.push(Fo(r.name,i===``?Po(r):i))}return`<${e.name}${n.length?` ${n.join(` `)}`:``} />`}if(e.example)return e.example;let n=e.props.map(e=>Fo(e.name,Po(e))).join(` `);return`<${e.name}${n?` ${n}`:``} />`}var zo=S(`customComponent`,()=>{let e=E.reactive(w(`custom_components`),[]),t=C(()=>Ur),n=C(()=>{let t=new Map(Ur.map(e=>[e.name,e]));for(let n of e.value)t.set(n.name,n);return[...t.values()]}),r=C(()=>{let t=ti();for(let n of e.value)t[n.name]=n;return t});function i(t){let n=Date.now(),r={id:T(),name:t.name,description:t.description,template:t.template,props:t.props,createdAt:n,updatedAt:n};return e.value.push(r),A.success(D(`store.component.created`,{name:t.name})),r}function a(t,n){let r=e.value.findIndex(e=>e.id===t);return r===-1?(A.error(D(`store.component.notFound`)),!1):(e.value[r]={...e.value[r],...n,updatedAt:Date.now()},A.success(D(`store.component.updated`)),!0)}function o(t){let n=e.value.findIndex(e=>e.id===t);if(n===-1)return A.error(D(`store.component.notFound`)),!1;let r=e.value[n].name;return e.value.splice(n,1),A.success(D(`store.component.deleted`,{name:r})),!0}function s(t){return e.value.find(e=>e.id===t)}function c(e,t){return Ro(e,t)}return{userComponents:e,builtInComponents:t,allComponents:n,registry:r,createComponent:i,updateComponent:a,deleteComponent:o,getComponentById:s,buildSnippet:c}});function Bo(e){return`mp:${e}`}function Vo(e){return e.startsWith(`mp:`)&&e.length>3}var Ho={"zh-CN":`/* 全局变量 */
:root {
}

/* 根容器 */
.container {
}

/* 标题 */
h1 {
}

h2 {
}

h3 {
}

h4 {
}

h5 {
}

h6 {
}

/* 段落和文本 */
p {
}

strong {
}

em {
}

/* 引用块 */
blockquote {
}

blockquote > p {
}

/* 代码 */
/* 行内代码 */
.codespan {
}

/* 代码块容器 */
pre.code__pre,
.hljs.code__pre {
}

/* 代码块内的 code */
pre.code__pre > code,
.hljs.code__pre > code {
}

/* 列表 */
ol {
}

ul {
}

li {
}

/* 表格 */
table {
}

thead {
}

th {
}

td {
}

/* 其他元素 */
img {
}

hr {
}

/* 分隔线变体：--- */
hr.hr-dash {
}

/* 分隔线变体：*** */
hr.hr-star {
}

/* 分隔线变体：___ */
hr.hr-underscore {
}

figure {
}

figcaption {
}

/* KaTeX 公式 */
.katex-inline {
}

.katex-block {
}

/* Markup 标记 */
/* 高亮 ==文本== */
.markup-highlight {
}

/* 下划线 ++文本++ */
.markup-underline {
}

/* 波浪线 ~文本~ */
.markup-wavyline {
}

/* GFM Alert 警告块 */
/* Alert 标题 */
.alert-title-note {
}

.alert-title-tip {
}

.alert-title-info {
}

.alert-title-important {
}

.alert-title-warning {
}

.alert-title-caution {
}

.alert-title-abstract {
}

.alert-title-summary {
}

.alert-title-tldr {
}

.alert-title-todo {
}

.alert-title-success {
}

.alert-title-done {
}

.alert-title-question {
}

.alert-title-help {
}

.alert-title-faq {
}

.alert-title-failure {
}

.alert-title-fail {
}

.alert-title-missing {
}

.alert-title-danger {
}

.alert-title-error {
}

.alert-title-bug {
}

.alert-title-example {
}

.alert-title-quote {
}

.alert-title-cite {
}

/* Alert SVG 图标 */
.alert-icon-note {
}

.alert-icon-tip {
}

.alert-icon-info {
}

.alert-icon-important {
}

.alert-icon-warning {
}

.alert-icon-caution {
}

/* Obsidian-style Callout SVG 图标 */
.alert-icon-abstract {
}

.alert-icon-summary {
}

.alert-icon-tldr {
}

.alert-icon-todo {
}

.alert-icon-success {
}

.alert-icon-done {
}

.alert-icon-question {
}

.alert-icon-help {
}

.alert-icon-faq {
}

.alert-icon-failure {
}

.alert-icon-fail {
}

.alert-icon-missing {
}

.alert-icon-danger {
}

.alert-icon-error {
}

.alert-icon-bug {
}

.alert-icon-example {
}

.alert-icon-quote {
}

.alert-icon-cite {
}
`,"zh-TW":`/* 全域變數 */
:root {
}

/* 根容器 */
.container {
}

/* 標題 */
h1 {
}

h2 {
}

h3 {
}

h4 {
}

h5 {
}

h6 {
}

/* 段落和文字 */
p {
}

strong {
}

em {
}

/* 引用塊 */
blockquote {
}

blockquote > p {
}

/* 程式碼 */
/* 行內程式碼 */
.codespan {
}

/* 程式碼塊容器 */
pre.code__pre,
.hljs.code__pre {
}

/* 程式碼塊內的 code */
pre.code__pre > code,
.hljs.code__pre > code {
}

/* 清單 */
ol {
}

ul {
}

li {
}

/* 表格 */
table {
}

thead {
}

th {
}

td {
}

/* 其他元素 */
img {
}

hr {
}

/* 分隔線變體：--- */
hr.hr-dash {
}

/* 分隔線變體：*** */
hr.hr-star {
}

/* 分隔線變體：___ */
hr.hr-underscore {
}

figure {
}

figcaption {
}

/* KaTeX 公式 */
.katex-inline {
}

.katex-block {
}

/* Markup 標記 */
/* 高亮 ==文字== */
.markup-highlight {
}

/* 底線 ++文字++ */
.markup-underline {
}

/* 波浪線 ~文字~ */
.markup-wavyline {
}

/* GFM Alert 警告塊 */
/* Alert 標題 */
.alert-title-note {
}

.alert-title-tip {
}

.alert-title-info {
}

.alert-title-important {
}

.alert-title-warning {
}

.alert-title-caution {
}

.alert-title-abstract {
}

.alert-title-summary {
}

.alert-title-tldr {
}

.alert-title-todo {
}

.alert-title-success {
}

.alert-title-done {
}

.alert-title-question {
}

.alert-title-help {
}

.alert-title-faq {
}

.alert-title-failure {
}

.alert-title-fail {
}

.alert-title-missing {
}

.alert-title-danger {
}

.alert-title-error {
}

.alert-title-bug {
}

.alert-title-example {
}

.alert-title-quote {
}

.alert-title-cite {
}

/* Alert SVG 圖示 */
.alert-icon-note {
}

.alert-icon-tip {
}

.alert-icon-info {
}

.alert-icon-important {
}

.alert-icon-warning {
}

.alert-icon-caution {
}

/* Obsidian-style Callout SVG 圖示 */
.alert-icon-abstract {
}

.alert-icon-summary {
}

.alert-icon-tldr {
}

.alert-icon-todo {
}

.alert-icon-success {
}

.alert-icon-done {
}

.alert-icon-question {
}

.alert-icon-help {
}

.alert-icon-faq {
}

.alert-icon-failure {
}

.alert-icon-fail {
}

.alert-icon-missing {
}

.alert-icon-danger {
}

.alert-icon-error {
}

.alert-icon-bug {
}

.alert-icon-example {
}

.alert-icon-quote {
}

.alert-icon-cite {
}
`,"en-US":`/* Global variables */
:root {
}

/* Root container */
.container {
}

/* Headings */
h1 {
}

h2 {
}

h3 {
}

h4 {
}

h5 {
}

h6 {
}

/* Paragraphs and text */
p {
}

strong {
}

em {
}

/* Blockquote */
blockquote {
}

blockquote > p {
}

/* Code */
/* Inline code */
.codespan {
}

/* Code block container */
pre.code__pre,
.hljs.code__pre {
}

/* Code inside code block */
pre.code__pre > code,
.hljs.code__pre > code {
}

/* Lists */
ol {
}

ul {
}

li {
}

/* Tables */
table {
}

thead {
}

th {
}

td {
}

/* Other elements */
img {
}

hr {
}

/* Horizontal rule variant: --- */
hr.hr-dash {
}

/* Horizontal rule variant: *** */
hr.hr-star {
}

/* Horizontal rule variant: ___ */
hr.hr-underscore {
}

figure {
}

figcaption {
}

/* KaTeX */
.katex-inline {
}

.katex-block {
}

/* Markup */
/* Highlight ==text== */
.markup-highlight {
}

/* Underline ++text++ */
.markup-underline {
}

/* Wavy underline ~text~ */
.markup-wavyline {
}

/* GFM Alert */
/* Alert titles */
.alert-title-note {
}

.alert-title-tip {
}

.alert-title-info {
}

.alert-title-important {
}

.alert-title-warning {
}

.alert-title-caution {
}

.alert-title-abstract {
}

.alert-title-summary {
}

.alert-title-tldr {
}

.alert-title-todo {
}

.alert-title-success {
}

.alert-title-done {
}

.alert-title-question {
}

.alert-title-help {
}

.alert-title-faq {
}

.alert-title-failure {
}

.alert-title-fail {
}

.alert-title-missing {
}

.alert-title-danger {
}

.alert-title-error {
}

.alert-title-bug {
}

.alert-title-example {
}

.alert-title-quote {
}

.alert-title-cite {
}

/* Alert SVG icons */
.alert-icon-note {
}

.alert-icon-tip {
}

.alert-icon-info {
}

.alert-icon-important {
}

.alert-icon-warning {
}

.alert-icon-caution {
}

/* Obsidian-style Callout SVG icons */
.alert-icon-abstract {
}

.alert-icon-summary {
}

.alert-icon-tldr {
}

.alert-icon-todo {
}

.alert-icon-success {
}

.alert-icon-done {
}

.alert-icon-question {
}

.alert-icon-help {
}

.alert-icon-faq {
}

.alert-icon-failure {
}

.alert-icon-fail {
}

.alert-icon-missing {
}

.alert-icon-danger {
}

.alert-icon-error {
}

.alert-icon-bug {
}

.alert-icon-example {
}

.alert-icon-quote {
}

.alert-icon-cite {
}
`,"ja-JP":`/* グローバル変数 */
:root {
}

/* ルートコンテナ */
.container {
}

/* 見出し */
h1 {
}

h2 {
}

h3 {
}

h4 {
}

h5 {
}

h6 {
}

/* 段落とテキスト */
p {
}

strong {
}

em {
}

/* 引用 */
blockquote {
}

blockquote > p {
}

/* コード */
/* インラインコード */
.codespan {
}

/* コードブロックコンテナ */
pre.code__pre,
.hljs.code__pre {
}

/* コードブロック内の code */
pre.code__pre > code,
.hljs.code__pre > code {
}

/* リスト */
ol {
}

ul {
}

li {
}

/* テーブル */
table {
}

thead {
}

th {
}

td {
}

/* その他の要素 */
img {
}

hr {
}

/* 区切り線バリアント：--- */
hr.hr-dash {
}

/* 区切り線バリアント：*** */
hr.hr-star {
}

/* 区切り線バリアント：___ */
hr.hr-underscore {
}

figure {
}

figcaption {
}

/* KaTeX 数式 */
.katex-inline {
}

.katex-block {
}

/* Markup */
/* ハイライト ==text== */
.markup-highlight {
}

/* 下線 ++text++ */
.markup-underline {
}

/* 波線 ~text~ */
.markup-wavyline {
}

/* GFM Alert */
/* Alert タイトル */
.alert-title-note {
}

.alert-title-tip {
}

.alert-title-info {
}

.alert-title-important {
}

.alert-title-warning {
}

.alert-title-caution {
}

.alert-title-abstract {
}

.alert-title-summary {
}

.alert-title-tldr {
}

.alert-title-todo {
}

.alert-title-success {
}

.alert-title-done {
}

.alert-title-question {
}

.alert-title-help {
}

.alert-title-faq {
}

.alert-title-failure {
}

.alert-title-fail {
}

.alert-title-missing {
}

.alert-title-danger {
}

.alert-title-error {
}

.alert-title-bug {
}

.alert-title-example {
}

.alert-title-quote {
}

.alert-title-cite {
}

/* Alert SVG アイコン */
.alert-icon-note {
}

.alert-icon-tip {
}

.alert-icon-info {
}

.alert-icon-important {
}

.alert-icon-warning {
}

.alert-icon-caution {
}

/* Obsidian-style Callout SVG アイコン */
.alert-icon-abstract {
}

.alert-icon-summary {
}

.alert-icon-tldr {
}

.alert-icon-todo {
}

.alert-icon-success {
}

.alert-icon-done {
}

.alert-icon-question {
}

.alert-icon-help {
}

.alert-icon-faq {
}

.alert-icon-failure {
}

.alert-icon-fail {
}

.alert-icon-missing {
}

.alert-icon-danger {
}

.alert-icon-error {
}

.alert-icon-bug {
}

.alert-icon-example {
}

.alert-icon-quote {
}

.alert-icon-cite {
}
`};function Uo(e=`zh-CN`){return Ho[e]??Ho[`zh-CN`]}var Wo=[he(),Ce(),Pe(),ue(),pe(),Ee(),ye.allowMultipleSelections.of(!0),ce(),I(ie,{fallback:!0}),le(),N(),ae(),_e(),xe(),z(),de(),L(),je.of([...R,...me,...Me,...P,...se,...Se,...Fe,{key:`Tab`,run:oe},j])];function Go(e,{prefix:t,suffix:n,check:r,afterInsertCursorOffset:i=0}){let a=e.state.selection.main,o=e.state.doc.sliceString(a.from,a.to),s=r?.(o)??!1,c;if(s)c=o.slice(t.length,o.length-n.length),e.dispatch(e.state.replaceSelection(c));else if(c=`${t}${o}${n}`,e.dispatch(e.state.replaceSelection(c)),i!==0){let t=e.state.selection.main.head+i;e.dispatch({selection:{anchor:t}})}}function Ko(e,t){let n=e.state.selection.ranges,r=[],i=`${`#`.repeat(t)} `;if(n.forEach(t=>{let n=e.state.doc.lineAt(t.from),a=e.state.doc.lineAt(t.to);for(let t=n.number;t<=a.number;t++){let n=e.state.doc.line(t),a=e.state.doc.sliceString(n.from,n.to).replace(/^#{1,6}\s+/,``).trimStart(),o=i+a;r.push({from:n.from,to:n.to,insert:o})}}),r.length>0){let t=e.state.doc.lineAt(n[0].from).from+i.length;e.dispatch({changes:r,selection:{anchor:t}})}}function qo(e){Go(e,{prefix:`**`,suffix:`**`,check:e=>e.startsWith(`**`)&&e.endsWith(`**`),afterInsertCursorOffset:-2})}function Jo(e){Go(e,{prefix:`*`,suffix:`*`,check:e=>e.startsWith(`*`)&&e.endsWith(`*`),afterInsertCursorOffset:-1})}function Yo(e){Go(e,{prefix:`~~`,suffix:`~~`,check:e=>e.startsWith(`~~`)&&e.endsWith(`~~`),afterInsertCursorOffset:-2})}function Xo(e){Go(e,{prefix:`[`,suffix:`]()`,check:e=>e.startsWith(`[`)&&e.endsWith(`]()`),afterInsertCursorOffset:-1})}function Zo(e){Go(e,{prefix:"`",suffix:"`",check:e=>e.startsWith("`")&&e.endsWith("`"),afterInsertCursorOffset:-1})}function Qo(e,t){let n=e.state.selection.main,r=e.state.doc.sliceString(n.from,n.to),i=r.match(/^\s*<span\s+style="color:\s*([^"\s][^"]*)"\s*>([\s\S]*)<\/span>\s*$/i);if(i){let r=`<span style="color: ${t}">${i[2]}</span>`;e.dispatch({changes:{from:n.from,to:n.to,insert:r},selection:{anchor:n.from,head:n.from+r.length}})}else{let i=`<span style="color: ${t}">${r}</span>`;e.dispatch({changes:{from:n.from,to:n.to,insert:i},selection:{anchor:n.from,head:n.from+i.length}})}}function $o(e){let t=e.state.selection.main,n=e.state.doc.sliceString(t.from,t.to).split(`
`),r=n.every(e=>e.trim().startsWith(`- `))?n.map(e=>e.replace(/^- +/,``)).join(`
`):n.map(e=>`- ${e}`).join(`
`);e.dispatch(e.state.replaceSelection(r))}function es(e){let t=e.state.selection.main,n=e.state.doc.sliceString(t.from,t.to).split(`
`),r=n.every(e=>/^\d+\.\s/.test(e.trim()))?n.map(e=>e.replace(/^\d+\.\s+/,``)).join(`
`):n.map((e,t)=>`${t+1}. ${e}`).join(`
`);e.dispatch(e.state.replaceSelection(r))}function ts(e){return F(e)}function ns(e){return Ne(e)}var rs=[M.of({name:`C`,extensions:[`c`,`h`],load:()=>n(()=>import(`./md-dist-BSMw0rpf.js`).then(e=>e.cpp()),__vite__mapDeps([39,40,5]))}),M.of({name:`C++`,alias:[`cpp`],extensions:[`cpp`,`cc`,`cxx`,`hpp`,`hh`],load:()=>n(()=>import(`./md-dist-BSMw0rpf.js`).then(e=>e.cpp()),__vite__mapDeps([39,40,5]))}),M.of({name:`CSS`,extensions:[`css`],load:()=>n(()=>import(`./md-codemirror-Kg8hfmyf.js`).then(e=>e.d).then(e=>e.css()),__vite__mapDeps([40,5]))}),M.of({name:`Go`,extensions:[`go`],load:()=>n(()=>import(`./md-dist-w4e4dsVd.js`).then(e=>e.go()),__vite__mapDeps([41,40,5]))}),M.of({name:`HTML`,alias:[`xhtml`],extensions:[`html`,`htm`],load:()=>n(()=>import(`./md-codemirror-Kg8hfmyf.js`).then(e=>e.o).then(e=>e.html()),__vite__mapDeps([40,5]))}),M.of({name:`Java`,extensions:[`java`],load:()=>n(()=>import(`./md-dist-DOc10VJZ.js`).then(e=>e.java()),__vite__mapDeps([42,40,5]))}),M.of({name:`JavaScript`,alias:[`js`,`javascript`,`nodejs`],extensions:[`js`,`mjs`,`cjs`],load:()=>n(()=>import(`./md-codemirror-Kg8hfmyf.js`).then(e=>e.c).then(e=>e.javascript()),__vite__mapDeps([40,5]))}),M.of({name:`JSON`,alias:[`json5`],extensions:[`json`],load:()=>n(()=>import(`./md-dist-ae-bMbnb.js`).then(e=>e.json()),__vite__mapDeps([43,40,5]))}),M.of({name:`JSX`,extensions:[`jsx`],load:()=>n(()=>import(`./md-codemirror-Kg8hfmyf.js`).then(e=>e.c).then(e=>e.javascript({jsx:!0})),__vite__mapDeps([40,5]))}),M.of({name:`Markdown`,alias:[`md`],extensions:[`md`,`markdown`],load:()=>n(()=>import(`./md-codemirror-Kg8hfmyf.js`).then(e=>e.r).then(e=>e.markdown()),__vite__mapDeps([40,5]))}),M.of({name:`PHP`,extensions:[`php`,`php3`,`php4`,`php5`,`php7`,`phtml`],load:()=>n(()=>import(`./md-dist-DYnm4iKg.js`).then(e=>e.php()),__vite__mapDeps([44,40,5]))}),M.of({name:`Python`,alias:[`py`],extensions:[`py`,`pyw`],load:()=>n(()=>import(`./md-dist-V0aENKq8.js`).then(e=>e.python()),__vite__mapDeps([45,40,5]))}),M.of({name:`Rust`,alias:[`rs`],extensions:[`rs`],load:()=>n(()=>import(`./md-dist-CGp4lmzP.js`).then(e=>e.rust()),__vite__mapDeps([46,40,5]))}),M.of({name:`SQL`,extensions:[`sql`],load:()=>n(()=>import(`./md-dist-m2qZeQ9f.js`).then(e=>e.sql()),__vite__mapDeps([47,40,5]))}),M.of({name:`TSX`,extensions:[`tsx`],load:()=>n(()=>import(`./md-codemirror-Kg8hfmyf.js`).then(e=>e.c).then(e=>e.javascript({jsx:!0,typescript:!0})),__vite__mapDeps([40,5]))}),M.of({name:`TypeScript`,alias:[`ts`],extensions:[`ts`,`mts`,`cts`],load:()=>n(()=>import(`./md-codemirror-Kg8hfmyf.js`).then(e=>e.c).then(e=>e.javascript({typescript:!0})),__vite__mapDeps([40,5]))}),M.of({name:`XML`,alias:[`rss`,`wsdl`,`xsd`],extensions:[`xml`,`xsl`,`xsd`],load:()=>n(()=>import(`./md-dist-Nrh6q6oF.js`).then(e=>e.xml()),__vite__mapDeps([48,40,5]))}),M.of({name:`YAML`,alias:[`yml`],extensions:[`yaml`,`yml`],load:()=>n(()=>import(`./md-dist-DLzeOBnw.js`).then(e=>e.yaml()),__vite__mapDeps([49,40,5]))})];async function is(e){let t=e.state.doc.toString(),{formatDoc:r}=await n(async()=>{let{formatDoc:e}=await import(`./md-formatDoc-C_tIUTCU.js`);return{formatDoc:e}},__vite__mapDeps([38,5,1])),i=await r(t,`markdown`);e.dispatch({changes:{from:0,to:e.state.doc.length,insert:i}})}function as(e){let t=e.state.changeByRange(e=>({changes:{from:e.from,to:e.to,insert:`  `},range:we.range(e.from+2,e.from+2)}));return e.dispatch(t),!0}function os(e){let{onSearch:t,onReplace:n,onGoToLine:r}=e||{};return je.of([{key:`Tab`,run:as},{key:`Mod-z`,run:ts},{key:`Mod-y`,run:ns},{key:`Mod-b`,run:e=>(qo(e),!0)},{key:`Mod-i`,run:e=>(Jo(e),!0)},{key:`Mod-d`,run:e=>(Yo(e),!0)},{key:`Mod-k`,run:e=>(Xo(e),!0)},{key:`Mod-e`,run:e=>(Zo(e),!0)},{key:`Mod-1`,run:e=>(Ko(e,1),!0)},{key:`Mod-2`,run:e=>(Ko(e,2),!0)},{key:`Mod-3`,run:e=>(Ko(e,3),!0)},{key:`Mod-4`,run:e=>(Ko(e,4),!0)},{key:`Mod-5`,run:e=>(Ko(e,5),!0)},{key:`Mod-6`,run:e=>(Ko(e,6),!0)},{key:`Mod-u`,run:e=>($o(e),!0)},{key:`Mod-o`,run:e=>(es(e),!0)},...t?[{key:`Mod-f`,run:e=>(t(e),!0)}]:[],...n?[{key:`Mod-h`,run:e=>(n(e),!0)}]:[],{key:`Shift-Alt-f`,run:e=>(is(e),!0)},...r?[{key:`Mod-g`,run:e=>(r(e),!0)}]:[{key:`Mod-g`,run:()=>!0}]])}function ss(e){let{placeholder:t,withoutHistory:n}=e||{};return[...n?[]:[Pe()],de(),N(),L(),be({base:fe,codeLanguages:rs,addKeymap:!0}),ve.high(os(e)),ue(),je.of([...me,...P,...R,...se]),Oe.lineWrapping,ye.allowMultipleSelections.of(!0),...t?[ge(t)]:[]]}var cs=Oe.theme({".cm-gutterElement":{display:`flex`,justifyContent:`right`,alignItems:`center`},"&.cm-editor .cm-gutters":{backgroundColor:`transparent !important`,borderRight:`none !important`,padding:`0 !important`},".cm-foldGutter":{width:`10px !important`,overflow:`hidden`},".cm-foldGutter .cm-gutterElement":{padding:`0 !important`,width:`10px !important`,minWidth:`unset !important`},".cm-foldGutter .cm-gutterElement span":{opacity:`0`,transition:`opacity 0.15s ease`},"&.cm-editor .cm-gutters:hover .cm-foldGutter .cm-gutterElement span":{opacity:`1`}});function ls(){return[ke,cs]}function us(){return[Te,cs]}function ds(e){return e?us():ls()}async function fs(e){let t=e.state.doc.toString(),{formatDoc:r}=await n(async()=>{let{formatDoc:e}=await import(`./md-formatDoc-C_tIUTCU.js`);return{formatDoc:e}},__vite__mapDeps([38,5,1])),i=await r(t,`css`);e.dispatch({changes:{from:0,to:e.state.doc.length,insert:i}})}function ps(){return[Wo,Ae(),Oe.lineWrapping,je.of([{key:`Shift-Alt-f`,run:e=>(fs(e),!0)}])]}function ms(){return Uo(re())}var hs=S(`cssEditor`,()=>{let e=Ie(),t=b(null),r=b(null),i=E.reactive(w(`css_content_config`),{active:``,tabs:[]});g(()=>{let e=new Date;if(i.value.tabs.length===0){let t=T();i.value.tabs=[{id:t,title:D(`store.cssEditor.schemeDefault`),name:D(`store.cssEditor.schemeDefault`),content:ms(),createDatetime:e,updateDatetime:e}],i.value.active=t;return}if(i.value.tabs=i.value.tabs.map((t,n)=>({...t,id:t.id??T(),createDatetime:t.createDatetime??new Date(e.getTime()+n),updateDatetime:t.updateDatetime??new Date(e.getTime()+n)})),!i.value.tabs.find(e=>e.id===i.value.active)){let e=i.value.tabs.find(e=>e.name===i.value.active);i.value.active=e?.id??i.value.tabs[0].id}});let a=()=>{let e=i.value.tabs.find(e=>e.id===i.value.active);if(!e){if(i.value.tabs.length===0){let e=T(),t=new Date;return i.value.tabs=[{id:e,title:D(`store.cssEditor.schemeDefault`),name:D(`store.cssEditor.schemeDefault`),content:ms(),createDatetime:t,updateDatetime:t}],i.value.active=e,i.value.tabs[0]}return i.value.active=i.value.tabs[0].id,i.value.tabs[0]}return e},o=()=>a().content,s=e=>{t.value&&t.value.dispatch({changes:{from:0,to:t.value.state.doc.length,insert:e}})},c=null;return y(e,()=>{t.value&&r.value&&t.value.dispatch({effects:r.value.reconfigure(ds(e.value))})}),{cssEditor:t,cssContentConfig:i,isSelectMode:C(()=>i.value.isSelectMode??!1),selectedIds:C(()=>i.value.selectedIds??[]),getCurrentTab:a,getCurrentTabContent:o,setCssEditorValue:s,setOnTabChangedCallback:e=>{c=e},tabChanged:e=>{i.value.active=e;let t=i.value.tabs.find(t=>t.id===e);t&&(s(t.content),c&&c(t.content))},renameTab:e=>{let t=a();t.title=e,t.name=e},addCssContentTab:(e,t)=>{let n=t??ms(),r=new Date;i.value.tabs.push({id:T(),name:e,title:e,content:n,createDatetime:r,updateDatetime:r});let a=i.value.tabs[i.value.tabs.length-1];i.value.active=a.id,s(n),c&&c(n)},resetCssConfig:()=>{let e=ms(),n=T();i.value={active:n,tabs:[{id:n,title:D(`store.cssEditor.schemeDefaultSpaced`),name:D(`store.cssEditor.schemeDefaultSpaced`),content:e,createDatetime:new Date,updateDatetime:new Date}]},t.value&&t.value.dispatch({changes:{from:0,to:t.value.state.doc.length,insert:e}})},initCssEditor:n=>{let i=document.querySelector(`#cssEditor`);if(!i)return;i.value=a().content;let o=document.createElement(`div`);o.className=`w-full h-full`,i.parentNode?.replaceChild(o,i),r.value=new De;let s=ye.create({doc:a().content,extensions:[ps(),r.value.of(ds(e.value)),Oe.updateListener.of(e=>{if(e.docChanged){let t=e.state.doc.toString(),r=a();r.content=t,r.updateDatetime=new Date,n(t)}})]});t.value=ee(new Oe({state:s,parent:o}))},scrollToHeading:e=>{if(!t.value)return;let n=t.value.state.doc.toString(),r=RegExp(`^${e}\\s*\\{`,`m`),i=n.match(r);if(i&&i.index!==void 0){let e=i.index,r=0,a=e,o=!1;for(let t=e;t<n.length;t++)if(n[t]===`{`)r++,o=!0;else if(n[t]===`}`&&(r--,o&&r===0)){a=t+1;break}t.value.dispatch({selection:{anchor:e,head:a},scrollIntoView:!0}),t.value.focus()}},toggleSelectMode:()=>{i.value.isSelectMode=!(i.value.isSelectMode??!1),i.value.isSelectMode||(i.value.selectedIds=[])},toggleSelectTab:e=>{let t=i.value.selectedIds??[];t.indexOf(e)===-1?i.value.selectedIds=[...t,e]:i.value.selectedIds=t.filter(t=>t!==e)},selectAllTabs:()=>{i.value.selectedIds=i.value.tabs.map(e=>e.id)},clearSelection:()=>{i.value.selectedIds=[]},batchDeleteTabs:()=>{let e=i.value.selectedIds??[];if(e.length===0)return;if(e.length>=i.value.tabs.length){A.warning(D(`store.cssEditor.keepAtLeastOne`));return}let t=i.value.tabs.filter(t=>!e.includes(t.id));e.includes(i.value.active)&&(i.value.active=t[0].id,s(t[0].content),c&&c(t[0].content)),i.value.tabs=t,i.value.selectedIds=[],i.value.isSelectMode=!1,A.success(D(`store.cssEditor.batchDeleted`,{count:e.length}))},batchExportTabs:async()=>{let e=i.value.selectedIds??[];if(e.length!==0){if(e.length===1){let t=i.value.tabs.find(t=>t.id===e[0]);t&&vo(`data:text/css;charset=utf-8,${encodeURIComponent(t.content)}`,`${$(t.title)}.css`)}else{let{strToU8:t,zip:r}=await n(async()=>{let{strToU8:e,zip:t}=await import(`./md-browser-DF3hgwXO.js`).then(e=>e.t);return{strToU8:e,zip:t}},__vite__mapDeps([50,5])),a={};e.forEach(e=>{let n=i.value.tabs.find(t=>t.id===e);n&&(a[`${$(n.title)}.css`]=t(n.content))});let o=await new Promise((e,t)=>r(a,(n,r)=>n?t(n):e(r))),s=URL.createObjectURL(new Blob([o],{type:`application/zip`}));vo(s,`css-schemes.zip`),URL.revokeObjectURL(s)}i.value.selectedIds=[],i.value.isSelectMode=!1,A.success(D(`store.cssEditor.batchExported`,{count:e.length}))}},exportSingleTab:e=>{let t=i.value.tabs.find(t=>t.id===e);t&&(vo(`data:text/css;charset=utf-8,${encodeURIComponent(t.content)}`,`${$(t.title)}.css`),A.success(D(`store.cssEditor.singleExported`,{name:t.title})))}}}),gs=S(`theme`,()=>{let e=E.reactive(w(`theme`),k.theme),t=E.reactive(w(`themeSettings`),{}),r=C(()=>t.value[e.value]??O()),i=C({get:()=>r.value.primaryColor,set:e=>{d(`primaryColor`,e)}}),a=C({get:()=>r.value.fontFamily,set:e=>{d(`fontFamily`,e)}}),o=C({get:()=>r.value.fontSize,set:e=>{d(`fontSize`,e)}}),s=C({get:()=>r.value.codeBlockTheme,set:e=>{d(`codeBlockTheme`,e)}}),c=C({get:()=>r.value.headingStyles,set:e=>{d(`headingStyles`,e)}}),l=C({get:()=>r.value.isShowLineNumber,set:e=>{d(`isShowLineNumber`,e)}}),u=C({get:()=>r.value.isMacCodeBlock,set:e=>{d(`isMacCodeBlock`,e)}});function d(n,r){let i=e.value,a=t.value[i]??O();t.value={...t.value,[i]:{...a,[n]:r}}}let f=E.reactive(`isCiteStatus`,k.isCiteStatus),p=E.reactive(`isCountStatus`,k.isCountStatus),m=E.reactive(w(`use_indent`),!1),h=E.reactive(w(`use_justify`),!1),g=E.reactive(`legend`,k.legend),_=E.reactive(`previewWidth`,ne[0].value);return{theme:e,themeSettings:t,fontFamily:a,fontSize:o,fontSizeNumber:C(()=>Number(o.value.replace(`px`,``))),primaryColor:i,codeBlockTheme:s,legend:g,isMacCodeBlock:u,isShowLineNumber:l,isCiteStatus:f,isCountStatus:p,isUseIndent:m,isUseJustify:h,previewWidth:_,headingStyles:c,toggleMacCodeBlock:B(u),toggleShowLineNumber:B(l),toggleCiteStatus:B(f),toggleCountStatus:B(p),toggleUseIndent:B(m),toggleUseJustify:B(h),resetStyle:()=>{t.value={...t.value,[e.value]:O()},f.value=k.isCiteStatus,p.value=k.isCountStatus,g.value=k.legend,m.value=!1,h.value=!1},updateCodeTheme:()=>{let e=s.value,t=document.querySelector(`#hljs`);if(t){if(t.getAttribute(`href`)===e)return;t.setAttribute(`href`,e)}else{let t=document.createElement(`link`);t.setAttribute(`type`,`text/css`),t.setAttribute(`rel`,`stylesheet`),t.setAttribute(`href`,e),t.setAttribute(`id`,`hljs`),document.head.appendChild(t)}},applyCurrentTheme:async()=>{try{let t=hs().getCurrentTabContent(),r;if(Vo(e.value)){let{useMarketplaceStore:t}=await n(async()=>{let{useMarketplaceStore:e}=await import(`./md-marketplace-whMWv4oA.js`).then(e=>e.t);return{useMarketplaceStore:e}},__vite__mapDeps([51,5,52,53,54,1,55,56,57,58,59]));r=t().getInstalledThemeCss(e.value)}await go({themeName:e.value,themeCSS:r,customCSS:t,variables:{primaryColor:i.value,fontFamily:a.value,fontSize:o.value,isUseIndent:m.value,isUseJustify:h.value,headingStyles:c.value}})}catch(e){console.error(`[applyCurrentTheme] 主题应用失败:`,e)}},setHeadingStyle:(e,t)=>{let n=c.value;c.value={...n,[e]:t==="default"?void 0:t}},getHeadingStyle:e=>c.value[e]||`default`}}),_s=S(`render`,()=>{let e=b(``),t=x({chars:0,words:0,minutes:0}),n=b([]),r=null,i=``,a=``,o=e=>(r=Wa(e||{}),i=``,a=``,r),s=()=>r,c=()=>({mermaidLoading:D(`store.diagram.mermaidLoading`),mermaidError:D(`store.diagram.mermaidError`),plantumlLoading:D(`store.diagram.plantumlLoading`),plantumlError:D(`store.diagram.plantumlError`),infographicLoading:D(`store.diagram.infographicLoading`),infographicError:D(`store.diagram.infographicError`)}),l=()=>({summary:D(`store.count.summary`,{words:`{words}`,minutes:`{minutes}`})}),u=()=>({footnoteTitle:D(`store.render.footnoteTitle`),unknownComponent:D(`store.render.unknownComponent`),katexLoading:D(`store.render.katexLoading`)});function d(e){return Object.keys(e.registry).sort().map(t=>{let n=e.registry[t];return[t,n.updatedAt??0,n.template,JSON.stringify(n.props??[])].join(``)}).join(``)}function f(e,t,n){return[e,t.isCiteStatus?`1`:`0`,t.legend,t.isCountStatus?`1`:`0`,t.isMacCodeBlock?`1`:`0`,t.isShowLineNumber?`1`:`0`,d(n),D(`store.count.summary`,{words:`{words}`,minutes:`{minutes}`}),D(`store.render.footnoteTitle`),D(`store.render.unknownComponent`),D(`store.render.katexLoading`),D(`store.diagram.mermaidLoading`)].join(``)}let p=()=>{let t=document.createElement(`div`);t.innerHTML=e.value;let r=t.querySelectorAll(`[data-heading]`);n.value=[];let i=0;for(let e of r)e.setAttribute(`id`,`${i}`),n.value.push({url:`#${i}`,title:`${e.textContent}`,level:Number(e.tagName.slice(1))}),i++;e.value=t.innerHTML};return{output:e,readingTime:t,titleList:n,initRendererInstance:o,getRenderer:s,render:(n,o)=>{if(!r)throw Error(`Renderer not initialized. Call initRendererInstance first.`);let s=gs(),d=rl(),m=zo(),h=o?.themeMode??(d.isDark?`dark`:`light`),g=f(h,s,m);if(!o?.force&&n===a&&g===i)return e.value;r.reset({citeStatus:s.isCiteStatus,legend:s.legend,countStatus:s.isCountStatus,isMacCodeBlock:s.isMacCodeBlock,isShowLineNumber:s.isShowLineNumber,themeMode:h,components:m.registry,diagramMessages:c(),countMessages:l(),renderMessages:u()});let{html:_,readingTime:v}=Kt(n,r);return t.chars=n.length,t.words=v.words,t.minutes=Math.ceil(v.minutes),e.value=qt(_,v,r),p(),a=n,i=g,e.value},extractTitles:p}});function vs(e){let t=e??document.getElementById(`output`);if(!t)return;let n=t.getElementsByTagName(`img`);Array.from(n).forEach(e=>{let t=e.getAttribute(`width`),n=e.getAttribute(`height`);t&&(e.removeAttribute(`width`),e.style.width=/^\d+$/.test(t)?`${t}px`:t),n&&(e.removeAttribute(`height`),e.style.height=/^\d+$/.test(n)?`${n}px`:n)})}function ys(e){let t=document.createElement(`div`);return t.innerHTML=e,t.querySelectorAll(`li > ul, li > ol`).forEach(e=>{e.parentElement?.insertAdjacentElement(`afterend`,e)}),t.innerHTML}function bs(){let e=document.createElement(`p`);return e.style.fontSize=`0`,e.style.lineHeight=`0`,e.style.margin=`0`,e.innerHTML=`&nbsp;`,e}var xs=`:root {
  --foreground: 0 0% 3.9%;
  --blockquote-background: #f7f7f7;
}`;async function Ss(){let e=document.querySelector(`#hljs`);if(!e)return``;try{return`<style>${await(await fetch(e.href)).text()}</style>`}catch(e){return console.warn(`Failed to fetch highlight.js styles:`,e),``}}function Cs(e,t){let n=e;return n=n.replace(/#output\s*\{/g,`${t} {`),n=n.replace(/#output\s+/g,`${t} `),n=n.replace(/^#output\s*/gm,`${t} `),n}function ws(e){let t=e;return t=t.replace(/#output\s*\{/g,`body {`),t=t.replace(/#output\s+/g,``),t=t.replace(/^#output\s*/gm,``),t}function Ts(){let e=document.querySelector(`#md-theme`);return!e||!e.textContent?(console.warn(`[getThemeStyles] theme styles not found`),``):`<style>${ws(e.textContent)}</style>`}async function Es(){let e=document.querySelector(`#md-theme`);if(!e?.textContent)return console.warn(`[getShareExportStyles] theme styles not found`),``;let t=[`<style>${xs}</style>`,`<style>${Cs(e.textContent,`.share-content`)}</style>`],n=await Ss();return n&&t.push(n),t.join(``)}async function Ds(){return[Ts(),await Ss()].filter(Boolean).join(``)}var Os=`http://www.w3.org/2000/svg`;function ks(e){return e?e.match(/#([^)'"]+)/)?.[1]??null:null}function As(e){let t=new Map;return Array.from(e.querySelectorAll(`*`)).forEach(e=>{if(e.localName!==`marker`)return;let n=e.getAttribute(`id`);if(!n)return;let r=Array.from(e.querySelectorAll(`*`)).filter(e=>[`path`,`polygon`,`polyline`,`line`].includes(e.localName));r.length!==0&&t.set(n,{paths:r,refX:Number.parseFloat(e.getAttribute(`refX`)??`0`),refY:Number.parseFloat(e.getAttribute(`refY`)??`0`),orient:e.getAttribute(`orient`)??`auto`,markerUnits:e.getAttribute(`markerUnits`)??`strokeWidth`,markerWidth:Number.parseFloat(e.getAttribute(`markerWidth`)??`3`),markerHeight:Number.parseFloat(e.getAttribute(`markerHeight`)??`3`)})}),t}function js(e){return e.paths.map(e=>e.cloneNode(!0))}function Ms(e,t){if(e===`auto`||e===`auto-start-reverse`)return e===`auto-start-reverse`?t+Math.PI:t;let n=Number.parseFloat(e);return Number.isFinite(n)?n*Math.PI/180:t}function Ns(e){let t=e.getAttribute(`stroke-width`);if(t)return Number.parseFloat(t)||1.5;let n=(e.getAttribute(`style`)??``).match(/stroke-width:\s*([\d.]+)/);return n?Number.parseFloat(n[1]):1.5}function Ps(e){return e.getAttribute(`stroke`)??e.getAttribute(`fill`)??`currentColor`}function Fs(e,t,n,r,i){let a=Math.max(6,i*4),o=t.x,s=t.y,c=o-a*Math.cos(n-Math.PI/6),l=s-a*Math.sin(n-Math.PI/6),u=o-a*Math.cos(n+Math.PI/6),d=s-a*Math.sin(n+Math.PI/6),f=document.createElementNS(Os,`polygon`);f.setAttribute(`points`,`${o},${s} ${c},${l} ${u},${d}`),f.setAttribute(`fill`,r),f.setAttribute(`stroke`,`none`),e.parentElement?.insertBefore(f,e.nextSibling)}function Is(e,t,n,r,i,a){let o=Ms(t.orient,r),s=t.markerUnits===`userSpaceOnUse`?1:Math.max(i,1),c=document.createElementNS(Os,`g`);c.setAttribute(`transform`,`translate(${n.x}, ${n.y}) rotate(${o*180/Math.PI}) scale(${s}) translate(${-t.refX}, ${-t.refY})`);let l=js(t);if(l.length===0){Fs(e,n,r,a,i);return}l.forEach(e=>{(!e.getAttribute(`fill`)||e.getAttribute(`fill`)===`context-fill`)&&e.setAttribute(`fill`,a),(!e.getAttribute(`stroke`)||e.getAttribute(`stroke`)===`context-stroke`)&&e.setAttribute(`stroke`,a),c.appendChild(e)}),e.appendChild(c)}function Ls(e,t){let n=e.getAttribute(`x1`),r=e.getAttribute(`y1`),i=e.getAttribute(`x2`),a=e.getAttribute(`y2`);if(n==null||r==null||i==null||a==null)return null;let o=Number.parseFloat(n),s=Number.parseFloat(r),c=Number.parseFloat(i),l=Number.parseFloat(a),u={x:t?o:c,y:t?s:l},d=Math.atan2(l-s,c-o);return{point:u,angle:t?d+Math.PI:d}}function Rs(e,t){let n=e;if(typeof n.getTotalLength!=`function`)return null;let r=n.getTotalLength();if(r<=0)return null;let i=Math.min(5,r/2),a=t?n.getPointAtLength(0):n.getPointAtLength(r),o=t?n.getPointAtLength(Math.min(r,i)):n.getPointAtLength(Math.max(0,r-i)),s={x:a.x,y:a.y},c=Math.atan2(s.y-o.y,s.x-o.x);return{point:s,angle:t?c+Math.PI:c}}function zs(e,t){return e.localName===`path`?Rs(e,t):e.localName===`line`?Ls(e,t):null}function Bs(e,t,n){let r=ks(t.getAttribute(`marker-end`)??t.getAttribute(`markerEnd`)),i=ks(t.getAttribute(`marker-start`)??t.getAttribute(`markerStart`));if(!r&&!i)return;let a=Ns(t),o=Ps(t),s=(r,i)=>{if(!r)return;let s=zs(t,i);if(!s)return;let c=n.get(r);if(c){Is(e,c,s.point,s.angle,a,o);return}Fs(t,s.point,s.angle,o,a)};s(i,!0),s(r,!1),t.removeAttribute(`marker-end`),t.removeAttribute(`marker-start`),t.removeAttribute(`markerEnd`),t.removeAttribute(`markerStart`),t.removeAttribute(`marker-mid`),t.removeAttribute(`markerMid`)}function Vs(e){let t=e.querySelector(`defs`),n=t?As(t):new Map;e.querySelectorAll(`path, line, polyline`).forEach(t=>{Bs(e,t,n)})}function Hs(e){e.querySelectorAll(`*[class], path, line, polyline, polygon, rect, circle, ellipse, text`).forEach(e=>{if(!(e instanceof SVGElement))return;let t=window.getComputedStyle(e);t.fill&&t.fill!==`none`&&!e.hasAttribute(`fill`)&&e.setAttribute(`fill`,t.fill),t.stroke&&t.stroke!==`none`&&!e.hasAttribute(`stroke`)&&e.setAttribute(`stroke`,t.stroke),t.strokeWidth&&!e.hasAttribute(`stroke-width`)&&e.setAttribute(`stroke-width`,t.strokeWidth),t.opacity&&t.opacity!==`1`&&!e.hasAttribute(`opacity`)&&e.setAttribute(`opacity`,t.opacity)})}function Us(e){if(!e)return null;let t=e.trim().split(/[\s,]+/).map(Number);return t.length!==4||t.some(e=>!Number.isFinite(e))?null:{x:t[0],y:t[1],width:t[2],height:t[3]}}function Ws(e){if(!e||e.endsWith(`%`))return null;let t=Number.parseFloat(e);return Number.isFinite(t)&&t>0?t:null}function Gs(e){return e.closest(`.plantuml-diagram`)!=null||e.hasAttribute(`data-diagram-type`)}function Ks(e){return e.closest(`.katex-inline, .katex-block, mjx-container`)!=null}function qs(e){let t=e.trim().toLowerCase();if(!t||t===`none`||t===`currentcolor`||t===`transparent`||t.startsWith(`url(`))return null;if(t===`black`)return[0,0,0];if(t===`white`)return[255,255,255];let n=t.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(n){let e=n[1];return e.length===3?[Number.parseInt(e[0]+e[0],16),Number.parseInt(e[1]+e[1],16),Number.parseInt(e[2]+e[2],16)]:[Number.parseInt(e.slice(0,2),16),Number.parseInt(e.slice(2,4),16),Number.parseInt(e.slice(4,6),16)]}let r=t.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/);return r?[Math.min(255,Number.parseFloat(r[1])),Math.min(255,Number.parseFloat(r[2])),Math.min(255,Number.parseFloat(r[3]))]:null}function Js([e,t,n]){let r=e=>{let t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4};return .2126*r(e)+.7152*r(t)+.0722*r(n)}function Ys([e,t,n]){return Math.max(e,t,n)-Math.min(e,t,n)<=24}function Xs(e){let t=qs(e);return!t||!Ys(t)?!1:Js(t)<.35}function Zs(e){return e&&(e.trim().toLowerCase()===`currentcolor`||Xs(e))?`currentColor`:null}function Qs(e){for(let t of[`fill`,`stroke`]){let n=Zs(e.getAttribute(t));n&&e.setAttribute(t,n)}let t=e.getAttribute(`style`);if(!t)return;let n=!1,r=t.split(`;`).map(e=>e.trim()).filter(Boolean).map(e=>{let t=e.indexOf(`:`);if(t===-1)return e;let r=e.slice(0,t).trim().toLowerCase();if(r!==`fill`&&r!==`stroke`)return e;let i=Zs(e.slice(t+1).trim());return i?(n=!0,`${r}: ${i}`):e}).join(`; `);n&&e.setAttribute(`style`,`${r};`)}function $s(e){e.querySelectorAll(`.katex-inline, .katex-block`).forEach(e=>{e.style.removeProperty(`color`)}),e.querySelectorAll(`.katex-inline svg, .katex-block svg, mjx-container svg`).forEach(e=>{e.style.removeProperty(`color`);let t=e.getAttribute(`fill`);(!t||t===`currentColor`||Xs(t))&&e.setAttribute(`fill`,`currentColor`),e.querySelectorAll(`path, rect, use, g`).forEach(Qs)})}function ec(e){Qs(e),e.querySelectorAll(`*`).forEach(Qs)}function tc(e){let t=e.getAttribute(`fill-opacity`);if(t!==null&&Number.parseFloat(t)===0)return!0;let n=e.getAttribute(`opacity`);return n!==null&&Number.parseFloat(n)===0}function nc(e){if(typeof SVGGraphicsElement>`u`)return!1;let t=1/0,n=1/0,r=-1/0,i=-1/0,a=!1;if(e.querySelectorAll(`path, line, rect, circle, ellipse, polygon, polyline, text, image, use`).forEach(e=>{if(!(!(e instanceof SVGGraphicsElement)||tc(e)))try{let o=e.getBBox();if(o.width<=0&&o.height<=0)return;a=!0,t=Math.min(t,o.x),n=Math.min(n,o.y),r=Math.max(r,o.x+o.width),i=Math.max(i,o.y+o.height)}catch{}}),!a)try{let o=e.getBBox();o.width>0&&o.height>0&&(t=o.x,n=o.y,r=o.x+o.width,i=o.y+o.height,a=!0)}catch{}if(!a)return!1;t-=2,n-=2;let o=Math.max(1,r+2-t),s=Math.max(1,i+2-n);return e.setAttribute(`viewBox`,`${t} ${n} ${o} ${s}`),!0}function rc(e,t){let n=new Set(t.map(e=>e.split(`:`)[0]?.trim()).filter(Boolean)),r=(e.getAttribute(`style`)??``).split(`;`).map(e=>e.trim()).filter(Boolean).filter(e=>{let t=e.split(`:`)[0]?.trim();return t&&!n.has(t)});e.setAttribute(`style`,`${[...r,...t].join(`; `)};`)}function ic(e,t,n,r=`inline`){if(r===`scroll`){rc(e,[`display: block`,`vertical-align: top`,`width: 100%`,`height: ${n}px`,`max-width: none`]);return}rc(e,[`display: block`,`vertical-align: top`,`width: 100%`,`max-width: ${t}px`,`height: auto`])}function ac(e){let t=Us(e.getAttribute(`viewBox`));if(t&&t.width>0&&t.height>0)return{width:Math.max(1,Math.round(t.width)),height:Math.max(1,Math.round(t.height))};let n=Ws(e.getAttribute(`width`)),r=Ws(e.getAttribute(`height`));if(n&&r)return{width:n,height:r};let i=e.getBoundingClientRect(),a=n??t?.width??(i.width>0?i.width:677),o=r??t?.height??(i.height>0?i.height:a*.75);if(t&&t.width>0&&t.height>0){let e=t.height/t.width;Math.abs(o/a-e)>.01&&(o=a*e)}return{width:Math.max(1,Math.round(a)),height:Math.max(1,Math.round(o))}}function oc(e){let{width:t,height:n}=ac(e);return e.hasAttribute(`xmlns`)||e.setAttribute(`xmlns`,Os),e.setAttribute(`width`,String(t)),e.setAttribute(`height`,String(n)),e.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),{width:t,height:n}}function sc(e){e.setAttribute(`style`,`box-sizing: border-box; width: 100%; margin: 0; padding: 0; line-height: 0; font-size: 0;`)}function cc(e){let t=Number.parseFloat(e.getAttribute(`width`)??`0`),n=Number.parseFloat(e.getAttribute(`height`)??`0`);if(t<=677)return;let r=e.parentNode;if(!r)return;let i=document.createElement(`section`);i.setAttribute(`style`,`box-sizing: border-box; width: 100%; margin: 0; padding: 0; line-height: 0; font-size: 0;`);let a=document.createElement(`section`);a.setAttribute(`style`,`overflow-x: scroll; overflow-y: hidden; -webkit-overflow-scrolling: touch; white-space: nowrap; width: 100%; font-size: 0; line-height: 0;${n>0?` height: ${n}px;`:``}`);let o=document.createElement(`section`);o.setAttribute(`style`,`display: inline-block; width: ${t}px;${n>0?` height: ${n}px;`:``} vertical-align: top; line-height: 0; font-size: 0;`);let s=document.createElement(`p`);s.setAttribute(`style`,`font-size: 14px; color: #999; text-align: center; margin-top: 5px; margin-bottom: 0; white-space: normal;`),s.textContent=`<<< 左右滑动看更多 >>>`,ic(e,t,n,`scroll`),r.insertBefore(i,e),o.appendChild(e),a.appendChild(o),i.appendChild(a),i.appendChild(s)}function lc(e){let t=e.getBoundingClientRect(),n=Us(e.getAttribute(`viewBox`)),r=Ws(e.getAttribute(`width`)),i=Ws(e.getAttribute(`height`)),a=t.width>0?t.width:r??n?.width??677,o=t.height>0?t.height:i??n?.height??a*.75;if(n&&n.width>0&&n.height>0){let e=n.height/n.width;t.width<=0&&!r?(a=n.width,o=n.height):Math.abs(o/a-e)>.01&&(o=a*e)}return a>677&&(o=677/a*o,a=677),{width:Math.max(1,Math.round(a)),height:Math.max(1,Math.round(o))}}function uc(e){let{width:t,height:n}=lc(e);e.hasAttribute(`xmlns`)||e.setAttribute(`xmlns`,Os),e.setAttribute(`width`,String(t)),e.setAttribute(`height`,String(n))}function dc(e){e.querySelectorAll(`[clip-path], [clipPath]`).forEach(e=>{e.removeAttribute(`clip-path`),e.removeAttribute(`clipPath`)}),e.querySelectorAll(`style`).forEach(e=>e.remove()),e.querySelectorAll(`defs`).forEach(e=>e.remove()),e.querySelectorAll(`*`).forEach(e=>{e.removeAttribute(`id`),e.removeAttribute(`class`)}),e.removeAttribute(`id`),e.removeAttribute(`class`)}function fc(e,t){let n=t?.plantuml??Gs(e);if(Vs(e),Hs(e),ec(e),n){nc(e);let t=oc(e);t.width<=677&&ic(e,t.width,t.height)}else uc(e);dc(e)}function pc(e){let t=Array.from(e.querySelectorAll(`svg`));if(t.length===0)return;let n=document.createElement(`div`);n.style.cssText=`position:fixed;left:-99999px;top:0;visibility:hidden;pointer-events:none;width:677px;`,document.body.appendChild(n);try{for(let e of t){let t=e;if(Ks(t))continue;let r=t.parentElement,i=t.nextSibling,a=Gs(t);if(n.appendChild(t),fc(t,{plantuml:a}),r&&r.insertBefore(t,i),a){let e=t.closest(`.plantuml-diagram`);e&&sc(e),cc(t)}}}finally{n.remove()}}async function mc(e){let{default:t}=await n(async()=>{let{default:e}=await import(`./md-client-C2N5HoD0.js`);return{default:e}},__vite__mapDeps([60,5,36,37]));return t(e,{inlinePseudoElements:!0,preserveImportant:!0,resolveCSSVariables:!1})}async function hc(e){let t=document.getElementById(`output`);if(!t)return{html:``,plainText:``,hasPendingAsyncContent:!1};let n=_s(),r=jo(),i=rl(),a=r.getContent(),o=`light`,s=i.isDark;s&&n.render(a,{themeMode:o,force:!0});let c=await ko(void 0,{themeMode:o});try{let n=t.cloneNode(!0);Ao(n);let r=await Ds();r&&(n.innerHTML=r+n.innerHTML),n.innerHTML=ys(await mc(n.innerHTML)),n.querySelectorAll(`a[href^="#"]`).forEach(e=>e.removeAttribute(`href`)),n.innerHTML=n.innerHTML.replace(/([^-])top:(.*?)em/g,`$1transform: translateY($2em)`).replace(/hsl\(var\(--foreground\)\)/g,`#3f3f3f`).replace(/var\(--blockquote-background\)/g,`#f7f7f7`).replace(/var\(--md-primary-color\)/g,e).replace(/--md-primary-color:.+?;/g,``).replace(/--md-font-family:.+?;/g,``).replace(/--md-font-size:.+?;/g,``).replace(/<span class="nodeLabel"([^>]*)><p[^>]*>(.*?)<\/p><\/span>/g,`<span class="nodeLabel"$1>$2</span>`).replace(/<span class="edgeLabel"([^>]*)><p[^>]*>(.*?)<\/p><\/span>/g,`<span class="edgeLabel"$1>$2</span>`),vs(n);let i=bs(),a=bs();return n.insertBefore(i,n.firstChild),n.appendChild(a),n.querySelectorAll(`.nodeLabel`).forEach(e=>{let t=e.parentElement;if(!t)return;let n=t.getAttribute(`xmlns`),r=t.getAttribute(`style`);if(!n||!r)return;let i=document.createElement(`section`);i.setAttribute(`xmlns`,n),i.setAttribute(`style`,r),i.innerHTML=t.innerHTML;let a=t.parentElement;a&&(a.innerHTML=``,a.appendChild(i))}),n.innerHTML=n.innerHTML.replace(/<tspan([^>]*)>/g,`<tspan$1 style="fill: currentColor !important; color: currentColor !important; stroke: none !important;">`),n.querySelectorAll(`.infographic-diagram`).forEach(e=>{e.querySelectorAll(`text`).forEach(e=>{let t=e.getAttribute(`dominant-baseline`),n={alphabetic:``,central:`0.35em`,middle:`0.35em`,hanging:`-0.55em`,ideographic:`0.18em`,"text-before-edge":`-0.85em`,"text-after-edge":`0.15em`};if(t){e.removeAttribute(`dominant-baseline`);let r=n[t];r&&e.setAttribute(`dy`,r)}})}),pc(n),$s(n),{html:n.innerHTML,plainText:n.textContent||``,hasPendingAsyncContent:!c}}finally{s&&n.render(a,{themeMode:`dark`,force:!0})}}var gc=`[data-png-export-host]`,_c=`png-export-root`;function vc(e,t){for(let[n,r]of Object.entries(t))e.style.setProperty(n,r,`important`)}function yc(e){let t=e.getAttribute(`style`)??``;return/overflow(?:-x)?:\s*(?:auto|scroll)/.test(t)}function bc(e){vc(e,{width:`100%`,maxWidth:`100%`,tableLayout:`fixed`}),e.querySelectorAll(`th, td`).forEach(e=>{vc(e,{wordBreak:`break-word`,whiteSpace:`normal`,overflowWrap:`anywhere`})})}function xc(e){e.querySelectorAll(`.code-scroll`).forEach(e=>{vc(e,{overflow:`visible`}),e.querySelectorAll(`div`).forEach(e=>{vc(e,{whiteSpace:`pre-wrap`,wordBreak:`break-all`,minWidth:`auto`,maxWidth:`100%`})})}),e.querySelectorAll(`pre.code__pre, .hljs.code__pre`).forEach(e=>{vc(e,{overflow:`visible`})}),e.querySelectorAll(`pre.code__pre > code, .hljs.code__pre > code`).forEach(e=>{vc(e,{overflow:`visible`,whiteSpace:`pre-wrap`,wordBreak:`break-all`,minWidth:`auto`,maxWidth:`100%`})}),e.querySelectorAll(`pre section, code section`).forEach(e=>{vc(e,{overflow:`visible`})})}function Sc(e){e.querySelectorAll(`table.preview-table`).forEach(e=>{let t=e.parentElement;t?.tagName===`SECTION`&&vc(t,{overflow:`visible`,maxWidth:`100%`}),bc(e)}),e.querySelectorAll(`section`).forEach(e=>{!yc(e)||!e.querySelector(`table`)||(vc(e,{overflow:`visible`}),e.querySelectorAll(`table`).forEach(bc))}),xc(e)}function Cc(e,t){return e.split(`
`).map(e=>{let n=e.trimStart();if(!n||n.startsWith(`/*`))return e;let r=n.match(/^([^{]+)\{/);if(!r)return e;let i=r[1].trim(),a=i.split(`,`).map(e=>`${t} ${e.trim()}`).join(`, `);return e.replace(i,a)}).join(`
`)}function wc(e){let t=`${gc} .${_c}`,n=e;return n=n.replace(/#output\s*\{/g,`${t} {`),n=n.replace(/#output\s+/g,`${t} `),n=n.replace(/^#output\s*/gm,`${t} `),n}var Tc=`
  section:has(> table.preview-table) { overflow: visible !important; }
  table.preview-table { width: 100% !important; max-width: 100% !important; table-layout: fixed !important; }
  table.preview-table th, table.preview-table td { word-break: break-word !important; white-space: normal !important; overflow-wrap: anywhere !important; }
  section[style*="overflow-x: auto"], section[style*="overflow: auto"] { overflow: visible !important; }
  section[style*="overflow-x: auto"] table, section[style*="overflow: auto"] table { width: 100% !important; max-width: 100% !important; table-layout: fixed !important; }
  section[style*="overflow-x: auto"] th, section[style*="overflow-x: auto"] td, section[style*="overflow: auto"] th, section[style*="overflow: auto"] td { word-break: break-word !important; white-space: normal !important; overflow-wrap: anywhere !important; }
  pre.code__pre, .hljs.code__pre, pre.code__pre > code, .hljs.code__pre > code, .code-scroll, pre section, code section { overflow: visible !important; }
  pre.code__pre > code, .code-scroll, .code-scroll > div { white-space: pre-wrap !important; word-break: break-all !important; min-width: auto !important; max-width: 100% !important; }
`,Ec=Tc.trim();function Dc(e){return Cc(Tc,e).trim()}function Oc(){return document.documentElement.classList.contains(`dark`)&&document.getElementById(`output-wrapper`)?.classList.contains(`output_night`)?`#191919`:`#fff`}var kc=`
  ${gc} .preview {
    position: relative;
    margin: 0 auto;
    padding: 20px;
    font-size: 14px;
    box-sizing: border-box;
    word-wrap: break-word;
  }

  ${gc} .preview table {
    margin-bottom: 10px;
    border-collapse: collapse;
    display: table;
    min-width: 100%;
  }
`;async function Ac(){let e=document.querySelector(`#md-theme`);if(!e?.textContent)return``;let t=document.documentElement.classList.contains(`dark`),n=[`<style>${t?`${gc} { --foreground: 0 0% 98%; --blockquote-background: #212121; }`:`${gc} { --foreground: 0 0% 3.9%; --blockquote-background: #f7f7f7; }`}</style>`,`<style>${kc}</style>`,`<style>${wc(e.textContent)}</style>`,`<style>${Dc(gc)}</style>`],r=document.querySelector(`#hljs`);if(r)try{let e=await(await fetch(r.href)).text();n.push(`<style>@scope (${gc}) { ${e} }</style>`)}catch{}return t&&document.getElementById(`output-wrapper`)?.classList.contains(`output_night`)&&n.push(`<style>${gc} .output_night .preview { background-color: #191919; }</style>`),n.join(``)}function jc(e){let t=document.querySelector(`#output`);if(!t)return``;let n=t.cloneNode(!0);return n.querySelectorAll(`.diagram-download-bar`).forEach(e=>e.remove()),wi(n,e?.themeMode?{themeMode:e.themeMode}:void 0),e?.staticLayout&&Sc(n),n.innerHTML}async function Mc(e=`untitled`){await ko();let t=jc({staticLayout:!0}),n=await Ds();vo(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${$(e)}</title>
  <style>${xs}</style>
  ${n}
  <style>${Ec}</style>
</head>
<body>
  <div style="width: 750px; margin: auto; padding: 20px;">
    ${t}
  </div>
</body>
</html>`,`${$(e)}.html`,`text/html`)}async function Nc(e,t=`untitled`){let n=$(t);vo(await Lr(e),`${n}.html`,`text/html`)}var Pc={showPageNumbers:!0,pageNumberFormat:`nOfM`,pageNumberPosition:`bottomRight`,showTitleHeader:!0,showSiteFooter:!0,margins:`default`},Fc=new Set([`nOfM`,`n`]),Ic=new Set([`bottomLeft`,`bottomCenter`,`bottomRight`]),Lc=new Set([`compact`,`default`,`comfortable`]),Rc={compact:`1cm`,default:`1.5cm 1cm 2cm 1cm`,comfortable:`2cm 1.5cm 2.5cm 1.5cm`},zc=`0.5cm`,Bc=`https://md.doocs.org`;function Vc(e=window.location){return e.protocol===`http:`||e.protocol===`https:`?e.origin:Bc}function Hc(e){return e.replace(/\\/g,`\\\\`).replace(/"/g,`\\"`)}var Uc={bottomLeft:`@bottom-left`,bottomCenter:`@bottom-center`,bottomRight:`@bottom-right`},Wc=[`@bottom-left`,`@bottom-center`,`@bottom-right`],Gc=[`@top-left-corner`,`@top-left`,`@top-center`,`@top-right`,`@top-right-corner`,`@bottom-left-corner`,`@bottom-left`,`@bottom-center`,`@bottom-right`,`@bottom-right-corner`,`@left-top`,`@left-middle`,`@left-bottom`,`@right-top`,`@right-middle`,`@right-bottom`];function Kc(e){let t=Rc[e].trim().split(/\s+/);return t.length===1?{top:t[0],right:t[0],bottom:t[0],left:t[0]}:t.length===2?{top:t[0],right:t[1],bottom:t[0],left:t[1]}:t.length===3?{top:t[0],right:t[1],bottom:t[2],left:t[1]}:{top:t[0],right:t[1],bottom:t[2],left:t[3]}}function qc({top:e,right:t,bottom:n,left:r}){return e===t&&t===n&&n===r?e:e===n&&t===r?`${e} ${t}`:`${e} ${t} ${n} ${r}`}function Jc(e,t,n=``){return`
      ${e} {
        content: ${t};${n}
      }`}function Yc(e,t){return Jc(e,`""`,t?`
        width: 0;
        max-width: 0;
        padding: 0;
        margin: 0;
        overflow: hidden;`:``)}function Xc(e){for(let t of Wc)if(t!==e)return t;return null}function Zc(e){let t=e??{};return{showPageNumbers:typeof t.showPageNumbers==`boolean`?t.showPageNumbers:Pc.showPageNumbers,pageNumberFormat:Fc.has(t.pageNumberFormat)?t.pageNumberFormat:Pc.pageNumberFormat,pageNumberPosition:Ic.has(t.pageNumberPosition)?t.pageNumberPosition:Pc.pageNumberPosition,showTitleHeader:typeof t.showTitleHeader==`boolean`?t.showTitleHeader:Pc.showTitleHeader,showSiteFooter:typeof t.showSiteFooter==`boolean`?t.showSiteFooter:Pc.showSiteFooter,margins:Lc.has(t.margins)?t.margins:Pc.margins}}function Qc(e,t,n=Vc()){let r=Zc(e),i=$(t),a=Hc(n),o=Kc(r.margins),s=r.showPageNumbers?Uc[r.pageNumberPosition]:null,c=r.showSiteFooter?Xc(s):null,l=r.showTitleHeader,u=!!(s||c),d=o.left,f={top:l?o.top:d,right:o.right,bottom:u?o.bottom:d,left:o.left},p=new Map;if(r.showTitleHeader&&p.set(`@top-center`,Jc(`@top-center`,`"${i}"`,`
        font-size: 12px;
        color: #666;
        vertical-align: bottom;
        padding-bottom: ${zc};`)),c&&p.set(c,Jc(c,`"${a}"`,`
        font-size: 10px;
        color: #999;
        vertical-align: top;
        padding-top: ${zc};
        white-space: nowrap;`)),r.showPageNumbers&&s){let e=r.pageNumberFormat===`n`?D(`store.pdf.pageFooterN`):D(`store.pdf.pageFooter`);p.set(s,Jc(s,`"${e}"`,`
        font-size: 10px;
        color: #999;
        vertical-align: top;
        padding-top: ${zc};
        white-space: nowrap;`))}let m=Gc.map(e=>p.get(e)||Yc(e,Wc.includes(e)&&!!(c||s)));return`
    @page {
      margin: ${qc(f)};${m.join(``)}
    }

    html, body {
      margin: 0;
    }`}async function $c(e=`untitled`,t){await ko();let n=jc({staticLayout:!0}),r=await Ds(),i=`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${$(e)}</title>
  <style>${xs}</style>
  ${r}
  <style>${Ec}</style>
  <style>
    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
    }

    ${Qc(Zc(t),e,Vc())}
  </style>
</head>
<body>
  <div style="width: 100%; max-width: 750px; margin: auto;">
    ${n}
  </div>
</body>
</html>`,a=new Blob([i],{type:`text/html`}),o=URL.createObjectURL(a),s=document.createElement(`iframe`);s.style.cssText=`position:fixed;width:0;height:0;top:-9999px;left:-9999px;border:none;`,s.src=o,document.body.appendChild(s);let c=()=>{URL.revokeObjectURL(o),s.parentNode&&document.body.removeChild(s)};s.onload=()=>{s.contentWindow?.focus(),s.contentWindow?.print(),setTimeout(c,500)},s.onerror=()=>{c()},setTimeout(c,5e3)}function el(e){return new Promise(t=>window.setTimeout(t,e))}async function tl(e){let t=document.getElementById(`output`);if(!t)return null;let n=document.documentElement.classList.contains(`dark`)&&document.getElementById(`output-wrapper`)?.classList.contains(`output_night`),r=e===`mobile`?`375px`:`750px`,i=document.createElement(`div`);i.setAttribute(`data-png-export-host`,``),i.style.cssText=`position:fixed;left:-99999px;top:0;z-index:-1;visibility:visible;pointer-events:none;`,i.innerHTML=await Ac();let a=document.createElement(`div`);a.className=n?`output_night`:``,a.style.width=r;let o=document.createElement(`div`);o.className=`preview border-x shadow-xl mx-auto`,o.style.width=r,o.style.margin=`0`;let s=t.cloneNode(!0);return s.removeAttribute(`id`),s.classList.add(_c),s.style.width=`100%`,s.querySelectorAll(`.diagram-download-bar`).forEach(e=>e.remove()),Ao(s),Sc(s),o.appendChild(s),a.appendChild(o),i.appendChild(a),document.body.appendChild(i),{el:o,cleanup:()=>i.remove()}}async function nl(e=`untitled`,t){await ko();let r=await tl(t.previewDevice);if(r)try{await el(100);let{toPng:t}=await n(async()=>{let{toPng:e}=await import(`./md-es-BOAyukm3.js`);return{toPng:e}},[]);vo(await t(r.el,{backgroundColor:Oc(),skipFonts:!0,pixelRatio:Math.max(window.devicePixelRatio||1,2),style:{margin:`0`}}),`${$(e)}.png`,`image/png`)}finally{r.cleanup()}}var rl=S(`ui`,()=>{let e=Ie(),t=B(e),n=E.reactive(`showAIToolbox`,!0),r=B(n),i=E.reactive(`hasShownAIToolboxHint`,!1),a=E.reactive(w(`is_open_right_slider`),!1),o=E.reactive(w(`is_open_post_slider`),!1),s=E.reactive(w(`is_open_folder_panel`),!1),c=E.reactive(`isMobile`,!1),l=E.reactive(`viewMode`,`split`);function u(e){l.value=e}let d=E.reactive(`previewDevice`,`mobile`);function f(e){d.value=e}function p(){d.value=d.value===`desktop`?`mobile`:`desktop`}let m=E.reactive(w(`enableImageReupload`),!1),h=B(m),g=E.reactive(w(`enableScrollSync`),!0),y=B(g),x=E.reactive(w(`copyMode`),`txt`),S=E.reactive(`isShowCssEditor`,!1),ee=B(S),C=b(!1),te=B(C),T=b(!1),ne=B(T),re=b(!1),D=b(``),O=b(!0),k=b(null);function A(e={}){D.value=e.value??``,O.value=e.displayMode??!0,k.value=e.sourceRaw??null,re.value=!0}function ie(){re.value=!1,D.value=``,O.value=!0,k.value=null}let j=b(!1),ae=B(j),oe=b(null),M=b(!1),se=B(M),ce=b(null),le=b(!1),N=B(le),P=b(!1),F=B(P),ue=b(!1),I=b(`theme`),de=b(`discover`);function fe(e){e?.tab,I.value=`theme`,de.value=e?.view??`discover`,ue.value=!0}let pe=b(!1),me=B(pe),he=b(!1),ge=B(he),_e=b(!1),L=b(`create`);function ve(e){L.value=e?.tab??`create`,_e.value=!0}let ye=b(!1),be=E.reactive(`pdfExportOptions`,{...Pc});function xe(){be.value=Zc(be.value),ye.value=!0}let Se=b(!1),R=B(Se),Ce=b(!1),we=B(Ce),Te=b(!1),Ee=B(Te),De=b(!1),Oe=B(De),z=b(!1),ke=B(z),Ae=b(!1),je=B(Ae),Me=b(!1),Ne=B(Me),Pe=b(null);function Fe(e){Pe.value=e,P.value=!0}let V=b(!1),Le=b(!1);function Re(e){V.value=e??!V.value}function ze(e){Le.value=e??!Le.value}let Be=b(null);function Ve(e=``,t=!1){Be.value={word:e,showReplace:t}}function H(){Be.value=null}let He=b(0);function Ue(){He.value++}let We=!1;function Ge(){let e=c.value;c.value=window.innerWidth<=768,!e&&c.value&&l.value===`split`?(l.value=`edit`,We=!0):e&&!c.value&&We&&(l.value=`split`,We=!1)}return v(()=>{Ge(),window.addEventListener(`resize`,Ge)}),_(()=>{window.removeEventListener(`resize`,Ge)}),{isDark:e,showAIToolbox:n,hasShownAIToolboxHint:i,isOpenRightSlider:a,isOpenPostSlider:o,isMobile:c,viewMode:l,previewDevice:d,isOpenFolderPanel:s,enableImageReupload:m,enableScrollSync:g,copyMode:x,isShowCssEditor:S,toggleShowCssEditor:ee,isShowInsertFormDialog:C,toggleShowInsertFormDialog:te,isShowUploadImgDialog:T,toggleShowUploadImgDialog:ne,isShowFormulaEditorDialog:re,formulaEditorValue:D,formulaEditorDisplayMode:O,formulaEditorSourceRaw:k,openFormulaEditor:A,closeFormulaEditor:ie,isShowImportMdDialog:j,toggleShowImportMdDialog:ae,importMdOpenUrl:oe,isShowLocalImageUpload:M,toggleShowLocalImageUpload:se,localImageUploadData:ce,isShowTemplateDialog:le,toggleShowTemplateDialog:N,isShowComponentDialog:P,toggleShowComponentDialog:F,isShowMarketplaceDialog:ue,marketplaceDialogTab:I,marketplaceDialogView:de,openMarketplaceDialog:fe,isShowSyncDialog:pe,toggleShowSyncDialog:me,isShowAccountDialog:he,toggleShowAccountDialog:ge,isShowShareDialog:_e,shareDialogInitialTab:L,openShareDialog:ve,isShowPdfExportDialog:ye,openPdfExportDialog:xe,pdfExportOptions:be,isShowAboutDialog:Se,toggleShowAboutDialog:R,isShowFundDialog:Ce,toggleShowFundDialog:we,isShowMarkdownHelpDialog:Te,toggleShowMarkdownHelpDialog:Ee,isShowEditorStateDialog:De,toggleShowEditorStateDialog:Oe,isShowPreferencesDialog:z,toggleShowPreferencesDialog:ke,isShowKeyboardShortcutsDialog:Ae,toggleShowKeyboardShortcutsDialog:je,isShowCommandPalette:Me,toggleShowCommandPalette:Ne,componentDialogTarget:Pe,openComponentDialogWithTarget:Fe,aiDialogVisible:V,toggleAIDialog:Re,aiImageDialogVisible:Le,toggleAIImageDialog:ze,searchTabRequest:Be,openSearchTab:Ve,clearSearchTabRequest:H,goToLineRequest:He,requestGoToLine:Ue,toggleDark:t,toggleAIToolbox:r,toggleImageReupload:h,toggleScrollSync:y,setViewMode:u,setPreviewDevice:f,togglePreviewDevice:p}});export{Lr as $,Vo as A,xo as B,es as C,ts as D,ns as E,Io as F,$ as G,vo as H,Lo as I,$a as J,uo as K,jo as L,zo as M,No as N,Wo as O,Ro as P,$r as Q,Ao as R,Xo as S,$o as T,yo as U,bo as V,_o as W,wi as X,Wa as Y,Ur as Z,Ko as _,Vc as a,Gt as at,Qo as b,jc as c,U as ct,Cs as d,Qt as et,_s as f,ss as g,ds as h,Zc as i,Kt as it,Bo as j,Uo as k,hc as l,hs as m,nl as n,on as nt,Mc as o,Bt as ot,gs as p,lo as q,$c as r,qt as rt,Nc as s,Tt as st,rl as t,tn as tt,Es as u,qo as v,Yo as w,Jo as x,Zo as y,ko as z};