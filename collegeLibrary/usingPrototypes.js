/* WHEN IMPLEMENTED THE SAME WITH JS PROTOTYPES(OLD) */
function Book(yourName, bookName) {
  this.yourName = yourName;
  this.bookName = bookName;
}

/* OLD WAY */
// THIS IS JUST FOR THE FORMALITY, WE JUST NEED THE PROTOTYPE FUNCTIONALITY OF IT
function Display() {}

// THIS IS HOW YOU CAN ADD MORE AND MORE FUNCTIONS INSIDE PROTOTYPE AND USE THEM LATER
Display.prototype.add = function (book) {
  let tableBody = document.getElementById("tbody");
  let uiString = `<tr>
  <td>${book.yourName}</td>
  <td>${book.bookName}</td>
  </tr>`;
  //   This means that the next <tr> should be added to the existing <tr>s, that is why 'tableBody.innerHTML = tableBody.innerHTML + uiString
  tableBody.innerHTML += uiString;
  console.log("SUCCESS");
};

// TO RESET A WHOLE FORM!
Display.prototype.clear = function () {
  form.reset();
};

// TO VALIDATE THE FORM!
Display.prototype.validate = function (book) {
  console.log(document.getElementById("iBook").value);
  console.log(document.getElementById("iName").value);
  if (book.yourName.length > 1 && book.bookName.length > 1) {
    return 1;
  }
};

// DISPLAYING CUSTOMISED MESSAGE
Display.prototype.message = function (message) {
  document.getElementById(
    "outMsg"
  ).innerHTML = `<div class="alert alert-${message}" role="alert">
  ${message}!
</div>`;

  // THE MESSAGE WILL DISAPPEAR AFTER 3 SECONDS
  setTimeout(function () {
    document.getElementById("outMsg").innerHTML = "";
  }, 3000);
};
