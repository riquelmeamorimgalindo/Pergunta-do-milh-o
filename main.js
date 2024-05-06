function verificarResposta(resposta) {
    var audioAcerto = new Audio('audio_acerto');
    var audioErro = new Audio('audio_erro');

    if (resposta === 3) {
               audioAcerto.play();
    } else {
        
        audioErro.play();
    }
}