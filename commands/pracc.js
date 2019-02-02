module.exports = {
    name: 'pracc',
    description: 'pracc',
    execute(message, args) {

        let mention = message.mentions.members.map(res => res.user.id);
        if(mention.length === 0) return message.channel.send('Invalid mention');

        for(var i in mention){mention[i] = `<@${mention[i]}>`;}
        mention = String(mention).replace(',' , ' ');

        message.channel.send(`GO PRACC ${mention}!`).then((sentMessage)=>{
            message.delete(1000);
            sentMessage.react(message.client.emojis.get('538193298402050049'));
        });
    }
}