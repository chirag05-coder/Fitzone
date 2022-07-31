'use strict';

const show=document.querySelector('.show');
const cart=document.querySelector('.my-cart');
const modal=document.querySelector('.close-modal');
const cart1=document.querySelector('.my-cart-1');

const wrapping =document.querySelector('.wrap');

const openModal = function(){
    cart.classList.remove('hidden');
    wrapping.classList.add('overlay');

    
} 
let flag=1;
const AddToCart= function(e){
  const sibi=getSiblings(e.target);
  //  console.log(sibi);
    const [title,para,price]=sibi;
    // console.log(title,para,price);
    const html=`<div class="cart-row">
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${para.dataset.src}" width="100" height="100">
        <span class="cart-item-title">${title.innerText}</span>
    </div>
    <span class="cart-price cart-column">${price.innerText}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1" min="1">
        <button class="btn btn-danger btn-sm remove-btn" type="button" onclick="myfunction()">REMOVE</button>
        </div>
    </div>`
  cart1.insertAdjacentHTML('afterbegin',html);
  updateCartTotal();
  mera();
         
}

function myfunction()
{
let removeCartItemButtons = document.getElementsByClassName('remove-btn')
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
}

    function removeCartItem(event) {
      console.log(event);
      let buttonClicked = event.target
      buttonClicked.parentElement.parentElement.remove()
      updateCartTotal()
  }


  const vari=document.querySelector('.check');
  function myFunction(e){
      console.log(e);
  }
  




const closeModal = function(){
    cart.classList.add('hidden');
    wrapping.classList.remove('overlay');


    
} 

show.addEventListener('click',openModal);
modal.addEventListener('click',closeModal);
wrapping.addEventListener('click',closeModal);
wrapping.addEventListener('click',function(){
    if(wrapping.classList.contains('overlay'))
      {
          closeModal();
      }
})

document.addEventListener('keydown', function (e) {
    // console.log(e.key);
  
    if (e.key === 'Escape' && !cart.classList.contains('hidden')) {
      closeModal();
    }
  });


let getSiblings = function (e) {
  // for collecting siblings
  let siblings = []; 
  // if no parent, return no sibling
  if(!e.parentNode) {
      return siblings;
  }
  // first child of the parent node
  let sibling  = e.parentNode.firstChild;
  
  // collecting siblings
  while (sibling) {
      if (sibling.nodeType === 1 && sibling !== e) {
          siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
  }
  return siblings;
};

function updateCartTotal() {
  //let cartItemContainer = document.getElementsByClassName('cart-items')[0]
  let cartRows = cart1.getElementsByClassName('cart-row')
  let total = 0
  for (let i = 0; i < cartRows.length; i++) {
      let cartRow = cartRows[i]
      let priceElement = cartRow.getElementsByClassName('cart-price')[0]
      let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      let price = parseFloat(priceElement.innerText.replace('$', ''))
      let quantity = quantityElement.value
      total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
 // console.log(cart1.getElementsByClassName('cart-row'));
}
function mera()
{
let quantityInputs = document.getElementsByClassName('cart-quantity-input')
console.log(quantityInputs);
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
  }
function quantityChanged(event) {
 // console.log(event);
  let input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1
  }
  updateCartTotal()
}


const tempo1=document.querySelector('.tempo1');
tempo1.addEventListener('click',AddToCart)

const tempo2=document.querySelector('.tempo2');
tempo2.addEventListener('click',AddToCart)

const tempo3=document.querySelector('.tempo3');
tempo3.addEventListener('click',AddToCart)

const tempo4=document.querySelector('.tempo4');
tempo4.addEventListener('click',AddToCart)

const tempo5=document.querySelector('.tempo5');
tempo5.addEventListener('click',AddToCart)

const tempo6=document.querySelector('.tempo6');
tempo6.addEventListener('click',AddToCart)

const tempo7=document.querySelector('.tempo7');
tempo7.addEventListener('click',AddToCart)

const tempo8=document.querySelector('.tempo8');
tempo8.addEventListener('click',AddToCart)

const tempo9=document.querySelector('.tempo9');
tempo9.addEventListener('click',AddToCart)

const tempo10=document.querySelector('.tempo10');
tempo10.addEventListener('click',AddToCart)

const tempo11=document.querySelector('.tempo11');
tempo11.addEventListener('click',AddToCart)

const tempo12=document.querySelector('.tempo12');
tempo12.addEventListener('click',AddToCart)

const tempo13=document.querySelector('.tempo13');
tempo13.addEventListener('click',AddToCart)

const tempo14=document.querySelector('.tempo14');
tempo14.addEventListener('click',AddToCart)

const tempo15=document.querySelector('.tempo15');
tempo15.addEventListener('click',AddToCart)

const tempo16=document.querySelector('.tempo16');
tempo16.addEventListener('click',AddToCart)



document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)

function purchaseClicked() {
  alert('Thank you for your purchase')
 
  while (cart1.hasChildNodes()) {
      cart1.removeChild(cart1.firstChild)
  }
  location.replace("transaction.html")
  // updateCartTotal()
  
}





  
