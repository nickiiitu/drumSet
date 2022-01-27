function sound(key){
    switch (key) {
        case "w":
            var ad=new Audio("crash.mp3");
            ad.play();
            break;
        case "a":
            var ad=new Audio("kick-bass.mp3");
            ad.play();
            break;
        case "s":
            var ad=new Audio("snare.mp3");
            ad.play();
            break;
        case "d":
            var ad=new Audio("tom-1.mp3");
            ad.play();
            break;
        case "j":
            var ad=new Audio("tom-2.mp3");
            ad.play();
            break;
        case "k":
            var ad=new Audio("tom-3.mp3");
            ad.play();
            break;
        case "l":
            var ad=new Audio("tom-4.mp3");
            ad.play();
            break;
        default:
            break;
    }
}

function annimation(key){
    // we will add the class containing the annimations to the button which is pressed
    var activebutton=document.querySelector("."+key);
    activebutton.classList.add("pressed");
    setTimeout(function() {
        activebutton.classList.remove("pressed");
    },100);
}


for(var i=0;i<7;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerhtml=this.innerHTML;
    sound(buttonInnerhtml);
    annimation(buttonInnerhtml);
});
}
document.addEventListener("keypress",function(event)
{
    sound(event.key);
    annimation(event.key);
});
