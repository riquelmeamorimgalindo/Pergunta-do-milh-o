

function verificarResposta(resposta) {
    if (resposta === 2) {
        document.querySelector ('#som-certo').play(  );
    } else {
        document.getElementById('resultado').innerText = 'Você errou!';
    }
}
