function compras() {
    var dados = $('#form2').serialize();

    $.ajax({
        method: 'GET',
        url: 'compras.php',
        data: dados,

        beforeSend: function () {
            $("h6").html("Processo em andamento...");
        }
    })
    .done(function (valorfinal) {

        Swal.fire({
            icon: 'success',
            title: 'O Valor Final do seu pedido é de R$' + valorfinal + ',00',
            text: 'Agora só falta nos dizer o endereço de entrega...', 
            willClose: () => {
                window.location.href = "pgpedido.html";
            }
        });
    })
    .fail(function () {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Valores Inválidos para continuar a Compra, tente novamente mais tarde! 🙁',
        });
    });

    return false;
}

