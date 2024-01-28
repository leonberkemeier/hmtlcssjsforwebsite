// alert('this is working')

// let parent = document.getElementById('parent');
// let child = document.getElementById('child');

function removeChild(){
    alert('removing Child');
};

function removeParent() {
    alert('removing Parent');
};

function removeSearch1() {
    // alert('removing Search');
    const parent = document.getElementById("parent");
    if (parent.hasChildNodes()) {
      parent.removeChild(parent.children[0]);
    };
};

function remoceChild() {
    // document.getElementById("demo").innerHTML = "Hello World";
    alert('Removin Child');
};
function remoceChild1() {
    // document.getElementById("demo").innerHTML = "Hello World";
    // alert('removin Parent');
    // document.removeChild("child");
    // const parent = getElementById('parent');
    // alert('o');
    // parent.removeChild('child');
   
    const parent = document.getElementById("parent");
    if (parent.hasChildNodes()) {
      parent.removeChild(parent.children[0]);
    }


};


function myFunction() {
    const list = document.getElementById("myList");
    if (list.hasChildNodes()) {
      list.removeChild(list.children[0]);
    }
  };

// alert('stuf')


var text = document.getElementById('text');
var button = document.getElementById('button');
button.onclick = function() {
    text.value = '';
}