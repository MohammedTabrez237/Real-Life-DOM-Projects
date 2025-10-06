let cont = document.querySelector("#container");
let hearticn = document.querySelector("i");


cont.addEventListener("dblclick",function(){
    hearticn.style.transform= "translate(-50%,-50%) scale(1)";
    hearticn.style.color= "#ec3535eb";


    setTimeout(function(){
        hearticn.style.transform= "translate(-50%,-50%) scale(0)";
        hearticn.style.color= "#eb6923eb";
    },1000)
})

