//Get data

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

// Validate data
function validateForm() {

    clearMessages();

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
    }

    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "email cannot be blank";
        email.classList.add("error-border");

        
    }

    if (message.value.length < 1) {
        errorNodes[2].innerText = "please enter message ";
        message.classList.add("error-border");

    }
}

// clear error / success messages
function clearMessages() {

    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[1].innerText = "Invalid email address";
    }

    nameInput.classList.remove("error");

}
// check if the email is valid
function emailIsValid(email) {
    let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return pattern.test(email);

}