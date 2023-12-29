/* 
link do exercicio: https://www.hackerrank.com/challenges/extra-long-factorials/problem
*/

function extraLongFactorials(n) {
    let result = BigInt(1);
    for(let i = 2n; i <= n; i++){
       result = result * BigInt(i);
    }
    
    console.log(result.toString()); 
}