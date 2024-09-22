alert('Boas-vindas às páginas do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 0; // Inicializa tentativas em 0

// Enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    tentativas++; // Incrementa tentativas a cada palpite

    // Se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
}

// Utiliza operador ternário para determinar a palavra correta
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

let continuar;
do {
    jogar(); // Chama a função para iniciar o jogo
    continuar = confirm("Deseja jogar novamente?"); // Pergunta se o jogador quer jogar de novo
} while (continuar);