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

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  headline: "CERP",
  author: [
    {
      "@type": "Person",
      name: "GOWTHAM SANKAR GUNASEKARAN",
      jobTitle: "Software Engineer",
      url: "https://gouthamguna.github.io/in/",
      images: [
        "https://gouthamguna.github.io/in/images/profilepic.jpg",
        "https://github.com/GouthamGuna",
      ],
    },
  ],
};

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

(function () {
  let script = document.createElement("script");
  script.setAttribute("type", "application/ld+json");
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
})();

const MY_EATABLES = [
  { food: "🍆", type: "Vegetables", name: "Eggplant", count: 1 },
  { food: "🥝", type: "Fruits", name: "Kiwi", count: 1 },
  { food: "🍅", type: "Vegetables", name: "Tomato", count: 3 },
  { food: "🍗", type: "Non-Vegs", name: "chicken", count: 4 },
  { food: "🍳", type: "Non-Vegs", name: "Egg", count: 5 },
  { food: "🍍", type: "Fruits", name: "Pineapple", count: 1 },
  { food: "🍏", type: "Fruits", name: "Green Apple", count: 7 },
  { food: "🐟", type: "Non-Vegs", name: "Fish", count: 1 },
  { food: "🥑", type: "Fruits", name: "Avocado", count: 2 },
];

const groupOfObjects = {
  dummyData: function dummyData() {
    return MY_EATABLES;
  },

  dayNames: function dayNamesList() {
    return dayNamesvalue;
  },

  structuredDatas: function strData() {
    return structuredData;
  },
};

console.log(groupOfObjects)

const groupOfVeg = MY_EATABLES.group((e) => {
  return e.type;
});

// console.log(groupOfVeg);

/*

let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];
console.log(uniqueChars); // ['A', 'B', 'C']


let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = chars.filter((element, index) => chars.indexOf(element) === index);
console.log(uniqueChars); // ['A', 'B', 'C']

*/

function foodTypeList() {
  let selectDivElement = document.getElementById("types-food-list");
  selectDivElement.options.add(new Option("Please Select", ""));
  let array = [];

  MY_EATABLES.group((e) => {
    array.push(e.type);
  });

  let set = new Set(array);
  let unique = [...set];

  unique.forEach((e) => {
    selectDivElement.options.add(new Option(e, e));
  });
}

foodTypeList();

function foodList() {
  let selectElement = document.getElementById("food-list");
  selectElement.options.add(new Option("Please Select", ""));

  groupOfVeg.Fruits.forEach((e) => {
    selectElement.options.add(new Option(`${e.food} ${e.name}`, `${e.name}`));
  });
}

foodList();

function foodsTypesChangeEvent() {
  var userInput = document.getElementById("types-food-list").value;
  console.log(userInput);
}
