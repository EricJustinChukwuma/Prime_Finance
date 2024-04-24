const icon1 = document.querySelector(".icon-container");
const icon2 = document.querySelector(".icon-container-2");

const selectBox1 = document.getElementById("select-box-1")
const selectBox2 = document.getElementById("select-box-2")


selectBox1.addEventListener("click", function() {
    icon1.classList.toggle("opened")
})

selectBox2.addEventListener("click", ()=> {
    icon2.classList.toggle("opened")
})
/*-----------------------------------*/


let eyeopen = document.getElementById("eye-open");
let eyeclosed = document.getElementById("eye-closed");

const password = document.getElementById("password");

// eyeopen.addEventListener("click", function() {
//     passwordInput.type = "text";
//     eyeopen.style.display = "none";
//     eyeclosed.style.display = "flex";
// })

eyeclosed.addEventListener("click", function() {
    eyeclosed.style.color = "blue"
})

