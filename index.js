

function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message)
    }
    return messages;
}
console.log(writeCards(["Jim", "Pam"], "weeding"));


function countDown() {
    let counter = 10;
    while (counter >= 0) {
        console.log(counter --);
    }
}
countDown();