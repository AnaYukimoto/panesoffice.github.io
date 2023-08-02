
function pagar(button) {
    // Obter o código do cupom a partir do atributo data-cupom do botão
    var cupom = button.getAttribute("data-cupom");

    // Verificar se o cupom já foi resgatado anteriormente
    if (cupom && !cupomResgatado(cupom)) {
        // Marcar o cupom como resgatado
        marcarCupomResgatado(cupom);

        var message = cupom;

        Swal.fire({
            html: `<div class="custom-swal-container">
                     <h3 class="custom-swal-title">${message}</h3>
                     <p class="custom-swal-message">Aproveite seu Cupom 🎉<br> Lembrando que ele é válido somente na Loja Física!</p>
                   </div>`,
            customClass: {
                confirmButton: 'custom-swal-confirm-button',
            },
        });
    } else {
        Swal.fire({
            text: "Cupom já foi resgatado anteriormente!🙁",
            icon: "error",
        });
    }

    return false;
}

function marcarCupomResgatado(cupom) {
    // Salvar o cupom resgatado no Armazenamento Web (localStorage)
    var cuponsResgatados = localStorage.getItem("cupons_resgatados");
    if (!cuponsResgatados) {
        cuponsResgatados = [];
    } else {
        cuponsResgatados = JSON.parse(cuponsResgatados);
    }
    cuponsResgatados.push(cupom);
    localStorage.setItem("cupons_resgatados", JSON.stringify(cuponsResgatados));
}

function cupomResgatado(cupom) {
    // Verificar se o cupom já foi resgatado anteriormente
    var cuponsResgatados = localStorage.getItem("cupons_resgatados");
    if (!cuponsResgatados) {
        return false;
    }
    cuponsResgatados = JSON.parse(cuponsResgatados);
    return cuponsResgatados.includes(cupom);
}

