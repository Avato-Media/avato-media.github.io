var mobileDrawerStatus = 'up';
var mobileDrawer;
var mobileNavLinks;
var dsnArtIdx = 0;
var dsnArts;
var mobileDrawerjQ

$(function() {
    mobileDrawerjQ = $("#mobile-drawer");

    mobileDrawer = document.getElementById('mobile-drawer');
    mobileDrawerBtn = document.getElementById('drawer-btn');
    mobileNavLinks = mobileDrawer.getElementsByClassName('nav-link');
    dsnArts = document.getElementsByClassName('dsn-art');

    $('#drawer-btn').click((event) => {
        event.preventDefault();
        console.log('clicked jQuery!');
        toggleNavDrawer();
    });

    mobileDrawerBtn.onclick = (event) => {
        event.preventDefault();
        console.log('clicked vanilla js!');
    };

    $('.left-side-label-cont').click((event) => {
        slideDsnArt(-1);
    });
    $('.right-side-label-cont').click((event) => {
        slideDsnArt(1);
    });

    mobileDrawerjQ.slideUp();

    $('#loader-container').fadeOut(1000, 'easeInOutExpo');

    $('.dsn-art').hide();
    $('.active-dsn-art').show();


});


function toggleNavDrawer() {
    if(mobileDrawerStatus === 'up') {
        mobileDrawerjQ.slideDown();
        mobileDrawerStatus = 'down';
    } else if (mobileDrawerStatus === 'down') {
        mobileDrawerjQ.slideUp();
        mobileDrawerStatus = 'up';
    }
}

function slideDsnArt(i) {
    activeDsnArt = document.getElementsByClassName('active-dsn-art')[0];
    if(dsnArtIdx + i < 0 || dsnArtIdx + i > dsnArts.length - 1) {
        
    } else {
        dsnArtIdx = dsnArtIdx + i;
        activeDsnArt.classList.remove('active-dsn-art');
        newDsnArt = document.getElementsByClassName('dsn-art')[dsnArtIdx];
        newDsnArt.classList.add('active-dsn-art');
        refreshDsnIdx();
    }
}

function refreshDsnIdx() {
    $('.dsn-art').fadeOut(250);
    $('.active-dsn-art').delay(195).fadeIn(500);
}