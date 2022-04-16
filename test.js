//importar la funcion sum del archivo app.js
const { sum } =require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


 // importo la funcion desde app.js
 const { fromEuroToDollar } = require('./app.js');
test("One euro should be 1.206 dollars", () =>{
    let EuroToUSD = fromEuroToDollar(3.5);
    // hago mi comparacion (la prueba)
    expect(EuroToUSD).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
});

const { fromDollarToYen } = require('./app.js');
test("One point two-1.2 USD should be  127.9 JPY", () =>{
    let USDToJPY = fromDollarToYen(1.2);
     expect(USDToJPY).toBe(127.89999999999999);

});

const { fromYenToPound } = require('./app.js');
test("One Hundred Twentyseven 127.9Yenes should be  0.8Libras", () =>{
    let YenToGBP = fromYenToPound(127.9);
    expect(YenToGBP).toBe(0.8);

});













