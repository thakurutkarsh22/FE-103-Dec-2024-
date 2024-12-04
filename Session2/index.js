
const targetElement = document.getElementById("target");
const palletElement = document.getElementById("pallet");

const greenElement = document.getElementById("green");
const redElement = document.getElementById("red");
const blueElement = document.getElementById("blue");
const yellowElement = document.getElementById("yellow");

/*
redElement.addEventListener("click", () => {
    targetElement.style.background = "red"
    targetElement.innerText = "Selected Color: red"
})

greenElement.addEventListener("click", () => {
    targetElement.style.background = "green"
    targetElement.innerText = "Selected Color: green"
})

blueElement.addEventListener("click", (event) => {
    console.log(event);
    targetElement.style.background = "blue"
    targetElement.innerText = "Selected Color: blue"
})

yellowElement.addEventListener("click", (event) => {
    console.log(event);
    targetElement.style.background = "yellow"
    targetElement.innerText = "Selected Color: yellow"
})
*/

// COST : 4 event listners 
// 



// ----------------- EVENT DELEGATION ---------------- 

// palletElement.addEventListener("click", (event) => {
//     const element = event.target;
//     const color = element.id;

//     targetElement.style.background = color
//     targetElement.innerText = "Selected Color: " + color;
// })




const formElement = document.getElementById("booking-form");


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

    console.dir(appointmentObject);


   
    console.log("submission - - - - - - -- - - - -");
})