/*
link do exercicio: https://www.hackerrank.com/challenges/bon-appetit/problem
*/

function bonAppetit(bill, k, b) {
    let totalDaConta = 0;
    for(let i = 0; i < bill.length; i++){
        totalDaConta = totalDaConta + bill[i];
    }
    
    let valorJusto = (totalDaConta - bill[k]) / 2;
    

    if(valorJusto === b){
        console.log("Bon Appetit");
    } else {
        console.log(b - valorJusto);
    }
}
