$(document).ready(function(){

    $('.presentation__to-ingredients').click(function (){
        switchPage();
    })

    async function switchPage(){
        $('.presentation').toggleClass('presentation--hidden');
        display()
        await sleep(10)
        startEffect(4000);
        //$('.page-wrapper').toggleClass('page-wrapper--hidden');
        $('.ingredients').toggleClass('ingredients--hidden');

        //$('.product-main__product-image').removeAttr('style');
        //$('.product-main__can-lid').removeAttr('style');
        $('.presentation__popup-menu').toggleClass('presentation__popup-menu--hidden');

        //blurAll();
        //let canImage = document.getElementsByClassName('product-main__product-image')[0];
        playerReset();


        //$(canImage).one('click', () => animate(canImage));
    }

    function playerReset(){
        $('#player').remove();
        addPlayerPlaceholder();
        player = null;
    }

    function addPlayerPlaceholder(){
        $( ".presentation__video" ).append( "<div id='player'></div>" );
    }

});