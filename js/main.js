const faq = document.querySelectorAll(".faqQuestionSct")

faq.forEach((item, index) => {
    let faqQuestion  = item.querySelector('.faqQuestion');
    faqQuestion.addEventListener('click', () =>{
        item.classList.toggle('showAnswer');

        removeShowAnswer(index);
    })
})

function removeShowAnswer(index1){
    faq.forEach((item2, index2) =>{
        if(index1 != index2){
            item2.classList.remove('showAnswer');
        }
    })
}