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
