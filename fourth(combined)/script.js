
// ===== Multitext ======
var typingEffect = new Typed (".multiText",{
    strings:["Coder","Leon","Showman","entertainer"],
    loop: true,
    typeSpeed: 200,
    backSpeed: 300,
    backDelay: 1500,
});




 /*=============== SHOW MENU ===============*/
 const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle'),
 navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
 navToggle.addEventListener('click', () =>{
     navMenu.classList.add('show-menu')
 })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
 navClose.addEventListener('click', () =>{
     navMenu.classList.remove('show-menu')
 })
};


// ====== Collapsibles =====


var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    };


// ==== Image slider ====

var counter = 1;
        setInterval(function(){
            document.getElementById('radio'+counter).checked=true;
            counter++;
            if(counter>5){
                counter=1;
            }
        }, 5000);
