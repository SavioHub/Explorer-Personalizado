//variaveis
//faz a busca do elemento no arquivo HTML
const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta");
const containerDado = document.querySelector("#containerDado");

const respostas =[
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

//clicar em fazer pergunta
function fazerPergunta(){

    if (inputPergunta.value == ""){
        alert("Input vazio, preencha para fazer uma pergunta");
        return
    }

    const perguntaFeita = "<div>" + inputPergunta.value + "</div>"

    //gerar numeros aleatorios
    const totalResposta = respostas.length; //total de resposta no array
    const numeroAleatorio = Math.floor(Math.random() * totalResposta)
    //Math.floor(Math.random()) é arendondamento por piso, sempre será zero
    //Math.floor(Math.random() * 19) o numero aleatório vai multiplicar por um valor, no caso o 19, com isso vai gerar um resultado inteiro

    elementoResposta.innerHTML = perguntaFeita + respostas[numeroAleatorio] 
    //vai mostrar a pergunta e 
    //vai fazer a busca de um indice aleatório na lista de resposta e 
    //aparecerá a resposta na tela  ao invés de aparecer no console
}

//sumir a resposta depois de alguns segundos

setTimeout(function(){
    // elementoResposta.style.opacity =0;//add a opacidade
    //alteração do estilo da página através do JS
},10000)