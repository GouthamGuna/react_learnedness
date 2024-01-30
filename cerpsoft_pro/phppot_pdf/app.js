console.log("init JS...");

(function () {
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
  console.log("enabled browser prevent...");
})();
