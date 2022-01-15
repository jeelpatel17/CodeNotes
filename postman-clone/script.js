let paramBox = document.getElementById("parametersBox");
let requestJsonBox = document.getElementById("requestJsonBox");
let jsonRadio = document.getElementById("jsonRadio");
let paramsRadio = document.getElementById("paramsRadio");
let addParam = document.getElementById("addParam");
let removeParam = document.getElementsByClassName("removeParam");
let submit = document.getElementById("submit");

jsonRadio.addEventListener("click", () => {
  requestJsonBox.style.display = "inline";
  paramBox.style.display = "none";
});
paramsRadio.addEventListener("click", () => {
  paramBox.style.display = "inline";
  requestJsonBox.style.display = "none";
});

let paramNo = 2;
addParam.addEventListener("click", () => {
  document.getElementById(
    "params"
  ).innerHTML += `<div id="newParams" class="form-row">
    <label for="url" class="col-sm-2 col-form-label">Parameter ${paramNo}</label>
    <div class="col-md-4">
      <input
        type="text"
        class="form-control paramInp"
        id="parameterKey${paramNo}"
        placeholder="Enter Parameter ${paramNo} Key"
      />
    </div>
    <div class="col-md-4">
      <input
        type="text"
        class="form-control paramInp"
        id="parameterValue${paramNo}"
        placeholder="Enter Parameter ${paramNo} Value"
      />
    </div>
    <button class="removeParam btn btn-primary">-</button>
    </div>`;
  for (iRemove of removeParam) {
    iRemove.addEventListener("click", (e) => {
      confirm("You sure want to delete the parameter?")
        ? e.target.parentElement.remove()
        : "";
    });
  }
  paramNo++;
});

submit.addEventListener("click", () => {
  let myUrl = document.getElementById("url").value;
  let params = document.getElementsByClassName("paramInp").value;
  // get the radio's value whose name attribute has requestType and it is checked
  let getOrPost = document.querySelector(
    "input[name='requestType']:checked"
  ).value;
  let data, dataObj;
  // one way to get the checked radio button's value, a beginner's way!
  //   let getOrPost = document.getElementById("get").checked ? "GET" : "POST";
  let jsonOrCustom = document.querySelector(
    "input[name='contentType']:checked"
  ).value;
  if (jsonOrCustom == "PARAMS") {
    data = {};
    for (let i = 1; i < paramNo; i++) {
      if (document.getElementById(`parameterKey${i}`) != undefined) {
        let key = document.getElementById(`parameterKey${i}`).value;
        let value = document.getElementById(`parameterValue${i}`).value;
        data[key] = value;
      }
    }
    data = JSON.stringify(data);
    // console.log(data);
  } else {
    dataObj = document.getElementById("requestJsonText").value;
    console.log(dataObj);
  }
  //   console.log(
  //     `URL: ${myUrl}, Request Type: ${getOrPost}, Content Type: ${jsonOrCustom}, Data: ${data}`
  //   );

  // PROCEEDING TO FETCH()
  if (getOrPost == "GET") {
    fetch(myUrl, {
      method: "GET",
    })
      .then((response) => response.text())
      .then((text) => {
        document.getElementById("responsePrism").innerText = text;
        Prism.highlightAll();
      });
    // proceed with fetch() with XHR
    // let spinner;
    // const XHR = new XMLHttpRequest();
    // XHR.open(getOrPost, myUrl, true);
    // XHR.onprogress = function () {
    //   spinner = document.getElementById("loaderParent");
    //   spinner.style.display = "inline";
    // };
    // XHR.onload = function () {
    //   console.log(XHR.response);
    //   spinner.style.display = "none";
    // };
    // XHR.send();
  } else {
    fetch(myUrl, {
      method: "POST",
      body: dataObj,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.text())
      .then((text) => {
        document.getElementById("responsePrism").innerText = text;
        console.log(text);
        Prism.highlightAll();
      });
  }
});
