const quizData = [
    {
        question : "Who is the developer of this app?",
        a : "Junaid",
        b : "Haseeb",
        c : "Hassnain",
        d : "Shafay",
        correct : "a"
    },{
        question : "Who is the founder of Pakistan?",
        a : "Liaqut Ali Khan",
        b : "Allama Iqbal",
        c : "Quaid - e - Azam Muhammad Ali Jinnah",
        d : "Fatima Jinnah",
        correct : "c"
    },{
        question : "Which is the easy and freindly programming language?",
        a : "Python",
        b : "Java",
        c : "php",
        d : "C#",
        correct : "a"
    },{
        question : "Which is the most used programming language?",
        a : "Python",
        b : "Java",
        c : "php",
        d : "C#",
        correct : "b"
    },{
        question : "Who is the Prime Minister of Pakistan?",
        a : "Usman Buzdar",
        b : "Imran Khan",
        c : "Bilawal Bhutto",
        d : "Imran Ismail",
        correct : "b"
    }
];
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
let wrong = 0;
let answer = undefined;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    let questionNo = currentQuiz + 1;
    questionE1.innerText = "Q : 0" + questionNo + " " +currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected(){
    

    let answer = undefined;

    answerEls.forEach(answerEl=>{
        console.log(answerEls.value);
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers(){
    answerEls.forEach(answerEl=>{
        answerEl.checked = false;
    });
}
submitBtn.addEventListener("click", ()=>{
    

    const answer = getSelected();
    console.log(answer);
    console.log(score);
    if (answer){
        if (answer===quizData[currentQuiz].correct){
            score++;
            correct.innerText = "Correct : " + score;
            console.log("score : "+score);
        } 

        if (answer!=quizData[currentQuiz].correct){
            wrong++;
            W.innerHTML = "Wrong : " + wrong;
            console.log("wrong : "+wrong);
        } 

        currentQuiz++;
        if (currentQuiz < quizData.length){
            loadQuiz();
        } else{
             quiz.innerHTML = "You answered correctly at "+ score+" / "+quizData.length +" questions.";
            //let message = "You answered correctly at "+ score+" / "+quizData.length +" questions.";
            //message.innerText = document.getElementById(question);
        }

    }
       
});
