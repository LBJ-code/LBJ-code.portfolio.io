let show_state = {
    ".study-root": false,
    ".mirai-root": false,
    ".KMH-root": false,
    ".pana-root": false
}


function scrolling_appear(mousover_class, appear_class) {
    mousover_ele = document.querySelector(mousover_class);
    mousover_ele.addEventListener("mouseover", function appear(event) {
        if (!show_state[appear_class])
        {
            let tl = anime.timeline({
                easing: 'easeInOutQuad',
                duration: 1000
            })
        
            tl
            .add({
                targets: appear_class,
                opacity: ['10%', '100%']
            })
            .add({
                targets: appear_class,
                translateY: -30
            }, 0);
            show_state[appear_class] = true;
        }
        
        
        event.currentTarget.removeEventListener(event.type, appear);
        }, false);
}


scrolling_appear(".profile", ".study-root");
scrolling_appear(".study-root", ".mirai-root");
scrolling_appear(".mirai-root", ".KMH-root");
scrolling_appear(".KMH-root", ".pana-root");



function scrolling_appear2(appear_class) {
    mousover_ele = document.querySelector(appear_class);
    mousover_ele.addEventListener("mouseover", function appear(event) {
        if (!show_state[appear_class])
        {
            let tl = anime.timeline({
                easing: 'easeInOutQuad',
                duration: 1000
            })
        
            tl
            .add({
                targets: appear_class,
                opacity: ['10%', '100%']
            })
            .add({
                targets: appear_class,
                translateY: -30
            }, 0);
            show_state[appear_class] = true;
        }
        
        
        event.currentTarget.removeEventListener(event.type, appear);
        }, false);
}


scrolling_appear2(".study-root");
scrolling_appear2(".mirai-root");
scrolling_appear2(".KMH-root");
scrolling_appear2(".pana-root");


// メニューボタンの関数
function scrollToTarget(buttonHtmlClass, targetDivClass) {
    document.querySelector(buttonHtmlClass).onclick = function appear(e){

        e.preventDefault();
        let ele = document.querySelector(targetDivClass);
        let eleY = ele.getBoundingClientRect().top;
        let scrollY = window.pageYOffset;
        let top = scrollY + eleY;
    
        window.scroll({
            top: top,
            behavior: 'smooth'
        });

        if (!show_state[targetDivClass])
        {
            let tl = anime.timeline({
                easing: 'easeInOutQuad',
                duration: 1000
            })
        
            tl
            .add({
                targets: targetDivClass,
                opacity: ['10%', '100%']
            })
            .add({
                targets: targetDivClass,
                translateY: -30
            }, 0);
            show_state[targetDivClass] = true;
        }
    };
}

scrollToTarget('.toIntroButton', '.profile');
scrollToTarget('.toStudyButton', '.study-root');
scrollToTarget('.toMiraiButton', '.mirai-root');
scrollToTarget('.toKMHButton', '.KMH-root');
scrollToTarget('.toPanaButton', '.pana-root');
