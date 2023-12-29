/*
link do exercicio:https://www.hackerrank.com/challenges/the-hurdle-race/problem
*/

function hurdleRace(k, height) {
    let maxHurle = Math.max.apply(null, height);
    for(let i = 0; i <= height.length; i++){
        if(k >= maxHurle){
            return 0
        } else if (maxHurle > k){
            const Potion = maxHurle - k;
            return Potion;
        }
    }
}
