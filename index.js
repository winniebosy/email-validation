let emailInput = document.querySelector('input[type="email"]');
let errorDisplay = document.querySelector('.show');
console.log(errorDisplay)



//validating emails

function validateEmail(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());

}

//validates email and updates error message
emailInput.addEventListener("keydown", function(e) {
    const mail = emailInput.value;
    if (!validateEmail(mail)) {
        errorDisplay.focus();
        errorDisplay.style.display = 'block';
    } else {
        errorDisplay.style.display = 'none';
    }

});
