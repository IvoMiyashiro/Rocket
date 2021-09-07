document.addEventListener('DOMContentLoaded', () => {

    const questionForm = document.querySelectorAll('.dashboard-question-form');
    const inputAnswer = document.querySelectorAll('.dashboard-question-answer');
    const formLabel = document.querySelectorAll('.dashboard-question-label');
    const pendingQuestions = document.querySelectorAll('.question-pending');

    console.log('object')

    for ( let i = 0; i < questionForm.length; i++ ) {
        questionForm[i].onsubmit = (e) => {
            e.preventDefault();
            pendingQuestions[i].style.display = 'none';
            const inputValue = inputAnswer[i].value;
            formLabel[i].innerHTML = `
                <span class="gradient-3"> R: </span>
                ${ inputValue } 
            `; 
        }
    }

});