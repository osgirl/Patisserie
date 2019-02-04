const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix , token} = require('./config.json');
const lastTalked = new Set();
const timeout = new Map();
const minute = 60000;
const Threehours = minute*60*3;
client.commands = new Discord.Collection();


client.on('ready' , () =>{
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity(`${client.users.size} pianists need to pracc!` , {type : "STREAMING"});
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message' , message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (!client.commands.has(command)) return;

    try {
    client.commands.get(command).execute(message, args);
    }
    catch (error) {
        console.log('[ERROR]'.red);
        console.error(`${error}`.yellow);
        message.channel.send(`:warning: __**\`Command Execution Failed.\`**__\n\`\`\`js\n${error}\`\`\``);
}
});

client.login(token);