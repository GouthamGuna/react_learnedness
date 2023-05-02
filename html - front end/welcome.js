$(document).ready(function () {
  let x = sessionStorage.getItem("userName");

  if (x != null) {
    $("#greeting").html("<span> Welcome </span>" + " " + x);
    courseList();
  } else {
    $("#error").html("user could not recognize");
  }

  $("#logout").click(function () {
    window.location.replace("./index.html");
  });
});

function courseList() {
  const urlString = "http://localhost:8080/list";

  $.ajax({
    method: "GET",
    url: urlString,
    success: function (responseJSON) {
      if (responseJSON.length > 0) {
        for (let i = 0; i < responseJSON.length; i++) {
            $("#dataTable tbody").append("<tr>" + 
            "<td>" + (i + 1) + "</td>" +
            "<td>" + responseJSON[i] + "</td>" +
            "</tr");
        }
      }
    },
    error: function (responseJSON) {
      console.log("Error retrieving data");
    },
  });
}
