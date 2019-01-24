module.exports = {
    name: 'wulfu',
    description: 'wulfu',
    execute(message, args) {

    message.channel.send('GO SLEEP, <@173476250252345345>!').then(() =>{message.delete(1000);});

    }
}