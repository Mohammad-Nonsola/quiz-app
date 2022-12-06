const quizDB = [
    {
        question: 'Q1: What does HTML stand for?',
        a: 'Hyper Text Markup Language',
        b: 'Home Tool Markup Language',
        c: 'Hyperlinks and Text Markup Language',
        d: 'All of the above',
        ans: 'ans1'
    },
    {
        question: 'Q2: Who is the father of HTML?',
        a: 'Rasmus Lerdorf',
        b: 'Tim Berners-Lee',
        c: 'Brendan Eich',
        d: 'Sergey Brin',
        ans: 'ans2'
    },
    {
        question: 'Q3: What is the correct syntax of doctype in HTML5?',
        a: '</doctype html>',
        b: '<doctype html>',
        c: '<doctype html!>',
        d: '<!doctype html>',
        ans: 'ans4'
    },
    {
        question: 'Q4: Which of the following is used to read an HTML page and render it?',
        a: 'Web server',
        b: 'Web network',
        c: 'Web browser',
        d: 'Web matrix',
        ans: 'ans3'
    },
    {
        question: 'Q5: Which of the following is not a difference between HTML and XHTML?',
        a: 'Charset in both html and xhtml is “text/html”',
        b: 'Tags and attributes are case-insensitive in HTML but not in XHTML',
        c: 'Special characters must be escaped using character entities in XHTML unlike HTML',
        d: 'Charset in html is “text/html” where as in xhtml it is “application/xml+xhtml”',
        ans: 'ans1'
    },
    {
        question: 'Q6: Which of the following tag is used for inserting the largest heading in HTML?',
        a: 'head',
        b: '<h1>',
        c: '<h6>',
        d: 'heading',
        ans: 'ans2'
    },
    {
        question: 'Q7: What is DOM in HTML?',
        a: 'Language dependent application programming',
        b: 'Hierarchy of objects in ASP.NET',
        c: 'Application programming interface',
        d: 'Convention for representing and interacting with objects in html documents',
        ans: 'ans4'
    },
    {
        question: 'Q8: In which part of the HTML metadata is contained?',
        a: 'head tag',
        b: 'title tag',
        c: 'html tag',
        d: 'body tag',
        ans: 'ans1'
    },
    {
        question: 'Q9: Which element is used to get highlighted text in HTML5?',
        a: '<u>',
        b: '<mark>',
        c: '<highlight>',
        d: '<b>',
        ans: 'ans2'
    },
    {
        question: 'Q10: Which of the following is not a HTML5 tag?',
        a: '<track>',
        b: '<video>',
        c: '<slider>',
        d: '<source>',
        ans: 'ans3'
    }
];

const question = document.querySelector('.question');
const answer1 = document.querySelector('#option1');
const answer2 = document.querySelector('#option2');
const answer3 = document.querySelector('#option3');
const answer4 = document.querySelector('#option4');
const submit = document.getElementById('submit');
const scoreBoard = document.getElementById('score');

let progessBar = document.getElementById('progress-bar');
let decrementValue = document.getElementById('decrement')



let answers = document.querySelectorAll('.checkedAnswer')

let getQuestionCount = 0;

let score = 0;

let counter = 20;

function showQuestion(){

    const questionList = quizDB[getQuestionCount];
    
    // Command for questions
    question.innerText = questionList.question;

    // Command for options
    answer1.innerText = questionList.a;
    answer2.innerText = questionList.b;
    answer3.innerText = questionList.c;
    answer4.innerText = questionList.d;

setTimer();
};

showQuestion();


function setTimer(){
    interval = setInterval(remaningTime, 1000);
    function remaningTime(){
        decrementValue.innerHTML = counter;
        counter--;
        let progessBarWidth =  counter / 20 * 100;
        progessBar.style.width = progessBarWidth + "%";
        if(counter < 0){
            clearInterval(interval);
            decrementValue.innerHTML = 'Times Up';
        }
        if(counter < 3){
            decrementValue.style.color = "#f00";
            progessBar.style.backgroundColor = "#f00"
        }
        else{
            decrementValue.style.color = "#015c3b";
            progessBar.style.backgroundColor = "#04AA6D";
        }    
    }; 
}

let answer;
function getCheckedAnswer(){
    counter = 20;
    clearInterval(interval);
    answers.forEach(function(checkAnswer)  {
        if(checkAnswer.checked){
            answer = checkAnswer.id;        
        }
    });
    return answer;
};

function deselectAll(){
    answers.forEach(function(checkAnswer){
        checkAnswer.checked = false;
    });
};


submit.addEventListener('click', function(){
    
    let checkedAnswer = getCheckedAnswer()
    
    if(checkedAnswer === quizDB[getQuestionCount].ans && counter > 0){
        score++;
    };
    
    getQuestionCount++;

    if(getQuestionCount < quizDB.length){
        showQuestion();
        deselectAll();
        
    }
    else{
        scoreBoard.innerHTML = `<h3>You Scored : ${score} / ${quizDB.length}</h3>`
        scoreBoard.style.display = 'block'
    }
});