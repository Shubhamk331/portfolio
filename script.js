function submitForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (name === "" || email === "") {
        document.getElementById('response-message').innerText = "Please fill out all fields.";
        document.getElementById('response-message').style.color = "red";
    } else {
        document.getElementById('response-message').innerText = "Message submitted successfully!";
        document.getElementById('response-message').style.color = "green";
    }
}
