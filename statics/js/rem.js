/**
 * Created by 小米粥 on 2017/5/18.
 */

var html = document.getElementsByTagName("html")[0];
html.style.fontSize = 100 / 640 * window.innerWidth + "px";
window.addEventListener('resize', function () {
    html.style.fontSize = 100 / 640 * window.innerWidth + "px";
})

