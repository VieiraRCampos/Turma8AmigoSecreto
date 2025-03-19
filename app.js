//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigosDigitados = [];
let numeroLimite = 10;
let qtdInformada = 0;
let amigoDigitado = '';
let amigoSorteado = '';


function adicionarAmigo() {

    limparResultado();
    amigoDigitado = document.getElementById('amigo').value;

    if( (amigoDigitado.length == 0) || (somenteEspacos(amigoDigitado)) ) {
        alert(`Por favor, informe um nome válido.`);
    }
    else if( validaNome(amigoDigitado) == false ) {
        alert(`O texto ${amigoDigitado} digitado possui caracteres indevidos para um nome. Tente corrigi-lo antes de informar novamente.`);
    }
    else 
    {
        listaDeAmigosDigitados.push(amigoDigitado);
        qtdInformada = qtdInformada + 1;
        atualizaListaAmigos(listaDeAmigosDigitados);
    }

    limparCampo();
}

function validaNome(nome) {
    const regex = /^[A-Za-záàãâäéèêëíìîïóòôõöúùûüçÇ\s]+$/;
  
    // Testa se o nome corresponde à expressão regular
    if (regex.test(nome)) {
      return true; // Nome válido
    } else {
      return false; // Nome inválido
    }
}

function somenteEspacos(nome) {
    //alert(`Em branco`);
    return nome.trim() === "";
}

function atualizaListaAmigos(listaNova) {
    //alert(`Inserindo um nome na lista`);

    // Pegando o elemento <ul> com o id "listaAmigos"
    let listaAmigosElemento = document.getElementById("listaAmigos");
   
    // Limpando qualquer conteúdo anterior (se necessário)
    listaAmigosElemento.innerHTML = '';
   
    // Percorrendo a lista de amigos e criando elementos <li>
    listaNova.forEach(amigo => {
        let itemLista = document.createElement("li"); // Criando o elemento <li>
        itemLista.textContent = amigo; // Definindo o texto do <li> como o nome do amigo
        listaAmigosElemento.appendChild(itemLista); // Adicionando o <li> ao <ul>
    });
    //document.setElementById('listaAmigos').value = listaDeAmigosDigitados;
}

function adicionarResultado(nome) {
    const lista = document.getElementById("resultado"); // Seleciona a lista
    if (!lista) return; // Verifica se a lista existe

    const li = document.createElement("li"); // Cria um novo item de lista
    li.textContent = nome; // Define o nome como texto do item

    lista.appendChild(li); // Adiciona o item à lista
}


function sortearAmigo() {
    if ( listaDeAmigosDigitados.length === 0 ){ 
        alert(`Nenhum nome foi adicionado para o sorteio`);
        return;
    }
    const indice = Math.floor(Math.random() * listaDeAmigosDigitados.length); // Gera um índice aleatório
    amigoSorteado = listaDeAmigosDigitados[indice]; // Retorna o elemento sorteado

    limparCampo();
    listaDeAmigosDigitados = [];
    atualizaListaAmigos(listaDeAmigosDigitados);

    alert(`O amigo sorteado foi ${amigoSorteado}`);
    adicionarResultado(amigoSorteado);


}

function limparResultado() {
    const lista = document.getElementById("resultado")
    if (lista) {
        lista.innerHTML = ""; // Remove todos os itens da lista
    }

}


function limparCampo() {
    amigoDigitado = document.querySelector('input');
    amigoDigitado.value = '';
}