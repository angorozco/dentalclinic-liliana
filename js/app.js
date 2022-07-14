const menu = document.getElementById("burger");
const list = document.getElementById("navigation");

menu.addEventListener("click", () => {
    console.log("clic");
    list.classList.toggle("show");
});
