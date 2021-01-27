var menuIconEL = document.querySelector(".menu-icon");
var menuBarEL = document.querySelector(".menu-bar");
var IsShowed = false;


menuIconEL.onclick = function() {
    if (IsShowed === false){
        var showMenuTl1 = anime.timeline({
            easing: 'linear',
            duration: 100
        });
        
        showMenuTl1
        .add({
            targets: ".menu-icon",
            left: ["0px", "200px"]
        })
        .add({
            targets: ".menu-bar",
            width: ["0px", "200px"]
        }, 0)
        .add({
            targets: ".menu",
            fontSize: ["0em", "1em"],
            duration: 1
        })
        .add({
            targets: ".menu",
            opacity: ["0%", "100%"],
            duration: 100
        });
        IsShowed = !IsShowed;
    }
    else if (IsShowed === true){
        var showMenuTl2 = anime.timeline({
            easing: 'linear',
            duration: 100
        });
        
        showMenuTl2
        .add({
            targets: ".menu",
            opacity: ["100%", "0%"],
            duration: 100
        })
        .add({
            targets: ".menu",
            fontSize: ["1em", "0em"],
            duration: 1
        })
        .add({
            targets: ".menu-icon",
            left: ["200px", "0px"]
        })
        .add({
            targets: ".menu-bar",
            width: ["200px", "0px"]
        }, 100);
        IsShowed = !IsShowed;
    }
}
