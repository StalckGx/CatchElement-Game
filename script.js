const output = document.querySelector(".output");
const messageOut = document.querySelectorAll(".message span");
output.addEventListener("mouseenter", function () {
    output.style.backgroundColor = "cyan";
});
output.addEventListener("mouseleave", function () {
    output.style.backgroundColor = "darkcyan";
});
output.addEventListener("mousemove", function (e) {
    messageOut[0].innerText = e.x
    messageOut[1].innerText = e.y
});