
    let inputs = document.querySelectorAll('input')

    inputs.forEach(input => input.setAttribute("autocomplete","off"));
    
    

    
    
    // .wrapper__title innerHTML
    let placesCardsTitles = document.querySelectorAll(".places-card__title"),
    wraperTitles = document.querySelectorAll(".wrapper__title"),
    i;
    for(i = 0; i < placesCardsTitles.length; i++) {
      wraperTitles[i].innerHTML = placesCardsTitles[i].innerHTML
    }
    


    // 
    let placesCards = document.querySelectorAll(".places-card")
    // let hightOfElement = document.querySelectorAll(".places-card")
    
    
    for (i = 0; i < placesCards.length; i++) {
       console.log(wraperTitles[i].style.fontSize)
       wraperTitles[i].style.fontSize  = `${placesCards[i].offsetHeight / 10}px`
       placesCardsTitles[i].style.fontSize  = `${placesCards[i].offsetHeight / 10}px`
       console.log(wraperTitles[i].style.fontSize )
    }
 

    // import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'


   
      const swiper = new Swiper('.swiper-container', {
        cssMode: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination'
        },
        mousewheel: true,
        keyboard: true,
      });
   
