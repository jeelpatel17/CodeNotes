// API KEY: cc11c187e57746c291439c114258704a

// let fetchBtn = document.getElementById("fetchBtn");
// fetchBtn.addEventListener("click", fetchNews());

fetchNews();

function fetchNews() {
  const xhr = new XMLHttpRequest();
  const api = "cc11c187e57746c291439c114258704a";
  xhr.open(
    "GET",
    `https://newsapi.org/v2/everything?q=covid&apiKey=${api}`,
    true
  );

  // OPTIONAL
  xhr.onprogress = function () {
    console.log("loading...");
  };

  xhr.onload = function (e) {
    e.preventDefault();
    if (this.status === 200) {
      let rawData = JSON.parse(this.responseText);
      // console.log(rawData.articles[1]);
      for (let i = 0; i < 10; i++) {
        let data = rawData.articles[i];
        console.log(data);
        let parent = document.getElementById("parent");
        parent.innerHTML += `
        <div class="card my-3 mx-auto">
      <img src="${data.urlToImage}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${data.title} <span class="badge rounded-pill bg-secondary">${data.source.name}</span></h5>
        <p class="card-text">${data.description}</p>
        <a href="${data.url}" class="btn btn-primary">Read Full News</a>
      </div>
    </div>`;
      }
    } else {
      console.log("SOMETHING WRONG!");
    }
  };
  xhr.send();
}
