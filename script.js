/**
* タッチ操作での拡大縮小禁止
*/
function no_scaling() {
    document.addEventListener("touchmove", mobile_no_scroll, { passive: false });
}

/**
* タッチ操作での拡大縮小禁止解除
*/
function return_scaling() {
    document.removeEventListener('touchmove', mobile_no_scroll, { passive: false });
}

/**
* 拡大縮小禁止
*/
function mobile_no_scroll(event) {
    // ２本指での操作の場合
    if (event.touches.length >= 2) {
        // デフォルトの動作をさせない
        event.preventDefault();
    }
}

function change(){
    var str = document.getElementById('version').innerHTML;
    str = "我が輩は犬である。";
    document.getElementById('version').innerHTML = str;
}