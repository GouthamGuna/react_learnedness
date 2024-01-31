var numbers = [24, 27, 28, 40, 44, 323, 434, 42];

const dayNamesvalue = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

(function () {
  let optionElement = document.querySelector("#name-list");
  optionElement.options.add(new Option("Please Select", ""));

  dayNamesvalue.forEach((e, i) => {
    optionElement.options.add(new Option(dayNamesvalue[i], e));
  });
})();

(function () {
  let selectElement = document.querySelector("#list");

  dayNamesvalue.forEach((element, index) => {
    let option = document.createElement("option");
    option.text = dayNamesvalue[index];
    option.value = element;
    selectElement.add(option);
  });

  /* 

  for (let i = 0; i < dayNamesvalue.length; i++) {
    let option = document.createElement('option');
    option.text = dayNamesvalue[i];
    selectElement.add(option);
  }

  let selectDiv = document.createElement("div");
  selectDiv.classList.add("class", "select-tag-ele");
  selectDiv.setAttribute("id", "select-tag-ele");

  let selectElement = document.createElement("select");
  selectElement.setAttribute("id", "daysname");
  
  let optionElement = document.createElement("option");
  optionElement.setAttribute('', 'Please Select')

  selectDiv.appendChild(optionElement);
  divElement.appendChild(selectDiv);
  */
})();

// Higher Order Function`s (HOF)

/**
 * 1.) It`s takes one are more functions as arguments
 * 2.) It`s may return a function
 */

function isOdd(arr, returnArr = []) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      returnArr.push(arr[i]);
    }
  }

  return returnArr;
}

const result = isOdd(numbers);
console.log(result);

const oddArray = numbers.filter((number) => number % 2 !== 0);
console.log(oddArray);

(function () {
  let selectElement = document.querySelector("#mobile-list");
  selectElement.options.add(new Option("Please Select", ""));

  axios({
    method: "GET",
    url: "https://dummyjson.com/products/category/smartphones",
  }).then(
    (response) => {
      response.data.products.group((e) => {
        selectElement.options.add(new Option(e.title, e.id));
      });
    },
    (e) => {
      console.error(e.message);
    }
  );
})();

(function () {
  let imgAppender = document.querySelector("#mobile-img");
  let optionElement = document.querySelector("#mobile-list");

  optionElement.addEventListener("change", function () {
    axios({
      method: "GET",
      url: `https://dummyjson.com/products/${this.value}`,
    }).then(
      (response) => {
        {
          response.data.images && response.data.images.length > 0
            ? response.data.images.forEach(
                (e, i) => (
                  (createImgTag = document.createElement("img")),
                  createImgTag.setAttribute("name", "product-images"),
                  createImgTag.setAttribute("id", response.data.id),
                  createImgTag.setAttribute("width", "100px"),
                  createImgTag.setAttribute("height", "100vh"),
                  createImgTag.setAttribute("src", response.data.images[i]),
                  imgAppender.appendChild(createImgTag)
                )
              )
            : "Image Not Found.!";
        }
      },
      (e) => {
        console.error(e);
      }
    );
  });
})();

function clearDiv() {
  let div = document.getElementById("product-images");
  div.replaceChildren();
}

function getDataJsonFrom() {
  console.log("getDataJsonFrom function init()...");

  axios({
    method: "GET",
    url: "data.js",
  }).then((response) => {
    let data = JSON.parse(response.data.data);
    console.log(data);
    //data && data.length ? console.log(data.question) : "Not Data Found.!";
  });
}

// getDataJsonFrom();

function randomColorUtility(length) {
  return Math.floor(Math.random() * length);
}

function backGroundColor() {
  const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomColorUtility(hex.length)];
  }

  let style = document.createElement("style");
  style.textContent = `body { background-color: ${hexColor}; }`;
  document.head.appendChild(style);
}

backGroundColor();
