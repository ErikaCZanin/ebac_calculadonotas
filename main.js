const form = document.getElementById('form-atividade');
const imgAprovado = `<img src="./images/aprovado.png" alt="Emoji celebrando"/>`
const imgReprovado = `<img src="./images/reprovado.png" alt="Emoji decepcionado"/>`
const atividades = []
const notas = []
const spanAprovado = `<span class="resultado aprovado">Aprovado</span>`
const spanReprovado = `<span class="resultado reprovado">Reprovado</span>`
const notaMinima = parseFloat(prompt('Digite a nota minima: '))

let linhas = ``;

form.addEventListener('submit',function(e){
    e.preventDefault();

    addLinha()
    atTabela()
    atMediaFnal()
}
)

function addLinha() {
    const inputNomeAtividade = document.getElementById('nmAtividade');
    const inputNotaAtividade = document.getElementById('ntAtividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade =: ${inputNomeAtividade.value} já foi inseridaa`)
    } else {

    atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value))

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
    linha += `</tr>`

    linhas += linha;
}

    inputNomeAtividade.value ='';
    inputNotaAtividade.value = '';
}

function atTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML =linhas;
}

function atMediaFnal() {
   const mediaFinal = calculaMediaFinal()
   
   document.getElementById('mediaFinal-valor').innerHTML = mediaFinal.toFixed(2)
   document.getElementById('mediaFinal-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado

}

function calculaMediaFinal () {
    let somaNotas = 0;

    for (let i = 0; i < notas.length; i++){
     somaNotas += notas[i]
    }
 
    return somaNotas / notas.length

}
