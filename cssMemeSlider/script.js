let slider = document.querySelector(".slider");
let cont1 = document.querySelector("#cont1");
let cont2 = document.querySelector("#cont2");
let cont3 = document.querySelector("#cont3");
let cont4 = document.querySelector("#cont4");
let sliderTextMem = document.querySelector(".sliderTextMem");

let widthImg = 699;
let widthTextMem = 122;

let mainColor = "#25282a";
let colorController = "#71acff";
let whiteColor = "#ffffff";


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

function actionOneController() {
    function actionController(cont) {
        cont.style.backgroundColor = mainColor;
    };
    function deActionController(cont) {
        cont.style.backgroundColor = colorController;
    };
    for (cont of arguments) {
        deActionController(cont);
    };
    actionController(arguments[0]);
};

function pointingAtController(cont) {
    cont.style.backgroundColor = whiteColor;
    cont.style.border = "2px solid " + whiteColor;
};

function leavingOnController(cont) {
    cont.style.backgroundColor = colorController;
    cont.style.border = "2px solid " + colorController;
};

function pointingAtControllerBorder(cont) {
    cont.style.border = "2px solid " + whiteColor;
};

function leavingOnControllerBorder(cont) {
    cont.style.border = "2px solid " + colorController;
};



actionOneController(cont1, cont2, cont3, cont4);

cont1.addEventListener("click", () => {
    slider.style.right = String(0) + "px";
    sliderTextMem.style.right = String(0) + "px";

    actionOneController(cont1, cont2, cont3, cont4);
});
cont2.addEventListener("click", () => {
    slider.style.right = String(widthImg * 1) + "px";
    sliderTextMem.style.right = String(widthTextMem * 1) + "px";

    actionOneController(cont2, cont1, cont3, cont4);

});
cont3.addEventListener("click", () => {
    slider.style.right = String(widthImg * 2) + "px";
    sliderTextMem.style.right = String(widthTextMem * 2) + "px";

    actionOneController(cont3, cont1, cont2, cont4);
});
cont4.addEventListener("click", () => {
    slider.style.right = String(widthImg * 3) + "px";
    sliderTextMem.style.right = String(widthTextMem * 3) + "px";

    actionOneController(cont4, cont1, cont2, cont3);
});

function pointControl(cont) {
    cont.addEventListener("mouseover", () => {
        if (cont.style.backgroundColor === "rgb(37, 40, 42)") {
            pointingAtControllerBorder(cont);
        } else {
            pointingAtController(cont);
        };
    });

    cont.addEventListener("mouseout", () => {
        if (cont.style.backgroundColor === "rgb(37, 40, 42)") {
            leavingOnControllerBorder(cont);
        } else {
            leavingOnController(cont);
        };
    });
}

pointControl(cont1);
pointControl(cont2);
pointControl(cont3);
pointControl(cont4);