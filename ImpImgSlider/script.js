// alert('Hi')

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

//  config param

let countItem = items.length;
let itemActive = 0;

let timeRunning = 7000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
    next.click();
}, timeAutoNext);

// event next click

next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

// event prev click

prev.onclick = function(){
    itemActive = itemActive -1;
    if(itemActive<0){
        itemActive = countItem -1;
    }
    showSlider();
}

function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumnailActiveOld.classList.remove('active');

    
    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        itemActiveOld.classList.remove('active');
        thumnailActiveOld.classList.remove('active');
        // items[itemActive].classList.add('active');
        // thumbnails[itemActive].classList.add('active');
    }, timeRunning);
    
    clearTimeout(runTimeOut);
    runAutoRun = setTimeout(()=>{
        next.click();
    }, timeAutoNext);
}

//click thumnail
thumbnails.forEach((thumbnail, index) =>{
    thumbnail.addEventListener('click', () =>{
        itemActive = index;
        showSlider();
    })
})




// alert('hi')
