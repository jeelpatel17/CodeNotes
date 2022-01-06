// API KEY: cc11c187e57746c291439c114258704a

// NEWS CARD
/* <div class="card" style="width: 18rem">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">News title</h5>
        <p class="card-text">News Description</p>
        <a href="#" class="btn btn-primary">Read Full News</a>
      </div>
    </div> */

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", fetchNews());

function fetchNews() {
  // return new Promise(function (resolve, reject) {
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=cc11c187e57746c291439c114258704a`,
    true
  );

  xhr.onprogress = function () {
    console.log("loading...");
  };

  xhr.onload = function (e) {
    e.preventDefault();
    if (this.status === 200) {
      let rawData = JSON.parse(this.responseText);
      console.log(rawData);
      for (let i = 0; i < 10; i++) {
        let data = rawData.articles[i];
        console.log(data);
        console.log(data.urlToImage);
        console.log(data.title);
        let parent = document.getElementById("parent");
        parent.innerHTML += `
        <div class="card">
      <img src="${data.urlToImage}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">${data.description}</p>
        <a href="${data.url}" class="btn btn-primary">Read Full News</a>
      </div>
    </div>`;
      }
      // resolve(this.responseText);
    } else {
      console.log("SOMETHING WRONG!");
      //   reject();
    }
  };
  xhr.send();
}
// }
