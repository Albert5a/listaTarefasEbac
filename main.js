$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('ul li h3').click(function() {
            $('ul li h3').css('text-decoration', 'line-through');
        })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefaNova = $('#tarefa-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<h3>${tarefaNova}</h3>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#nova-tarefa').val('');

    $('ul li h3').click(function() {
        $(novoItem).css('text-decoration', 'line-through');
    })
    })
});
