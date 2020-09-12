//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach( (question) => {
    const btn = question.querySelector('.question-btn');
    
    btn.addEventListener('click', () =>{
        // logic where when next question is open, previous question closes automatically
        questions.forEach( (_question) => {
            if(_question !== question){
                _question.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    });
});



// traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach( (btn) => {
//     btn.addEventListener('click', (e) => {
//         const questionParent = e.currentTarget.parentElement.parentElement;
//         questionParent.classList.toggle('show-text');
//     })
// })
