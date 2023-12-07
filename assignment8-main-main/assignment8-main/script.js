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



let foreGround = document.querySelectorAll("[name=foreground-color]");
  for (let button of Array.from(forgGround)) {
    button.addEventListener("value", () => {
      document.body.style.background = button.value;
    });
  }
//This is for text color


  let backGround = document.querySelectorAll("[name=background-color]");
  for (let button of Array.from(backGround)) {
    button.addEventListener("value", () => {
      document.body.style.background = button.value;
    });
  }
//this is for back ground color
 
/*  document is showing as a error again

let foreGround = document.querySelectorAll("[name=foreground-color]");
^

ReferenceError: document is not defined */