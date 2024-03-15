console.log("JS init()...");

const getDOMLoader = {
  mainHeader: () => {
    return header();
  },
  funExc: () => {
    return fetchedTextAsJavaScript();
  },
};

(function () {
  let div = document.getElementById("container");

  div.appendChild(getDOMLoader.mainHeader());

  getDOMLoader.funExc();
})();

function header() {
  let hTag = document.createElement("h1");
  hTag.textContent = "Hello Lunar!";

  return hTag;
}

function fetchedTextAsJavaScript() {
  // The URL you want to fetch the JavaScript code from
  const url =
    "https://raw.githubusercontent.com/GouthamGuna/Microservices_SpringBoot/main/gmsk_official_works/content_delivery_network/src/main/java/in/dev/gmsk/js/index.js";

  // Use the fetch API to get the JavaScript code
  fetch(url)
    .then((response) => response.text())
    .then((code) => {
      // Create a new function using the fetched code
      const func = new Function(code);
      // Call the new function
      func();
    })
    .catch((error) => {
      console.error("There was an error fetching the JavaScript code:", error);
    });
}
