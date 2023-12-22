const body = document.querySelector("body")
const header = document.querySelector("header")
const main = document.querySelector("main")
const footer = document.querySelector("footer")

function darkMode() {
    body.classList.toggle("darkMode")
    header.classList.toggle("darkNav")
    main.classList.toggle("darkMain")
    footer.classList.toggle("darkFooter")
}
