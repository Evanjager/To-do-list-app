const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addtask() {
    if(inputbox.value === ""){
        alert("You must write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputbox.value = "";
}