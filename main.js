function verificarResposta(resposta) {
    if (resposta === 3) {
        document.getElementById('resultado').innerText = 'Acertou!';
        var audio = new Audio('silvio-santos-certa-resposta.mp3');
        audio.play();
    } else {
        document.getElementById('resultado').innerText = 'Você errou!';
        var audio = new Audio('silvio-santos-que-pena-voce-errou.mp3');
        audio.play();
    }
}
