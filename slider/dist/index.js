"use strict";(()=>{document.querySelectorAll(".slider__slide"),document.querySelector(".slider__pagination");let e,t,s=document.querySelector("#slides"),d=document.querySelector(".slider"),n=!1;const r=e=>{n=!1,s.classList.remove("active")},o=d=>{s.classList.add("active"),n=!0,e=d.offsetX,t=s.scrollLeft},c=d=>{if(!n)return;d.preventDefault();const r=d.pageX-e;s.scrollLeft=t-r};d.addEventListener("mousedown",o),d.addEventListener("touchstart",o),d.addEventListener("mousemove",c),d.addEventListener("touchmove",c),d.addEventListener("mouseleave",r),d.addEventListener("mouseup",r),d.addEventListener("touchend",r)})();