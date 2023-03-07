var divTags = document.querySelectorAll("div")
var pTags = document.querySelectorAll("p")
var buttEl = document.querySelector(".button")
var timeEl = document.querySelector(".timedisplay")

var questionsarray = [
    {
      question: "Q.1 Is this a test?", 
      answers: ["true", "false"],
      correctanswer: "true"
    },
    {
        question: "Q.2 Is this the third question?", 
        answers: ["true", "false"],
        correctanswer: "true"
      },
      {
        question: "Q.3 Is this the third question?", 
        answers: ["true", "false"],
        correctanswer: "true"
      },
]

console.log(buttEl)

var secondsLeft = 5;  

function setTime() {
    
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + questionsarray["0"];
        
        if(secondsLeft === 0) {   
            clearInterval(timerInterval);  
        }
        
    }, 1000);
}

function displayquestion() {

    console.log(questionsarray[0]);

}

buttEl.addEventListener("click", function() {
setTime();
displayquestion()
})