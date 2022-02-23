/* Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

*90 para cima - A
* entre 80-89 - B
* entre 70-79 - C
* entre 60-69 - D
*menor que 60 - F

*/

let note = 0;
let letter = 'x';

function getScore(note){
    if(note >= 90 && note <= 100){
        letter = 'A';
    }else if(note < 90 && note >= 80){
            letter = 'B';
        }else if(note < 80 && note >= 70){
                letter = 'C'; 
            }else if(note < 70 && note >= 60){
                    letter = 'D';
                }else if(note < 60 && note >= 0){
                        letter = 'F';
                } else {
                    letter = "nota inválida";
                }   
return letter;
}

console.log(getScore(100));
