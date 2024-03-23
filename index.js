const container = document.querySelector(".container")
const signupHeader = document.querySelector(".signup header")
const loginHeader = document.querySelector(".login header")

loginHeader.addEventListener("click", () => {
    container.classList.add("active")
})


signupHeader.addEventListener("click", () => {
    container.classList.remove("active")
})