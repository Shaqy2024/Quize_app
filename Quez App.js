const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
question: "What is a javascript",
a: "science chapter",
b: "mathe Chapter",
c: "English Chapter",
d: "programing language",
correct: "d",
},
{
    question: "Which one of the following also known as Conditional Expression",
    a: "alternative to if-else",
    b: "switch stetment",
    c: "emidetly if stetment",
    d: "if then else stetment ",
    correct: "c",
},
{
    question: "When interpreter encounters an empty statements, what it will do",
    a: "prompts to complete the stetments",
    b: "ignore the stetment",
    c: "shows the warning",
    d: "through an Error",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
 allInputs[4].nextElementSibling.innerText = data.e
 allInputs[5].nextElementSibling.innerText =data.f
 allInputs[6].nextElementSibling.innerText = data.g
}

document.querySelector("#submit").addEventListener(
"click",
function() {
 const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
       correct++;
    } else {
     incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
 (inputEl) => {
 if (inputEl.checked) {
      ans = inputEl.value;
        }
 }
)
return ans;
}

const reset = () => {
allInputs.forEach(
(inputEl) => {
inputEl.checked = false;
    }
)
}

const quizEnd = () => {

document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
    <h3 class="w-100"> Hii Shakib , you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);

