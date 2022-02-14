//Get data
const nameInput  = document.querySelector("#name");
const email      = document.querySelector("#email");
const message    = document.querySelector("#message");
const success    = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

// Validate data
    function validateForm() {

    clearMessages();

    let errorFlag = false;



    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "email cannot be blank";
        email.classList.add("error-border");


    }

    if (message.value.length < 1) {
        errorNodes[2].innerText = "please enter message ";
        message.classList.add("error-border");
        errorFlag = true;

    }

    if(!errorFlag){
        success.innerText = "Success";
    }
}

// clear error / success messages
    function clearMessages() {

    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[1].innerText = "";  
    }

    nameInput.classList.remove("error-border");
    message.classList.remove("error-border");


}
// check if the email is valid
function emailIsValid(email) {
    let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return pattern.test(email);

}