let listaDeNumerosSorteados = [];

let numeroLimite = 10;

let numeroSecreto = numeroAleatorio();

let tentativas = 1;

exibirMensagemInicial()

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTexto('h1','Escolha um Numero entre 1 e 10');
exibirTexto('p','Jogo do numero Secreto');

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTexto('h1','Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentativas = `Voce descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTexto('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');   
    }else{
        if(chute > numeroSecreto){
            exibirTexto('p','O número secreto e Menor');
        }else{
            exibirTexto('p','o número secreto e Maior');
        }
        tentativas++;
        limparCampo();

        }
}

function exibirMensagemInicial(){
    exibirTexto('h1','Escolha um Numero entre 1 e 10');
    exibirTexto('p','Jogo do numero Secreto');
};

function numeroAleatorio(){
    let numerosEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numerosEscolhido)){
        return numeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numerosEscolhido)
        console.log(listaDeNumerosSorteados)
        return numerosEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
