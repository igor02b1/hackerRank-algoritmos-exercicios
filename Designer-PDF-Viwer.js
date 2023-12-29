/*
link do exercicio: https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
*/

function designerPdfViewer(h, word) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    let indexAlfabeto = [];
    
    
    for(let i = 0; i < word.length; i++){
        for(let j = 0; j < alfabeto.length; j++){
            if(alfabeto[j] === word[i]){
                indexAlfabeto.push(h[j]);
            }
        }
    }
    
    const maiorNumero = Math.max.apply(null, indexAlfabeto);
    const areaDestacada = maiorNumero * indexAlfabeto.length
    
    return areaDestacada
}