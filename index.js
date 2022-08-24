var num1 = 8  
var num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent= num2  

 var sumEl=document.getElementById("sum-el")
function sum()
{
    var result = num1+num2
    sumEl.textContent = "Sum: "+ result
  
}
function subtract()
{
    var result = num1-num2
    sumEl.textContent = "Difference: "+ result
  
}
function multiply()
{
    var result = num1*num2
    sumEl.textContent = "Product: "+ result
  
}
function divide()
{
    var result = num1/num2
    sumEl.textContent = "Division: "+ result
 
}