//javascript area

let getbar = document.querySelector(".left-bar .toggle");
let getnav = document.querySelector('.navigations');
let getmain = document.querySelector('.mains');
let menutitle = document.querySelectorAll('.menu-title');

getbar.addEventListener('click', togglebar);
function togglebar() {
    getnav.classList.toggle('active');
    getmain.classList.toggle('active');

    menutitle.forEach(function (title) {
        if (getnav.classList.contains('active')) {
            title.style.display = "none";
        } else {
            title.style.display = "block";
        }
    });
}

window.addEventListener('resize', function () {
    if (this.innerWidth < 998) {
        resizefix();
    }
});

function resizefix() {
    if (getnav.classList.contains('active')) {
        togglebar();
    }
};



//show and hide topbar > mega-menu
let geticon = document.querySelector('.right-bar .search .icons');
let getsearchbox = document.querySelector('.right-bar .search-box');
let topmenus = document.querySelectorAll('.topmenu');
let topsub = document.querySelector('.topsub');
let openfullscreen = document.querySelector('.openfullscreen');
let closefullscreen = document.querySelector('.closefullscreen');
let getsettingicon = document.querySelector(".setting-icon");
let getsettingbox = document.querySelector('.setting-box');
let getcross = document.querySelector('.cross');

geticon.addEventListener('click', showsearchbox);
function showsearchbox() {
    getsearchbox.classList.toggle('show-search');
}

//topbar icon toggle 
topmenus.forEach((topmenu, idx) => {
    topmenu.addEventListener('click', function () {
        // console.log(topmenu,idx);
        showtopmenu(idx);
    });
});

function showtopmenu(idx) {
    topmenus.forEach((curmenu, curidx) => {
        // console.log(idx,curidx);
        let menucontent = curmenu.nextElementSibling;
        // console.log(menucontent);

        if (idx === curidx) {
            // menucontent.classList.add('topshow');
            menucontent.classList.toggle('topshow');
        } else {
            menucontent.classList.remove('topshow');
        }
    });
};

//setting cross toggle
getcross.addEventListener('click', settingshow);
function settingshow() {
    getsettingbox.classList.toggle('topshow');
}


//fullscreen
openfullscreen.onclick = function () {
    let getde = document.documentElement;

    if (getde.requestFullscreen) {
        getde.requestFullscreen();
    } else if (getde.msRequestFullscreen) {
        getde.msRequestFullscreen();
    } else if (getde.webkitRequestFullscreen) {
        getde.msRequestFullscreen();
    }

    openfullscreen.style.display = "none";
    closefullscreen.style.display = "inline-block";

};

closefullscreen.onclick = function () {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozRequestFullscreen) {
        document.mozRequestFullscreen();    //chrome / safari
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }

    openfullscreen.style.display = "inline-block";
    closefullscreen.style.display = "none";
};



//show and hide topbar > mega-menu

//left sidebar hover animation 
let navlis = getnav.querySelectorAll('.nav-lists li');
navlis.forEach(item => item.addEventListener('mousemove', activelink));

function activelink() {
    // console.log("hi")
    navlis.forEach(item => {
        item.classList.remove('hovered');
    });
    this.classList.add('hovered');
}

//left sidebar hover animation