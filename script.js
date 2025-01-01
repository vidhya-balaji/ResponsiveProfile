var menuicon=document.getElementById("menuicon")
var menulist=document.getElementById("menulist");
var closeicon=document.getElementById("close");
var closemenu=document.getElementById("closemenu")
menuicon.addEventListener('click',function(){
    menulist.style.right="25px"
    menulist.style.width="fit-content"
});
closeicon.addEventListener('click',function(){
    menulist.style.right="-30%"

})

