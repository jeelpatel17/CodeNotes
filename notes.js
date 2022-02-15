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
// function superhero(name, superPower) {
//   this.name = name;
//   this.superPower = superPower;
//   this.inAction = function () {
//     console.log(
//       `${this.name} is the new superhero in the Marvel Cinematic Universe with superpowers of ${this.superPower}!`
//     );
//   };
// }

// let vision = new superhero("The Vision", "predicting the future");
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
// IN A SEPERATE FOLDER

/* AJAX  - asynchronous javascript */
// let fetchBtn = document.getElementById("fetchBtn");
// fetchBtn.addEventListener("click", buttonClickHandler);

// function buttonClickHandler() {
// instantiate an xhr object, in which we'll store the function through which we can make HTTP requests
// const xhr = new XMLHttpRequest();
// open the XHR object and specify what you want to do; also do enter the URL where you want to fetch data from
// GET METHOD; 'true' here is for specifying if we want to perform an asynchronous request or not(to keep running the code flow side by side a process)
// xhr.open("GET", `/db.json`, true);
// POST METHOD
// xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
// xhr.getResponseHeader("Content-type", "application/json");

// when response is ready
// xhr.onload = function (e) {
//   // LET THE USER KNOW IF ANY ERROR IS OCCURED
//   if (this.status === 200) {
//     let data = JSON.parse(this.responseText);
//     // console.log(data);
//     document.getElementById(
//       "list"
//     ).innerHTML += `<li><h5 class="card-title">${data.day}</h5>
//     <h6 class="card-subtitle mb-2 text-muted"></h6></li>`;
//   } else {
//     console.error("Something went wrong!");
//   }
// };

// sending the request; every above function is useless without this func below!
// FOR POST METHOD
// let params = `{ name: "Jesdv", salary: "123", age: "20" }`;
// xhr.send(params);

// FOR GET METHOD
//   xhr.send();
// }

/* CALLBACK FUNCTIONS */
// Assuming that this array comes from a remote database
// const students = [{ name: "Jeel", sub: "Science" }];

// function enrollStudent(student, callback) {
// //   setTimeout(function () {
//     students.push(student);
//     // this will hold the function that has been passed as a 'callback' function until this function completes processing itself
//     callback();
// //   }, 300);
// }

// function getStudent() {
// //   setTimeout(function () {
//     let str = "";
//     students.forEach(function (student) {
//       str += `${student.name}; ${student.sub}\n`;
//     });
//     console.log(str);
// //   }, 300);
// }

// enrollStudent({ name: "Sharad", sub: "Rust" }, getStudent);
// getStudent();

/* EXERCISE 5 - Dictionary */
/* OBJECTIVES */
/*
1. Take a word from the user as an input
2. Search into the .json file that you've created
3. Scrape the definition of it
4. Populate the dom with it
5. Use Bootstrap
*/

// async function jeel() {
//       const response = await fetch("/patel.txt");
//       const data = await response.text();
//       console.log(data);
//       return data;
//     }
//     // storing what the fnunction returns, to see how a promise can be in a state of pending
//     let j = jeel();
//     // what you want to do with the received data returned by jeel() func
//     j.then((d) => console.log(d));

/* PROMISES */

// function func() {
//   return new Promise(function (resolve, reject) {
//     // setTimeout(() => {
//     const error = true;
//     if (!error) {
//       resolve();
//     } else {
//       reject("Error");
//     }
//     // }, 2000)
//   });
// }

// func()
//   .then(function () {
//       // The code that you wanna run after the function is executed successfully; Basically, this helps when we have a remote database to fetch
//     console.log("Outside promise: Success!");
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

/* PROMISES - PRACTICAL EXAMPLE */ // - first uncomment the 'students[]' array in the 'callback functions' notes

// function enrollStudent(student) {
//   return new Promise(function (resolve, reject) {
//     students.push(student);
//     const error = true;
//     if (!error) {
//       resolve();
//     } else {
//       reject("you can enter a message here!");
//     }
//   });
// }

