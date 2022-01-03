/* CONSOLE FUNCTIONS */
// console.log(3 + 3); // likewise for every variable/operation
// console.log([2, 3, 4]); // arrays
// console.log({ jeel: "this", marks: 56 }); // objects
// console.warn("This is a Warning!"); // to show a message in yellow color, denotes that it's a warning
// console.clear(); // to clear the console

// TO CHECK HOW LONG DOES YOUR CODE TAKE TO EXECUTE
// console.time("Code executed in"); // the inner content should be the same in both .time() and timeEnd()
// your code...
// console.timeEnd("Code executed in");

/* IF STATEMENT IN CONSOLE! */
// console.assert(2 > 1, `2 is greater than 1`); // the second argument will only execute if the first one is FALSE!, here '2 > 1' is true, so it'll not print the string, but '1 > 2' condition will make the string print
// console.error("an error!");
// var varia = 34;
// console.log(varia); // this'll be printed in blue color

/* VARIABLE NOMENCLATURE in JS */
// - can't start with numbers
// - can start with $, _ or letter

// - - you must initialize a constant variable when declaring

/* ARRAYS */
// - You can push an element to a const array
// i.e. const arr1 = [1,2,3];
//     arr1 = [5,6,7]; // you can't do this
//     arr1.push(9); // but you can do this!

/* MOST COMMON PROGRAMMING CASE TYPES */
// 1. camelCase
// 2. kebab-case
// 3. snake_case
// 4. PascalCase

/* DATATYPES IN JS */
// 1. Primitive Datatype - Stack
//     - Strings, Numbers, Boolean, Null, Undefined, Symbol
// 2. Reference Datatype - Heap
//     - Arrays, Object Literals, Functions, Dates

/* TYPEOF */
// let named = "jeel";
// function func() {}
// let date = new Date();
// let arr = [1, 2, 3];
// console.log("Ensurer" + " " + name1);
// console.log(`Ensurer ${name1}`);
// TYPEOF - To know the datatype of a variable
// console.log(typeof named);
// console.log(typeof func);
// console.log(typeof date);
// console.log(typeof arr);

// let obj = {
//   "jeel patel": 12, // you can't add spaces in the first value, but you can do this by this way!
// };

/* TYPE CONVERSION */
// let numStr = 24;
// console.log(Number(numStr)); // this is one way to convert a datatype to string; vice-versa for Number; Number(true) will print 1; parseInt(numStr) will round off the number if it is float, likewise parseFloat(numStr) will parse a float string into float datatype
// console.log(numStr.toString()); // this is another, this kind of function is only available to convert into string
// console.log(new Date());
// console.log(numStr.toFixed(3)); // this is like %.3f in C, the more the value in the braces, the more decimals(precise) it would print

/* TYPE COERCION */
// let oneStr = "34 hello 564546 hello 34";
// let oneNum = 453242532;
// let concat = oneStr + oneNum;
// console.log(typeof concat); // this'll print 4545, and not add it, as the oneStr is string, so both will be concatenated as a single string

/* MINI FUNCTIONS IN JS */
// console.log(oneStr[1]); // you can print a string character this way too, even if it's not an array!

// OR YOU CAN REVERSE ENGINEER THIS!

// console.log(oneStr.indexOf("4")); // through this way!; if a character/word isn't in the string, it'll return -1; if a character/word has multiple occurences, than it'll return the first occurence

// console.log(oneStr.lastIndexOf("hello")); // this will print the last occurence of a character/word

// console.log(oneStr.charAt(5)); // this will print the particular character

// console.log(oneStr.endsWith("34")); // this will return boolean value if the given oneStr ends with '34'

// console.log(oneStr.includes("34")); // this checks whether your given string is present in the variable or not

// console.log(oneStr.substring(1, 5)); // this will extract the characters from index 1 to 5, similar to slice(); subString() doesn't have the ability to return first n or last n characters, but slice() have

