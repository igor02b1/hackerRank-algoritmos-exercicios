/*
link do exercicio: https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true
*/

function kangaroo(x1, v1, x2, v2) {
    for(let jump = 0; jump < 5000; jump++){
        if(v1 * jump + x1 === v2 * jump + x2){
            return "YES"
        }
    }
    
    return "NO"
}