//EMAIL JS

function validate() {
    let name=document.querySelector('.name');
    let email=document.querySelector('.email');
    let msg=document.querySelector('.message');
    let sendBtn=document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        }else{
            sendemail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate(); 

function emptyerror(){
    swal({
        title: "Oh noo ... !",
        text: "Fields cannot be empty!",
        icon: "error",
        
      });
}

function sendemail(name,email,msg){
    emailjs.send("service_5qyjunq","template_we5mhmo",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}


function success(){
    swal({
        title: "Email Send successfully",
        text: "We try to reply as fast as possible!",
        icon: "success",
        
      });
}