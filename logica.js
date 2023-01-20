// funcao acionda quando botao e clicado
function codifica() {
  //Pega valor do input ao clicar no botao
  var inputTexto = document.getElementById('entradaTexto').value;

  if (inputTexto === '') {
    alert('Digite um texto para que seja criptografado');
  } else {
    //Transforma o valor da variavel inputTexto no texto codificado
    var codificacao = inputTexto
      .replace(/i/gi, 'imes')
      .replace(/a/gi, 'ai')
      .replace(/e/gi, 'enter')
      .replace(/o/gi, 'ober')
      .replace(/u/gi, 'ufat');

    //----------------------------------------------

    //Escreve o texto codificado dentro do páragrafo
    document.getElementById('saidaTexto').style.background = 'white';
    document.getElementById('saidaTexto').innerHTML = codificacao;
  }
}

function descodifica() {
  //Pega valor do input ao clicar no botao
  var entrada = document.querySelector('#entradaTexto').value;

  if (entrada === '') {
    alert('Digite um texto para que seja decriptografado');
  } else {
    //Transforma o valor da variavel inputTexto no texto
    var codificacao = entrada
      .replace(/ufat/gi, 'u')
      .replace(/ober/gi, 'o')
      .replace(/enter/gi, 'e')
      .replace(/ai/gi, 'a')
      .replace(/imes/gi, 'i');

    //----------------------------------------------

    //Escreve o texto descodificado dentro do textArea
    document.getElementById('saidaTexto').style.background = 'white';
    document.getElementById('saidaTexto').innerHTML = codificacao;
  }
}
