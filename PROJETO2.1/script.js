// aqui eu uso o botão que criei no html para ativar a minha função
//para ativar a função eu crio uma ID no domcument.getelementbyid, quando clicarem sobre ela vai chamar a minha função validarVeiculo
document.getElementById("botao1").addEventListener("click", validarVeiculo1);
document.getElementById("botao2").addEventListener("click", validarVeiculo2);
document.getElementById("botao3").addEventListener("click", validarVeiculo3);
document.getElementById("botao4").addEventListener("click", validarVeiculo4);
document.getElementById("botao5").addEventListener("click", validarVeiculo5);
document.getElementById("botao6").addEventListener("click", validarVeiculo6);
//aqui eu inicio a função dando um nome a ela
function validarVeiculo1(){
    //coloco as variaveis que vão ser utilizadas
    // a informação que vai ser guarda em cada váriavel está entre aspas pq é texto e todo texto tem de estar entre aspas
    let placa0 = "ABC123";
    let placa1 = "ABC456";
    let placa2 = "ABC789";
    let placa3 = "ABC963";
    // aqui eu crio uma váriavel onde vai guardar os dados inseridos pela portária
    let validar = prompt("Qual a placa do carro: ");
    // depois de listar cada váriavel eu usei o if e else para aplicar uma condição se a resposta for falsa ou verdadeira
    // a condição do if estabelece que se a variavel validar for igual alguma dessas outras váriaveis, a resposta é verdadeira, caso n seja n ira marcar a vaga
    // criamos uma váriavel para que possamos alterar sua cor
    let botao1 = document.getElementById("botao1"); 

    if(validar == placa0 || validar == placa1 || validar == placa2 || validar == placa3){
        // se a resposta for verdadeira ira direcionar para outra pagina, caso n permanecerá na msm página
        // esse primeiro é para mudar para uma guia de endereço especifico
        window.location.href = "#v-pills-veiculos";
        // esse segundo é para alterar a cor do botão se for verdade
        botao.style.backgroundColor = "red";
        return false;
    } else if(validar == ""){
        botao.style.backgroundColor = "#28a745";
    } else{
        // se a resposta for falsa então será exibida uma mensagem de alerta
        alert("Placa inválida!");
    }
}
//VAGAS DE IDOSO
function validarVeiculo2(){
    let placa0 = "ABC123";
    let placa1 = "ABC456";
    let placa2 = "ABC789";
    let placa3 = "ABC963";
    let validar = prompt("Qual a placa do carro: ");
    let botao2 = document.getElementById("botao2");
    if(validar == placa0 || validar == placa1 || validar == placa2 || validar == placa3){
        botao2.style.backgroundColor = "red";
        return false;
    } else if(validar == ""){
        botao2.style.backgroundColor = "#28a745";
    }else{
        alert("Placa invalida!");
    }

}
function validarVeiculo3(){
    let placa0 = "ABC123";
    let placa1 = "ABC456";
    let placa2 = "ABC789";
    let placa3 = "ABC963";
    let validar = prompt("Qual a placa do carro: ");
    let botao3 = document.getElementById("botao3");
    if(validar == placa0 || validar == placa1 || validar == placa2 || validar == placa3){
        botao3.style.backgroundColor = "red";
        return false;
    } else if(validar == ""){
        botao3.style.backgroundColor = "#28a745";
    }else{
        alert("Placa invalida!");
    }

}
function validarVeiculo4(){
    let placa0 = "ABC123";
    let placa1 = "ABC456";
    let placa2 = "ABC789";
    let placa3 = "ABC963";
    let validar = prompt("Qual a placa do carro: ");
    let botao4 = document.getElementById("botao4");
    if(validar == placa0 || validar == placa1 || validar == placa2 || validar == placa3){
        botao4.style.backgroundColor = "red";
        return false;
    } else if(validar == ""){
        botao4.style.backgroundColor = "#28a745";
    }else{
        alert("Placa invalida!");
    }

}function validarVeiculo5(){
    let placa0 = "ABC123";
    let placa1 = "ABC456";
    let placa2 = "ABC789";
    let placa3 = "ABC963";
    let validar = prompt("Qual a placa do carro: ");
    let botao5 = document.getElementById("botao5");
    if(validar == placa0 || validar == placa1 || validar == placa2 || validar == placa3){
        botao5.style.backgroundColor = "red";
        return false;
    } else if(validar == ""){
        botao5.style.backgroundColor = "#28a745";
    }else{
        alert("Placa invalida!");
    }

}function validarVeiculo6(){
    let placa0 = "ABC123";
    let placa1 = "ABC456";
    let placa2 = "ABC789";
    let placa3 = "ABC963";
    let validar = prompt("Qual a placa do carro: ");
    let botao6 = document.getElementById("botao6");
    if(validar == placa0 || validar == placa1 || validar == placa2 || validar == placa3){
        botao6.style.backgroundColor = "red";
        return false;
    } else if(validar == ""){
        botao6.style.backgroundColor = "#28a745";
    }else{
        alert("Placa invalida!");
    }

}
