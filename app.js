var btnTranslate = document.querySelector("#btn-translate");
var noInput1 = document.querySelector("#txt-input1");
var outputDiv = document.querySelector("#output");

function clickHandler() {
  var nO1 = noInput1.value;
  if (nO1 === 1) {
    outputDiv.innerText = "no.is Prime ddddssaasd";
  } else if (nO1 > 1) {
    for (var i = 2; i < nO1; i++) {
      if (nO1 % i === 0) {
        outputDiv.innerText = "no.is not Prime";
        break;
      } else {
        outputDiv.innerText = "no.is Prime";
      }
    }
  } else {
    outputDiv.innerText = "no.is not Prime";
  }
}

btnTranslate.addEventListener("click", clickHandler);
