const puzzleBoard = document.querySelector("#puzzle");
const solveButton = document.querySelector("#solve-btn");
const resultDisplay = document.querySelector("#result-display");
const Squares = 81;
const submission = [];

for (let i = 0; i < Squares; i++) {
  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", "number");
  inputElement.setAttribute("min", 0);
  inputElement.setAttribute("max", 9);

  if (
    ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 21) ||
    ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
    ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && i > 27 && i < 53) ||
    ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i > 53) ||
    ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53)
  ) {
    inputElement.classList.add("odd-section");
  }

  puzzleBoard.appendChild(inputElement);
}

const joinValues = () => {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.value) {
      submission.push(input.value);
    } else {
      submission.push(".");
    }
  });
  //console.log(submission);
};

const populateValues = (isSolvable, solution) => {
  const inputs = document.querySelectorAll("input");
  if (isSolvable && solution) {
    inputs.forEach((input, i) => {
      input.value = solution[i];
    });
    resultDisplay.innerHTML = "This is the answer.";
  } else {
    resultDisplay.innerHTML = "This is not solvable.";
  }
};

const solve = () => {
  joinValues();
  const data = submission.join("");
  //console.log("data : ", data);
  const options = {
    method: "POST",
    url: "https://solve-sudoku.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "solve-sudoku.p.rapidapi.com",
    },
    data: {
      puzzle: data,
    },
  };

  axios
    .request(options)
    .then((response) => {
      console.log(response.data);
      populateValues(response.data.solvable, response.data.solution);
    })
    .catch((error) => {
      console.error(error);
    });
};

solveButton.addEventListener("click", solve);