// function getStudent() {
//   let str = "";
//   students.forEach(function (student) {
//     str += `${student.name}; ${student.sub}\n`;
//   });
//   console.log(str);
// }

// let newStudent = { name: "Dev", sub: "Golang" };

// .THEN FUNC IS LIKE A PLACEHOLDER FOR .RESOLVE FUNC; AND SO IS .REJECT FUNC FOR .CATCH
// enrollStudent(newStudent)
//   .then(function () {
//     getStudent();
//   })
// YOU CAN ALSO WRITE LIKE THIS, AS getStudent is itself a function!
//   .then(getStudent).catch()
//   .catch(function () {
//     console.log("error");
//   });
// This will now be inside the .then function, because we need to assure that getStudent only executes if the promise is resolved
// getStudent();

/* PROMISES - QUICK QUIZ */

// function getData() {
//   return new Promise(function (resolve, reject) {
//     let xhr = new XMLHttpRequest();

//     xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

//     xhr.onload = function (e) {
//       // LET THE USER KNOW IF ANY ERROR IS OCCURED
//       if (this.status === 200) {
//         resolve(this.responseText);
//       } else {
//         reject("Somethin' went wrong!");
//       }
//     };
//     // FOR GET METHOD
//     xhr.send();
//   });
// }

// getData()
//   .then(function (content) {
//     console.log(`Successfully received content: ${content}`);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

/* PROJECT 3 - NEWS WEBSITE */
// IN A SEPERATE FOLDER

/* ARROW FUNCTIONS */
// NORMAL FUNC
// function greet() {
//   console.log("hey");
// }

// NORMAL FUNC - PART 2
// const greet = function () {
//   console.log("hey");
// };

// ARROW FUNC
// const greet = () => {
//   console.log("hey");
// };
// YOU CAN ALSO WRITE LIKE THIS(IF YOU HAVE ONLY ONE STATEMENT TO EXECUTE):
// const greet = () => console.log("hey");

/* FETCH API - MODERN REPLACER OF XHR */

// let fetchBtn = document.getElementById("fetchBtn");
// let parent = document.getElementById("list");

// fetchBtn.addEventListener("click", function fetchData() {
//   let url = "patel.txt";
//   // IN HERE, THE FIRST .then is executed after fetch() and the second .then is resolved after the current .then is resolved; like a flowchart, step by step
//   fetch(url)
//     .then((response) => {
//       return response.text();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// });

// A PRACTICAL EXAMPLE OF GET WITH FETCH()
// fetchBtn.addEventListener("click", function fetchData() {
//   let url = "https://api.github.com/users";
//   fetch(url)
//     .then((response) => {
//       // THIS WILL RETURN IN TEXT FORMAT
//       //   return response.text();
//       // THIS WILL RETURN IN JSON FORMAT; automatically parsed!
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data[0].login);
//     });
// });

// PRACTICAL EXAMPLE OF POST WITH FETCH()
// fetchBtn.addEventListener("click", function fetchData() {
//   let url = "http://dummy.restapiexample.com/api/v1/create";
//   let data = `{ name: "tedst", salary: "12543", age: "2463" }`;
//   let params = {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     // you need to stringify it if it is an object
//     body: data,
//   };
//   fetch(url, params)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// });

/* ASYNC/AWAIT - HOW TO USE PROMISES, ASYNC/AWAIT AND FETCH ALTOGETHER */
// We don't need to use .then two times like we did earlier
// ASYNC will return a promise that it'll not execute further until the fetch() is resolved
// async function jeel() {
//   const response = await fetch("/patel.txt");
//   const data = await response.text();
//   console.log(data);
//   return data;
// }
// // storing what the fnunction returns, to see how a promise can be in a state of pending
// let j = jeel();
// // this will print a promise which is pending
// console.log(j);
// // what you want to do with the received data returned by jeel() func
// j.then((d) => console.log(d));

