// В двумерном массиве удалить столбцы где сумма элементов столбца < 0. 
// Массив должен быть размером 10 на 10, заполненым случайными числам в диапазоне от -20 до +20
let numberRow = 10;
let numberCol = 10;

let A = new Array(numberRow);

for(let i = 0; i < A.length; i++) {
    A[i] = new Array (numberCol);
    
    for(let j = 0; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random() * 41 - 20);

        document.write(A[i][j] + ' ');
    }
    
    document.write('<br />');
}

for(let row = 0; row < A.length; row++) {

    let checkSum = 0;

    for(let col = 0; col < A.length; col++){
       checkSum += A[col][row];
    }
    
    if(checkSum < 0) {
        for(let colDel = 0; colDel < A.length; colDel++) {
            A[colDel].splice([row], 1)
        }
        row--; // refresh 
    }
} 

    console.log(A);
