function blurAll(){
    $(".product").toggleClass('product--blurred');
    $(".product-main > *:not(.product-main__product-image)").toggleClass('blurred');
    $(".links").toggleClass('blurred');
}

let pos = 0;
let posOffsetY = 90;
let posOffsetX = 37;
let angle = 0;
let scale = 1;

async function canScale(canImage){
    await sleep(1000);
    let scaleId = setInterval(scaleFrame, 5);
    let trans = canImage.style.transform;

    function scaleFrame(){
        if (scale >= 10){
            clearInterval(scaleId);
            $('.ingredients').toggleClass('ingredients--hidden');
            $('.page-wrapper').toggleClass('page-wrapper--hidden');
            //enableScroll();
        } else{
            scale += 0.05;
            canImage.style.transform = trans + 'scale('+scale+','+scale+')'
        }
    }
}

function moveCan(can){
    can.style.transitionDuration = '1s'
    can.style.position = 'relative';
    can.style.zIndex = '10';
    can.style.transform = 'translate(0, 400px)';
    canScale(can);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function openCanLid(shift, canImage){
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

function animate(canImage){
    pos = 0;
    posOffsetY = 90;
    posOffsetX = 37;
    angle = 0;
    scale = 1;

    blurAll();
    disableScroll();
    openCanLid(-220, canImage);
}


$(document).ready(function (){
    //let canImage = document.getElementsByClassName('product-main__product-image')[0];

    //$(canImage).one('click', () => animate(canImage));

})