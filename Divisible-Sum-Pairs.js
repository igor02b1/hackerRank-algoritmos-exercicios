/*
link do exercicio: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true
*/

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let matchPairs = [];
    for(let i = 0; i <= n; i++){
        for(let j = 1; j <= n; j++){
            let soma = ar[j] + ar[i];
            if(soma % k === 0 && i < j){
                matchPairs.push([ar[i], ar[j]]);
            }
        }
    }
    
    return matchPairs.length;
}