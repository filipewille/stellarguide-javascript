/* Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

    *receitas: []
    *despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e
 irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

const family = {
    incomes:[200], 
    expenses:[500]
}

const checkBalance = (incomes, expenses) => {
    
    let sumOfIncomes = incomes.reduce((a,b) => a + b, 0);
    let sumOfExpenses = expenses.reduce((a,b) => a + b, 0);
    let balance = sumOfIncomes-sumOfExpenses;
    
    if ( balance === 0){
        console.log('Family balance is even');
    } else if( balance >= 0) {
        console.log(`Family balance is positive:R$${balance.toFixed(2)}`);
    } else {
        console.log(`Family balance is negative: R$${balance.toFixed(2)}`);
    }
}

checkBalance(family.incomes,family.expenses);



