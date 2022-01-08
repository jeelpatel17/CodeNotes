// fetchBtn.addEventListener("click", function search() {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", `/dictionary.txt`, true);
//     let inpVal = document.getElementById("inpTxt").value;

//     xhr.onload = function (e) {
//       if (this.status === 200) {
//         const data = JSON.parse(this.responseText);
//         //   console.log(data);
//         // EUREKA!!!! THIS IS WHAT I WANTED SINCE AGES!
//         //   console.log(data[inpVal]);
//         parent.innerHTML = `<li>
//           <h1>Searched Word: ${inpVal}</h1>
//           <p>Definition: ${data[inpVal]}</p>
//       </li>`;
//         inpVal = "";
//       } else {
//         console.error("Something went wrong!");
//       }
//     };

//     xhr.send();
//   });
