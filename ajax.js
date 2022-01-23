/* AJAX  - asynchronous javascript */
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler(e) {
  e.preventDefault();
  console.log("clicked!");
  // instantiate an xhr object, in which we'll store the function through which we can make HTTP requests
  const xhr = new XMLHttpRequest();
  // open the XHR object and specify what you want to do; also do enter the URL where you want to fetch data from
  // GET METHOD; 'true' here is for specifying if we want to perform an asynchronous request or not(to keep running the code flow side by side a process)
  xhr.open("GET", `/db.json`, true);
  // POST METHOD
  // xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  // xhr.getResponseHeader("Content-type", "application/json");

  // what to do on progress; like buffer circles(spinners) and lazy loading; [Note: This is optional, you can print it to use it as a placeholder, but not mandatory]
  xhr.onprogress = function () {
    console.log("progressing...");
  };
  // ReadyStateChange indicates the stages of processing, the codes that we get are below[Note: This is optional, you can print it to get live updates of the data fetching]:
  // 0	UNSENT	- Client has been created. open() not called yet.
  // 1	OPENED  -	open() has been called.
  // 2	HEADERS_RECEIVED - send() has been called, and headers and status are available.
  // 3	LOADING -	Downloading; responseText holds partial data.
  // 4	DONE	  - The operation is complete.
  xhr.onreadystatechange = function () {
    console.log(`Ready state is ${xhr.readyState}`);
  };
  // when response is ready
  xhr.onload = function (e) {
    e.preventDefault();
    // LET THE USER KNOW IF ANY ERROR IS OCCURED
    if (this.status === 200) {
      let data = JSON.parse(this.responseText);
      console.log(data);
      document.getElementById(
        "list"
      ).innerHTML += `<li><h5 class="card-title">${data.day}</h5>
      <h6 class="card-subtitle mb-2 text-muted"></h6></li>`;
    } else {
      console.error("Something went wrong!");
    }
  };

  // sending the request; every above function is useless without this func below!
  // FOR POST METHOD
  // let params = `{ name: "Jesdv", salary: "123", age: "20" }`;
  // xhr.send(params);

  // FOR GET METHOD
  xhr.send();
}

// MODERN FETCH API WITH ASYNC AWAIT
// async function findYum() {
//   const response = await fetch('https://foodish-api.herokuapp.com/api/images/dessert');
//   const yum = await response.json();
//   foodHolder += `<img src=${yum.image}>`;
// }
