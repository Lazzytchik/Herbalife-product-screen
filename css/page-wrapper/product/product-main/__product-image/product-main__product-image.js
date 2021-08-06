$(document).ready(function (){
    let canImage = document.getElementsByClassName('product-main__product-image')[0];

    $(canImage).one('click', () => animate());

    function openCanLid(){
        let lid = document.getElementsByClassName('product-main__can-lid')[0];
        let pos = 0;
        let posOffset = 90;
        let angle = 0;
        let scale = 1;

        let id = setInterval(frame, 10)

        function frame(){
            if (pos <= -130){
                clearInterval(id)
                let angleId = setInterval(angleFrame, 5);

                function angleFrame(){
                    if (angle <= -10){
                        clearInterval(angleId);
                    }else{
                        angle--;
                        lid.style.transform = 'rotate('+angle+'deg) translate(25px, '+ (pos+posOffset) +'px)';
                    }
                }
            }else{
                pos--;
                lid.style.transform = 'translate(37px, -'+ (pos+posOffset) +'px)';
            }
        }
    }
    function moveCan(can){

        can.style.position = 'relative';
        can.style.zIndex = '10';
        can.style.transform = 'translate(100px, 700px)';
        blurAll();
    }

    function blurAll(){
        $(".product").css("backdrop-filter", "blur(8px)");
        $(".product-main > *:not(.product-main__product-image)").toggleClass('blurred');
        $(".links").toggleClass('blurred');
    }

    function canScale(){
        let scale = 1;
        let scaleId = setInterval(scaleFrame, 20);
        let trans = canImage.style.transform;

        function scaleFrame(){
            if (scale >= 2){
                clearInterval(scaleId);
            } else{
                scale += 0.1;
                canImage.style.transform = trans + 'scale('+scale+','+scale+')'
            }
        }
    }

    function animate(){
        moveCan(canImage);
        openCanLid();
        canScale();
    }
})