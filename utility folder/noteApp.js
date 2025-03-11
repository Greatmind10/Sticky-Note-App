

const divTextBox = document.getElementById("div");

const updateData = () => {
  localStorage.setItem('appData', divTextBox.innerHTML)
};

// Retrieves current data from local storage and displays it on textBox
function retrieveData(){
  const storedData = localStorage.getItem('appData')
  if(storedData !== null){
    divTextBox.innerHTML = storedData
  }else{
    console.log("No data found")
  }
}
retrieveData();

/* Each time button is clicked, event listeners generate textBox and its child elements */
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let newElement = document.createElement("p");
  newElement.setAttribute("contenteditable", "true");
  newElement.setAttribute("class", "textbox");
  const newImage = document.createElement("img");
  newImage.setAttribute("id", "delete-icon");
  newImage.src = "Imgfolder/delete.png";
  newElement.appendChild(newImage);
  divTextBox.appendChild(newElement)

  /* When the delete icon is clicked, the text box gets deleted. This handles that functionality */
  newImage.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
      e.target.parentElement.remove();
      updateData();
    }
    /* This checks for new content and updates storage whenever new content (text) is entered by the user */
    else if(e.target.tagName === "P"){
      const textbox1 = document.querySelectorAll(".textbox")
      textbox1.forEach(nt => {
        nt.onkeyup = function(){
          updateData();
        }
      })
    }
  })
})