/* TRY & CATCH */
// pretend that this is coming from a server
// let a;

// if (a != undefined) {
//   console.log(typeof a);
// } else {
//   // this is normal error throwing method
//   //   console.error("undefined, please define it first!");
//   // this is pro method
//   throw new Error("undefined, please define it first!");
// }

// This means, try to execute the following code and if get an error, execute the code in the catch() block
// try {
//   //   console.log("dsf");
//   jeelk();
// } catch (error) {
//   // WE CAN DISPLAY SOME CUSTOM ERROR WITH THIS METHOD
//   //   console.log("error");
//   console.log(error);
//   //   console.log(error.name);
//   //   console.log(error.message);
// } finally {
//   // finally{} is like the default statement from switch statement
//   console.log("finally, we'll run this no matter what");
// }

/* *EUREKA* MOMENT */
// EUREKA!!!! THIS IS WHAT I WANTED SINCE AGES!
//   console.log(data[inpVal]);

/* REGEX - REGULAR EXPRESSIONS */
// IT IS USED IN ADVANCED SEARCH METHODS
// IT'LL RETURN EITHER NULL OR AN OBJECT

// /writing/ in the middle of slashes is called 'regular expression literal'
// [NOTE: The content passed down to .exec() function is going to be case sensitive, hence it'll only return the findings which are having the same case as the content inside regex
/* 1. .exec() FUNCTION IN REGEX */

/* G FLAG - GLOBAL FLAG */
// let reg = /jeel/g;
// 'g' here is one of the flags, and is called 'Global Flag' which tells the .exec() to find all iterations of the given string/word to find in the regular expression, without 'g', it'll only find and return the first iteration; Note: You'll need to run the .exec() function as many times as you want the total number of iterations!

/* I FLAG - DISABLES CASE SENSITIVITY */
// let reg = /jeel/gi;
// 'i' tells the function to find the string even with case sensitivity(i.e. if the string is 'jeel', it'll return 'JeEL' too)
// YOU CAN INSERT MULTIPLE FLAGS TOO!

// console.log(reg);
// THIS PRINTS THE CONTENT INSIDE THE REGULAR EXPRESSION
// console.log(reg.source);

// FUNCTIONS TO MATCH EXPRESSIONS
// let str = "he is jeel patel guy jeel patel Jeel";
// // console.log(reg.exec(str));
// // console.log(reg.exec(str));
// // console.log(reg.exec(str).index);
// // console.log(reg.exec(str).input);

/* 2. TEST() - RETURNS TRUE/FALSE AS AN OUTPUT OF EXEC() */
// // TEST() HAS .EXEC FUNCTION INSIDE ITSELF, HENCE IT'LL CHECK AND RETURN EITHER TRUE/FALSE
// // This will only return true if the 'reg' is in the string 'str'
// console.log(reg.test(str));

/* 3. MATCH() - THE REVERSE SYNTAX OF .TEST() */
// // IT'LL RETURN AN ARRAY OF RESULTS
// console.log(str.match(reg));

/* 4. SEARCH() - RETURNS THE INDEX OF FIRST MATCH OR ELSE -1 */
// // THE SYNTAX OF THIS TOO WILL BE SAME AS .MATCH()
// console.log(str.search(reg)); // out: 6

/* 5. REPLACE() - RETURNS THE REPLACED STRING WITH ALL THE REPLACEMENTS */
// // THE SYNTAX OF THIS TOO WILL BE SAME AS .MATCH()
// console.log(str.replace(reg, "Gary")); // out: he is Gary patel guy Gary patel Jeel

/* QUICK QUIZ - REGEX */
// let myRegime = /stardust/gi;
// let findInThis =
//   "Hello Stardust, I'm so glad that the almighty made you a starDust, and I don't know why am I writing your name in weird cases like this: sTaRdUsT!";

