(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const f=()=>{const t=new Date,n=`${t.getHours()}`,r=`${t.getMinutes()}`,c=`${t.getMonth()+1}`,e=`${t.getDate()}`,s="\u65E5\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D".split("")[t.getDay()];return{hour:n,minute:r,month:c,day:e,week:s}},g=()=>{const{hour:t,minute:n,month:r,day:c,week:e}=f(),o=document.querySelector("#date"),s=`${r.padStart(2,"0")}-${c.padStart(2,"0")} \u5468${e}`,a=document.querySelector("#hour"),d=document.querySelector("#minute"),u=t.padStart(2,"0"),m=n.padStart(2,"0");s!==o.innerHTML&&(o.innerHTML=s),u!==a.innerHTML&&(a.innerHTML=u),m!==d.innerHTML&&(d.innerHTML=m)},h=()=>(`${new Date().getHours()}`,!1),p=()=>{document.querySelector("#colon").classList.toggle("hidden")},i=(t,n)=>{t.classList.remove("dark"),t.classList.remove("light"),t.classList.add(n)},y=()=>{const t=document.querySelector(".theme-container"),n=document.querySelector("#date"),r=document.querySelector("#timer");h()?(i(t,"dark"),i(n,"light"),i(r,"light")):(i(t,"light"),i(n,"dark"),i(r,"dark"))};let l=null;const $=()=>{l&&clearInterval(l),l=setInterval(()=>{y(),p(),g()},1e3)};document.querySelector("#app").innerHTML=`
<div class="theme-container light">
    <div id="date" class="dark">**-** **</div>
    <div id="timer" class="dark">
        <span id="hour">**</span><span id="colon">:</span><span id="minute">**</span>
    </div>
</div>
`;window.onload=()=>{$()};