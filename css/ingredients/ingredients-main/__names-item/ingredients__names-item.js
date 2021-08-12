
function ingOnHover(number){
    console.log(number);
    $('.ingredients__names-item:nth-child('+number+')').toggleClass('ingredients__names-item--inverted');
    $('.number-'+number+' .ingredients__numbers-item .ingredients__number-image').toggleClass('ingredients__number-image--inverted');
    $('.number-'+number+' .ingredients__numbers-item .ingredients__number').toggleClass('ingredients__number--inverted');
    return 0;
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
        $('.number-'+i+' .ingredients__numbers-item').hover(function (){
            ingOnHover(i);
        }, function (){
            ingOnHover(i);
        });
    }
})