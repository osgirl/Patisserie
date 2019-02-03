const lastTalked = new Set();
const timeout = new Map();
const minute = 60000;
const threeMin = minute * 3;

module.exports = {
    name: 'sleep',
    description: 'Ping someone to sleep! (Noteably Sayeet and Wulfu)',
    execute(message, args) {

        if(lastTalked.has(message.author.id)){
            var currentDate = parseInt(Date.now());
            var lastChat = parseInt(timeout.get(message.author.id));
            var timeOutOver = parseInt(lastChat + threeMin);
            var timeLeft = parseInt(timeOutOver - currentDate)/1000/60;
            timeLeft = Math.round(10*timeLeft)/10;
            message.channel.send(`Please wait for \`${Math.round(timeLeft/60)}h and ${Math.round(timeLeft%60)}m and ${Math.round((timeLeft*60)%60)}s\` before doing this again.`).then((sentMessage)=>{
                sentMessage.delete(5000);
            });
            message.delete(5000);
            return;
        }

        lastTalked.add(message.author.id);
        timeout.set(message.author.id, Date.now());

        let mention = message.mentions.members.map(res => res.user.id);
        if(mention.length === 0) return message.channel.send('Invalid mention');

        for(var i in mention){mention[i] = `<@${mention[i]}>`;}
        mention = String(mention).split(',').join(' ');

        message.channel.send(`GO SLEEP ${mention}!`).then((sentMessage)=>{
            message.delete(1000);
            sentMessage.react(message.client.emojis.get('538193298725011457'));
        });

        setTimeout(() => {
            lastTalked.delete(message.author.id);
            timeout.delete(message.author.id);
        }, threeMin);
    }
}