// console.log(oneStr.slice(-5)); // this will extract the last 5 characters from a string, you can't do this with a number variable

// console.log(oneStr.slice(2)); // this will cut the first two characters of the string and return the rest!

// console.log(oneStr.split(6)); // this will remove the '6' character from the string and divide the string from the places where '6' occured and stores those individual values into an object!; if entered split(' '), it'll divide all the words from spaces and convert into object

// console.log(oneStr.replace(5, 7)); // this will replace the word to another word, BUT only the first occurence would be replaced

/* COMPILER GYAAN */
//  - By using template literals(backticks), you can new line when declaring variable, but in "", you can't
// - shift + enter - it allows you to make a new line inside the browser console
// CTRL + SHIFT + R - This will reboot a webpage from zero, clearing all previous data

/* JS WITH HTML */
// let html = `<h1> Hello </h1>`;
// document.body.innerHTML = html; // this'll insert an h1 tag in the body tag

/* ARRAYS */
// const arr = new Array(23, 45, "ty");
// const inherited = [45, 15, [94, 85], 34, 45];
// inherited[0] = "Jeel"; // this would WORK! even though the array is a constant!!
// console.log(inherited.indexOf(15)); // to print its position
// inherited.push(77); // to insert an element from the back of an array
// inherited.unshift(11); // to insert an element from the front of an array
// inherited.pop(); // to remove an element from the back of an array
// inherited.shift(); // to remove an element from the front of an array
// inherited.splice(1, 2); // to remove from n1 to n2 element from an array, including both elements mentioned!
// inherited.reverse(); // to reverse an array
// console.log(inherited);
// console.log(Array.isArray(inherited)); // this checks and returns boolean if the entered variable is an array or not

/* TERNARY OPERATOR */
// let me = 19;
// me >= 18 ? console.log("great") : console.log("ehh");

/* BREAK AND CONTINUE */
// break; // this'll get out of the loop and won't iterate again
// continue; // this'll get out of the loop from where it is printed, and iterate the loop again until it's false; but it won't run the statements below it!

/* FOR EACH - New way to iterate through an array */
// let arr = [7, 8, 9];
// arr.forEach(function (element, index, array) {
//   console.log(index, element, array); // this is like a for loop, but it iterates only till the array is ended
// });

/* FOR EACH FOR AN OBJECT - Iterate through an object's values*/
// let myObject = {
//   hello: "world",
//   34: "66",
//   name: "Patel",
//   type: true,
// };
// for (let key in myObject) {
//   console.log(`${key}: ${myObject[key]}`); // key-value pairs will be printed
// }

/* Default value in function's paremeters */
// function func(para1, para2 = "a default value if no value is passed")

/* Store a function in a variable */
// const myFunc = function func(){} // you can call this as you call a normal function, but func would be replaced by myFunc

/* Store a function in an object */
// const myObj = {
//   name: "jeel",
//   game: function () {
//     return "GTA V";
//   },
// };
// console.log(myObj.game()); // calling a function which is inside an object; this is AKA Anonymous Function

/* Web JS */
// prompt("Enter your name:"); // to make user enter some info
// confirm("You sure?"); // to ask user for confirmation of a task
// let w = window;
// console.log(w.document);
// console.log(w.innerHeight); // denotes the inner height of the browser window;
// console.log(w.innerWidth); // denotes the inner width of the browser window; Fun Fact: This is how hackers(on Dark Web) find out what resolution does your monitor have, so it's advised to keep your browser window restored down while surfing on Dark/Deep Web
// console.log(w.scrollX); // denotes how much you've scrolled horizontally
// console.log(w.scrollY); // denotes how much you've scrolled vertically
// console.log(w.location); // denotes how much you've scrolled vertically
// console.log(w.location.reload()); // this will reload the page
// console.log(w.location.href); // this will return the URL of the page; this is how trojan horses keeps redirecting you from one site to another even though you haven't clicked on any link!
// console.log(w.history.length); // returns the total sites you went in one browser session
// console.log(w.history.go(-1)); // redirects you to the page you were previously on; 1 if we want to go forward, exactly like we press arrow buttons on the top-left of the url bar in a browser

