// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.


//values that was called used in the code
const userName = document.getElementById("name");

const backGround = document.getElementById("background");

const foreGround = document.getElementById("foreground");

const form = document.getElementById("form");

const body = document.getElementById("body")

const greeting = document.getElementById("greeting")


//event listener
form.addEventListener("submit", event => {
  event.preventDefault();
  console.log("name: " + userName.value);
  console.log("background: " + backGround.value);
  console.log("foreground: " + foreGround.value);
  
  //localstorage
  localStorage.setItem("key", "value");
  localStorage.getItem("key");
  
  localStorage.setItem("username", userName.value);
  localStorage.setItem("background", backGround.value);
  localStorage.setItem("foreground", foreGround.value);

  alert("your preferences have been saved!");

  applyPreferences();
});


//user preferences
function applyPreferences() {
  greeting.innerHTML = "Hello, " + localStorage.getItem("username");
  Body.style.backgroundColor = localStorage.getItem("background");
  body.style.color = localStorage.getItem("foreground");

  userName.value = localStorage.getItem("username");
  backGround.value = localStorage.getItem("background");
  foreGround.value = localStorage.getItem("foreground");
}


//loads on start up
window.onload = (event) => {
  applyPreferences();
};



