window.onload = function (){
    let a = document.getElementsByClassName('product-main__product-image');
    let b = document.getElementsByClassName('product-main')

    a[0].onclick = function (){
        b[0].style.display = "none";
    }
}