$(document).ready(function (){
    let canImage = document.getElementsByClassName('product-main__product-image')[0];

    $(canImage).one('click', () => animate());

    let pos = 0;
    let posOffsetY = 90;
    let posOffsetX = 37
    let angle = 0;
    let scale = 1;

    function animate(){
        blurAll();
        openCanLid(-220);
    }

    function openCanLid(shift){
        let lid = document.getElementsByClassName('product-main__can-lid')[0];
        let id = setInterval(frame, 10)

        function frame(){
            if (pos <= posOffsetY + shift){
                clearInterval(id)
                let angleId = setInterval(angleFrame, 5);

                async function angleFrame(){
                    if (angle <= -10){
                        clearInterval(angleId);
                        await sleep(1000);
                        moveCan(canImage);
                    }else{
                        angle--;
                        lid.style.transform = 'rotate('+angle+'deg) translate(25px, '+ (pos+posOffsetY) +'px)';
                    }
                }
            }else{
                pos--;
                lid.style.transform = 'translate('+posOffsetX+'px, -'+ (pos+posOffsetY) +'px)';
            }
        }
        return 0;
    }
    function moveCan(can){
        can.style.position = 'relative';
        can.style.zIndex = '10';
        can.style.transform = 'translate(100px, 400px)';
        canScale();
    }

    function blurAll(){
        $(".product").css("backdrop-filter", "blur(8px)");
        $(".product-main > *:not(.product-main__product-image)").toggleClass('blurred');
        $(".links").toggleClass('blurred');
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function canScale(){
        await sleep(1000);
        let scale = 1;
        let scaleId = setInterval(scaleFrame, 5);
        let trans = canImage.style.transform;

        function scaleFrame(){
            if (scale >= 10){
                clearInterval(scaleId);
                $('.presentation').toggleClass('presentation--hidden');
                $('.page-wrapper').toggleClass('page-wrapper--hidden');
            } else{
                scale += 0.05;
                canImage.style.transform = trans + 'scale('+scale+','+scale+')'
            }
        }
    }


})