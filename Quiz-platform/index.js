const quiz = document.getElementById('quiz');
const nbrOfQuestionsDisplay = document.getElementById('nbrOfQuestionsDisplay')

let nbrOfQuestions = 0
addQ()
function addQ(){
    nbrOfQuestions++;
    let ques = document.createElement('div');
    let formy = document.createElement('form');
    let input = document.createElement('input');
    input.placeholder="enter your question"
    ques.appendChild(input);
    let addOptBtn = document.createElement('button');
    addOptBtn.textContent = "+ add option";
    addOptBtn.classList.add("addOpt");
    addOptBtn.type="button"
    formy.appendChild(addOptBtn);
    addOpt(formy);
    addOpt(formy);
    addOptBtn.addEventListener('click',()=>addOpt(formy))
    formy.classList.add("formy")
    ques.append(formy)
    ques.classList.add("question");
    let submit=quiz.lastElementChild;
    quiz.removeChild(submit);
    quiz.appendChild(ques);
    quiz.appendChild(submit)
    let rem = document.createElement('button');
    rem.textContent = "Delete This Question";
    rem.type="button"
    rem.classList.add("removeBtn");
    rem.addEventListener('click',()=>{
        quiz.removeChild(ques);
        nbrOfQuestions--;
        nbrOfQuestionsDisplay.value = `There are ${nbrOfQuestions} Questions`

    })
    ques.appendChild(rem)
    nbrOfQuestionsDisplay.value = `There are ${nbrOfQuestions} Questions`


}

function addOpt(parentQuestion){
    let div = document.createElement('div');
    div.style.display="flex"
    let button;
    let radio = document.createElement('input');
    radio.type = 'radio';
    radio.classList.add('radio');
    radio.name="TrueValue";
    let input = document.createElement('input');
    input.placeholder="enter your option"
    div.appendChild(radio);
    div.appendChild(input);
    button=parentQuestion.lastElementChild;
    parentQuestion.removeChild(button);
    parentQuestion.appendChild(div);
    parentQuestion.appendChild(button)
    
    
}