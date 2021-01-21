var btnTranslate = document.querySelector("#btn-translate");
var noInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("output");

function clickHandler() {
  var nO = noInput.value;
  for (var i = 2; i < nO; i++) {
    if (nO % i === 0 || (nO = 1)) {
      outputDiv.innerText = nO + "is not a prime Number";
    } else {
      outputDiv.innerText = nO + "is  a prime Number";
    }
  }
}

btnTranslate.addEventListener("click", clickHandler);
