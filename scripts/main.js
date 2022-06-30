'use strict';

const body = document.querySelector('body');
const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const viewFinder = document.getElementById('response');
const onAc = document.querySelector('[data-clean="on/ac"]');
const backspace = document.querySelector('[data-clean="backspace"]');
const equals = document.querySelector('[data-equals]');
const listButtons = document.querySelectorAll("button");


numbers.forEach((number)=>{
  number.addEventListener('click',()=>{
    viewFinder.textContent += number.dataset.number

  })
})

operators.forEach((operator)=>{
  operator.addEventListener('click',()=>{
    viewFinder.textContent += operator.dataset.operator
  })
})

onAc.addEventListener('click',()=>{
  viewFinder.textContent = ""
})

backspace.addEventListener('click',()=>{
  viewFinder.textContent = viewFinder.textContent.slice(0,-1)
})

equals.addEventListener('click',()=>{
  viewFinder.textContent = eval(viewFinder.textContent)

})


const numericKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operatingKeys = ["+", "-", "/", "÷", "*", "."];
const functionKeys = ["=", "Enter", "Backspace", "c"];

body.addEventListener("keydown", (keyBoardEvent) => {
    let key = keyBoardEvent.key;
    if(numericKeys.includes(key) || operatingKeys.includes(key)){
        viewFinder.textContent += key
    } else if(functionKeys[0] == key || functionKeys[1] == key){
      viewFinder.textContent = eval(viewFinder.textContent)
    } else if(functionKeys[2] == key){
      viewFinder.textContent = viewFinder.textContent.slice(0,-1)
    } else if(functionKeys[3] == key){
      viewFinder.textContent = ""
    } 
});

function activateAnimation(index){
  listButtons[index].classList.toggle("active");
  setTimeout(() => {
      listButtons[index].classList.toggle("active");
  }, 200);
}

