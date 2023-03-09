// Code your solutions in this file

function writeCards(arr, name) {
    const messageArr = [];
    for (let i = 0; i < arr.length; i++) {
        messageArr.push(`Thank you, ${arr[i]}, for the wonderful ${name} gift!`);
    }
    return messageArr;
}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}

countDown(10);