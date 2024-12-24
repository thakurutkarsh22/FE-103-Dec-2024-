import teamsData from "./data.js";

const teamContainer = document.getElementById("teams-container");
const teamContentContainer = document.getElementById("team-content-container");

// 1. Display team pills.

function displayTeamPills(teamList = []) {

    teamList.forEach(team => {
        const {id, name} = team;

        const teamPillELement = document.createElement("div");
        teamPillELement.className = "card m-2";
        teamPillELement.innerHTML = `<div id=${id} class="card-body">${name}</div>`;
        teamContainer.append(teamPillELement);
    })

}

displayTeamPills(teamsData)



// 2. to show the content

function getOuterLayrCarousel() {
    return `
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div id="carousel-inner" class="carousel-inner">
                
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    
    `;
}


function showCOntent() {
    teamContainer.addEventListener("click", (event) => {
        const teamId = event.target.id;
        const selectedTeamData = teamsData.find(team => team.id === teamId);

        const images = selectedTeamData.images || [];

        // add BLANK CAROUSEL 
        teamContentContainer.innerHTML = getOuterLayrCarousel();

        const carouselInner = document.getElementById("carousel-inner");

        // FILL THE CAROUSEL
        images.forEach((image, index) => {
            const divElement = document.createElement("div");
            divElement.className = `carousel-item ${index === 0 ? 'active': '' }`;
            divElement.innerHTML = `

                <img 
                src=${image}
                alt="picture
                class="w-100"
                />
            
            `
            carouselInner.append(divElement);
        })
    });

}

showCOntent();




// function generateFilterPillsAndUpdateDOM(filters) {
//     {duration: "", category: []}
//     // TODO: MODULE_FILTERS
//     // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills

//      let categoryList=filters["catogory"]; // ["sports", "play"]
   
//     console.log(categoryList);
//     for(let i=0;i<categoryList.length;i++)
//     {
//       console.log(categoryList[i]);
//       let div=document.createElement("div");
//         div.className = "category-filter";
//     //   div.setAttribute("class","category-filter");
//       div.innerText=categoryList[i];
//       document.getElementById("category-list").append(div);
//     }
  
//     var persist_duration_choice=document.getElementById("duration-select");
//     persist_duration_choice.value=filters.duration;
// }


// LINK TO READ
/**
 * https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=1s
 * https://javascript.info/
 * https://web.dev/
 * https://github.com/thakurutkarsh22
 * https://javascriptpatterns.vercel.app/patterns
 * 
 * https://github.com/getify/You-Dont-Know-JS
 */


// Element.addEventListener("click", (event) => {
//     event.stopPro(})
//  } false)

// console.log("a");
// setTimeout(() => {
//     console.log("b");   

// }, 5000);
// console.log("c");   

//  localStorage, cookies, session storage, cache, indexed DB - sql
