var loadingEl = document.querySelector('.start-loading p');
var startupDisplay = document.querySelector('.start-loading')
var loading = {
    percent: '0%'
};

var tl = anime.timeline({
    easing: 'easeOutQuad',
    duration: 1000
});

tl
.add({
    targets: loading,
    percent: '100%',
    round: 1,
    easing: 'easeInExpo',
    update: function() {
        loadingEl.innerHTML = loading.percent;
    }
})
.add({
    targets: ".start-loading",
    opacity: 0.0
}, "+=2000")
.add({
    begin: function() {
        startupDisplay.remove();
    }
});
