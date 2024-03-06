function init() {
  let todoId = getTodoIds();
  let URL = `https://jsonplaceholder.typicode.com/todos/${todoId}`;

  // API for get requests
  const request = fetch(URL);

  // request is the promise to resolve, it by using.then() method
  request
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      responseHtmlElement(data.userId, data.title, data.completed);
    });
}

/* A random whole number between 1 and 100 */

function getTodoIds() {
  return Math.floor(Math.random() * 100 + 1);
}

/* Add the HTML element for the response. */

function responseHtmlElement(id, title, completed) {
  $('#todo-list-tbl tbody').append('<tr>'+
    + '<th>'+id+'</th>'
    + '<th>'+title+'</th>'
    + '<th>'+completed+'</th>'
  +'</tr>');
}

/* calling the function here! */

init();
