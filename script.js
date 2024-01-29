document.addEventListener("DOMContentLoaded", function() {
    // Aguarde até que o DOM esteja totalmente carregado

    // Selecione o elemento do braço
    const braco = document.querySelector('.braco');

    // Adicione um evento de clique ao robô
    document.querySelector('.robo').addEventListener('click', function() {
        // Ao clicar no robô, mova o braço para cima
        braco.style.transform = 'translate(-50%, -50%) rotate(-45deg)';
        
        // Aguarde um momento e, em seguida, retorne o braço à posição inicial
        setTimeout(function() {
            braco.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        }, 500);
    });
});
