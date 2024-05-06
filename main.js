function verificarResposta(resposta) {
    if (resposta === 3) {
        document.getElementById('resultado').innerText = 'Acertou!';
        var audio = new Audio('audio-certo');
        audio.play();
    } else {
        document.getElementById('resultado').innerText = 'Você errou!';
        var audio = new Audio('audio-errado');
        audio.play();
    }
}
