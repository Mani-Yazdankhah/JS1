var data = JSON.parse(localStorage.getItem('data'));
localStorage.removeItem('data');

document.getElementById("first").innerHTML = data["firstName"];
document.getElementById("last").innerHTML = data["lastName"];
document.getElementById("email").innerHTML = data["email"];
document.getElementById("dob").innerHTML = data["dob"];
document.getElementById("age").innerHTML = data["age"];
document.getElementById("des").innerHTML = data["designation"];
document.getElementById("addr").innerHTML = data["address"];