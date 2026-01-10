// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
const myButton = document.querySelector("button");

// Update the text content of the <h1>
myHeading.textContent = "Hello world!";

// Store a reference to <img>, assign a click event handler function

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Firefox.svg") {
    myImage.setAttribute("src", "images/ice.webp");
  } else {
    myImage.setAttribute("src", "images/Firefox.svg");
  }
});


function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

myButton.addEventListener("click", () => {
  setUserName();
});

