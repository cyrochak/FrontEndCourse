var audio;
function sound(key){
    switch (key) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3") 
            break;
        case "a":
            audio = new Audio("./sounds/tom-2.mp3") 
            break;
        case "s":
            audio = new Audio("./sounds/tom-3.mp3") 
            break;
        case "d":
            audio = new Audio("./sounds/tom-4.mp3") 
            break;
        case "j":
            audio = new Audio("./sounds/snare.mp3") 
            break;
        case "k":
            audio = new Audio("./sounds/crash.mp3") 
            break;
        case "l":
            audio = new Audio("./sounds/kick-bass.mp3") 
            break;
        default:
            console.log(key);
    }
    audio.play();
}

function animation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");  // .classList -> add external css into the function is executed.
    setTimeout(function(){
        activeButton.classList.remove("pressed", 100);
    });
}

for (var i = 0; i <document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        sound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });
        
    document.addEventListener("keydown", function(e){
        sound(e.key);
        animation(e.key);
    });
}


