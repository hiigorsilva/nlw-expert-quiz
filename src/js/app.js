const perguntas = [
  {
    pergunta: "Qual seleção ganhou o primeiro campeonato mundial de futebol?",
    respostas: ["Uruguai", "Brasil", "Argentina"],
    correta: 0, // Índice da resposta correta
  },
  {
    pergunta: "Qual jogador é conhecido como 'Rei do Futebol'?",
    respostas: ["Lionel Messi", "Diego Maradona", "Pelé"],
    correta: 2,
  },
  {
    pergunta: "Em que país nasceu o futebol moderno?",
    respostas: ["Brasil", "Alemanha", "Inglaterra"],
    correta: 2,
  },
  {
    pergunta: "Quantas vezes a seleção brasileira ganhou a Copa do Mundo?",
    respostas: ["5 vezes", "6 vezes", "7 vezes"],
    correta: 1,
  },
  {
    pergunta: "Qual é o clube com mais títulos de Liga dos Campeões da UEFA?",
    respostas: ["Real Madrid", "FC Barcelona", "Bayern de Munique"],
    correta: 0,
  },
  {
    pergunta:
      "Qual é o único jogador a ganhar três Copas do Mundo como jogador?",
    respostas: ["Pelé", "Maradona", "Cristiano Ronaldo"],
    correta: 0,
  },
  {
    pergunta:
      "Qual é o clube brasileiro com mais títulos da Copa Libertadores da América?",
    respostas: ["Santos", "Grêmio", "Palmeiras"],
    correta: 0,
  },
  {
    pergunta:
      "Qual jogador detém o recorde de mais gols marcados em uma única edição da Copa do Mundo?",
    respostas: ["Ronaldo Fenômeno", "Just Fontaine", "Gerd Müller"],
    correta: 1,
  },
  {
    pergunta:
      "Quem venceu o prêmio de melhor jogador do mundo da FIFA em 2021?",
    respostas: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski"],
    correta: 0,
  },
  {
    pergunta:
      "Qual é o único país a ter vencido a Copa do Mundo em quatro continentes diferentes?",
    respostas: ["Brasil", "Argentina", "Itália"],
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
