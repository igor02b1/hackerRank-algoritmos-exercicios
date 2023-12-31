/*
link do exercicio: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true
*/

function breakingRecords(scores) {
    // Write your code here
    let MaxScore = 0;
    let minScore = 0;
    let InMaxScore;
    let InminScore;

    let inicialScore = scores[0];
    InMaxScore = inicialScore;
    InminScore = inicialScore;
    
    
    for(let i = 1; i < scores.length; i++){
        
        if(InMaxScore < scores[i]){
            InMaxScore = scores[i];
            MaxScore++;
        } else if(InminScore > scores[i]){
            InminScore = scores[i];
            minScore++;
        }
    }

    return [MaxScore, minScore]
}