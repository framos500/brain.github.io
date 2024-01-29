document.addEventListener("DOMContentLoaded", function () {
    var roboContainer = document.getElementById("robo-container");
    var mensagemInput = document.getElementById("mensagemInput");

    roboContainer.addEventListener("click", function () {
        alert("Chatbot aberto!");
        mostrarChatBox(); // Adiciona esta linha para mostrar a caixa de texto
    });

    function mostrarChatBox() {
        var chatBox = document.querySelector('.chat-box');
        chatBox.style.display = 'flex';
    }

    window.enviarMensagem = function () {
        var mensagem = mensagemInput.value;
        // Faça algo com a mensagem, como exibir, enviar para um servidor, etc.
        alert("Mensagem enviada: " + mensagem);
        // Limpe o campo de entrada
        mensagemInput.value = "";
    };
});
