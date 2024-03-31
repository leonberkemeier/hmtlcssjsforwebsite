var seconds = 0;
var el = document.getElementById('seconds-counter');
// var timeout = 7000;


function incrementSeconds() {

    if (seconds == 4){
        seconds = 0;
        console.log('next');
    }
    else {
        seconds ++;
        console.log(seconds);
    }
    
    el.innerText = "You have been here for " + seconds + " seconds.";
}

var cancel = setInterval(incrementSeconds, 1000);


function Reset(){
    seconds = 0;
}