// console.log(myRegime.exec(findInThis));
// console.log(myRegime.test(findInThis));
// console.log(findInThis.match(myRegime));
// console.log(findInThis.search(myRegime));
// console.log(findInThis.replace(myRegime, "Cutie"));

/* REGEX - METACHARACTER SYMBOLS */
// Note: These all functions can be executed with .exec() function
// ^word = means starts with; i.e. if the strings starts with 'word'(in this case), it'll return true
// word$ =  ends with; same vice-versa example as above
// wo.d =  this means, that exactly one character would be on the place of full-stop(.), but we don't know that; it'll only return true if only one character is there on the place of '.'
// w*d = this means, matches any 0 or more characters, there's no limitation on the number of characters in this like the above one
// wo?rd? = this means, that the characters 'o' and 'd' are optional, it doesn't matter if they match or not; Note: if the optional character exists or not, doesn't matter, but it can't be replaced by any other character!

// NOTE: if you want to store any of the metacharacters in a string, and not as a metacharacter, you can type \ before the character to escape it

/* REGEX - CHARACTER SETS */
// NOTE: The [] will be applied for only one character, so for every character, you've to specify the range!
// const regex = /j[a-z]l/; // this means that the middle character can be from the range 'a to z'
// const regex = /j[pre]l/; // this means, if we want only some specific characters
// const regex = /j[^pro]l/; // this means, if we want to exclude some specific characters
// const regex = /j[a-zA-Z]l/; // this means, if we want characters from small a to z and also from capital A to Z
// const regex = /j[a-zA-Z0-9]l/; // this means, if we want characters from small a to z and also from capital A to Z and also from 0 to 9 digits; BASICALLY, this increases the bandwidth/range/potential inputs

/* QUANTIFIERS - REGEX - CHARACTER SETS */

// let regex = /je{2}l/; // this means that 'e' can occur exactly two times
// let regex = /je{0,2}l/; // this means that 'e' can occur 0, 1 or 2 times!
// let regex = /(jeel){0,2}/; // this means that 'jeel' can occur 0, 1 or 2 times!
// // GROUPINGS
// let regex = /(jeel){0,2}([1-5]jp){0,2}/; // this means that 'jeel' can occur 0, 1 or 2 times, also, a number from 1 to 5 and a character either 'j' or 'p' can occur 0/1/2 times!

// let regex = /\war/; // there can be only one alphanumeric value at the placeholder of \w
// let regex = /\w+ar/; // there can be any number of alphanumeric value at the placeholder of \w
// let regex = /\W+ar/; // match with any non-word character(capital 'W')(a space, symbols), which has 'ar' in the end
// let regex = /\d+ar/; // match with more than one digit, which has 'ar' in the end
// let regex = /\D+ar/; // match with more than one non-digit, which has 'ar' in the end
// let regex = /\s+ar/; // match with more than one white space, which has 'ar' in the end; vice-versa with capital 'S'
// let regex = /ar\b/; // returns array if there's a boundary(the given string ends)
// let regex = /w(?=s)/; // there must be a 's' character after 'w' and before 'd'
// let regex = /w(?!a)/; // there should NOT be a 's' character after 'w' and before 'd'
// let str = "wswcsdsdv ar";
// console.log(regex.exec(str));

/* REGEX FORM VALIDATION */

// fetchBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let inpUsername = document.getElementById("inpUsername").value;
//   let inpEmail = document.getElementById("inpEmail").value;
//   let inpPhone = document.getElementById("inpPhone").value;
//   let inpPin = document.getElementById("inpPin").value;
//   regMail = /^\w+@[\w\.]+$/;
//   //  BREAKING IT DOWN
//   //   \w+ Means, there can be more than one alphanumeric values
//   // The middle part will be covered by '@', as it is mandatory for every mail id
//   // [\w\.]+ Means, there can be more than one alphanumeric values and more than one '.'s

