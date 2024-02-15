console.log("JS Connected.");
var request = new XMLHttpRequest();

$(document).ready(function(){

  $('#data').change(function(){
    document.documentElement.setAttribute('lang', $(data).val())
  })
  
  document.title = 'Reference Work | Home';
  var url = window.location.search;
  var parsedURL = {};
  url
    .substring(1, url.length)
    .split("&")
    .forEach(function (each) {
      var keyVal = each.split(/=(.+)/);
      parsedURL[keyVal[0]] = keyVal[1];
      return;
    });
  console.log("parsedURL : ", parsedURL);

  var keysOfParsedURL = Object.keys(parsedURL);
  console.log("keysOfParsedURL : ", keysOfParsedURL);

  const encodedData = btoa("Hello, world!"); // encode a string
  const decodedData = atob(encodedData); // decode the string

  console.log("encodedData ", encodedData);
  console.log("decodedData ", decodedData);

});

function getData(url) {
  try {
    request.onreadystatechange = function () {
      if (request.readyState == request.DONE) {
        let response = request.responseText;
        let obj = JSON.parse(response);

        if (obj.languages.length > 0) {
          for (let i = 0; i < obj.languages.length; i++) {

            $('#data').append('<option value="'+obj.languages[i].c+'">'+obj.languages[i].n +' - '+ obj.languages[i].t+'</option>');
           
            // let x = document.getElementById("data");
            // let option = document.createElement("option");
            // option.text = obj.languages[i].n +' - '+ obj.languages[i].t;
            // x.add(option);
          }
        }
      }
    };
    request.open("GET", url, true);
    //request.setRequestHeader("Content-type", "application/json");
    request.send();
  } catch (e) {
    console.error(e);
  }
}

getData(
  "https://raw.githubusercontent.com/CERPSoftwareSolutions/webimage/main/json_data/languages.json"
);
