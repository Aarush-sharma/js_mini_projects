let main = document.querySelectorAll(".main")
let input = document.querySelector(".defalt")
let submit = document.querySelector(".sbutton")
let task = document.querySelector(".fortext")
let tick = document.querySelector("#tick")
let newinput = document.querySelector(".user")
let line = document.querySelector(".lin")
document.getElementById('taskInput').addEventListener("click", () => {
    if (document.getElementById('taskInput').value === 'Enter Your Task Here..') {
        document.getElementById('taskInput').value = '';
    }
})
const mainform = document.querySelector('#taskForm');
submit.addEventListener('click', function (event) {
    event.preventDefault();
    creator();
})

const creator = () => {
    let fortext = document.createElement('button');
    let failed = document.createElement('button');
    let taskInputValue = document.getElementById('taskInput').value;
    fortext.innerText = taskInputValue;
    fortext.classList.add("taskby");
    failed.classList.add("failed");
    failed.innerText = "x"
    if( taskInputValue === 'Enter Your Task' || taskInputValue === ""){
        alert("DO NOT FOOL AROUND 💢");
    } else {
        task.style.display = "block";
        line.style.visibility = "visible";
        task.appendChild(fortext);
        task.appendChild(failed);
        document.getElementById('taskInput').value = "";
    }
    fortext.addEventListener("click",(e)=>{
        task.removeChild(fortext);
        task.removeChild(failed);
        alert("conratulations :3")
        if(task.innerText===""){
            line.style.visibility = "hidden";
        }
    })
    failed.addEventListener("click",(e)=>{
        task.removeChild(fortext);
        task.removeChild(failed);
        if(task.innerText===""){
            line.style.visibility = "hidden";
        }
    })
}

