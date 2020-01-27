// Code your solutions in this file
function writeCards(array, event) {
    let names = []
for (let i = 0; i < array.length; i++) {
names.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
}
return names
}

function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}