'use strict';

const btnCloseModal=document.querySelector('.mod-btn');

const overlay=document.querySelector('.overlay');

const openmodal=document.querySelector('.btn-form');


const showmodal=document.querySelector('.pricing_pannel');



  openmodal.addEventListener('click',function() {
     
      showmodal.classList.remove('hidden'); 
     // overlay.classList.remove('hidden');
     // console.log("hie");

    
  });
  const closeWindow=  function(){
  
      
    showmodal.classList.add('hidden'); 
  };

  btnCloseModal.addEventListener('click',closeWindow);


 

  document.addEventListener('keydown', function (e) {
   
    if (e.key === 'Escape' && !showmodal.classList.contains('hidden'))
        closeWindow();
});


const first="1 Month";
const three="3 Months";
const six="6 Months";
const twelve="12 Months";


const price=document.querySelector('.cost_price');

const paise=document.getElementById('plan');
paise.addEventListener('change',function(){
  const selObj = document.getElementById("plan");
  const selValue = selObj.options[selObj.selectedIndex].text;
   

   if(selValue==three)
    {   
          price.textContent= "$130" ;
    }
    else if(selValue==first)
    {
      price.textContent= "$50" ;
    }
    else if(selValue==six)
    {
      price.textContent= "$250" ;
    }
    else if(selValue==twelve)
    {
      price.textContent= "$499" ;
    }
  
});


const platinum=document.querySelector('.cost__complete_price');

const paisee=document.getElementById('plan__complete');
paisee.addEventListener('change',function(){
  const selObj = document.getElementById("plan__complete");
  const selValue = selObj.options[selObj.selectedIndex].text;
   

   if(selValue==three)
    {   
          platinum.textContent= "$420" ;
    }
    else if(selValue==first)
    {
      platinum.textContent= "$150" ;
    }
    else if(selValue==six)
    {
      platinum.textContent= "$799" ;
    }
    else if(selValue==twelve)
    {
      platinum.textContent= "$1599" ;
    }
  
});



