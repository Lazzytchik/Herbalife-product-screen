$(document).ready(function(){

    $('.presentation__to-ingredients').click(function (){
        switchPage();
    })

    function switchPage(){
        $('.presentation').toggleClass('presentation--hidden');
        $('.page-wrapper').toggleClass('page-wrapper--hidden');

        $('.product-main__product-image').removeAttr('style');
        $('.product-main__can-lid').removeAttr('style');
        $('.presentation__popup-menu').toggleClass('presentation__popup-menu--hidden');

        blurAll();
        let canImage = document.getElementsByClassName('product-main__product-image')[0];

        $(canImage).one('click', () => animate(canImage));
    }

});