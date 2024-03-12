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
};

(function () {
  const container = document.getElementsByClassName("container")[0];

  container.appendChild(getDomElement.h1Tag());
  container.appendChild(getDomElement.aTag());
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
