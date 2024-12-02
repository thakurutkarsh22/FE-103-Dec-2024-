console.log("hello guys");


//  ---------------------  CREATE COUNTER ----- -- - - - - - -- 

/*
// 1. Select an element 
// 2. Add event listner on that element (for a perticular EVENt)
// 3. Give the function

// Get the elements
const counterElement = document.getElementById("counter");

const incrementElement = document.getElementById("incrementzzz");
const decrementElement = document.getElementById("decrement");

// console.log(counterElement);
console.dir(counterElement)

// console.log(incrementElement);

// eventObj  -> TYPE -> DEtails of the event

incrementElement.addEventListener("click", (eventObj) => {
    console.log("increment clicked sit back and relax ");

    const newVal = Number(counterElement.innerText) + 1;
    counterElement.innerText = newVal;
})

decrementElement.addEventListener("click", () => {
    console.log("decrement clicked");

    const newVal = Number(counterElement.innerText) - 1;
    counterElement.innerText = newVal;
})

*/



// ------------- different types of events 0---------

const containerElement = document.getElementById("container")
console.log(containerElement);

const clickHandler = () => {
    containerElement.innerText = "box click"
    containerElement.style.background = "green";
}

containerElement.addEventListener("click", clickHandler)

containerElement.addEventListener("mouseover", () => {
    containerElement.innerText = "someone Entered"
    containerElement.style.background = "yellow";
})

containerElement.addEventListener("mouseout", () => {
    containerElement.innerText = "someone exited"
    containerElement.style.background = "white";
})


// REMOVAL OF EVENT LISTNER
setTimeout(() => {
    console.log("hello after 5 sec")
    containerElement.removeEventListener("click", clickHandler)
}, 5000)


