/*
link do exercicio: https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let localDaArvoreMacas = a;
    let localDaArvoreLaranja = b;
    let caiuNaCasaMaca = 0;
    let caiuNaCasaLaranja = 0;
    
    for(let i = 0; i < apples.length; i++){
        const localMaisMaca = apples[i] + localDaArvoreMacas;
        if(localMaisMaca >= s && localMaisMaca <= t){
            caiuNaCasaMaca++
        }
    }
    
        for(let j = 0; j < oranges.length; j++){
        const localMaisLaranja = oranges[j] + localDaArvoreLaranja;
        if(localMaisLaranja >= s && localMaisLaranja <= t){
            caiuNaCasaLaranja++
        }
    }
    
    console.log(caiuNaCasaMaca);
    console.log(caiuNaCasaLaranja);

}