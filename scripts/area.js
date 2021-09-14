const form = document.querySelector('#form');
const result = document.querySelector('#result');

form.addEventListener('submit' , function(e){
    e.preventDefault()
    const firstSide = parseInt(form.firstSide.value);
    const secondSide = parseInt(form.secondSide.value);
    const thirdSide = parseInt(form.thirdSide.value);

    if (checkValidity(firstSide,secondSide,thirdSide)){
        const s = (firstSide + secondSide + thirdSide)/2;
        const areaTriangle = area(s, firstSide , secondSide , thirdSide);
        result.innerText = `Area of Triangle is ${areaTriangle}`;
    } else {
        result.innerText = 'Enter Valid Lengths of Triangle';
    }
})

function checkValidity(first,second,third){
    if( first+  second >third &&
        second + third >first &&
        first+ third > second) {
            return true;
    }
    else {
        return false;
    }
}

function area(s, first,second,third){
    return Math.sqrt(s*(s-first)*(s-second)*(s-third));;
}