//Evento disparado no carregamento da página.
window.addEventListener("load", () => {

//Evento disparado em um botão
    const botao = document.getElementById("botao");

    botao.addEventListener("click", () => {



    // tempo, em segundos, que queremos.
    let sec = 360;

    const countDiv = document.getElementById("timer");

    const secpass = () => {
    
        let min = Math.floor(sec/60);
        let segundosRestantes = sec % 60;

        if(segundosRestantes < 10){
            segundosRestantes = "0" + segundosRestantes;
        }

        //Condição Final
        if(min < 10){
            min = "0" + min;
        }

        //Vai gerar o formato de 02:59
        countDiv.innerHTML = min + ":" + segundosRestantes;

        if(sec > 0){
            sec = sec - 1;
        }
        else{
            countDiv.innerHTML = "Acabou!";
        }
    }

    const countDown = setInterval(() => secpass(), 1000);

    });

});