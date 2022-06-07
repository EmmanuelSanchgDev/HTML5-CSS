const botonMenu = document.querySelector("#button-click")
const links = document.querySelector("#links")

botonMenu.addEventListener("click", (e) => {
    links.classList.toggle('colapsar');
})