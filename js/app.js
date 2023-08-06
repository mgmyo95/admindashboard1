//javascript area

let getbar = document.querySelector(".left-bar .toggle");
let getnav = document.querySelector('.navigations');
let getmain = document.querySelector('.mains');
let menutitle = document.querySelectorAll('.menu-title');

getbar.addEventListener('click',()=>{
    getnav.classList.toggle('active');
    getmain.classList.toggle('active');

    menutitle.forEach(function(title){
        if(getnav.classList.contains('active')){
            title.style.display = "none";
        }else{
            title.style.display = "block";
        }
    })
    
});

//show and hide topbar > mega-menu
let getmegamenu = document.querySelector(".mega-menu");
let getsubmega = document.querySelector(".sub-mega");
let geticon = document.querySelector('.icons');
let getsearchbox = document.querySelector('.search-box');

getmegamenu.addEventListener('click',showmega);
geticon.addEventListener('click',showsearchbox);
function showmega(){
    getsubmega.classList.toggle('show');
};

function showsearchbox(){
    getsearchbox.classList.toggle('show-search');
}
//show and hide topbar > mega-menu