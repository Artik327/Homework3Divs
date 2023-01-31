let block1 = document.querySelector(".d1");
let block2 = document.querySelector(".d2");
let block3 = document.querySelector(".d3");

block1.addEventListener("click", ()=> {
    if(block1.style.background == "green"){
        block1.style.background = "red";
    }

    else if(block1.style.background = "red"){
        block1.style.background = "green";
    }
});

block2.addEventListener("click", ()=> {
    if(block2.style.background == "green"){
        block2.style.background = "red";
    }

    else if(block2.style.background = "red"){
        block2.style.background = "green";
    }
});

block3.addEventListener("click", ()=> {
    if(block3.style.background == "green"){
        block3.style.background = "red";
    }

    else if(block3.style.background = "red"){
        block3.style.background = "green";
    }
});