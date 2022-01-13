let submitBtn = document.getElementById("submit");
let eChoice = document.getElementById("encryptBtn");
let dChoice = document.getElementById("decryptBtn");
let display = document.getElementById("display");
let displayPrnt = document.getElementById("displayParent");
let tapToCpyBtn = document.getElementById("tapToCpy");

submitBtn.addEventListener("click", startCrypto);
tapToCpyBtn.addEventListener("click", function copy() {
  navigator.clipboard.writeText(display.innerText);
  alert(`Copied TEXT: ${display.innerText}`);
});

function startCrypto() {
  displayPrnt.style.display = "block";
  let text = document.getElementById("contentInp").value;
  let cryptoTxt = [];
  if (eChoice.checked) {
    for (let i in text) {
      cryptoTxt[i] = text.charCodeAt(i);
    }
    display.innerHTML = `<b>Encrypted Text:</b><br>${cryptoTxt}`;
  } else if (dChoice.checked) {
    let encrypted = text.split(",");
    display.innerHTML = `<b>Decrypted Text:</b><br>${String.fromCharCode(
      ...encrypted
    )}`;
  }
}
