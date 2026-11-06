const estudante = "Caroline"
const docente = 'Ana'
const cumprimento = "nosso lema é 'estudar bastante!'"
const citacao = `Ju diz: "nosso lema é 'estudar bastante!'"`

console.log(cumprimento)
console.log(citacao)

const citacao2 = `Juliana diz: ${cumprimento}`

console.log(citacao2)

// funções String

const senha = 'SenhaSegura123' + estudante.toUpperCase()
console.log(senha)