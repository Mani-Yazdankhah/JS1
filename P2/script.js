document.getElementById("btn").addEventListener("click", (event)=>{
    let fname = document.getElementById("first").value;
    let lname = document.getElementById("last").value;
    document.getElementById("result").innerHTML = "Name: " + fname + " " +lname;
});

document.getElementById("result").addEventListener("mouseover", (event)=>{
    document.getElementById("result").style.backgroundColor = "yellow";
});

document.getElementById("result").addEventListener("mouseleave", (event)=>{
    document.getElementById("result").style.backgroundColor = "transparent";
});