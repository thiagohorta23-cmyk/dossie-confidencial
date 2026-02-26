const questions = [
{ text: "Mudança repentina de rotina", weight: 2 },
{ text: "Uso excessivo e reservado do celular", weight: 3 },
{ text: "Diminuição de contato físico", weight: 2 },
{ text: "Irritação sem motivo claro", weight: 1 },
{ text: "Ausências não explicadas", weight: 3 },
{ text: "Mudança brusca de aparência", weight: 1 },
{ text: "Proteção excessiva de senhas", weight: 2 },
{ text: "Respostas vagas sobre compromissos", weight: 2 },
{ text: "Redução de tempo juntos", weight: 2 },
{ text: "Aumento de segredos financeiros", weight: 3 },
{ text: "Mudança de padrões de sono", weight: 1 },
{ text: "Comparações frequentes com outras pessoas", weight: 2 },
{ text: "Defensividade exagerada", weight: 2 },
{ text: "Evita conversas profundas", weight: 1 },
{ text: "Mudança no interesse emocional", weight: 3 }
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
