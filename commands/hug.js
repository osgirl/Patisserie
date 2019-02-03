const Discord = require('discord.js');
module.exports = {
    name: 'hug',
    description: 'Show your love by pinging someone!',
    execute(message, args) {

        const LoveLove = '<a:aLoveLove:536184612171415572>';
        const BlobLove = '<:aBlobLove:537816331504975892>';

        const mention = message.mentions.members.first();
        if(!mention || message.author.id === mention.id || mention.user.bot){
            const hugEmbed = new Discord.RichEmbed()
            .setDescription(`Don't worry, I can be your friend!\n*hugs* <@${message.author.id}>!${BlobLove}${BlobLove}${BlobLove}${LoveLove}${LoveLove}${LoveLove}${BlobLove}${BlobLove}${BlobLove}`)
            .setColor('#ffbdbd');
            message.channel.send({embed: hugEmbed});
            return;
        }

        const hugEmbed = new Discord.RichEmbed()
         .setDescription(`<@${message.author.id}> hugs <@${mention.id}>!\n${BlobLove}${BlobLove}${BlobLove}${LoveLove}${LoveLove}${LoveLove}${BlobLove}${BlobLove}${BlobLove}`)
         .setColor('#ffbdbd');
        
         message.channel.send({embed: hugEmbed});
        
    }
}