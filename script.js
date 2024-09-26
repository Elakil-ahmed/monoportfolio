const divcontainer = document.querySelector("ul");
let isClicked = true;
let showOrnide = function () {
    if (isClicked) {
        divcontainer.style.display = "flex";
        isClicked = false;
    } else {
        divcontainer.style.display = "none";
        isClicked = true;
    }
}