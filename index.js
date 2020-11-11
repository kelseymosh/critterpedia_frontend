const baseURL = "http://localhost:3000/"
const fishURL = baseURL + "fish"

let fishContainer = document.querySelector(".fish-container")
let wrapper = document.querySelector(".wrapper")


fetch (fishURL)
.then(response => response.json())
.then(fish => fish.forEach(renderImage))

function renderImage(fish){
    let img = document.createElement("img")
    img.className = "uncaughtFishImage"
    img.setAttribute("data-toggle","modal")
    img.setAttribute("data-target","#exampleModal")
    img.src = fish.image
    
    wrapper.append(img)
    
}

fetch (fishURL)
.then(response => response.json())
.then(fish => fish.forEach(renderInfo))

function renderInfo(fish) {
    let modalTitle = document.querySelector(".modal-title")
    modalTitle.textContent = fish.name

    let modalBody = document.querySelector(".modal-body")
    modalBody.innerHTML = `<li> Price: ${fish.price} </li>`
    modalBody.innerHTML += `<li> Shadow Size: ${fish.shadowSize} </li>`
    modalBody.innerHTML +=  `<li> Location: ${fish.location} </li>`
    modalBody.innerHTML +=  `<li> Time: ${fish.time} </li>`
    modalBody.innerHTML +=  `<li> Months: ${fish.nhMonths} </li>`
}


fishContainer.addEventListener("click", (event) => {
    let fishImage = event.target

    let caughtFishButton = document.querySelector(".btn.btn-primary")

    caughtFishButton.addEventListener("click", () => {
        fishImage.classList.add("caughtFishImage");
        document.querySelector(".btn.btn-secondary").click()
    })

    fetch(`${fishURL}/${fish.id}`,{
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({caught: true})
    })

})











    // let header = document.querySelector("#header")

    // let logo = document.createElement("img")
    // logo.className = "logo"
    // logo.src = "https://dodo.ac/np/images/0/0e/Menu_Critterpedia_NH_Icon.png"

    // let h1 = document.createElement("h1")
    // h1.textContent = "Critterpedia"

    // header.append(logo, h1)
