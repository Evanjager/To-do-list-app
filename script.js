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
    save();
}

listContainer.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        save();
    }else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        save();
    }

},false);

function save() {
    localStorage.setItem("data",listContainer.innerHTML);
}
function dispaytask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
dispaytask()