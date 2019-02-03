const Discord = require('discord.js');
const {prefix} = require('../config.json');

module.exports = {
    name: 'help',
    description: 'Show help page.',
    execute(message, args) {
        const {commands} = message.client;

        var data = [];
        for(var i = 0; i < commands.map(res => res).length; i++){
            data[i] = `${commands.map(res => res.name)[i]}, ${commands.map(res => res.description)[i]}`;
            data.push(data[i]);
        }

        var helpEmbed = new Discord.RichEmbed()
         .setAuthor(message.client.user.tag, message.client.user.avatarURL)
         .setFooter(`Prefix is ${prefix}`)
         .setColor('#ffbdbd');

        for(var i = 0; i < commands.map(res => res).length; i++){
            helpEmbed.addField(commands.map(res => res.name)[i] , commands.map(res => res.description)[i]);
        }

        message.channel.send({embed : helpEmbed});
    }
}