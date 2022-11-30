$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefaNova = $('#tarefa-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<h3>${tarefaNova}</h3>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#tarefa-nova').val('');

        $(novoItem).click(function() {
            $(novoItem).css('text-decoration', 'line-through');
        })
    })
});
