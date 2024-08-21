var numberofdrums = document.querySelectorAll(".drum").length;
for(var i=0; i<numberofdrums; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function (){

    var numberofdrums = this.innerHTML;
    switch (numberofdrums) {
        case "w":
            var audio1 = new Audio('sounds/crash.mp3');
            audio1.play();
            break;
            case "k":
                var audio2 = new Audio('sounds/tom-2.mp3');
                audio2.play();
                break;
                case "s":
                var audio3 = new Audio('sounds/tom-3.mp3');
                audio3.play();
                break;
                case "d":
                var audio4 = new Audio('sounds/tom-4.mp3');
                audio4.play();
                break;
                case "j":
                var audio5 = new Audio('sounds/tom-1.mp3');
                audio5.play();
                break;
                case "l":
                var audio6 = new Audio('sounds/snare.mp3');
                audio6.play();
                break;
                case "a":
                var audio7 = new Audio('sounds/kick-bass.mp3');
                audio7.play();
                break;
        default:
            break;
    }

} );
}
    document.addEventListener("keydown", function(event){
       console.log(event);
        
        });
    switch (numberofdrums) {
        case "w":
            var audio1 = new Audio('sounds/crash.mp3');
            audio1.play();
            break;
            case "k":
                var audio2 = new Audio('sounds/tom-2.mp3');
                audio2.play();
                break;
                case "s":
                var audio3 = new Audio('sounds/tom-3.mp3');
                audio3.play();
                break;
                case "d":
                var audio4 = new Audio('sounds/tom-4.mp3');
                audio4.play();
                break;
                case "j":
                var audio5 = new Audio('sounds/tom-1.mp3');
                audio5.play();
                break;
                case "l":
                var audio6 = new Audio('sounds/snare.mp3');
                audio6.play();
                break;
                case "a":
                var audio7 = new Audio('sounds/kick-bass.mp3');
                audio7.play();
                break;
        default:
            break;
    }