//   // CHECKING COUNTRY CODE SEPERATELY
//   const regCountryCode = /^\+[0-9]{1,4}$/; // THIS MEANS, THAT THE '+' SYMBOL IS AN EXCEPTION AND IS OPTIONAL; ALSO, THERE CAN BE NUMBERS BEING A TOTAL FROM 5 TO 12 DIGITS; IF THERE'S A NUMBER LESS THAN 5 AND MORE THAN 12, RETURN NULL, AND NO WORRIES IF YOU INCLUDE '+' OR NOT

//   // WITH COUNTRY CODE PREFIX
//   const regPhone = /^[0-9]{10}$/;

//   // INSTAGRAM USERNAME REGEX
//   // THIS MEANS THAT THE USERNAME CAN CONTAIN ANY DIGITS FROM 0 TO 9; ALPHABETS FROM a to z/A to Z; CAN INCLUDE . OR _ ANYWHERE; and it can be of length no more than 30 characters
//   const regName = /([0-9a-zA-Z\.?\_?]){1,30}/;
//   // \s? means there can be an optional white space here
//   const regPin = /^[1-9][0-9]{2}\s?[0-9]{3}$/; // FOR PIN CODES IN INDIA
//   const regPinCa = /^[1-9a-zA-Z][0-9a-zA-Z]{2}\s?[0-9a-zA-Z]{3}$/; // FOR PIN CODES IN CANADA
//   // You can use .exec() for testing and developing, but in order to get true or false or to run an if else statement according to the input, you need to use .test()
//   console.log(regMail.exec(inpEmail));
//   console.log(regName.exec(inpUsername));
//   // VALIDATE THE COUNTRY CODE
//   console.log(regPhone.exec(inpPhone));
//   // THIS WILL NEED ANOTHER INPUT FIELD TO VALIDATE THE COUNTRY CODE
//   //   console.log(regCountryCode.exec(inpPhone));
//   console.log(regPin.exec(inpPin));
//   //   console.log(regPinCa.exec(inpPin)); // CHECK THIS IF THE PIN IS OF CANADA
//   // TO TAKE ACTION AFTER VALIDATION, LIKEWISE FOR ALL OTHER INPUTS
//   if (regMail.exec(inpEmail)) {
//     console.info("Great! Thanks for submitting your email!");
//   } else {
//     console.error(
//       "Invalid email id! Your email should contain a domain name(i.e. gmail.com)"
//     );
//   }
// });

/* ITERATORS */

// function carsIterator(carsArr) {
//   let index = 0;
//   return {
//     next: function () {
//       if (index < carsArr.length) {
//         return {
//           value: carsArr[index++],
//           done: false,
//         };
//       } else {
//         return {
//           done: true,
//         };
//       }
//     },
//   };
// }

// let cars = ["mini", "volvo", "chevrolet", "ford"];
// let res = carsIterator(cars);

// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());

/* EXERCISE 6 - ALARM CLOCK (WITH SNOOZE FEATURE)*/
// let timeSet;
// let currentTime;
// let snoozeBtn = document.getElementById("snoozeBtn");
// // TO CHECK IF THE SOUND IS NOT PLAYING, OTHERWISE THE FUNCTION WILL KEEP RUNNING AS MINUTES WILL BE MATCHED(CONTINUOSLY FOR A MINUTE) AND THE SOUND WILL OVERLAY PLAYING
// let isNotPlaying = 0;
// fetchBtn.addEventListener("click", function setAlarm(e) {
//   e.preventDefault();
//   timeSet = document.getElementById("time").value;
// });