/* WEB JS EXTENDED */
// let links = document.links;
// console.log(document.links[0]);
/* Fun Code - To extract all the LINKS on a webpage!*/
// let links = document.links;
// for (let i = 0; i < links.length; i++) {
//   console.log(links[i].href);
// }
/* Fun Code - To extract all the IMAGES on a webpage!*/
// let images = document.images;
// for (let i = 0; i < images.length; i++) {
//   console.log(images[i].src);
// }
/* Fun Code - To extract all the SCRIPTS on a webpage!*/
// let scripts = document.scripts;
// for (let i = 0; i < scripts.length; i++) {
//   console.log(scripts[i]);
// }
/* Exercise 1 - Fetch Links in which 'javascript' is mentioned */
// let links = document.links;
/* TO USE FOREACH WITH ELEMENTS */
// Array.from(links).forEach((element, index) => {
//   let strLink = links[index].toString();
//   // just change 'javascript' to the word you're looking for in a link
//   if (strLink.includes("javascript")) {
//     console.log(strLink);
//   }
// });

/* HTML Selectors */
// let element = document.getElementById("primary");
// document.getElementsByClassName(""); // similars
// document.getElementsByTagName(""); // similars
// document.querySelector("#primary"); // to select classes or id; Note: this will return only the first element, for grabbing all elements querySelectorAll('') is used
// console.log(element.className); // will return all the classes assigned to the element
// console.log(element.childNodes); // will return all the child elements of an element; Note: This will return all newlines as 'text' along with the comments too!
// console.log(element.childNodes[2].nodeName); // will return the name of the tag
// console.log(element.childNodes[2].nodeType); // will return the nodeType of an element; the list is below:
// 1. element
// 2. attribute
// 3. text node
// 8. comment
// 9. document
// 10. docType
// console.log(element.children); // will return all the child elements of an element
// console.log(element.parentElement); // will return the parent container
// element.style.fontFamily = "Helvetica"; // changing css with js
// element.innerText = "Helllo";
// element.innerHTML = "<h1>Helloo</h1>";
// let cont = document.querySelector("div.container"); // this will grab the div whose class is container!
// document.querySelector(cont.firstChild); // this will grab the first child of the container!; vice-versa with 'last'
// document.querySelector(cont.firstElementChild); // this will grab the first child in the container which is an element(not a new-line(text) nor a comment)!; vice-versa with 'last'
// document.querySelector(cont.childElementCount); // this will return the total elements inside the containe

/* CREATE AN HTML ELEMENT & INSERT CHILD ELEMENTS IN IT */
// let elem = document.createElement("h1");
// elem.className = "jeel main";
// elem.id = "thisId";
// elem.setAttribute("title", "main");
// elem.innerText = "Hello World";
// document.querySelector(".container").appendChild(elem);
// similars are replaceChild() and removeChild()
// hasAttribute() checks whether an attribute is present in an element/tag or not; removeAttribute()

/* QUICK QUIZ - Creating an h1 element with text 'Go to CodeWithHarry' and an anchor tag wrapping it with href of 'https://codewithharry.com' */
// let link = document.createElement("a");
// link.innerHTML = "<h1>Go to CodeWithHarry";
// link.setAttribute("href", "https://example.com");
// document.querySelector("body").appendChild(link);

