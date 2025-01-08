console.log("JS init()...");

const getDomElement = {
  h1Tag: () => {
    const h1 = document.createElement("h1");
    h1.textContent = `Blobs and Blob URL's`;

    return h1;
  },
  aTag: () => {
    const a = document.createElement("a");
    const btn = document.createElement("button");
    btn.textContent = `Download`;
    a.appendChild(btn);

    return a;
  },
  inputTag: () => {
    const inputTag = document.createElement("input");

    inputTag.setAttribute("type", "file");
    inputTag.setAttribute("accept", "image/*");

    return inputTag;
  },
  btnTag: () => {
    return clickButtonTiggerToDownload();
  },
};

(function () {
  const container = document.getElementsByClassName("container")[0];

  container.appendChild(getDomElement.h1Tag());
  container.appendChild(getDomElement.aTag());
  container.appendChild(getDomElement.btnTag());
  container.appendChild(getDomElement.inputTag());
})();

function viewBlobContentsText() {
  const a = document.querySelector("a");
  const data = "Some plain text";

  // Create a Blob (Binary Large Object)
  const blob = new Blob([data], { type: "text/plain" });

  // Create URL for data in blob
  const URI = URL.createObjectURL(blob);

  // Set as href
  a.href = URI;
  a.download = "blob-to-download.txt";
}

viewBlobContentsText();

function fileConvertToBlob() {
  const input = document.querySelector("input");

  document.addEventListener("change", () => {
    // Create URL
    const URI = URL.createObjectURL(input.files[0]);
    console.log(URI);

    // Set as new image src
    const img = new Image();
    img.src = URI;
    img.onload = () => {
      document.body.appendChild(img);
    };
  });
}

fileConvertToBlob();

function fetchingDataConvertBlog() {
  // Convert URL resourse to blob
  fetch("https://picsum.photos/400/400")
    .then((res) => res.blob())
    .then((blob) => handler(blob));

  // Change URL resourse
  function handler(blob) {
    const URI = URL.createObjectURL(blob);
    const img = new Image();
    img.src = URI;
    img.onload = () => {
      document.body.appendChild(img);
    };
  }
}

fetchingDataConvertBlog();

function clickButtonTiggerToDownload() {
  let aTag = document.createElement("a");

  let button = document.createElement("button");
  button.textContent = "Click me";

  button.onclick = () => {
    alert("Button clicked!");
    downloadBlobTypeFileContent();
  };

  aTag.appendChild(button);

  return aTag;
}

function downloadBlobTypeFileContent() {
  axios({
    url: "http://localhost:2020/SANTOSH_COLLEGES/api.html?method=getAvatar",
    method: "GET",
    responseType: "blob", // Important: Set the response type to 'blob'
  }).then((response) => {
    console.log(response);
    // Create a file link in the browser's memory
    const href = URL.createObjectURL(response.data);

    const reader = new FileReader();
    reader.readAsDataURL(response.data);
    reader.onloadend = () => {
      const base64img = reader.result;
      console.log(base64img);

      // Create an <a> HTML element with the href linked to the file
      const link = document.createElement("a");
      link.href = base64img;
      link.setAttribute("download", "avatar.png"); // Set the desired filename or extension
      document.body.appendChild(link);
      link.click();

      // Clean up the dynamically created file link and remove the ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    };
  });
}
