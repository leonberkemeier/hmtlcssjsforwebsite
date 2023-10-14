let text=document.getElementById('text');
let right=document.getElementById('right');
let left=document.getElementById('left');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    right.style.marginRight = value * -1.5 + 'px';
    left.style.marginLeft = value * -1.5 + 'px';
})