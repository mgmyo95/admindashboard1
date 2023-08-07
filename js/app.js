//javascript area

let getbar = document.querySelector(".left-bar .toggle");
let getnav = document.querySelector('.navigations');
let getmain = document.querySelector('.mains');
let menutitle = document.querySelectorAll('.menu-title');

getbar.addEventListener('click',togglebar);
function togglebar(){
    getnav.classList.toggle('active');
    getmain.classList.toggle('active');

    menutitle.forEach(function(title){
        if(getnav.classList.contains('active')){
            title.style.display = "none";
        }else{
            title.style.display = "block";
        }
    }); 
}

window.addEventListener('resize',function(){
    if(this.innerWidth < 998){
        resizefix();    
    }
});

function resizefix(){
    if(getnav.classList.contains('active')){
        togglebar();
    }
};



//show and hide topbar > mega-menu
let getmegamenu = document.querySelector(".mega-menu");
let getsubmega = document.querySelector(".sub-mega");
let geticon = document.querySelector('.right-bar .search .icons');
let getsearchbox = document.querySelector('.right-bar .search-box');
let topmenu = document.querySelector('.topmenu');
let topsub = document.querySelector('.topsub');
let driveicon = document.querySelector('.drive-icon');
let driveimg = document.querySelector('.drive-img');
let openfullscreen = document.querySelector('.openfullscreen');
let closefullscreen = document.querySelector('.closefullscreen');
let getnoti = document.querySelector('.noti-icon');
let getnotimessage = document.querySelector('.noti-content');

getmegamenu.addEventListener('click',showmega);
geticon.addEventListener('click',showsearchbox);
function showmega(){
    getsubmega.classList.toggle('show');
};

function showsearchbox(){
    getsearchbox.classList.toggle('show-search');
}

topmenu.addEventListener('click',function(){
    topsub.classList.toggle('topshow');
});

driveicon.addEventListener('click',function(){
    driveimg.classList.toggle('driveshow');
})

openfullscreen.onclick = function(){
    let getde = document.documentElement;

    if(getde.requestFullscreen){
        getde.requestFullscreen();
    }else if(getde.msRequestFullscreen){
        getde.msRequestFullscreen();
    }else if(getde.webkitRequestFullscreen){
        getde.msRequestFullscreen();
    }

    openfullscreen.style.display = "none";
    closefullscreen.style.display = "inline-block";

}

closefullscreen.onclick = function(){
    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.mozRequestFullscreen){
        document.mozRequestFullscreen();    //chrome / safari
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    }else if(document.msExitFullscreen){
        document.msExitFullscreen();
    }

    openfullscreen.style.display = "inline-block";
    closefullscreen.style.display = "none";
}

getnoti.onclick = function(){
    console.log("hi")
    getnotimessage.classList.toggle('notishow');
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