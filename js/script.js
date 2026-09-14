// ========================================
// Pets Feliz - Petshop
// Arquivo JavaScript - Fase 2
// ========================================


// Exibe a data e a hora atual na página
function atualizarDataHora() {
    const elementoDataHora = document.getElementById("dataHora");

    if (elementoDataHora) {
        const agora = new Date();

        const dataHoraFormatada = agora.toLocaleString("pt-BR");

        elementoDataHora.textContent =
            "Data e hora atual: " + dataHoraFormatada;
    }
}


// Atualiza a data e a hora a cada segundo
setInterval(atualizarDataHora, 1000);


// Executa quando a página terminar de carregar
document.addEventListener("DOMContentLoaded", function () {
    atualizarDataHora();
});


// Confirma o agendamento
function confirmarAgendamento(event) {

    // Impede que a página seja recarregada
    event.preventDefault();

    const nomeCliente = document.getElementById("nome");
    const nomePet = document.getElementById("nomePet");

    if (nomeCliente && nomePet) {

        alert(
            "Agendamento realizado com sucesso!\n\n" +
            "Cliente: " + nomeCliente.value +
            "\nPet: " + nomePet.value
        );
    }
}
