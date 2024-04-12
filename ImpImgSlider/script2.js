let seconds = 0;

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

let duration = 5;

// event next click

next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
        ;
    }
    seconds = 0;
    console.log(seconds);
    console.log('next');
    showSlider();
}

// event prev click

prev.onclick = function(){
    itemActive = itemActive -1;
    if(itemActive<0){
        itemActive = countItem -1;
        
    }
    seconds = 0;
    console.log(seconds);
    console.log('prev');    
    showSlider();
}

//click thumnail
thumbnails.forEach((thumbnail, index) =>{
    thumbnail.addEventListener('click', () =>{
        itemActive = index;
        console.log('tnclick');
        seconds=0;
        console.log(seconds);
        showSlider();
    })
})


function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumnailActiveOld.classList.remove('active');

    
    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    if (seconds == duration){
        next.click();
        // console.log('next');
        // seconds = 0;
    }
    else {
        seconds ++;
        console.log(seconds);
    }
    
}

var cancel = setInterval(showSlider, 1000);

function Reset(){
    seconds = 0;
}
