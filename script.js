const output = document.querySelector (".output");
const messageOut = document.querySelectorAll (".message span");

output.addEventListener ("mouseenter", function () {
    output.style.backgroundColor = "cyan";
});
output.addEventListener ("mouseleave", function () {
    output.style.backgroundColor = "darkcyan";
});
output.addEventListener ("mousemove", function (e) {
    messageOut[0].innerText = e.x
    messageOut[1].innerText = e.y
});

document.addEventListener ("DOMContentLoaded", function () {
    let div  = document.createElement ("div");
    div.classList.add ("box");
    output.appendChild(div);
    div.x = div.offsetLeft;
    div.y = div.offsetTop;
    div.tempColor = "#" + Math.random().toString(16).substr(-6);
    div.style.backgroundColor = div.tempColor;

    div.addEventListener ("mouseenter", function(e) {
        div.style.backgroundColor = "red";
    });
    div.addEventListener ("mouseleave", function(e) {
        div.style.backgroundColor = div.tempColor;
    });
    div.addEventListener ("click", function(e) {
        div.tempColor = "#" + Math.random().toString(16).substr(-6);
        div.style.backgroundColor = div.tempColor;
    });
});