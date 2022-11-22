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

    let obj2 = {
        "state": "test",
        "country": "test",
        "pincode": "12312"
    }

    const result = {
        ...data,
        ...obj2,
    };

    localStorage.setItem('data', JSON.stringify(result));
    window.location.href = "page2.html";
});