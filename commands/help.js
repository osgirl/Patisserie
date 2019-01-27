const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'help',
    execute(message, args) {

        const helpEmbed = new Discord.RichEmbed()
        .setAuthor(message.client.user.tag, message.client.user.avatarURL)
        .addField('p!mary' , 'Ping Mary to pracc.\nMake sure she doesn\'t do Hanon.' , true)
        .addField('p!wulfu' , 'Ping DarkWolf009 to sleep.\nHe is always staying up late. AWOOO!' , true)
        .addField('p!sayeet' , 'Ping Sayeedur to sleep.\nHe is an EU nerd that never sleeps.' , true)
        .addField('p!meekity' , 'Ping Meekity to change his nick.\nHe is a fakeProject' , true)
        .addField('p!gacha' , 'Get a random color role!\n3hr cooldown.' , true)
        .setColor('#ffbdbd');
        message.channel.send({embed : helpEmbed});

    }
}