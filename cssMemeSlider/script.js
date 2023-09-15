let slider = document.querySelector(".slider");
let cont1 = document.querySelector("#cont1");
let cont2 = document.querySelector("#cont2");
let cont3 = document.querySelector("#cont3");
let cont4 = document.querySelector("#cont4");

let arr = [cont1, cont2, cont3, cont4];

const widthImg = 699;

cont1.addEventListener("click", () => {
    slider.style.right = String(0) + "px";
});
cont2.addEventListener("click", () => {
    slider.style.right = String(widthImg * 1) + "px";
});
cont3.addEventListener("click", () => {
    slider.style.right = String(widthImg * 2) + "px";
});
cont4.addEventListener("click", () => {
    slider.style.right = String(widthImg * 3) + "px";
});