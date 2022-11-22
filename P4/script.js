document.getElementById("btn").addEventListener("click", (event) => {
    let data = {
        "firstName": document.getElementById("first").value,
        "lastName": document.getElementById("last").value,
        "email": document.getElementById("email").value,
        "dob": document.getElementById("dob").value,
        "age": document.getElementById("age").value,
        "designation": document.getElementById("des").value,
        "address": document.getElementById("addr").value,
    }
    localStorage.setItem('data', JSON.stringify(data));
    window.location.href = "page2.html";
});