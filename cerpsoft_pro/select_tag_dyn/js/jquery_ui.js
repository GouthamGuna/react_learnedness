console.log("JS Connection Successfully...");

function base64Encode(originalInput) {
    return btoa(originalInput);
  }
  
  function base64Decode(encodedString) {
    return atob(encodedString);
  }

function greeting() {
  let div = document.getElementById("container");
  let header = document.createElement('h1');
  header.setAttribute('id', base64Encode('header-greating'));
  div.appendChild(header);
}

greeting();

$( function() {
    var availableTags = [
        "GMSK",
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );