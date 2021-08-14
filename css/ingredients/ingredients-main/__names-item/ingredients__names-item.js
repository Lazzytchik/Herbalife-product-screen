let chosen = -1;

function ingOnHover(number){
    console.log(number);
    $('.ingredients__names-item:nth-child('+number+')').toggleClass('ingredients__names-item--inverted');
    $('.number-'+number+' .ingredients__numbers-item .ingredients__number-image').toggleClass('ingredients__number-image--inverted');
    $('.number-'+number+' .ingredients__numbers-item .ingredients__number').toggleClass('ingredients__number--inverted');
    return 0;
}

async function ingOnClick(number){
    chosen = number;

    display();
    await sleep(10);
    startEffect(4000);
    await sleep(10);
    $('.ingredients').toggleClass('ingredients--hidden');
    $('.presentation').toggleClass('presentation--hidden');

    playerInit(videos.get(chosen.toString()));
}

$(document).ready(function (){

    //$('.ingredients__names-item').hover(ingOnHover(3), function (){ console.log('no')})

    let amount = $('.ingredients__names').children().length;
    for (let i = 1; i < amount+1; i++) {
        console.log(i);
        $('.ingredients__names-item:nth-child('+i+')').hover(function (){
            ingOnHover(i);
        }, function (){
            ingOnHover(i);
        });
        $('.ingredients__names-item:nth-child('+i+')').click(function (){
            ingOnClick(i);
        });
        $('.number-'+i+' .ingredients__numbers-item').hover(function (){
            ingOnHover(i);
        }, function (){
            ingOnHover(i);
        });
        $('.number-'+i+' .ingredients__numbers-item').click(function (){
            ingOnClick(i);
        });
    }
})