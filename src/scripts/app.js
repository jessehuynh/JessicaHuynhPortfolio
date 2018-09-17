const app = []

app.events = () => {
    // SMOOTH SCROLL 
    // HEADER NAV
    $('.nav__listItem--cool h6').on('click', function(){
        console.log('hi')
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
   app.events()
}

$(function(){
    app.init();
});
