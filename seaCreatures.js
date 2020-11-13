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