//using selectors inside the element



// traversing the dom
const btns = document.querySelectorAll('.question-btn');

btns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        const questionParent = e.currentTarget.parentElement.parentElement;
        questionParent.classList.toggle('show-text');
    })
})
