const divTextBox = document.getElementById("div");
const updateStorage = () => {
  localStorage.setItem("appData", divTextBox.innerHTML)
};

/*
Retrieves current data from local storage and displays it on textBox
Display stored data
*/

function displayStoredData() {
  const storedData = localStorage.getItem("appData");
  if (storedData) {
    divTextBox.innerHTML = storedData;
    // Attach event listener to container
    divTextBox.addEventListener("click", (e) => {
      if (e.target.tagName === "IMG" && e.target.id === "delete-icon") {
        e.target.parentElement.remove();
        updateStorage();
      }
    });
  }
}
displayStoredData();

/* Each time button is clicked, event listeners generate textBox and its child elements */
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  //const divTextBox = document.getElementById("div");
  let newElement = document.createElement("p");
  newElement.setAttribute("contenteditable", "true");
  newElement.setAttribute("class", "textbox");
  const newImage = document.createElement("img");
  newImage.setAttribute("id", "delete-icon");
  newImage.src = "Imgfolder/delete.png";
  newElement.appendChild(newImage);
  divTextBox.appendChild(newElement);

  /* When the delete icon is clicked, the text box gets deleted. This handles that functionality */
  newImage.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      e.target.parentElement.remove();
      updateStorage();
    }

    //update storage when text is entered
    divTextBox.appendChild(newElement);
    // Attach event listener to new text box
    newElement.addEventListener("keyup", () => {
      updateStorage();
    });
  })
})

document.addEventListener("keydown", event => {
  if (event.key == "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})
