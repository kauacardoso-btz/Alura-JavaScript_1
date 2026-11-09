const notaFinal = 7
const faltas = 5
const advertencias = 0

if (notaFinal >= 7 && faltas <= 5) {
    console.log('Aprovado, boas festas!');
} else {
    console.log('Reprovado :c, boas festas...');
}

if (faltas >= 2 && !advertencias) {
    console.log('Recebeu bônus');
} else {
    console.log('Não recebeu bônus');
}