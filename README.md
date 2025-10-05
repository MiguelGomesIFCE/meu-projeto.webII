# meu-projeto.webII
### Desenvolvido por:  

***Ana Júlia Almeida Lima***

***Miguel Gomes Maia***

O nosso projeto foi desenvolvido com base no vídeo linkado abaixo:  
[Como Criar um Quiz Simples com HTML, CSS e JavaScript | Coding with Luiz](https://youtu.be/KXvONdomGos?si=1dAgB5TN-SPwH-QE)


## Descrição do Projeto
Este projeto é um Quiz de perguntas e respostas desenvolvido com HTML, CSS e JavaScript. O objetivo é criar um Quiz que interaja com o usuário com recursos visuais. Ele também conta o pontos do usuárioe mostra quantas e acertou ou errou no final do jogo.


## Códigos

1. HTML (index.html)

O arquivo HTML contém a estrutura básica do quiz.
Principais elementos:
	•	<div id="question"> → onde aparece a pergunta atual.
	•	<div id="answers"> → onde são exibidas as opções de resposta.
	•	<button id="next-button"> → botão para passar para a próxima pergunta.
	•	<div id="score-container"> → mostra o resultado final após o quiz.


2. CSS (style.css)

O CSS foi usado para deixar o quiz visualmente agradável e organizado.  
Principais recursos:  
Flexbox → Para centralizar o conteúdo.  
Efeitos de hover → Destaque ao passar o mouse sobre as opções.  
Cores e espaçamento → Para melhor legibilidade e estética.  
Transições suaves → Para o feedback visual ao selecionar respostas.  


3. JavaScript (script.js)

O JavaScript é responsável pela interatividade do quiz.
Aqui estão as principais partes do código:

🔹 Declaração das perguntas

As perguntas foram criadas em um array de objetos, contendo:

```js
const questions = [{
    question: "Qual é a tag usada para criar um link em HTML?",
    answers: [
      { text: "<a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<href>", correct: false }
    ]
  },
  ...
];
```

Cada objeto tem:
	•	question: o texto da pergunta.
	•	answers: um conjunto de alternativas, cada uma com text e correct (true/false).

  
