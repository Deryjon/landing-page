document.addEventListener('DOMContentLoaded', () => {
    const questions = [
      "Hai mai fatto acquisti da Decathlon?",
      "Sei interessato a unirti al programma di fidelizzazione di Decathlon?",
      "Segui Decathlon su qualche social network?"
    ];
  
    let currentQuestionIndex = 0;
    const progressElement = document.getElementById('progress_value');
    const questionText = document.querySelector('#questionText p');
    const aboutSection = document.querySelector('.about');
    const testSection = document.querySelector('.test');
    const startButton = document.querySelector('.scrollTo');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
  
    const updateQuestion = () => {
      questionText.textContent = questions[currentQuestionIndex];
    };
  
    const updateProgress = () => {
      const progressPercentage = currentQuestionIndex / questions.length * 100;
      progressElement.style.width = `${progressPercentage}%`;
      progressElement.textContent = `${Math.round(progressPercentage)}%`;
    };
  
    startButton.addEventListener('click', () => {
      aboutSection.style.display = 'none';
      testSection.style.display = 'block';
      currentQuestionIndex = 0;
      updateQuestion();
      updateProgress();
    });
  
    const showNextQuestion = () => {
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateQuestion();
        updateProgress();
      }
    };
  
    yesButton.addEventListener('click', showNextQuestion);
    noButton.addEventListener('click', showNextQuestion);
  
    updateQuestion();
    updateProgress();
  });
  