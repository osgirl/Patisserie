module.exports = {
    name: 'mary',
    description: 'mary',
    execute(message, args) {

    message.channel.send('GO PRACC, <@418913239309484055>!').then(() =>{message.delete(1000);});

    }
}
