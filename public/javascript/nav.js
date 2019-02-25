$(document).ready(function () {
    //vars set outside to avoid bugs
    var $sticky = $('.sticky');
    var stickyOffsetTop = $sticky.offset().top;

    $(window).scroll(function (e) {
        e.preventDefault();

        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyOffsetTop) {
            $sticky.addClass('is-fixed');
        } else {
            $sticky.removeClass('is-fixed');
        }
    });













    //header active page
    var cp;
    var pn = location.pathname.slice(1, 4);

    if (pn == "gam") {
        cp = "(games)";
    } else if (pn == "med") {
        cp = "(media)";
    } else if (pn == "too") {
        cp = "(tools)";
    } else {
        cp = "(home)";
    }

    document.getElementById('navcp').innerText = cp;
    console.log("pn = " + pn);
    console.log("cp = " + cp);


});