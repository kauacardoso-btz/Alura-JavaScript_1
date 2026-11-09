# Alura JavaScript 1

Repositório de estudos e exercícios práticos do curso [JavaScript: utilizando tipos, variáveis e funções](https://www.alura.com.br/curso-online-javascript-tipos-variaveis-funcoes), da Alura.

## Propósito

Este repositório registra a construção da base da linguagem JavaScript com o **Node.js**, reunindo exemplos escritos durante o curso para consolidar os conceitos e servir como material de consulta.

Mais do que armazenar códigos prontos, o objetivo é evidenciar o aprendizado sobre como o JavaScript representa dados, executa operações, organiza regras de negócio em funções e comunica problemas por meio de erros.

## Aprendizados

- execução de JavaScript fora do navegador usando o Node.js;
- declaração, reatribuição e escopo de variáveis com `let`, `const` e `var`;
- convenções de nomenclatura e leitura de mensagens e *stack traces* de erros;
- tipos primitivos e valores especiais, como `undefined`, `null` e `NaN`;
- conversão e parsing de valores com `Number()`, `String()`, `Boolean()`, `parseInt()` e `parseFloat()`;
- operadores aritméticos, de comparação e lógicos, incluindo valores *truthy* e *falsy*;
- criação de funções com parâmetros, argumentos e retorno;
- diferenças entre declaração de função, expressão de função e *arrow function*;
- noções de *hoisting* e do comportamento de `this` em *arrow functions*.

## Organização dos exemplos

| Arquivo | Conceito principal |
| --- | --- |
| `variaveis.js` e `escopo.js` | variáveis e escopo |
| `tipo-number.js`, `tipo-string.js`, `tipo-boolean.js` | tipos primitivos |
| `tipo-null-undefined.js` | `null` e `undefined` |
| `operadores-aritmeticos.js` | operações e atribuições aritméticas |
| `operadores-comparacao.js` | comparação com `==` e `===` |
| `operadores-logicos.js` | `&&`, `||`, `!`, *truthy* e *falsy* |
| `erros.js` | erros de sintaxe e de execução |
| `funcoes.js` | declaração e uso de funções |
| `expressao-funcao.js` | expressões de função e *arrow functions* |

## Como executar

Com o Node.js instalado, execute qualquer exemplo diretamente pelo terminal:

```bash
node nome-do-arquivo.js
```

Por exemplo:

```bash
node funcoes.js
```
