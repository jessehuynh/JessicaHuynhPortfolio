const app = []

app.clickEvents = () => {
    // SMOOTH SCROLL 
    $('a').smoothScroll({
        offset:50,
    });

    // HEADER NAV
    $('.nav__listItem--cool h6').on('click', function(){
        $(this).next().toggleClass('show');
    }) 

    // CONTACT FORM
    $('.fa-envelope-square, .nav__listItem--contact').on('click', function (e) {
        e.preventDefault();
        $('.container--contact').addClass('show');
    });

    $('#close').on('click', function (e) {
        e.preventDefault();
        $('.container--contact').removeClass('show')
    })
}

app.init = function () {
   app.clickEvents()
}

$(function(){
    app.init();
    AOS.init();
});
