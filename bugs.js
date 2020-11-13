const baseURL = "http://localhost:3000/"
const bugURL = baseURL + "bugs"

let bugsContainer = document.querySelector(".fish-container")
let wrapper = document.querySelector(".wrapper")
let caughtBugButton = document.querySelector(".btn.btn-primary")
let currentBugImage

fetch(bugURL)
    .then(response => response.json())
    .then(bug => bug.forEach(renderImage))

function renderImage(bug){
    let img = document.createElement("img")
    img.className = "uncaughtBugImage"
    if (bug.caught == true){
        img.className = "caughtBugImage"
    }

    img.setAttribute("data-toggle","modal")
    img.setAttribute("data-target","#exampleModal")
    img.src = bug.image 
    wrapper.append(img)
    
    img.addEventListener("click", (event) => {
        let bugImage = event.target
        renderModalInfo(bug)
        caughtBugButton.dataset.bugId = bug.id
        currentBugImage = bugImage
    })
}

caughtBugButton.addEventListener("click", () => {
    currentBugImage.className = "caughtBugImage";
    document.querySelector(".btn.btn-secondary").click()

    fetch(`${bugURL}/${caughtBugButton.dataset.bugId}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ caught: true })
    })

})


function renderModalInfo(bug) {
    let modalTitle = document.querySelector(".modal-title")
    
    modalTitle.textContent = bug.name

    let modalBody = document.querySelector(".modal-body")
    modalBody.innerHTML = `<li> Price: ${bug.price} Bells </li>`
    modalBody.innerHTML +=  `<li> Location: ${bug.location} </li>`
    modalBody.innerHTML +=  `<li> Time: ${bug.time} </li>`
    modalBody.innerHTML +=  `<li> ${bug.nhMonths} </li>`
    modalBody.innerHTML +=  `<li> ${bug.shMonths} </li>`
}


let header = document.querySelector("header")
let instructions = document.createElement("div")
instructions.className = "instructions"

let logo = document.createElement("img")
logo.className = "logo"
logo.src = "https://dodo.ac/np/images/0/0e/Menu_Critterpedia_NH_Icon.png"

let h1 = document.createElement("h1")
h1.textContent = "critterpedia"

let h3 = document.createElement("h3")
h3.textContent = "hi, my name is kelso and I am the resident representative for slateport island! I've created this app to log the many critters you can catch on your island. simply click a critter to see it's information and mark it as caught to record it"
instructions.append(h3)

header.append(logo, h1, instructions)
