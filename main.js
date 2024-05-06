function verificarResposta(resposta) {
    var audioAcerto = new Audio('som/silvio-santos-certa-resposta.mp3');
    var audioErro = new Audio('som/silvio-santos-que-pena-voce-errou.mp3');

    if (resposta === 3) {
        document.getElementById('resultado').innerText = 'Acertou!';
        audioAcerto.play();
    } else {
        document.getElementById('resultado').innerText = 'Você errou!';
        audioErro.play();
    }
}