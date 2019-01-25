const lastTalked = new Set();
const timeout = new Map();
const minute = 60000;
const Threehours = minute*60*3;
module.exports = {
    name: 'gacha',
    description: 'gacha',
    execute(message, args) {
        
        if(lastTalked.has(message.author.id)){
            var currentDate = parseInt(Date.now());
            var lastChat = parseInt(timeout.get(message.author.id));
            var timeOutOver = parseInt(lastChat + Threehours);
            var timeLeft = parseInt(timeOutOver - currentDate)/1000/60;
            timeLeft = Math.round(10*timeLeft)/10;
            message.channel.send(`Please wait ${Math.round(timeLeft/60)}h and ${Math.round(timeLeft%60)}m and ${Math.round((timeLeft*60)%60)}s before doing this again.`).then((sentMessage)=>{
                sentMessage.delete(5000);
            });
            message.delete(5000);
            return;
        }
    
        lastTalked.add(message.author.id);
        timeout.set(message.author.id, Date.now());

        const member = message.member;

        const roles = message.guild.roles.map(res => res.name);    
        const role = Array.from(roles);
        
        var arr = [
            message.guild.roles.find('name' , role[1]),
            message.guild.roles.find('name' , role[3]),
            message.guild.roles.find('name' , role[4]),
            message.guild.roles.find('name' , role[5]),
            message.guild.roles.find('name' , role[6]),
            message.guild.roles.find('name' , role[8]),
            message.guild.roles.find('name' , role[11]),
            message.guild.roles.find('name' , role[12]),
            message.guild.roles.find('name' , role[13]),
            message.guild.roles.find('name' , role[15]),
            message.guild.roles.find('name' , role[17]),
            message.guild.roles.find('name' , role[22]),
            message.guild.roles.find('name' , role[23]),
            message.guild.roles.find('name' , role[26]),
            message.guild.roles.find('name' , role[29]),
            message.guild.roles.find('name' , role[30]),
            message.guild.roles.find('name' , role[31]),
            message.guild.roles.find('name' , role[33]),
            message.guild.roles.find('name' , role[34]),
            message.guild.roles.find('name' , role[35]),
            message.guild.roles.find('name' , role[36]),
            message.guild.roles.find('name' , role[37]),
            message.guild.roles.find('name' , role[38]),
        ];


        if(member.roles.some(res =>[
            role[1],
            role[3],
            role[4],
            role[5],
            role[6],
            role[8],
            role[11],
            role[12],
            role[13],
            role[15],
            role[17],
            role[22],
            role[23],
            role[26],
            role[29],
            role[30],
            role[31],
            role[33],
            role[34],
            role[35],
            role[36],
            role[37],
            role[38]
        ].includes(res.name)) ) {
        
        member.removeRoles(member.roles.filter(role => role.name!='Staff' && role.name!='Frequent' && role.name!='Casual' && role.name!='Shush'));

          } else {
            console.log('oof, no roles');
          }
        

        let min = 0; 
        let max = arr.length;
        
        var randomNum = Math.random() * (max-min) + min;
        randomNum = Math.floor(randomNum);

        member.addRole(arr[randomNum]);
        message.channel.send(`You got the ${arr[randomNum].name} role!`);
        
        

        setTimeout(() => {
            lastTalked.delete(message.author.id);
            timeout.delete(message.author.id);
        }, Threehours);

    }
}