var btnTranslate = document.querySelector("#btn-translate");
var noInput1 = document.querySelector("#txt-input1");
var noInput2 = document.querySelector("#txt-input2");

var outputDiv = document.querySelector("#output");

function clickHandler() {
  var nO1 = noInput1.value;
  var nO2 = noInput2.value;

  if (nO1 === nO2) {
    outputDiv.innerText = "no are equal";
  } else {
    outputDiv.innerText = "no are not equal";
  }
}

btnTranslate.addEventListener("click", clickHandler);
