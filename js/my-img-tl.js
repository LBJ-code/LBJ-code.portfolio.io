var tl = anime.timeline({
    easing: 'easeOutQuad',
    loop:true,
    duration: 1000
})

tl
.add({
    targets: '.my-img1',
    opacity: 0.0
}, '+=5000')
.add({
    targets: ".my-img2",
    opacity: 0.0
},  '+=5000')
.add({
    targets: ".my-img1",
    opacity: 1.0
},  '+=5000')
.add({
    targets: ".my-img2",
    opacity: 1.0,
    duration: 1
});
