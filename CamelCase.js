/* 
link do exercicio: https://www.hackerrank.com/challenges/camelcase/problem
*/

function camelcase(s) {
    let uperCase = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === s[i].toUpperCase()){
            uperCase++;
        }
    }
    
    return uperCase + 1; 
}

