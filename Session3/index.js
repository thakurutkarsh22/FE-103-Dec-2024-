const formElement = document.getElementById("booking-form");

const nameInfoElement = document.getElementById("name-info");
const emailInfoElement = document.getElementById("email-info");

const nameElement = formElement.elements["fullName"];
const emailElement = formElement.elements["email"];

const submitButton = document.getElementById("button");

formElement.addEventListener("submit", (event) => {
    event.preventDefault(); // the page reload that happens is stopped

    const form = event.target;

    const name = form.elements["fullName"].value;
    const email = form.elements["email"].value;
    const doctor = form.elements["doctor"].value;
    const location = form.elements["location"].value;
    const date = form.elements["date"].value;

    const appointmentObject = {
        name,
        email,
        doctor,
        location,
        date
    }

    // VALIDATION is MUST BEFORE SENDING TO THE BACKEND.


    if(validate(appointmentObject)) {
        // HOW TO SEND DATA TO BACKEND...
        fetch("youtube.com", {
            method: "POST",
            body: JSON.stringify(appointmentObject)
        })
    } else {
        alert('wrong Data in Form');
    }


   

    console.dir(appointmentObject);

   
    console.log("submission - - - - - - -- - - - -");
})


function validate(appointmentObject) {
    const {name, email} = appointmentObject;

    const isNameValid = nameValidation(name);

    const isEmailValid = emailValidation(email);

    const isDoctorValid = true;


    return isNameValid && isEmailValid && isDoctorValid;


}

function nameValidation(nameInput = "") {

    let isValid = true;

    const name = nameInput.trim()
    const nameRegex = /^[A-Za-z\s\-.']+$/;


    if(!name) {
        isValid = false;
        nameInfoElement.innerText  = "Name should not be Empty!!";
    } else if (name.length < 3) {
        isValid = false;
        nameInfoElement.innerText  = "Name should have 3 letters";
    } else if(!name.match(nameRegex)){
        isValid = false;
        nameInfoElement.innerText  = "Please enter name without special character";
    }

    return isValid;
}

function emailValidation(emailInput = "") {

    const email = emailInput.trim();
    let isValid = true;

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(!email) {
        isValid = false;
        emailInfoElement.innerText  = "Email should not be Empty!!";
    } else if(!email.match(emailRegex)){
        isValid = false;
        emailInfoElement.innerText  = "Please enter email correctly";
    }
    return isValid;
}


// MODERN WEBSITE VALIDATION 

nameElement.addEventListener("focus", () => {
    nameInfoElement.innerHTML = "";
})

nameElement.addEventListener("blur", (event) => {
    const name = event.target.value;
    const isNameValid = nameValidation(name);
    
    if(!isNameValid) {
        // we will tallk about it.
        submitButton.disabled = true;
    }
})


emailElement.addEventListener("focus", () => {
    emailInfoElement.innerHTML = "";
})

emailElement.addEventListener("blur", () => {
    const email = event.target.value;
    const isEmailValid = emailValidation(email);

    if(!isEmailValid) {
        // we will tallk about it.
        submitButton.disabled = true;
    }
});



// ------- FORM STORAGE (localstorage) ----------------------- 

window.addEventListener("beforeunload", (event) => {
    const payload = {
        name: nameElement.value,
        email: emailElement.value,
    }

    localStorage.setItem("FORMDATA", JSON.stringify(payload));
});


document.addEventListener("DOMContentLoaded", () => {
    const stringFormat = localStorage.getItem("FORMDATA");
    const obj = JSON.parse(stringFormat);

    const {name, email} = obj;

    nameElement.value = name;
    emailElement.value = email;
})
