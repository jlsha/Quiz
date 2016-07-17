/**
 * Created by jennifersha on 7/4/16.
 */

window.onload = function(){
    typedName.focus();
};




var allQuestions = document.getElementsByClassName("question");

console.log(allQuestions);


function hideAllQuestions (){
    for (var i=0; i< allQuestions.length; i++){
        allQuestions[i].style.display="none";
    }
}

hideAllQuestions();




var typedName = document.getElementById("entername").getElementsByTagName("input")[0];

var submitName = document.getElementById("entername").getElementsByTagName("input")[1];

function welcomeUser () {
    var userNameEntered = document.getElementById("entername").getElementsByTagName("input")[0].value;
    document.getElementById("welcomeScore").innerHTML="Welcome, " + userNameEntered + "!";
}

submitName.addEventListener("click", function(){
    if(typedName.value.length>0){
        document.getElementById("entername").style.display="none";
        allQuestions[0].style.display = "block";
        allQuestions[0].getElementsByTagName("button")[0].style.display = "none";
        welcomeUser();

    }
    else {
        alert("Please enter your name so we can get started!");
        typedName.focus();
    }
}, false);




typedName.addEventListener("keyup", function(event){
    if(event.which == 13){
        submitName.click();
    } else {}
}, false);



var nextButtons = document.getElementsByClassName("button");
for (var z = 0; z < nextButtons.length; z++) {
    var currentButton = nextButtons[z];
    currentButton.addEventListener('click', function(event) {
        var parent = event.target.parentElement;
        parent.style.display = "none";
        var nextQuestion = parent.nextSibling.nextSibling;
        nextQuestion.style.display = "block";
        
        

        /**var numberCorrect = 0;
         var userScore = document.getElementById("welcomeScore").innerHTML = "Your score: " + numberCorrect;
         var currentQuestionChoices = event.target.previousSibling.getElementsByTagName("input");
         for (var w = 0; w < currentQuestionChoices.length; w++){
            if (currenQuestionChoices[w].checked == 0) {
                alert("hi");
            }else{userScore()}}}**/

    }, false)
    
}



var answeredCorrect = 0;




for(var x=0; x<allQuestions.length; x++){
    if(x!==2){
        var questionChoices = allQuestions[x].getElementsByTagName("input");
        for (var i = 0; i<questionChoices.length; i++){
            var currentQuestionChoice = questionChoices[i];
            currentQuestionChoice.addEventListener("click",function(event) {
                var buttonBelow = event.target.parentElement.parentElement.lastElementChild;
                buttonBelow.style.display = "inline";
                var nextQuestionButton = event.target.parentElement.parentElement.nextSibling.nextSibling.lastElementChild;
                nextQuestionButton.style.display = "none";
                

            },false)
        }
    }else{
        var questionThreeChoices = allQuestions[2].getElementsByTagName("input");
        for (var k=0; k<questionThreeChoices.length; k++) {
            var currentQuestionThreeChoice = questionThreeChoices[k];
            var y = 0;
            currentQuestionThreeChoice.addEventListener("click", function (event) {
                if (event.target.checked) {
                    y++
                } else {
                    y--
                };
                var buttonBelow = event.target.parentElement.parentElement.lastElementChild;
                if (y == 2) {
                    buttonBelow.style.display = "inline";
                    var nextQuestionButton = event.target.parentElement.parentElement.nextSibling.nextSibling.lastElementChild;
                    nextQuestionButton.style.display = "none";
                } else {
                    buttonBelow.style.display = "none";
                }
            }, false)
        }
    }}


var answerKey = ["Plano, Texas","University of California, San Diego","MalteseYorkie","Friends"];
var numberCorrect = 0;

for(var v=0; v<allQuestions.length; v++){
    (function(correctAnswer){
        var nextButton = document.getElementsByClassName("question")[v].lastElementChild;
        nextButton.addEventListener("click",function(event){
            var userAnswer;
            for (var x = 0; x < event.target.previousSibling.previousSibling.getElementsByTagName("input").length; x++) {
                if (event.target.previousSibling.previousSibling.getElementsByTagName("input")[x].checked) {
                    if (userAnswer == undefined) {
                        userAnswer = event.target.previousSibling.previousSibling.getElementsByTagName("input")[x].value
                    } else {
                        userAnswer += event.target.previousSibling.previousSibling.getElementsByTagName("input")[x].value
                    }

                    var userScore = function(){document.getElementById("welcomeScore").innerHTML = "Your score: " + numberCorrect};
                    if (userAnswer === correctAnswer) {
                        numberCorrect++;
                        userScore();
                    } else {
                        userScore();
                    }





                }

            }
            
        })
        
    })(answerKey[v]);
}



