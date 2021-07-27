var pupup = document.querySelector('.filter_pupup_box');
var btn_burgerOn = document.querySelector('.burger_btn_on');
var btn_burgerOff = document.querySelector('.burger_btn_off');
var pupup_link_a1 = document.querySelector('.a1');
var pupup_link_a2 = document.querySelector('.a2');
var pupup_link_a3 = document.querySelector('.a3');
var pupup_link_a4 = document.querySelector('.a4');
var pupup_link_a5 = document.querySelector('.a5');
var pupup_link_a6 = document.querySelector('.a6');

 

function wyzwalacz(){
   btn_burgerOn.addEventListener('click', function(){
       btn_burgerOn.classList.remove('show');
       btn_burgerOff.classList.add('show');
       pupup.classList.add('show');
   });
  
   btn_burgerOff.addEventListener('click', function(){
        btn_burgerOn.classList.add('show');
        btn_burgerOff.classList.remove('show');
        pupup.classList.remove('show');
   });

     pupup_link_a1.addEventListener('click', function(){
     pupup.classList.remove('show');
     btn_burgerOn.classList.add('show');
     btn_burgerOff.classList.remove('show');
   });

     pupup_link_a2.addEventListener('click', function(){
     pupup.classList.remove('show');
     btn_burgerOn.classList.add('show');
     btn_burgerOff.classList.remove('show');
   });

   pupup_link_a3.addEventListener('click', function(){
     pupup.classList.remove('show');
     btn_burgerOn.classList.add('show');
     btn_burgerOff.classList.remove('show');
   });

   pupup_link_a4.addEventListener('click', function(){
     pupup.classList.remove('show');
     btn_burgerOn.classList.add('show');
     btn_burgerOff.classList.remove('show');
   });
    
  pupup_link_a5.addEventListener('click', function(){
    pupup.classList.remove('show');
    btn_burgerOn.classList.add('show');
    btn_burgerOff.classList.remove('show');
  });

  pupup_link_a6.addEventListener('click', function(){
    pupup.classList.remove('show');
    btn_burgerOn.classList.add('show');
    btn_burgerOff.classList.remove('show');
  });
};



wyzwalacz();