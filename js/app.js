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
let geticon = document.querySelector('.right-bar .search .icons');
let getsearchbox = document.querySelector('.right-bar .search-box');

getmegamenu.addEventListener('click',showmega);
geticon.addEventListener('click',showsearchbox);
function showmega(){
    getsubmega.classList.toggle('show');
};

function showsearchbox(){
    getsearchbox.classList.toggle('show-search');
}
//show and hide topbar > mega-menu

//left sidebar hover animation 
let navlis = getnav.querySelectorAll('.nav-lists li');
navlis.forEach(item=>item.addEventListener('mousemove',activelink));

function activelink(){
    // console.log("hi")
    navlis.forEach(item=>{
        item.classList.remove('hovered');
    });
    this.classList.add('hovered');
}

//left sidebar hover animation