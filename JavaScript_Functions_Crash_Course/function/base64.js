function base64Encode(originalInput) {
  return btoa(originalInput);
}

function base64Decode(encodedString) {
  return atob(encodedString);
}

/*
function base64EncodingUTF8(str) {
  var encoded = new TextEncoderLite("utf-8").encode(str);
  var b64Encoded = base64js.fromByteArray(encoded);
  return b64Encoded;
}
*/

console.log(base64Encode("TCS..."));

console.log(base64Decode("VENTLi4u"));

$(document).ready(function () {
  loadOnHomePage();
  getLinkedDataFormat();
});

const mainDiv = document.getElementById("container");

function loadOnHomePage() {
  let div = document.createElement("p");
  div.setAttribute("style", "text-align: center; font-size: 2 rem");
  div.setAttribute("id", base64Encode("p-tag-header"));
  div.innerHTML = `Open the <strong>Console</strong> tab in Browser's DevTools to see the output.`;
  mainDiv.appendChild(div);
}

async function getLinkedDataFormat() {
  let script = document.createElement("script");
  script.setAttribute("type", "application/ld+json");

  try {
    const response = await fetch(
      "http://sms.cerpsoft.in/pearl/api.do?method=getLinkedMetaData"
    );

    const data = await response.json();
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  } catch (error) {
    let div = document.createElement("p");
    div.innerHTML = "<h1 style='color: red;'>Network Error...</h1>";
    mainDiv.appendChild(div);
  }
}
