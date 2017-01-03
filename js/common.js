/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-12-06 09:42:33
 * @version $Id$
 */

(function(){
    function w() {
        var r = document.documentElement; //根元素html
        var a = r.getBoundingClientRect().width;
            if (a > 750 ){
                a = 750;
            } 
            rem = a / 7.5;
            r.style.fontSize = rem + "px";
    }
    var t;
    w();
    window.addEventListener("resize", function() {
        clearTimeout(t);
        t = setTimeout(w, 300);
    }, false);
})();
// IIFE


