$(document).ready(function() {
    $('#cpf').mask('000.000.000-00')

    $('#telefone').mask('(00) 00000-0000')

    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            sobrenome: {
                required: true
            },
            cpf: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true
            },
            cep: {
                required: true
            },
            endereço: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o Nome',
            sobrenome: 'Por favor, insira o Sobrenome',
            cpf: 'Por favor, insira o CPF',
            telefone: 'Por favor, insira o Telefone',
            email: 'Por favor, insira o E-mail',
            cep: 'Por favor, insira o CEP',
            endereço: 'Por favor, insira o Endereço'           
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`O formulário possui ${camposIncorretos} campos vazios, por favor preencha os campos.`)
            }
        }
    })
})