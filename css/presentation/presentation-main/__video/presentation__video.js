let player;
let iframe;

function onCall(){
    player.playVideo();

    playFullscreen();
}

function onPlayerReady(event) {
    //onCall();
}

function onPlayerStateChange(event) {
    if(event.data === 0) {
        $('.presentation__popup-menu').toggleClass('presentation__popup-menu--hidden');
        player.seekTo(0);
        player.pauseVideo();
    }
}

function playFullscreen (){
    console.log('fullscreen');
    let requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
    if (requestFullScreen) {
        requestFullScreen.bind(iframe)();
    }
}

$(document).ready(function (){

    iframe = document.getElementById('player');

    function onYouTubeIframeAPIReady(){
        player = new YT.Player('player', {
            height: '920px',
            width: '100%',
            videoId: 'rhUSXegw6NY',
            host: 'https://www.youtube.com',
            playerVars: {
                'autoplay': 0,
                'controls': 1,
                'rel': 0,
                'modestbranding': 1,
                'iv_load_policy': 2,
                'enablejsapi': 1
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    window.YT.ready(function() {
        console.log('presentation');
        onYouTubeIframeAPIReady();
    })

})