$(document).ready(function() {
    const todosValores = [];
    let id = 0;

    $('form').on('submit', function(e) {
        e.preventDefault();        
        const valor = $('#valor').val();
        todosValores.push(valor);
        const ul = $('.linhas');

        for (let index = 1; index < todosValores.length; index++) {
         id = index
        }   
        
        const linha = $(`<li class="linha" id="linha-${id}" style="display: 
        none">${valor}</li>`) 

        $(linha).appendTo(ul);
        $(linha).fadeIn(500);
        $('#valor').val('');

        $(`#linha-${id}`).on('click', function() {
             $(this).toggleClass('concluido');
         })
    })

    $('#apagar').click(function() {
        location.reload();
    })


})



