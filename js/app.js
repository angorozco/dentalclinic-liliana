const menu = document.getElementById("burger");
const list = document.getElementById("navigation");
const arrow = document.getElementById("arrow");

menu.addEventListener("click", () => {
    list.classList.toggle("show");
});

window.addEventListener("scroll", () => {
    console.log("inner", window.pageYOffset);
    if (window.pageYOffset > 650) {
        arrow.classList.add("arrowshow");
    } else {
        arrow.classList.remove("arrowshow");
    }
});
