function verificarResposta(resposta) {
    var audioAcerto = new Audio('silvio-santos-certa-resposta.mp3');
    var audioErro = new Audio('silvio-santos-que-pena-voce-errou.mp3');

    if (resposta === 3) {
               audioAcerto.play();
    } else {
        document.getElementById('resultado').innerText = 'Você errou!';
        audioErro.play();
    }
}