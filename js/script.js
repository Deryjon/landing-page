document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    "Hai mai fatto acquisti da Decathlon?",
    "Sei interessato a unirti al programma di fidelizzazione di Decathlon?",
    "Segui Decathlon su qualche social network?",
  ];

  let currentQuestionIndex = 0;
  const progressElement = document.getElementById("progress_value");
  const questionText = document.querySelector("#questionText p");
  const aboutSection = document.querySelector(".about");
  const testSection = document.querySelector(".test");
  const startButton = document.querySelector(".scrollTo");
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");

  const updateQuestion = () => {
    if (currentQuestionIndex < questions.length) {
      const questionElement = document.querySelector(".question");
      questionElement.classList.remove("open");
      setTimeout(() => {
        questionText.textContent = questions[currentQuestionIndex];
        questionElement.classList.add("open");
      }, 500);
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

  startButton.addEventListener("click", () => {
    aboutSection.style.display = "none";
    testSection.style.display = "block";
    testSection.classList.add("fade-in");
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
      currentQuestionIndex++;
      updateProgress();
    }
  };

  yesButton.addEventListener("click", showNextQuestion);
  noButton.addEventListener("click", showNextQuestion);

  updateQuestion();
  updateProgress();
});

// let winWidth,
// block = document.querySelector('.links');
// terms = document.querySelector('.terms');
// policy = document.querySelector('.privacy');

// function hide() {
// 	winWidth = window.innerWidth;
// 	console.log(winWidth);
// 	if (winWidth > 430) {
// 		block.classList.remove('hide');
// 		terms.classList.add('hide');
// 		policy.classList.add('hide');
// 	}

// 	else {
// 		block.classList.add('hide');
// 		terms.classList.remove('hide');
// 		policy.classList.remove('hide');		
// 	}
// }




// hide();
// window.addEventListener('scroll', hide);


// function ibg() {

// 	let ibg = document.querySelectorAll("._ibg");
// 	for (var i = 0; i < ibg.length; i++) {
// 		if (ibg[i].querySelector('img')) {
// 			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
// 		}
// 	}
// }

// ibg();

let title = document.querySelector('.page__title');
let titleText = title.innerHTML;
// let date = new Date();
// let dateYear = date.getFullYear();
// let dateMonth = date.getMonth();
// let dateDay = date.getDate();
let monthArray = ['GENNAIO', 'FEBBRAIO', 'MARZO', 'APRILE', 'MAGGIO', 'GIUGNO', 'LUGLIO', 'AGOSTO', 'SETTEMBRE', 'OTTOBRE', 'NOVEMBRE', 'DICEMBRE'];








var today = new Date();
var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000)); // прибавляем сутки
var dayTomorrow = tomorrow.getDate(); 
var monthTomorrow = tomorrow.getMonth(); //в js месяц отсчитывается с нуля
var yearTomorrow = tomorrow.getFullYear(); 

// console.log(dateYear);
// console.log(dateMonth);
// console.log(dateDay);
// console.log(monthArray[dateMonth]);
// console.log(`${monthArray[dateMonth]} ${dateDay + 1}, ${dateYear}`);
title.innerHTML = `${titleText} ${monthArray[monthTomorrow]} ${dayTomorrow}, ${yearTomorrow}`;
// let min = 75;
// let max = 92;
// let percent = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(percent);
// let claimed = document.querySelector('.claimed');
// claimed.innerHTML = percent;
// let progress = document.querySelector('.progress-bar-success');
// progress.style.width = percent + '%';





let min = 75;
let max = 92;
let percent = Math.floor(Math.random() * (max - min + 1) + min);
console.log(percent);
let claimed = document.querySelector('.claimed');
claimed.innerHTML = percent;
let progress = document.querySelector('.progress-bar-success');
progress.style.width = percent + '%';



