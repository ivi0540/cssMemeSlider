let slider = document.querySelector(".slider");
let cont1 = document.querySelector("#cont1");
let cont2 = document.querySelector("#cont2");
let cont3 = document.querySelector("#cont3");
let cont4 = document.querySelector("#cont4");


let sliderTextMem = document.querySelector(".sliderTextMem");

// let arr = [cont1, cont2, cont3, cont4];

let widthImg = 699;

function initSizeWindow() {
    if (window.innerWidth <= 1024) {
        widthImg = 284;
    } else {
        widthImg = 699;
    };
};

initSizeWindow();

window.addEventListener("resize", () => {
    initSizeWindow();
});

let widthTextMem = 122;

cont1.addEventListener("click", () => {
    slider.style.right = String(0) + "px";
    sliderTextMem.style.right = String(0) + "px";
});
cont2.addEventListener("click", () => {
    slider.style.right = String(widthImg * 1) + "px";
    sliderTextMem.style.right = String(widthTextMem * 1) + "px";
});
cont3.addEventListener("click", () => {
    slider.style.right = String(widthImg * 2) + "px";
    sliderTextMem.style.right = String(widthTextMem * 2) + "px";
});
cont4.addEventListener("click", () => {
    slider.style.right = String(widthImg * 3) + "px";
    sliderTextMem.style.right = String(widthTextMem * 3) + "px";
});