
document.getElementById("main-title").textContent = "Updated Title";

let usernameInput = document.getElementsByName("username")[0];
usernameInput.value = "John Doe";

let genderRadios = document.getElementsByName("gender");
for (let radio of genderRadios) {
  if (radio.checked) {
    console.log("Selected Gender:", radio.value);
  }
}

let paragraphs = document.getElementsByTagName("p");
console.log("Total <p> elements:", paragraphs.length);

let listItems = document.getElementsByTagName("li");
for (let item of listItems) {
  console.log("List Item:", item.textContent);
}

let inputFields = document.getElementsByClassName("input-field");
for (let field of inputFields) {
  field.style.backgroundColor = "lightblue";
}

let firstInfoParagraph = document.querySelector(".info");
if (firstInfoParagraph) {
  firstInfoParagraph.textContent = "This is the first info paragraph";
}

let firstGenderRadio = document.querySelector("input[name='gender']");
if (firstGenderRadio) {
  firstGenderRadio.checked = true;
}

let allInfoParagraphs = document.querySelectorAll(".info");
allInfoParagraphs.forEach(paragraph => {
  console.log("Info Paragraph:", paragraph.textContent);
});

let checkboxes = document.querySelectorAll(".hobby");
checkboxes.forEach(checkbox => {
  checkbox.checked = true;
  console.log("Checked Hobby:", checkbox.value);
});