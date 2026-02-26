const questions = [

/* ROTINA */
{ text:"Mudança repentina de rotina sem explicação clara", weight:2 },
{ text:"Aumento inesperado de compromissos fora de casa", weight:3 },
{ text:"Alterações frequentes nos horários habituais", weight:2 },
{ text:"Justificativas vagas para atrasos", weight:3 },

/* COMUNICAÇÃO */
{ text:"Redução significativa na comunicação diária", weight:2 },
{ text:"Respostas defensivas a perguntas simples", weight:3 },
{ text:"Evita conversas mais profundas", weight:2 },
{ text:"Demonstra irritação sem motivo aparente", weight:2 },

/* COMPORTAMENTO DIGITAL */
{ text:"Uso excessivo e reservado do celular", weight:3 },
{ text:"Proteção excessiva de senhas e dispositivos", weight:3 },
{ text:"Apaga histórico ou notificações com frequência", weight:3 },
{ text:"Muda o celular de posição ao se aproximar", weight:2 },

/* CONEXÃO EMOCIONAL */
{ text:"Diminuição do contato físico", weight:2 },
{ text:"Menor demonstração de afeto", weight:2 },
{ text:"Distanciamento emocional perceptível", weight:3 },
{ text:"Comparações frequentes com outras pessoas", weight:2 },

/* FINANCEIRO */
{ text:"Despesas não explicadas", weight:3 },
{ text:"Mudança no padrão de gastos", weight:2 },
{ text:"Transações financeiras pouco claras", weight:3 },
{ text:"Resistência em falar sobre dinheiro", weight:2 }

];

function startTest(){
document.querySelector(".hero").classList.add("hidden");
document.getElementById("quiz").classList.remove("hidden");
renderQuestions();
}

function renderQuestions(){
let container = document.getElementById("questions");
questions.forEach((q, index)=>{
container.innerHTML += `
<div class="question">
<p>${index+1}. ${q.text}</p>
<select id="q${index}">
<option value="0">Não observado</option>
<option value="1">Leve</option>
<option value="2">Moderado</option>
<option value="3">Intenso</option>
</select>
</div>
`;
});
}

function calculateRisk(){
let totalWeighted = 0;
let maxPossible = 0;

questions.forEach((q, index)=>{
let value = parseInt(document.getElementById("q"+index).value);
totalWeighted += value * q.weight;
maxPossible += 3 * q.weight;
});

let percentage = Math.round((totalWeighted / maxPossible) * 100);

document.getElementById("quiz").classList.add("hidden");
document.getElementById("result").classList.remove("hidden");

document.getElementById("score").innerText =
"Nível de Risco Percebido: " + percentage + "%";

let classification = "";
let explanation = "";

if(percentage <= 30){
classification = "Risco Baixo";
explanation = "Os sinais relatados indicam baixa probabilidade de inconsistência comportamental relevante.";
}
else if(percentage <= 60){
classification = "Risco Moderado";
explanation = "Existem sinais que merecem atenção e diálogo estruturado.";
}
else if(percentage <= 80){
classification = "Risco Alto";
explanation = "Padrões consistentes de alteração comportamental foram identificados.";
}
else{
classification = "Risco Crítico";
explanation = "Alta concentração de sinais. Recomenda-se conversa clara e avaliação emocional estratégica.";
}

document.getElementById("classification").innerText = classification;
document.getElementById("explanation").innerText = explanation;
}

