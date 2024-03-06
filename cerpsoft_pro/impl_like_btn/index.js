var count = 0;

$(document).ready(function () {
  const button = document.getElementById("btn");
  let timer;
  button.addEventListener("click", (event) => {
    if (event.detail === 1) {
      timer = setTimeout(() => {
        count++;
        $("#getcount").text(count);
      }, 200);
    }
  });
  button.addEventListener("dblclick", (event) => {
    clearTimeout(timer);
    count--;

    {
      count >= 0 ? $("#getcount").text(count) : (count = 0);
      count === 0 ? $("#getcount").text("") : start(event);
    }
  });
});

function start(event) {
  console.log('init()', event)
}
