$(document).ready(function (){
    let player;
    let menu = document.getElementsByClassName('presentation__popup-menu');

    window.YT.ready(function() {
        onYouTubeIframeAPIReady()
    })

    function onYouTubeIframeAPIReady(){
        player = new YT.Player('player', {
            height: '1080px',
            width: '100%',
            videoId: 'rhUSXegw6NY',
            host: 'https://www.youtube.com',
            playerVars: { 'autoplay': 0, 'controls': 1, 'rel': 0, 'modestbranding': 1, 'iv_load_policy': 2 },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    function onPlayerReady(event) {
        event.target.playVideo();
    }

    function onPlayerStateChange(event) {
        if(event.data === 0) {
            $('.presentation__popup-menu').toggleClass('presentation__popup-menu--hidden');
            player.seekTo(0);
            player.pauseVideo();
        }
    }
})