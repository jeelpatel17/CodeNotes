let numbers = document.getElementsByClassName("no");
let operators = document.getElementsByClassName("op");
let equals = document.getElementById("equals");
let inpBar = document.getElementById("inp").value;
let opChoice, n1, n2;
let allClearBtn = document.getElementById("allClear");

// HIGHLIGHTING OPERATORS AND CLEARING INPUT ONCE OPERATOR IS SELECTED
for (elem of operators) {
  elem.addEventListener("click", (e) => {
    e.target.classList += " activeOp";
    opChoice = e.target.value;
    n1 = document.getElementById("inp").value;
    document.getElementById("inp").value = "";
  });
}

// TO INPUT THE TYPED NUMBERS INTO THE DISPLAY
for (number of numbers) {
  number.addEventListener("click", (e) => {
    document.getElementById("inp").value += e.target.innerText;
  });
}

equals.addEventListener("click", function arith() {
  n2 = document.getElementById("inp").value;
  let res = `${n1} ${opChoice} ${n2}`;
  document.getElementById("inp").value = eval(res);
});

allClearBtn.addEventListener("click", () => {
  document.getElementById("inp").value = "";
});
