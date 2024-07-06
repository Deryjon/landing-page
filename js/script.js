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
        if (currentQuestionIndex < questions.length) {
          const questionElement = document.querySelector('.question');
          
          // Анимация исчезания блока вопроса
          questionElement.classList.remove('open');
          setTimeout(() => {
            // Обновление текста вопроса
            questionText.textContent = questions[currentQuestionIndex];
            
            // Анимация появления блока вопроса
            questionElement.classList.add('open');
          }, 500); // Увеличили задержку до 500 миллисекунд
        }
      };
      
  
    const updateProgress = () => {
        const progressPercentage = (currentQuestionIndex / questions.length) * 100;
        progressElement.style.width = `${progressPercentage}%`;
        progressElement.textContent = `${Math.round(progressPercentage)}%`;
      };
      
    // startButton.addEventListener('click', () => {
    
    //   currentQuestionIndex = 0;
    //   updateQuestion();
    //   updateProgress();
    // });
  
    startButton.addEventListener('click', () => {
        aboutSection.style.display = 'none';
        testSection.style.display = 'block';
        testSection.classList.add('fade-in');
        currentQuestionIndex = 0;
        updateQuestion();
        updateProgress();
      });
      
      const showNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
          currentQuestionIndex++;
          updateQuestion();
          updateProgress();
        } else if (currentQuestionIndex === questions.length - 1) {
          // Завершение последнего вопроса
          currentQuestionIndex++;
          updateProgress();
        }
      };
      
      yesButton.addEventListener('click', showNextQuestion);
      noButton.addEventListener('click', showNextQuestion);

  
    updateQuestion();
    updateProgress();
  });
  