let header = document.querySelector("header")

let logo = document.createElement("img")
logo.className = "logo"
logo.src = "https://dodo.ac/np/images/0/0e/Menu_Critterpedia_NH_Icon.png"

let h1 = document.createElement("h1")
h1.textContent = "critterpedia"

header.append(logo, h1)