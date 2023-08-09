console.log("hello")

const inputbox = document.querySelector(".input-box");
const listcontainer = document.querySelector(".listcontainer");

function addtask(){
    if(inputbox.value == ""){
        alert("add some task");
    }
    else {
        let li = document.createElement("li");
       li.innerHTML = inputbox.value;
       listcontainer.appendChild(li);
       let del = document.createElement("span");
       del.innerHTML = "&#215;";
       li.appendChild(del);
    }
    inputbox.value="";
    save();
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName == "SPAN"){
      e.target.parentElement.remove();
      save();
    }
})

function save(){
    localStorage.setItem("data" ,listcontainer.innerHTML);
}
function show(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
show();



const sunimg = document.querySelector(".sunimg");
const moonimg = document.querySelector(".moonimg");
const fluid1 = document.querySelector(".fluid1");
const dtls = document.querySelector(".dtls");
const devlo = document.querySelector(".devlo");
const input = document.querySelector(".inputpart")

sunimg.addEventListener("click",function(){
    fluid1.classList.add("fluid0");
    devlo.classList.add("devlochange");
    dtls.classList.add("dtlschange");
    input.classList.add("inputpartchange");
})
moonimg.addEventListener("click",function(){
    fluid1.classList.remove("fluid0");
    devlo.classList.remove("devlochange");
    dtls.classList.remove("dtlschange");
})