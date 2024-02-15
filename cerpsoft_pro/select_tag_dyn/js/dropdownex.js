console.log("JS init...");

const classList = new Map([
  ["I", 1],
  ["II", 2],
  ["III", 3],
  ["IV", 4],
  ["V", 5],
  ["VI", 6],
  ["VII", 7],
  ["VIII", 8],
  ["IX", 9],
  ["X", 10],
  ["XI", 11],
  ["XII", 12],
]);

const streamsList = new Map([
  ["Physics", 12],
  ["Chemistry", 11],
  ["Mathematics", 0],
  ["Computer science", 0],
  ["Biology", 12],
]);

const sectionList = ["A", "B", "C", "D"];

const fruits = new Map([
  ["Apple", 1],
  ["Bananas", 2],
  ["Oranges", 3],
]);

document.addEventListener("contextmenu", (event) => event.preventDefault());

(function () {
  let divElement = document.getElementById("header");
  divElement.innerHTML =
    "<p style='text-align: center;'>Html selector upgrade learning. Open browser see the <strong>Console </strong>...</p>";
})();

function getLinkedDataFormat() {
  let scriptTag = document.createElement("script");
  scriptTag.setAttribute("type", "application/ld+json");

  $.ajax({
    url: "http://sms.cerpsoft.in/education/login.do?method=getLinkedDataFormat",
    type: "GET",
    dataType: "json",
    contentType: false,
    success: function (response) {
      scriptTag.textContent = JSON.stringify(response);
      document.head.appendChild(scriptTag);
    },
  });
}

getLinkedDataFormat();

function loadBasicData() {
  const getbasicObjects = {
    classListFun: function () {
      return classList;
    },
    streamsListFun: function () {
      return streamsList;
    },
    sectionListFun: function () {
      return sectionList;
    },
    fruitsListFun: function () {
      return fruits;
    },
  };

  return getbasicObjects;
}

console.log("loadBasicData : ", loadBasicData());

function classListEvent() {
  let divEle = document.getElementById("classId");
  divEle.options.add(new Option("Please Select", ""));

  loadBasicData()
    .classListFun()
    .forEach((e, i) => {
      divEle.options.add(new Option(i, e));
    });
}

classListEvent();

function streamListEvent() {
  let divEle = document.getElementById("streamId");
  divEle.options.add(new Option("Please Select", ""));

  loadBasicData()
    .streamsListFun()
    .forEach((e, i) => {
      divEle.options.add(new Option(i, e));
    });
}

streamListEvent();

function sectionListEvent() {
  let divEle = document.getElementById("sectionId");
  divEle.options.add(new Option("Please Select", ""));

  loadBasicData()
    .sectionListFun()
    .forEach((e, i) => {
      divEle.options.add(new Option(e, i));
    });
}

sectionListEvent();

function fruitsListEvent() {
  let divEle = document.getElementById("fruitId");
  divEle.options.add(new Option("Please Select", ""));

  loadBasicData()
    .fruitsListFun()
    .forEach((e, i) => {
      divEle.options.add(new Option(i, e));
    });
}

fruitsListEvent();

/* $(document).ready(function () {
  $("#streamId").html("");
  $("#streamId").append('<option value="">Please Select</option>');
}); */

/* $(document).on("change", "#classId", function () {
  alert($("#classId").val());

  $("#streamId").html("");
  $("#streamId").append('<option value="">Please Select</option>');
  streamListEvent();
}); */
