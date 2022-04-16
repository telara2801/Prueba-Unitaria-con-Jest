//package jacjkson "test": "echo \"Error: no test specified\" && exit 1"//
 // declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar1 = function(valueInEuro){
        // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


const fromDollarToYen1 = function(valueUSD){
    // convertimos el valor a yenes
    let valueInYen = (valueUSD*127.9)/1.2;
    // retornamos el valor
    return valueInYen;
}

const fromYenToPound1 = function(valueJPY){
    // convertimos el valor a yenes
    let valueInGBP = (valueJPY*0.8)/127.9;
    // retornamos el valor
    return valueInGBP;
}


//esta es la funcion que suma dos numeros
function sum(a, b) {
    return a + b;
}
// solo un registro en consola para nosotros
console.log(sum(7,3));

//exporta la funciomn  para usarla en otros archivo
//similar a la palabra clave `export` cuando se usa webpack//

//module.exports = { sum };
module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound };

//one euro is:
let oneEuroIs = {
    "JPY":127.9, 
    "USD":1.2,  // Us Dollar
    "GBP":0.8, //British Pound
};

function fromEuroToDollar (Euro) {
    return (Euro*oneEuroIs.USD)
}

console.log(fromEuroToDollar(3.5))
//module.exports = { fromEuroToDollar };
//module.exports = { fromEuroToDollar };

function fromDollarToYen(USD){
    return (USD*oneEuroIs.JPY)/oneEuroIs.USD;
}

function fromYenToPound(YEN){
    return (YEN*oneEuroIs.GBP)/oneEuroIs.JPY;
}

















