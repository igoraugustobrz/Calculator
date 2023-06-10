// Atribui as variáveis os respectivos elementos HTML (botões e display)
var btnNum0 = document.querySelectorAll("button.button-application")[13];
var btnNum1 = document.querySelectorAll("button.button-application")[8];
// var btnNum2 = document.querySelectorAll()[];
// var btnNum3 = document.querySelectorAll()[];
// var btnNum4 = document.querySelectorAll()[];
// var btnNum5 = document.querySelectorAll()[];
// var btnNum6 = document.querySelectorAll()[];
// var btnNum7 = document.querySelectorAll()[];
// var btnNum8;
// var btnNum9;
// var opAdic;
// var opSub;
// var opDiv;
// var opMult;
// var opIgual;
// var ponto;
var display = document.querySelector("div.calculator-display");

btnNum0.addEventListener("click", function clickNumber0() {
    display.innerText = 0;
});

btnNum1.addEventListener("click", function  clickNumber1() {
    document.display.textContent = 1;
});




