function blurAll(){
    $(".product").toggleClass('product--blurred');
    $(".product-main > *:not(.product-main__product-image)").toggleClass('blurred');
    $(".links").toggleClass('blurred');
    $(".page-wrapper").toggleClass('page-wrapper--blurred');
}

let scale = 1;
let clicked = false;

async function canScale(canImage){
    await sleep(1000);
    let scaleId = setInterval(scaleFrame, 5);
    let trans = canImage.style.transform;

    function scaleFrame(){
        if (scale >= 10){
            clearInterval(scaleId);
            $('.ingredients').toggleClass('ingredients--hidden');
            $('.page-wrapper').toggleClass('page-wrapper--hidden');
            //$('body').removeClass();
            //$('body').toggleClass('ing-body');
            //enableScroll();
        } else{
            scale += 0.05;
            canImage.style.transform = trans + ' scale('+scale+','+scale+')'
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

async function openCanLid(canImage){
    let lid = document.getElementsByClassName('product-main__can-lid')[0];

    $(lid).toggleClass('product-main__can-lid--hanged');
    await sleep(1000);
    $(lid).toggleClass('product-main__can-lid--opened');
    await sleep(1000);
    moveCan(canImage);
}

async function animate(canImage){

    scale = 1;

    if (!clicked){
        clicked = true;

        blurAll();
        disableScroll();
        openCanLid(canImage);
        await sleep(3800);
        startEffect(4000);

        clicked = false;
    }
}


$(document).ready(function (){
    let canImage = document.getElementsByClassName('product-main__product-image')[0];

    //$(canImage).one('click', () => animate());
    $(canImage).click(function (){
        display();
        animate(canImage);
    })

})