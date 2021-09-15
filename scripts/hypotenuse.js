const form = document.querySelector('#form');
const result = document.querySelector('#result');

form.addEventListener('submit' , function(e){
    e.preventDefault();
    const base = this.base.value;
    const height = this.height.value;
    if(base === "" || height === "" || base < 0 || height < 0){
        result.innerText= "Invalid Input !!!";
    }
    else{
        const hypotenuse = getHypotenuse(base,height);
        result.innerText= `Length of Hypotenuse is ${hypotenuse}`;
    }
})

function getHypotenuse(base , height){
    return Math.sqrt(Math.pow(base,2)+Math.pow(height,2))
}