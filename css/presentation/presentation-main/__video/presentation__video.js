$('.presentation').ready(function (){
    let player;

    window.YT.ready(function() {
        onYouTubeIframeAPIReady()
    })

    function onYouTubeIframeAPIReady(){
        player = new YT.Player('player', {
            height: '1080px',
            width: '100%',
            videoId: 'rhUSXegw6NY',
            host: 'https://www.youtube.com',
            playerVars: {
                'autoplay': 1,
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

    async function onCall(){
        player.playVideo();
    }

    function onPlayerReady(event) {
        onCall();
    }

    function onPlayerStateChange(event) {
        if(event.data === 0) {
            $('.presentation__popup-menu').toggleClass('presentation__popup-menu--hidden');
            player.seekTo(0);
            player.pauseVideo();
        }
    }
})