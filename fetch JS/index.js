console.log("JS Connected Successfully");
/*
function emojiAppender() {
  fetch("https://emojihub.yurace.pro/api/random")
    .then((data) => {
      return data.json();
    })
    .then((post) => {
      document.getElementById("greeting").innerHTML =
        "<span>Hello World </span>" + post.htmlCode;
    });
}
*/

async function emojiAppender() {
  let div = document.getElementById("greeting");

  let response = await fetch("https://emojihub.yurace.pro/api/random");
  let data = await response.json();

  div.innerHTML = `<h1>Name : ${data.name} ${data.htmlCode} </h1> category : ${data.category}`;
}
emojiAppender();

async function quotesRandomAppender() {
  let div = document.getElementById("quotes");

  const response = await fetch("https://dummyjson.com/quotes/random");
  const data = await response.json();

  div.innerHTML = `<h5 id=${data.id}>Quotes : <pre><p>${data.quote}</p></pre> Author : ${data.author}</h5>`;
}
quotesRandomAppender();
