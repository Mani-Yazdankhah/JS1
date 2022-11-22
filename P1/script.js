document.getElementById("btn").addEventListener("click", (event)=>{
    let fname = document.getElementById("first").value;
    let lname = document.getElementById("last").value;
    document.getElementById("result").innerHTML = "Name: " + fname + " " +lname;
});