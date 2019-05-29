document.getElementsByTagName("input")[0].addEventListener("click", function() {

    var staticPara = document.getElementsByClassName("static-para");
    staticPara[0].style.display = "none";

    var dynamicPara = document.getElementsByClassName("dynamic-para");
    dynamicPara[0].style.position = 'relative';

    var topHeight = 0;

    setInterval(function() {
        topHeight += 10;
        dynamicPara[0].style.top = topHeight;
        dynamicPara[0].style.left = topHeight;
    }, 400);
})