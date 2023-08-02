function enviar(){

    var dados = $('#curriculo').serialize();

    $.ajax({
        method: 'GET',
        data: dados,

    })
    .done(function (msg){
        
        Swal.fire({
            icon: 'success',
            title: 'Dados Enviados!',
            text: 'Seus dados foram enviados para análise e logo menos retornaremos com uma resposta. Boa sorte!',
            
          })
    })
    .fail(function (){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo Deu Errado, Tente Novaente Mais Tarde!',
          })

    })
    return false;
    
}