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

    // WE COULD GIVE OUR OWN CUSTOM HTML

    // containerElement.innerHTML = "<b><u>box click</u></b>";


    // LINE SPACE FORMATTING IS PRESERVED

    // containerElement.innerText = `box clicked    
    //     hello world 


    //     hey htere 

    //     nice
    
    // `;


    // THERE IS NO FORMATTING 
    containerElement.textContent = `box clicked    
        hello world 


        hey htere 

        nice
    
    `;

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
// setTimeout(() => {
//     console.log("hello after 5 sec")
//     containerElement.removeEventListener("click", clickHandler)
// }, 5000)



// DOUBTS ....... 






// PSEUDO CODE for module 1 and 2 
/*
const city = URLSearchParams("search url")

const url = backendEndpoint + "/adventures?city=" + city


// get the JSON 
const response = await fetch(url);
const data = await response.json();

// ADD THE CARD FOR THE ITEM 
Array.from(data).forEach(item => {
    const card = document.createElement("div");
    card.innerHTML = "Hey there I am created in JS" + item
    card.className = "beautiful"
    
    document.body.appendChild(card);
})
    */





