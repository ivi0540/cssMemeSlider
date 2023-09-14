let offset = 0;
let slider = document.querySelector(".slider");
let cont1 = document.querySelector("#cont1");
let cont2 = document.querySelector("#cont2");
let cont3 = document.querySelector("#cont3");
let cont4 = document.querySelector("#cont4");

let arr = [cont1, cont2, cont3, cont4];
for (cont of arr) {
    cont.addEventListener("click", () => {
        slider.style.right = "699px";
        alert(1111);
    });
};


// cont1.addEventListener("click", () => {
//     slider.style.right = "699px";
// });