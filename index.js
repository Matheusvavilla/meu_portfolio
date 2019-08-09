                    /*Criando função maquina de escrever */
 
 //Criando a função 
 function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');  /*split código utilizado para separar as letras dentro da array */
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        //Função tempo que cada caracter irá demorar para aparecer.
       setTimeout(function(){
           elemento.innerHTML += letra;
       }, 25 * i)                                     /*Tempo que cada letra irá demorar para aparecer na tela  */
    });
}

//Capturar o texto
const objetivo = document.getElementById('objetivo');    /*Criamos a variavel para armazenar o texto que vamos exibir com o efeito maquina de escrever*/
typeWriter(objetivo);
                /*Finaliza função maquina de escrever */