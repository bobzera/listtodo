const home = document.querySelector(".home")
const add = document.querySelector(".add")
const btnShow = document.querySelector(".btn-show-add")

function hide(hide){hide.style.display = "none"}

function show(show){show.style.display = "block"}
 
window.addEventListener("load", function(){
    // MUDAR ESSE
    hide(add)
})


btnShow.addEventListener("click", function(){

    if(add.style.display === "block"){
        hide(add)
        show(home)
            console.log("dentro")
    }else {   
        
        show(add)
        hide(home)
        console.log("fora")
    } 
}); 