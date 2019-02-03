const Discord = require('discord.js');
module.exports = {
    name: 'sample',
    description: "Kai copy-pastes this file to create commands.",
    execute(message, args) {
        message.channel.send('Go Pracc');
    }
}