// function checkTime() {
//   let nowMin = new Date().getMinutes();
//   // TO MAKE SURE THAT THE TIME SET AND CURRENT TIME MATCHES, AS THE CURRENT TIME DOESN'T HAVE A '0' BEFORE THE DIGIT IN SINGLE DIGITS
//   if (nowMin < 10) {
//     nowMin = `0${nowMin}`;
//   }
//   currentTime = `${new Date().getHours()}:${nowMin}`;
//   // TO TRIGGER WHEN SNOOZE BUTTON IS PRESSED!
//   let isSnoozePressed = 0;
//   snoozeBtn.addEventListener("click", () => {
//     isSnoozePressed = 1;
//   });
//   // TO PLAY THE SOUND WHEN THE TIME MATCHES
//   if (currentTime >= timeSet && !isSnoozePressed && !isNotPlaying) {
//     isNotPlaying = 1;
//     // console.log(`ALARM! ALARM! ALARM!`);
//     console.log(
//       `isSnoozePressed: ${isSnoozePressed}, isNotPlaying: ${isNotPlaying}`
//     );
//     snoozeBtn.style.display = "inline";
//     let alarmSound = new Audio("/alarm_radar.mp3");
//     alarmSound.play();
//   }
// }
// TO CONTINUOSLY CHECK THE TIME RIGHT NOW
// setInterval(() => {
//   // console.log(currentTime, timeSet);
//   checkTime();
// }, 1000);

// SMALL AND CONCISE CODE BY HARRYBHAI

// const alarmSubmit = document.getElementById("alarmSubmit");
// // THIS IS WHY YOUR FUNCTION RUNS ITSELF WITHOUT CLICKING!! YOU ADD () AFTER THE FUNCTION NAMING IN THE ADDEVENTLISTENER!
// alarmSubmit.addEventListener("click", setAlarm);

// // This function will run whenever alarm is set from the UI
// function setAlarm(e) {
//   e.preventDefault();
//   const alarm = document.getElementById("alarm");
//   let alarmDate = new Date(alarm.value);
//   console.log(`Setting Alarm for ${alarmDate}...`);
//   let now = new Date();
//   let timeToAlarm = alarmDate - now;
//   console.log(timeToAlarm);
//   if (timeToAlarm >= 0) {
//     setTimeout(() => {
//       let audio = new Audio("alarm_radar.mp3");
//       audio.play();
//     }, timeToAlarm);
//   }
// }

/* GENERATORS */
// THIS ALLOCATES MEMORY DYNAMICALLY(EXACTLY LIKE MALLOC IN C)
// function* generator() {
//   let i = 0;
//   while (true) {
//     yield i++;
//   }
// }

// // LIKE MALLOC() IN C
// const val = generator();
// for (let i = 0; i < 5; i++) {
//   console.log(val.next());
// }

/* PROJECT 5 - RANDOM PERSON GENERATOR */

// TO ITERATE AN OBJECT
// obj = {
//   Hello: "Jeel",
//   Name: "Dinanath",
//   Umar: 70,
// };

// for (let i = 0; i < Object.keys(obj).length; i++) {
//   const elem = obj[Object.keys(obj)[i]];
//   console.log(elem);
// }

/* FOR OF & FOR IN LOOP */
// FOR IN
// IN FOR IN LOOP, WE CAN'T ACCESS THE OBJECT VALUES THROUGH OBJ.KEY IN FOR IN METHOD, WE NEED TO PASS IT AS A STRING IN [] TO ACCESS IT
// for (let key in obj) {
//   console.log(obj[key]);
// }
// WE CAN RUN THROUGH A STRING AND ARRAYS TOO!
// let str = "h e y";
// let arr = [1, 2, 3];
// for (let i in (str, arr)) {
//   console.log(str[i]);
//   console.log(arr[i]);
// }
//

// FOR OF
// THIS CAN ITERATE THROUGH ANYTHING, IF IT'S A STRING, ITERATES CHARACTERS; IF AN ARRAY, ITERATES ELEMENTS
// let arr = [1, 2, 3];
// for (let i of arr) {
//   console.log(i);
// }

/* MAPS */
// BASICALLY, used to store different types of datatypes and objects in one parent
// const myMap = new Map();
// let val1 = "myStr",
//   val2 = {},
//   val3 = function () {};

