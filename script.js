//select input box and button
var inputBox = document.getElementById("input-box");
var btn = document.getElementById("btn");
var list = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("You Must write Something...!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        list.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value ='';
    saveData();

}
list.addEventListener("click", function(e) 
{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})
function saveData(){
    localStorage.setItem("data" , list.innerHTML);

}
function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();