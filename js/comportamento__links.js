function ativaScroll (selector) {
    $(selector).click(function(event) {
        
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000)
    });
}

ativaScroll('a[href*=sobre]');
ativaScroll('a[href*=panel__palestrantes]');
ativaScroll('a[href*=formulario-inscricao]');