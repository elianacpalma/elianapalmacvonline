$(function () {
    $('.nav-item').on("click", function() {
        $('.nav-item').removeClass('active');
    })

    $('.linkHome').on("click", function(){
        $('#frameGeral').attr('src','home.html');
        $(this).addClass('active');
    });

    $('.linkSobre').on("click", function(){
        $('#frameGeral').attr('src','sobre.html');
        $(this).addClass('active');
    });

    $('.linkContato').on("click", function(){
        $('#frameGeral').attr('src','contato.html');
        $(this).addClass('active');
    });

    $('.linkFormacao').on("click", function(){
        $('#frameGeral').attr('src','formacao.html');
        $(this).addClass('active');
    });

    $('.linkPortifolio').on("click", function(){
        $('#frameGeral').attr('src','portifolio.html');
        $(this).addClass('active');
    });
});