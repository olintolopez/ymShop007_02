let header_top = document.querySelector('.header_top');
let header = document.querySelector('.header');
let alto   = header_top.scrollHeight;
let toggleIcon = document.querySelector('#toggle-icon');
let menubars = document.querySelector('#menu-bars');
let menuvert = document.querySelector('.menu-mobile');
let shopCartMobile = document.querySelector('#shopCartMobile');
let minCartMobile  = document.querySelector('#minCartMobile');
let iconTimesMobile = document.querySelector('#icon-mobile-times');
let closeSide = document.querySelector('.close-side');
let btn_to_minicart = document.querySelector('#btn_to_minicart');

window.addEventListener('scroll', function(){

    if(window.pageYOffset > alto){
        header.classList.add('fixed');
        btn_to_minicart.classList.add('pos_minicart');
        
    }else{
        header.classList.remove('fixed');
        btn_to_minicart.classList.remove('pos_minicart');
    }

    
})


toggleIcon.addEventListener('click',function(){
   menuvert.classList.toggle('menu-on');
   if(minCartMobile.classList.contains('change-color')){
    minCartMobile.classList.toggle('change-color');
   }
   menubars.classList.toggle('fa-times');
})


iconTimesMobile.addEventListener('click',function(){
    menuvert.classList.toggle('menu-on');
   if(minCartMobile.classList.contains('change-color')){
    minCartMobile.classList.toggle('change-color');
   }
   if(menubars.classList.contains('fa-times')){
    menubars.classList.toggle('fa-times');
   }
   
})

closeSide.addEventListener('click', function(){
    if(minCartMobile.classList.contains('change-color')){
        minCartMobile.classList.toggle('change-color');
    }
    if(!menuvert.classList.contains('menu-on') && menubars.classList.contains('fa-times')){
        menubars.classList.toggle('fa-times');
    }
})

btn_to_minicart.addEventListener('click',function(){
    minCartMobile.classList.toggle('change-color');
})

