function enviarfaleconosco(){
    var dados = $('#faleconosco').serialize();
    
    $.ajax({
        method: 'GET',
        data: dados,

    })
    .done(function (msg){
        
        Swal.fire({
            icon: 'success',
            title: 'Mensagem Enviada!',
            text: 'Agrecemos pela mensagem e logo menos retornaremos com a resposta enviando ao e-mail fornecido.',
            
        })

    })
    .fail(function (){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo deu errado, tente novamente mais tarde!',
          })

    })
    return false;
}