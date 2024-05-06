function verificarResposta(resposta) {
    if (resposta === 3) {
        document.getElementById('resultado').innerText = 'Acertou!';
        var audio = new audio('silvio-santos-certa-resposta.mp3');
        audio.play();
    } else {
        document.getElementById('resultado').innerText = 'Você errou!';
        var audio = new audio('.audio-errado');
        audio.play();
    }
}