/* EVENT LISTENERS */
//Similar mouse listeners
// 1. mousedown
// 2. mouseup
// 3. click
// 4. dblclick
// 5. mouseenter
// 7. mousemove
// 6. mouseleave
// const action = "mousemove";
// document.querySelector("#counter").addEventListener(action, function (e) {
//   let event = e.target; // e.target will get the element which is clicked
// console.log(action);
// e.preventDefault();
//   console.log(event.className); //returns all classes in a string format with spaces inbetween
//   console.log(event.classList); // returns an object containing all classes, along with the prototype
// console.log(Array.from(event.classList)); // returns an array containing all classes and nothing else
//   console.log(e.offsetX); // or Y; returns where exactly you've clicked in the window
//   console.log(e.clientX); // or Y; returns where exactly you've clicked in the window
// });

/* ADVANCED EVENT LISTENERS */
// e.preventDefault(); // this helps not to reload or redirect to a webpage when submitted a form

/* LOCAL & SESSION STORAGE */
// The difference between both is that the data in Local Storage will not be removed unless the website developer does it, and the data inside Session Storage will be removed automatically after a web session is terminated
// - To use SESSION STORAGE, you just need to replace the word 'local' to 'session'
/* My own mini project - setting a user's theme preference according to what they selected previously while on the website */
// localStorage.setItem("mode", "dark"); // storing some data into the client side, much like cookies and the theme preference!
// let body = document.getElementById("html");
// if (localStorage.getItem("mode") == "dark") {
//   body.style.backgroundColor = "#222529";
//   body.style.color = "#e9e9e9";
// }
// OTHER FUNCS
// localStorage.clear(); // clears all data in the localstorage
// localStorage.getItem("mode"); // retrieves a value from the localstorage according to the key that you've given
// localStorage.removeItem("mode"); // clears a specific value from the localstorage according to the key that you've given

/* JSON STRINGIFY & PARSE */
// let arr = ["hey", 56, "toystory"];
// let stringed = arr.toString(); // this way will remove the braces and quotes around strings, hence JSON.stringify is recommended over this method, so that you can parse it later to get an array!!
// let stringed = JSON.stringify(arr); // to convert an array to a string, to later convert it back into an array with JSON parse
// console.log(arr);
// console.log(stringed);
// console.log(JSON.parse(stringed)); // parsing a string to an array

/* EDITABLE DIV : EXERCISE 2 */

// let heading = document.querySelector(".counter");
// heading.innerText = localStorage.getItem("content");
// heading.addEventListener("click", function () {
//   heading.setAttribute("contenteditable", "true");
// });

// // SAVES WHEN FOCUSED OUT (WITHOUT BUTTON)
// heading.addEventListener("blur", function () {
//   localStorage.setItem("content", heading.innerText);
//   // console.log(localStorage.getItem("content"));
// });

// // SAVES WITH A BUTTON CLICK
// let btn = document.querySelector(".btn");
// btn.style.display = "block";
// btn.addEventListener("click", function () {
//   localStorage.setItem("content", heading.innerText);
//   // console.log(localStorage.getItem("content"));
// });

/* PROJECT 1 : TODO APP */
// IT IS INSIDE THE TODO.JS FILE

/* PREVENTING THE PAGE TO BE RELOADED */
// document.getElementById("form").addEventListener("submit", function (event) {
//   event.preventDefault();
// });

/* Math functions */
// console.log(Math.round(Math.random() * (100 - 50) + 50)); // 100 is the max limit, 50 is the minimum limit; if you want to change the range, change 100 as max and both 50s as min
// console.log(Math.round(5.3)); // this will round up to the nearest integer value
// console.log(Math.ceil(5.3)); // this will round up to the upper integer value
// console.log(Math.floor(5.7)); // this will round up to the lower integer value; negative values will print opposite to the positive rounded off values
// console.log(Math.abs(5.7)); // this will make the value absolute: if -ve, makes positive; if float, makes positive float
// console.log(Math.sqrt(5.7)); // square root
// console.log(Math.pow(5, 7)); // power
// console.log(Math.min(5, 5, 6, 7, 8, 9, 2, 7)); // finds out minimum value
// console.log(Math.max(5, 5, 6, 7, 8, 9, 2, 7)); // finds out maximum value

