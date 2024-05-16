let bar = document.querySelector(".bar");
let sidebar = document.querySelector("#sidebar");
let cross = document.querySelector(".cross");

bar.addEventListener(`click`, function(){
    sidebar.classList.add(`active`);
    // alert(`ok`);
});
cross.addEventListener(`click` , function(){
    sidebar.classList.remove(`active`);
});
sidebar.addEventListener(`click`, function(e){
    if(e.target.classList.contains(`active`) == true){
        sidebar.classList.remove(`active`);
    }
});