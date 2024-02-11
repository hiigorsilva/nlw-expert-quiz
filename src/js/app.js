const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de programação de front-end.",
      "Uma linguagem de marcação.",
      "Uma linguagem de programação de back-end.",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é a sintaxe correta para comentários de uma única linha em JavaScript?",
    respostas: [
      "// Este é um comentário de uma linha",
      "/* Este é um comentário de uma linha */",
      "<!-- Este é um comentário de uma linha -->",
    ],
    correta: 1,
  },
  {
    pergunta: "Como você declara uma variável em JavaScript?",
    respostas: ["variable x;", "var x;", "v x;"],
    correta: 1,
  },
  {
    pergunta: "Qual é o operador de atribuição em JavaScript?",
    respostas: ["=", "==", ":"],
    correta: 0,
  },
  {
    pergunta:
      "Qual é o método em JavaScript usado para imprimir algo no console?",
    respostas: ["print()", "console.log()", "log()"],
    correta: 2,
  },
  {
    pergunta: "Qual é a função da declaração 'return' em JavaScript?",
    respostas: [
      "Encerrar o loop atual.",
      "Retornar um valor de uma função.",
      "Definir uma condição.",
    ],
    correta: 1,
  },
  {
    pergunta:
      "Qual é o tipo de dado que representa valores verdadeiros ou falsos em JavaScript?",
    respostas: ["boolean", "string", "number"],
    correta: 0,
  },
  {
    pergunta: "O que o método 'toFixed()' faz em JavaScript?",
    respostas: [
      "Arredonda um número para o inteiro mais próximo.",
      "Formata um número com um número específico de casas decimais.",
      "Remove casas decimais de um número.",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
    respostas: [
      "Determinar o tipo de dado de uma variável.",
      "Comparar dois valores.",
      "Executar uma função.",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
    respostas: ["function", "func", "def"],
    correta: 0,
  },
]

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`

// Loop ou laço de repetição
for (const item of perguntas) {
  // Clonando o template e seus filhos
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector("h3").textContent = item.pergunta

  // Loop para adicionar as alternativas de respostas no quiz
  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true)
    dt.querySelector("span").textContent = resposta
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    )
    // Atribuindo no value da pergunta a sua posição (0, 1 ou 2)
    dt.querySelector("input").value = item.respostas.indexOf(resposta)
    dt.querySelector("input").onchange = (event) => {
      const isCorrect = event.target.value == item.correta
      corretas.delete(item)
      if (isCorrect) {
        corretas.add(item)
      }

      mostrarTotal.textContent = `${corretas.size} de ${totalDePerguntas}`
    }

    // Add a resposta na tela
    quizItem.querySelector("dl").appendChild(dt)
  }

  // Removendo o "Resposta A" das opções de respostas
  quizItem.querySelector("dl dt").remove()

  // Coloca a pergunta na tela
  quiz.appendChild(quizItem)
}
