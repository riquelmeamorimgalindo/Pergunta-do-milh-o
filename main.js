

function verificarResposta(resposta) {
    if (resposta === 3) {
        document.querySelector ('#som-certo').play(  );
    } else {
        document.getElementById('resultado').innerText = 'Você errou!';
    }
}
