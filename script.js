function saudacao() {
    alert("Bem-vindo ao site!");
}
function confirmacao() {
    var resposta = confirm("Você deseja continuar ? ");
    if (resposta) {
        alert("Você clicou em OK!");
    } else {
        alert("Você clicou em Cancelar!");
    }
}
function solicitarNome() {
    var nome = prompt("Qual é o seu nome ? ");
    if (nome != null && nome !== "") {
        alert("vamos jogar, " + nome + "?");
    } else {
        alert("Você não inseriu seu nome.");
    }
}