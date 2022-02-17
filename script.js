let arrow = document.querySelectorAll('.arrow');
for(var i = 0; i < arrow.length;i++){
    arrow[i].addEventListener('click', (e)=>{
        let arrowParent= e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu")
    })
}
let sidebar = document.querySelector(".sidebar")
let menu = document.querySelector(".menu")
console.log(menu);
menu.addEventListener("click", ()=>{
    sidebar.classList.toggle('close');
});