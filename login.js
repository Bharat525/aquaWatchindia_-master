var emailinput = document.querySelector("#email").value;
var elPassword = document.querySelector("#pass").value;
var btn = document.querySelector("button");

btn.addEventListener("click", clickme());

function clickme() {
  if (elPassword && emailinput === "") {
    console.log("hello");
  } else {
    alert;
  }
}
