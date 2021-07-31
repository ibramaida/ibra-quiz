const correctAnswer = ["B", "B", "B", "B"];
const resultContainer = document.querySelector('.result');
const result = document.querySelector('.result span');
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    // console.log(form.q1.value);
    userAnswer.forEach((answer, index) => {
        if (answer === correctAnswer[index]) {
            score += 25;
        }
    });
    //scroll to top and show result on page 
    scrollTo(0, 0);
    
    resultContainer.classList.remove('d-none');

    // animate the score
    let output = 0;
    const timer = setInterval(() => {
        result.textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer)
        } else {
            output++;
        }
    }, 25)

    // console.log(score);
});


