var istatus = document.querySelector("h5")

var btn = document.querySelector('#add');
var check = 0

btn.addEventListener("click",function(){
    if (check == 0){
        istatus.innerHTML ="Friends";
        istatus.style.color = "rgb(93, 103, 215)";
        btn.innerHTML = "Remove Friend";
        check = 1
    }else{
        istatus.innerHTML ="Strangers";
        istatus.style.color = "rgba(235, 24, 24, 1)";
        btn.innerHTML = "Add Friend";
        check = 0;

    }
    
})

