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

const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Python", "pascal", "ruby"],
        answer: 0
    },
    {
        question: "Qual é a linguagem de programação usada para desenvolvimento web?",
        options: ["Python", "JavaScript", "Java", "C#"],
        answer: 1
    },
    {
        question: "Qual a principal linguagem wev?",
        options: ["HTML.CSS", "java", "SQL", "pascal"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById('question').innerText = questionData.question;
    const optionsHtml = questionData.options.map((option, index) =>
        `<button class="option" data-index="${index}">${option}</button>`).join('');
    document.getElementById('options').innerHTML = optionsHtml;

    document.querySelectorAll('.option').forEach(button => {
        button.addEventListener('click', checkAnswer);
    });
}

function checkAnswer(event) {
    const selectedIndex = event.target.getAttribute('data-index');
    if (selectedIndex == questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('result').innerText = `Você acertou ${score} de ${questions.length} perguntas.`;
}

loadQuestion();