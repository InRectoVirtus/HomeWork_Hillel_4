// В двумерном массиве удалить столбцы где сумма элементов столбца < 0. 
// Массив должен быть размером 10 на 10, заполненым случайными числам в диапазоне от -20 до +20
let numberRow = 10;
let numberCol = 10;

let A = new Array(numberRow);

for(i = 0; i < A.length; i++) {
    A[i] = new Array (numberCol);
    
    for(j = 0; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random() * 41 - 20);

        document.write(A[i][j] + ' ');
    }
    
    document.write('<br />');
}

for(let row = 0; row < A.length; row++) {

    let checkSum = 0;

    for(col = 0; col < A.length; col++){
       checkSum += A[col][row];
    }
    
    if(checkSum < 0) {
        for(colDel = 0; colDel < A.length; colDel++) {
            A[colDel].splice([row], 1)
        }
        row--; // refresh 
    }
} 
// якщо помістити в тіло цикла, що починається з 23 строки, то буде проблема з пропуском цілого стовбця при видаленні (зміщення на позицію назад)
// вирішити проблему можна помістивши у тіло умови декримент, таким чином ми оновлюємо зміст row
// після чого виникає чітка послідовність перевірки кожного індексу стовбця   

    console.log(A);