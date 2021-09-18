const form = document.querySelector('#form')
const result = document.querySelector('#result')

form.addEventListener('submit' , function(e){
    e.preventDefault()
    if ( this.angle1.value === "" || this.angle2.value === "" || this.angle3.value === "" 
        || this.angle1.value <= 0 || this.angle2.value <= 0 || this.angle3.value <= 0){
        result.innerText = "Invalid Input !!!";
    }
    else {
        const angle1 = parseInt(this.angle1.value);
        const angle2 = parseInt(this.angle2.value);
        const angle3 = parseInt(this.angle3.value);
        checkTriangle(angle1,angle2,angle3);
    }
})

function checkTriangle(a,b,c){
    if ( a + b + c === 180){
        result.innerText = "Given angles form a Triangle !!!!!"
    } else {
        result.innerText = "These angles do not form a Triangle :("
    }
}