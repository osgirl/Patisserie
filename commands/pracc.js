const Discord = require('discord.js');
module.exports = {
    name: 'pracc',
    description: 'pracc',
    execute(message, args) {

        if(!args[0]){
            message.channel.send('Input a valid mention or userID');
            return;
        }
        
        const mention = message.mentions.members.first();

        if(!mention){
            const userID = args[0];

            message.client.fetchUser(userID)
            .then(()=>{
                message.channel.send(`GO PRACC <@${userID}>!`).then(()=>{
                    message.delete(1000);
                });
                return;
            }).catch(async ()=>{
                message.channel.send('Invalid mention or userID');
            });
            return;
        }   
        message.channel.send(`GO PRACC <@${mention.id}>!`).then(()=>{
            message.delete(1000);
        });
    }
}