// alert('this is working');

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden")

    loader.addEventListener("transionend", () =>{
        document.body.removeChild("loader");
    })
})
// 