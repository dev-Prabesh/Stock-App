const menuIcon = document.querySelector(".menu-icon")
const closeIcon = document.querySelector(".close-icon")
const areasPhoneContainer = document.querySelector(".areas-phone-container")
const body = document.querySelector("body")
const container= document.querySelector(".container")

menuIcon.addEventListener("click", ()=>{
    areasPhoneContainer.classList.add("showpopup")
    menuIcon.style.display = "none"
})

closeIcon.addEventListener("click", () => {
    areasPhoneContainer.classList.remove("showpopup")
    menuIcon.style.display = "block"
})



























