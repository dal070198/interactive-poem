let divs = document.querySelectorAll(".grid-container div:not(:last-child)");
console.log(divs.length);
function randomize() {
console.log("clicked");
divs.forEach(function(div) {
div.style.opacity = 0;
});
}
document.addEventListener("click", randomize);