function pedido(){ 
    var dados = $('#formPedido').serialize();

    $.ajax({
        method: 'GET',
        url: 'pedido.php',
        data: dados,

        beforeSend: function(){
            $("h6").html("Processo em andamento...");
        }
    })
    .done(function(final){   

        Swal.fire({
            icon: 'success',
            title: 'Compra efetuada com Sucesso!',
            text: 'Jaja seu pedido chega 🏍️ em '+ final, 
            willClose: () => {
                window.location.href = "index.html";
            }
        });

    })
    .fail(function(){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo Deu Errado, Tente Novaente Mais Tarde!',
          })
    })

    return false;
}