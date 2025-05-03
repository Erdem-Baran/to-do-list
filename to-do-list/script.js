let addBtn = document.getElementById("addButton");
let inputField = document.getElementById("inputField");
let todoContainer = document.getElementById("todoContainer");

addBtn.addEventListener("click",()=>{
    var text = document.createElement("li");
    text.innerHTML = inputField.value;
    todoContainer.appendChild(text);
})