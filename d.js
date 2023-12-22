let grid = document.querySelector(".grid i")
let list = document.querySelector(".list i")
let box = document.querySelectorAll(".box")   //عملنا ALLعشان انه بنستدعي كل الBOXS

list.addEventListener("click" , ()=>{
    list.style.color = "#bc6b25b1";
    grid.style.color ="black";
    box.forEach((el)=>{
        el.classList.add("active");
    })
})

grid.addEventListener("click" , ()=>{
    grid.style.color = "#bc6b25b1";
    list.style.color ="black";
    box.forEach((el)=>{
        el.classList.remove("active");
    })
})