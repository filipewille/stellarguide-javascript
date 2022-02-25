/* Celisus em Fahrenheit

Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para a outra

C = (F-32) * 5/9

F = C*9/5 +32

*/



const converter = (temperature) => {
    if (temperature.toUpperCase().includes('F')){
        console.log((temperature.slice(0,-1)-32)*(5/9)+'°C');
    }else if(temperature.toUpperCase().includes('C')){
        console.log((temperature.slice(0,-1)*(9/5))+32+'°C');
    } else{
        console.log('Valor inválido');
    }
}

converter('32c');