/* PROJECT 1 : TODO APP */
/* MY CATCHES */
/* 
1. The reset button should only appear after the ul has atleast 1 note
2. All notes should be categorized according to the fixed options given to the user, like work, personal, education. and have colorful tags at the right-end of each note
3. Each note should have a title and a description
*/
// PREVENTING THE PAGE TO BE RELOADED
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
});

// SAVE AND RESET BUTTONS
let saveBtn = document.getElementById("saveBtn"); // where notes will be inputted
let resetBtn = document.getElementById("resetBtn"); // where notes will be inputted

// SHOWING Existing LIs from LocalStorage
for (let i = 0; i < localStorage.length; i++) {
  let note = document.createElement("li");
  let content = localStorage.getItem(`note${i}`);
  note.innerText = content;
  document.querySelector("#ul").appendChild(note);
}

/* OVERWRITING PROBLEM STILL UNSOLVED */
// CREATING LIs
saveBtn.addEventListener("click", function () {
  let note = document.createElement("li"); // creating a list element
  note.setAttribute("class", "lis");
  let content = document.getElementById("inp").value; // grabbing #inp from which the note would be taken
  document.getElementById("inp").value = "";
  note.innerText = content; // copying the note from input to the list of all notes
  document.querySelector("#ul").appendChild(note);
  let notes = document.getElementsByClassName("lis");
  for (let i = 0; i < notes.length; i++) {
    localStorage.setItem(`note${i}`, notes[i].innerText);
  }
  document.getElementById("resetBtn").style.display = "inline-block";
});

// TO DELETE ALL NOTES ALTOGETHER
resetBtn.addEventListener("click", function () {
  let list = document.querySelector("#ul");
  while (list.hasChildNodes) {
    list.removeChild(list.firstChild);
    localStorage.clear();
    document.getElementById("resetBtn").style.display = "none";
  }
});