// SETTING CHILD ELEMENTS TO SOME VALUES
// myMap.set(val1, "My value 1");
// myMap.set(val2, { name: "jeel" });
// myMap.set(val3, 'console.log("My value 3");');

// GENERAL USES
// console.log(myMap);
// console.log(myMap.get(val3));
// console.log(myMap.size);

// TO PRINT ALL KEYS AND VALUES
// for (let [key, value] of myMap) {
//   console.log(key, value);
// }

// USING FOREACH FOR ITERATING THROUGH THE MAP
// myMap.forEach((values, keys) => {
//   console.log(keys, values);
// });

// TO CONVERT MAP INTO ARRAY; add .keys()/.values() to seperate keys and values in different arrays
// console.log(Array.from(myMap));

/* SETS */

/* RANDOM DAD JOKE GENERATOR API */
// async function generateJoke() {
//   const jokeRes = await fetch("https://icanhazdadjoke.com/", {
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   const joke = await jokeRes.json();
//   console.log(joke.joke);
// }
// generateJoke();

/* MY MINI PROJECT - YODA TRANSLATOR */
// const sentence = "You can enter a sentence in here!";
// const ogArray = sentence.replace(" ", "%20");

// async function checkApi() {
//   const jokeRes = await fetch(
//     `https://api.funtranslations.com/translate/yoda.json?text=${ogArray}`,
//     {
//       headers: {
//         Accept: "application/json",
//       },
//     }
//   );
//   const joke = await jokeRes.json();
//   console.log(`Original: ${joke.contents.text}`);
//   console.log(`Translated: ${joke.contents.translated}`);
// }
// checkApi();

/* DESTRUCTURING */
// let a, b, c, d, e;
// you can assign it like this
// [a, b] = [56, 67];

// or this; this way the first three will be assigned to a, b and c, and the rest will be stored in d as an array
// [a, b, c, ...d] = [1, 2, 3, 4, 5, 6];
// another similar example
// const cars = ["mini", "mustang", "camaro", "tesla", "lincoln", "cadillac"];
// [a, b, c, ...d] = cars;

// This will work the same way as above, but instead of storing the rest values in an array, it'll store into an object
// ({ a, b, c, ...d } = { a: 1, b: 2, c: 3, d: 4, e: 5 });

/* DIGITAL CLOCK */
// This is to prevent the 1 second delay after the page load
// window.onload = updateClock();
// setInterval(updateClock, 1000);

// function updateClock() {
//   let hours = new Date().getHours();
//   let minutes = new Date().getMinutes();
//   let seconds = new Date().getSeconds();
//   // Add AM/PM according to the time
//   let amOrPm = hours >= 12 ? "PM" : "AM";

//   // FIRST WAY TO CONVERT 24 TO 12: If the time is not 12, than *remainder* it with 12
//   //   if (hours != 12) {
//   //     hours = hours % 12;
//   //   }
//   // SECOND WAY TO CONVERT 24 TO 12: If the time is more than 12, subtract it from 12; also, if it results 0, make it 12
//   hours = hours > 12 ? hours - 12 : hours;
//   hours = hours == 0 ? "12" : hours;

//   // Adding a 0 before single digits
//   hours = (hours < 10 ? "0" : "") + hours;
//   minutes = (minutes < 10 ? "0" : "") + minutes;
//   seconds = (seconds < 10 ? "0" : "") + seconds;
//   document.getElementById(
//     "primary"
//   ).innerText = `${hours} : ${minutes} : ${seconds} ${amOrPm}`;
// }

/* DRAGGABLE DIVS */
// let img = document.querySelector(".img");
// let whiteBx = document.getElementsByClassName("whiteBx");

// img.addEventListener("dragstart", (e) => {
//   e.target.className += " holdOn";
//   setTimeout(() => {
//     e.target.className = "hide";
//   }, 0);
// });

