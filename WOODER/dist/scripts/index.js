"use strict";import createHorizontalSlider from"/scripts/horizontalSlider.js";import createVerticalSlider from"/scripts/verticalSlider.js";const hamburger=document.querySelector(".header__hamburger"),hamburgerMenuText=document.querySelector(".header__hamburger-text"),hamburgerMenu=document.querySelector(".header__hamburger-menu"),headerCloseSign=document.querySelector(".header__toggle-menu-cross-sign"),pageBody=document.querySelector(".wooder"),headerToggleMenuLink=document.querySelectorAll(".header__toggle-menu-link");function hamburgerToggle(){pageBody.classList.add("opacity_off"),hamburgerMenu.style.cursor="auto",setTimeout((()=>{hamburgerMenu.classList.add("active"),pageBody.style.overflow="hidden",pageBody.classList.remove("opacity_off")}),500)}function closeMenu(){pageBody.classList.add("opacity_off"),setTimeout((()=>{hamburgerMenu.classList.remove("active"),pageBody.classList.remove("opacity_off"),pageBody.style.overflow="visible"}),500),hamburgerMenu.style.cursor="pointer"}hamburger.addEventListener("click",hamburgerToggle),hamburgerMenuText.addEventListener("click",hamburgerToggle),headerCloseSign.addEventListener("click",(()=>{closeMenu()})),headerToggleMenuLink.forEach((e=>{e.addEventListener("click",(()=>{closeMenu()}))}));const bannerBtn=document.querySelector(".banner__button"),firebaseConfig={apiKey:"AIzaSyA4apyHWSRjMvYyvrzegqNv5weVktk-XMs",authDomain:"wooder-1fb11.firebaseapp.com",projectId:"wooder-1fb11",storageBucket:"wooder-1fb11.appspot.com",messagingSenderId:"852775924188",appId:"1:852775924188:web:5107a8944b53cc1a705f19"};function databaseInit(){return firebase.database().ref("/").once("value")}function createSlides(e){for(let t=0;t<e.length;t++){const r=document.createElement("div");r.classList.add("slider-slide");const a=document.createElement("div");a.classList.add("banner__content"),a.innerHTML=`\n          <div class="banner__title-container">\n              <h2 class="banner__title">${e[t].title}</h2>\n          </div>\n          <div class="banner__text-container">\n              <p class="banner__text">${e[t].text}</p>\n          </div>\n          `,r.appendChild(a),sliderWrapper.appendChild(r)}}function setDirForSlider(){let e="vertical",t=!1;return window.innerWidth<1010&&(e="horizontal",t=!0),window.addEventListener("resize",(()=>{window.innerWidth<1010?!1===t&&(t=!0,location.reload()):!0===t&&(t=!1,location.reload())})),e}function triggerVideo(e){(e.target.classList.contains("video__button")||e.target.classList.contains("about-wooder__photo"))&&(e.target.parentElement.querySelector(".video__container").style.display="flex"),e.target.classList.contains("video__wrapper")&&(e.target.parentElement.style.display="none")}function allGlobalEventCallbacks(e){triggerVideo(e)}firebase.initializeApp(firebaseConfig),async function(){let e;await databaseInit().then((t=>e=t.val())),createSlides(e.sliderContent);"horizontal"===setDirForSlider()?createHorizontalSlider():createVerticalSlider()}(),pageBody.addEventListener("click",allGlobalEventCallbacks);