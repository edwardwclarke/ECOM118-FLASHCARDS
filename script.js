let currentIndex = 0;

function displayCard() {
  const questionElement = document.getElementById('question');
  const answerElement = document.getElementById('answer');
  
  questionElement.textContent = window.flashcards[currentIndex].question;
  answerElement.textContent = window.flashcards[currentIndex].answer;
  answerElement.style.display = "none";
}

function showAnswer() {
  const answerElement = document.getElementById('answer');
  answerElement.style.display = "block";
}

function nextCard() {
  currentIndex = (currentIndex + 1) % window.flashcards.length;
  displayCard();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + window.flashcards.length) % window.flashcards.length;
  displayCard();
}

function shuffleCards() {
  for (let i = window.flashcards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [window.flashcards[i], window.flashcards[j]] = [window.flashcards[j], window.flashcards[i]];
  }
  currentIndex = 0;
  displayCard();
}
