$(document).ready(function () {
  $("#loginRequest").click(function (e) {
    e.preventDefault();
    validateUser();
  });
});

function validateUser() {
  const urlString = "http://localhost:8080/login";

  let formData = {
    username: $("#username").val(),
    password: $("#password").val(),
  };

  $.ajax({
    method: "post",
    url: urlString,
    data: JSON.stringify(formData),
    contentType: "application/json",
    success: function (responseJSON) {
      sessionStorage.setItem("userName", responseJSON);
      window.location.replace("./welcome.html");
    },
    error: function (responseJSON) {
      $("#statusCode").html(
        "<span> Status Code : </span>" + " " + responseJSON.status
      );
      $("#message").html(
        "<span> Error Message : </span>" + " " + responseJSON.responseText
      );
    },
  });
}
