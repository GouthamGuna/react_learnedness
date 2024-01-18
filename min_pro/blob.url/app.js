(function () {
  console.log("JS Connected Successfully!");
})();

/* var blob = new Blob(["Hello, Lunar!"], { type: 'text/plain' });
var blobUrl = URL.createObjectURL(blob);

var xhr = new XMLHttpRequest;
xhr.responseType = 'blob';

xhr.onload = function() {
   var recoveredBlob = xhr.response;

   var reader = new FileReader;

   reader.onload = function() {
     var blobAsDataUrl = reader.result;
     window.location = blobAsDataUrl;
   };

   reader.readAsDataURL(recoveredBlob);
};

xhr.open('GET', blobUrl);
xhr.send(); */

function downloadFileRequest() {
  axios
    .get("blob:https://example.com/6c6e3762-754f-4522-9367-b618d9874a7c", {
      responseType: "blob",
      timeout: 30000,
    })
    .then(
      (response) => {
        console.log("Done... ", response);
      },
      (e) => {
        console.error("error... ", e);
      }
    );
}

downloadFileRequest();
