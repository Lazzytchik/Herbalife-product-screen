$(document).ready(function (){
    let player;

    function onYouTubeIframeAPIReady(){
        player = new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: '0Bmhjf0rKe8',
            //playerVars: { 'autoplay': 1, 'controls': 0, 'iv_load_policy': 3 },
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
            alert('done');
        }
    }
})