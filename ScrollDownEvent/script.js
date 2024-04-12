// alert('work')
// let header = document.getElementById('header');
// let navup = document.getElementById('navup');
// let navdown = document.getElementById('navdown');

// navup.onclick = function(){
//     header.classList.remove('nav-down');
//     header.classList.add('nav-up');    
// }

// navdown.onclick = function(){
//     header.classList.remove('nav-up');
//     header.classList.add('nav-down');
// }

var prevScrollpos = window.pageYOffset;

/* Get the header element and it's position */
var headerDiv = document.querySelector("header");
var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  /* if scrolling down, let it scroll out of view as normal */
  if (prevScrollpos <= currentScrollPos ){
      headerDiv.classList.remove("fixedToTop");
      headerDiv.style.top ="-7.2rem";
  }
  /* otherwise if we're scrolling up, fix the nav to the top */
  else{  
      headerDiv.classList.add("fixedToTop");
      headerDiv.style.top = "0";
  }

  prevScrollpos = currentScrollPos;
}
