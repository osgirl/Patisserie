module.exports = {
    name: 'sleep',
    description: 'sleep',
    execute(message, args) {

        let mention = message.mentions.members.map(res => res.user.id);
        if(mention.length === 0) return message.channel.send('Invalid mention');

        for(var i in mention){mention[i] = `<@${mention[i]}>`;}
        mention = String(mention).replace(',' , ' ');

        message.channel.send(`GO SLEEP ${mention}!`).then((sentMessage)=>{
            message.delete(1000);
            sentMessage.react(message.client.emojis.get('538193298725011457'));
        });
    }
}