const DOM = {
  header: () => {
    return mainHeader();
  },
  ms: () => {
    return createMultipleSelector();
  },
  priceDiv: (reqMonths) => {
    return doCalculation(reqMonths);
  },
};

function mainHeader() {
  let h1 = document.createElement("h1");
  h1.textContent = "Hello Lunar";
  return h1;
}

function createMultipleSelector() {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let div = document.createElement("div");

  let lableEle = document.createElement("label");
  lableEle.textContent = "Month Selector : ";

  let s = document.createElement("select");
  s.setAttribute("type", "text");
  s.setAttribute("class", "monthselector");
  s.setAttribute("id", "monthselector");
  s.setAttribute("multiple", "multiple");

  monthNames.forEach((e, i) => {
    s.options.add(new Option(e, i + 1));
  });

  lableEle.appendChild(s);
  div.appendChild(lableEle);

  return div;
}

(function () {
  let div = document.getElementById("container");
  div.appendChild(DOM.header());
  div.appendChild(DOM.ms());
  div.appendChild(DOM.priceDiv());
})();

$(document).ready(() => {
  $("#monthselector").change(() => {
    let len = $("#monthselector").val().length;
    DOM.priceDiv(len);
  });
});

function doCalculation(reqMonths = 0) {
  let div = document.createElement("div");

  let lableEle = document.createElement("label");
  lableEle.textContent = "Price : ";

  let inputDiv = document.createElement("input");
  inputDiv.setAttribute("id", "price");
  inputDiv.setAttribute("class", "price");
  inputDiv.setAttribute("readOnly", "readOnly");

  $("#price").val(reqMonths * 1000);

  lableEle.appendChild(inputDiv);
  div.appendChild(lableEle);

  return div;
}

/*
:authority:
code.jquery.com
*/
