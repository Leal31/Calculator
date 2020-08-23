var num1;
var num2;
var sign;
function init(){
  var bar=document.getElementById("mainbar");
  var zero=document.getElementById("0");
  var one=document.getElementById("1");
  var two=document.getElementById("2");
  var three=document.getElementById("3");
  var four=document.getElementById("4");
  var five=document.getElementById("5");
  var six=document.getElementById("6");
  var seven=document.getElementById("7");
  var eight=document.getElementById("8");
  var nine=document.getElementById("9");
  var reset=document.getElementById("reset")
  var igual=document.getElementById("equal");
  var division=document.getElementById("division");
  var multiplication=document.getElementById("multiplication");
  var sum=document.getElementById("sum");
  var substraction=document.getElementById("substraction");

  zero.onclick = function(e){
    bar.textContent = bar.textContent + "0";
  }
  one.onclick = function(e){
    bar.textContent = bar.textContent + "1";
  }
  two.onclick = function(e){
    bar.textContent = bar.textContent + "2";
  }
  three.onclick = function(e){
    bar.textContent = bar.textContent + "3";
  }
  four.onclick = function(e){
    bar.textContent = bar.textContent + "4";
  }
  five.onclick = function(e){
    bar.textContent = bar.textContent + "5";
  }
  six.onclick = function(e){
    bar.textContent = bar.textContent + "6";
  }
  seven.onclick = function(e){
    bar.textContent = bar.textContent + "7";
  }
  eight.onclick = function(e){
    bar.textContent = bar.textContent + "8";
  }
  nine.onclick = function(e){
    bar.textContent = bar.textContent + "9";
  }
  reset.onclick = function(e){
    reseting();
  }
  sum.onclick = function(e){
    num1 = bar.textContent;
    sign = "+";
    clean();
  }
  substraction.onclick = function(e){
    num1 = bar.textContent;
    sign = "-";
    clean()
  }
  multiplication.onclick = function(e){
    num1 = bar.textContent;
    sign = "*";
    clean()
  }
  division.onclick = function(e){
    num1 = bar.textContent;
    sign = "/"
    clean()
  }
  equal.onclick = function(e){
    num2 = bar.textContent;
    operation();
  }
  function reseting(){
     bar.textContent = "";
    num1 = 0;
    num2 = 0;
  }
  function clean(){
  barra.textContent = "";
  }
  function operation(){
    var response=0;
    switch (sign) {
      case "+":
          response = parseFloat(num1) + parseFloat(num2);
        break;
      case "-":
          response = parseFloat(num1) - parseFloat(num2);
        break;
      case "*":
        response = parseFloat(num1) * parseFloat(num2);
      break;
      case "/":
        response = parseFloat(num1) / parseFloat(num2);
        break;
    }
    reseting();
    bar.textContent = response
  }
}
