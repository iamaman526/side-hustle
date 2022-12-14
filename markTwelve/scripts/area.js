var input = document.querySelectorAll("input");
var output = document.querySelector(".output");
var btnCalculate = document.querySelector("button");

var processValues = () => {
    var a = Number(input[0].value);
    var b = Number(input[1].value);
    var c = Number(input[2].value);
    if(a && b && c){
        var result = findArea(a,b,c);
        output.innerHTML = `Area of Triangle = ${result}`;
    } else {
        output.innerHTML = "Please enter all the fields";
    }
}

var findArea = (a,b,c) => {
    var height = Math.sqrt(4*(a*a*b*b)-(Math.pow(((a*a)+(b*b)-(c*c)),2)));
    var area = 0.25*height;
  
    return area;
}

btnCalculate.addEventListener("click", () => processValues());