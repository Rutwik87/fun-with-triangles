const form = document.querySelector('#form')
const result = document.querySelector('#score')
const resetBtn = document.querySelector('#reset')
var radioBtn = document.querySelectorAll('input:checked')

const formElements = [form.q1,form.q2,form.q3,form.q4,form.q5,form.q6,form.q7,form.q8]

const answerDict = {
    1 : "90" ,
    2 : "right",
    3 : "Equilateral Triangle",
    4 : "3, 4, 5",
    5 : "80",
    6 : "a+b+c" ,
    7 : "45",
    8 : "0"
}

function ansCheck(answerDict , userAnsDict){
    let score = 0
    for ( let i = 1 ; i <= (Object.keys(answerDict)).length ; i++){
        if(answerDict[i] === userAnsDict[i]){
            score += 1;
        }
    }
    result.innerText = `You scored ${score}/${(Object.keys(answerDict)).length}`;
}

function reset(){
    for(item of radioBtn){
        item.checked = false;
    }
    for ( let i=0 ; i < formElements.length ; i++){
        for ( let j = 0 ; j < 3 ; j++){
            formElements[i][j].removeAttribute("disabled");
            result.innerText = "";   
        }
    }
}

form.addEventListener('submit' , function(e){
    e.preventDefault()
    const userAnsDict = { 
        1 : this.q1.value ,
        2 : this.q2.value ,
        3 : this.q3.value ,
        4 : this.q4.value ,
        5 : this.q5.value ,
        6 : this.q6.value ,
        7 : this.q7.value ,
        8 : this.q8.value ,
    }
    radioBtn = document.querySelectorAll('input:checked')
    
    for ( let i=0 ; i < formElements.length ; i++){
        for ( let j = 0 ; j < 3 ; j++){
            formElements[i][j].setAttribute("disabled", true);
        }
    }
    
    ansCheck(answerDict , userAnsDict);
})


resetBtn.addEventListener('click' , function(){
    reset();
})
