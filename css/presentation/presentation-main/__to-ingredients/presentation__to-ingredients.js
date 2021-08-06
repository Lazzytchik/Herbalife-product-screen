$(document).ready(function(){

    $('.presentation__to-ingredients').one('click', () => switchPage());

    function switchPage(){
        $('.presentation').toggleClass('presentation--hidden');
        $('.page-wrapper').toggleClass('page-wrapper--hidden');

        $('.product-main__product-image').removeAttr('style');
    }

});