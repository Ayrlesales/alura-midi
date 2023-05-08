/* idElementAudio é só um nome qualquer, poder ser qlqr outro */
function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0;



/* o termo "tecla" está associado a primeira class/localização[]
o termo "classList" está associado a segunda class "tecla_xxx"
ou seja, o template string é justamente o id "o prefixo '#som_' + 
associação da localização com a segunda class = #som_${instrumento} = #som_xxx_xxx " 
é como acessar um arquivo e logo após outro. eu especifico 
'tecla' e especifico logo após 'tecla_xxx' sendo este ultimo
que será o sufixo
observar o html */

//enquanto
//while (contador < listaDeTeclas.length) {    ...contador = contador + 1;
/*console.log(contador);*/

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string é feito com `(crase).
    const idAudio = `#som_${instrumento}`;
    /*console.log(idAudio);*/

    tecla.onclick = function () {
        tocaSom(idAudio);
    }


    // || = ou
    // = uma vez é atribuição, == duas vezes é igual, === três vezes é iual mas copara n só o valor como também o tipo do dado
    //.add('xxx') = adiciona via JS uma clase Html presente no CSS
    tecla.onkeydown = function (evento) {
        
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}


