document.addEventListener('DOMContentLoaded', () => {

    const questionForm = document.querySelectorAll('.dashboard-question-form');
    const inputAnswer = document.querySelectorAll('.dashboard-question-answer');

    const handleAnswerSubmit = ( e, i ) => {
        e.preventDefault();
        console.log( e );
        console.log( i )
    }

    questionForm.forEach((form, i) => {
        form.addEventListener('submit', ( i ) => handleAnswerSubmit );
    });

});