/* DATE AND TIME */
// console.log(new Date());
// console.log(new Date().getFullYear());
// console.log(new Date().getHours());

/* Object Oriented Programming */
// Object Literal for Creating Objects
// let superhero = {
//   name: "Spiderman",
//   superPower: "Throw webs",
//   inAction: function () {
//     console.log("fi fi fi...");
//   },
// };

/* CONSTRUCTOR */
// Constructor is a template with whom you can make objects easily without initializing like above method; i.e. new Date()

// This is a CONSTRUCTOR which will construct an object named newSuperhero
function superhero(name, superPower) {
  this.name = name;
  this.superPower = superPower;
  this.inAction = function () {
    console.log(
      `${this.name} is the new superhero in the Marvel Cinematic Universe with superpowers of ${this.superPower}!`
    );
  };
}

let vision = new superhero("The Vision", "predicting the future");
// let wanda = new superhero("Wanda Maximoff", "teleporting");
// wanda.inAction();

/* PROTOTYPE */
// Functions and values can be saved in prototype of an object too!

// this is also called a CONSTRUCTOR
// function heroLifeSpan(lifeSpan) {
//   this.lifespan = lifeSpan;
// }

// PROTOTYPES basically are used like localStorage.getItem(), and are declared as below
// heroLifeSpan.prototype.getSpan = function () {
//   return this.lifespan;
// };

// heroLifeSpan.prototype.setSpan = function (newLifeSpan) {
//   this.lifespan = newLifeSpan;
// };

// Now, you can use mySuperhero function to get and set any key value pair

// let visionLifeSpan = new heroLifeSpan(35);
// console.log(visionLifeSpan.getSpan()); // this and the below statement will print the same
// console.log(visionLifeSpan.lifespan);

/* Object.create() - OLD WAY */
// const proto = {
//   slogan: function () {
//     return "zindagi ke saath bhi, zindagi ke baad bhi!";
//   },
// };

// NOW, there are two ways of inheriting an object

// 1st WAY
// const firstKey = Object.create(proto);
// firstKey.name = "LIC";
// firstKey.headquarters = "Delhi";

// 2nd WAY
// const firstKey = Object.create(proto, {
//   name: { value: "LIC" },
//   headquarters: { value: "Delhi" },
// });

// console.log(firstKey);
// console.log(firstKey.name);
// console.log(proto.slogan());

/* ES6 CLASSES AND INHERITANCE - THE MODERN WAY */

// class Employee {
//   constructor(name, exp, role) {
//     this.name = name;
//     this.exp = exp;
//     this.role = role;
//   }
//   intro() {
//     return `Hey Folks! I'm ${this.name} and I've worked as a ${this.role} for around ${this.exp} years now and it's really nice meeting you!`;
//   }
// }

// jeel = new Employee("Jeel Patel", 2.6, "Frontend Developer");
// console.log(jeel);
// console.log(jeel.intro());

/* INHERITANCE - Which means the new class would have all old keys, but will also have some new keys */
// Here, the githubUsername is a new key
// class backEndDev extends Employee {
//   constructor(name, exp, role, githubName) {
// this runs only when you're creating an object
// super(name, exp, role); // SUPER means the constructor from previous class(we can call it parent class)
// this.githubUsername = githubName;
// }
// }

// jeelpt = new backEndDev("Jeel James", 4, "BackEnd Developer", "jeelpatel17");
// console.log(jeelpt.githubUsername);

/* EXERCISE 4 - LIBRARY CLASS */
// First, you need to make a function getBookList() which prints all the books available in the library,
// Constructor must take the bookList as an argument
// Then, you need to issue a book with issueBook(bookName, author, readerName) function
// Then, you need to return a book from a reader's account with returnBook(bookName) function

/* PROJECT 2 - COLLEGE LIBRARY WEBSITE */
