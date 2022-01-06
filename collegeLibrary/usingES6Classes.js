/*
FEATURES TO ADD
1. Data storing to localstorage
2. 'Delete book issue' button
3. Search functionality
4(advanced). Storing the data directly to a JSON file remotely
*/

class Book {
  constructor(yourName, bookName) {
    this.yourName = yourName;
    this.bookName = bookName;
  }
}

class Display {
  add(book) {
    let tableBody = document.getElementById("tbody");
    let uiString = `<tr>
  <td>${book.yourName}</td>
  <td>${book.bookName}</td>
  </tr>`;
    // This means that the next <tr> should be added to the existing <tr>s, that is why 'tableBody.innerHTML = tableBody.innerHTML + uiString
    tableBody.innerHTML += uiString;
  }
  clear() {
    form.reset();
  }
  validate(book) {
    if (book.yourName.length > 1 && book.bookName.length > 1) {
      return 1;
    } else {
      return 0;
    }
  }
  message(type) {
    if (type == "success") {
      document.getElementById(
        "outMsg"
      ).innerHTML = `<div class="alert alert-${type}" role="alert">
    <b>Congratulations!</b> Your Book is successfully added!
  </div>`;
    } else if (type == "danger") {
      document.getElementById(
        "outMsg"
      ).innerHTML = `<div class="alert alert-${type}" role="alert">
      <b>Error!</b> Something went wrong, please try again!
  </div>`;
      // THE MESSAGE WILL DISAPPEAR AFTER 3 SECONDS
      setTimeout(function () {
        document.getElementById("outMsg").innerHTML = "";
      }, 3000);
    }
  }
}

let form = document.getElementById("libForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let iBook = document.getElementById("iBook").value;
  let iName = document.getElementById("iName").value;
  let book = new Book(iBook, iName);

  let display = new Display();

  // VALIDATING THE INPUT FROM THE FORM, WITHOUT USING 'required' IN HTML
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.message("success");
  } else {
    display.message("danger");
  }
});
