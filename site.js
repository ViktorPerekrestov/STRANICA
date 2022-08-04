let burger=document.querySelector(".burger");
let menu=document.querySelector(".nav-header__nav")
let triger=0;
burger.onclick=function()
{
    if (triger==0)
    {
    menu.style.display="flex";
    triger++;
    }
    else
    {
        menu.style.display="none";
        triger=0;
    }
}

window.onresize=function()
{
    if (window.innerWidth>767){
    menu.style.display="flex";
    triger=0;
    }
    else
    menu.style.display="none";
}