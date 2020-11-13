const baseURL = "http://localhost:3000/"
const fishURL = baseURL + "fish"

let fishContainer = document.querySelector(".fish-container")
let wrapper = document.querySelector(".wrapper")
let caughtFishButton = document.querySelector(".btn.btn-primary")
let currentFishImage

fetch (fishURL)
    .then(response => response.json())
    .then(fish => fish.forEach(renderImage))

function renderImage(fish){
    let img = document.createElement("img")
    img.className = "uncaughtFishImage"
    if (fish.caught == true){
        img.className = "caughtFishImage"
    }

    img.setAttribute("data-toggle","modal")
    img.setAttribute("data-target","#exampleModal")
    img.src = fish.image 
    wrapper.append(img)
    
    img.addEventListener("click", (event) => {
        let fishImage = event.target
        renderModalInfo(fish)
        caughtFishButton.dataset.fishId = fish.id
        currentFishImage = fishImage
    })
}

caughtFishButton.addEventListener("click", () => {
    currentFishImage.className = "caughtFishImage";
    document.querySelector(".btn.btn-secondary").click()

    fetch(`${fishURL}/${caughtFishButton.dataset.fishId}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ caught: true })
    })

})


function renderModalInfo(fish) {
    let modalTitle = document.querySelector(".modal-title")
    
    modalTitle.textContent = fish.name

    let modalBody = document.querySelector(".modal-body")
    modalBody.innerHTML = `<li> Price: ${fish.price} Bells </li>`
    modalBody.innerHTML += `<li> Shadow Size: ${fish.shadowSize} </li>`
    modalBody.innerHTML +=  `<li> Location: ${fish.location} </li>`
    modalBody.innerHTML +=  `<li> Time: ${fish.time} </li>`
    modalBody.innerHTML +=  `<li> ${fish.nhMonths} </li>`
    modalBody.innerHTML +=  `<li> ${fish.shMonths} </li>`
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
