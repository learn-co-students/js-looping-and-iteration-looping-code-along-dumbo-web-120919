// Code your solutions in this file
function writeCards(arr, event) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let msg = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
        newArr.push(msg);
    }
    return newArr;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}