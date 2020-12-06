const codeDiv = document.getElementById("code").querySelector("div")
const ASCIIDiv = document.getElementById("ASCII").querySelector('div')
const charDiv = document.getElementById("char").querySelector('div')
const pressDiv = document.querySelector(".press")
const infoDiv = document.querySelectorAll(".item")

window.addEventListener("keydown", e => {
    pressDiv.classList.add("hide")
    infoDiv[1].classList.add("key-infos")
    const code = e.code
    const char = e.key
    const ASCIICode = char.charCodeAt(0)

    codeDiv.innerHTML = code
    ASCIIDiv.innerHTML = ASCIICode
    charDiv.innerHTML = char
})