// img.addEventListener("dragend", (e) => {
//   e.target.className = "img";
//   e.target.className += " holdOn";
// });

// for (whiteBxi of whiteBx) {
//   whiteBxi.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     e.target.className += " toBe";
//   });
//   whiteBxi.addEventListener("dragenter", () => {
//   });
//   whiteBxi.addEventListener("dragleave", (e) => {
//     e.target.className = "whiteBx";
//   });
//   whiteBxi.addEventListener("drop", (e) => {
//     e.target.append(img);
//   });
// }

/* LAST PROJECT - APPLE CALCULATOR */
// IN AN ANOTHER SUB-FOLDER

/* MODULAR JS (MODULE SYSTEMS IN JS) */
// 1. IMPORT/EXPORT MODULE SYSTEM

// EXPORT MODULES (2 WAYS)
// 1. function add(a, b) {
//     return a + b;
//    };

// DEFAULT EXPORT
//    export default add;

// 2. export default function add(a, b) {
//  return a + b;
// };

// IMPORT MODULES - AKA - DEFAULT IMPORT
// import add from './math.js';

// NAMED IMPORT
// import {add, multiply} from './math.js';

// RENAME THE IMPORT WITH 'as' (If its name is long from the origin, you can shorten it here, and vice-versa)
// import add, { subtractNumbers as sub } from './math.js'; // You can now use 'sub' instead of 'substractNumbers'

// CommonJS -- which requires the 'require' keyword
// var models = require('./models');

// AJAX DETAILED NOTES
/* AJAX  - asynchronous javascript */
// let fetchBtn = document.getElementById("fetchBtn");
// fetchBtn.addEventListener("click", buttonClickHandler);

// function buttonClickHandler(e) {
//   e.preventDefault();
//   console.log("clicked!");
//   // instantiate an xhr object, in which we'll store the function through which we can make HTTP requests
//   const xhr = new XMLHttpRequest();
//   // open the XHR object and specify what you want to do; also do enter the URL where you want to fetch data from
//   // GET METHOD; 'true' here is for specifying if we want to perform an asynchronous request or not(to keep running the code flow side by side a process)
//   xhr.open("GET", `/db.json`, true);
//   // POST METHOD
//   // xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
//   // xhr.getResponseHeader("Content-type", "application/json");

//   // what to do on progress; like buffer circles(spinners) and lazy loading; [Note: This is optional, you can print it to use it as a placeholder, but not mandatory]
//   xhr.onprogress = function () {
//     console.log("progressing...");
//   };
//   // ReadyStateChange indicates the stages of processing, the codes that we get are below[Note: This is optional, you can print it to get live updates of the data fetching]:
//   // 0	UNSENT	- Client has been created. open() not called yet.
//   // 1	OPENED  -	open() has been called.
//   // 2	HEADERS_RECEIVED - send() has been called, and headers and status are available.
//   // 3	LOADING -	Downloading; responseText holds partial data.
//   // 4	DONE	  - The operation is complete.
//   xhr.onreadystatechange = function () {
//     console.log(`Ready state is ${xhr.readyState}`);
//   };
//   // when response is ready
//   xhr.onload = function (e) {
//     e.preventDefault();
//     // LET THE USER KNOW IF ANY ERROR IS OCCURED
//     if (this.status === 200) {
//       let data = JSON.parse(this.responseText);
//       console.log(data);
//       document.getElementById(
//         "list"
//       ).innerHTML += `<li><h5 class="card-title">${data.day}</h5>
//       <h6 class="card-subtitle mb-2 text-muted"></h6></li>`;
//     } else {
//       console.error("Something went wrong!");
//     }
//   };

//   // sending the request; every above function is useless without this func below!
//   // FOR POST METHOD
//   // let params = `{ name: "Jesdv", salary: "123", age: "20" }`;
//   // xhr.send(params);

//   // FOR GET METHOD
//   xhr.send();
// }
