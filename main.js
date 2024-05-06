function verificarResposta(resposta) {
    if (resposta === 3) {
        document.getElementById('resultado').innerText = 'Acertou!';
        
    } else {
        document.getElementById('resultado').innerText = 'Você errou!';
    }
}

