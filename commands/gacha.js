const fs = require('fs');
const lastTalked = new Set();
const timeout = new Map();
const minute = 60000;
const Threehours = minute*60*3;

module.exports = {
    name: 'gacha',
    description: 'Get a color random role! 3hr cooldown.',
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

        fs.readFile('./Roles/colorRoles.json' , (err, data)=>{
            if(err) throw err;

            const colorRoles = JSON.parse(data);
            var colorRolesArr = [];
            var rolesToRemove = [];

            for(var i = 0; i < Object.keys(colorRoles).length; i++){
                colorRolesArr.push(message.guild.roles.find(res => res.name === colorRoles[i]));
                colorRolesArr.push(colorRolesArr[i]);
            } 

            for (var i = 0; i < Object.keys(colorRoles).length; i++){
                rolesToRemove.push(colorRoles[i]);
            }

            for(var i = 0; i < rolesToRemove.length; i++){
                message.member.removeRole(message.guild.roles.find(res => res.name === rolesToRemove[i])).catch();
            }
                

            let min = 0; 
            let max = colorRolesArr.length;
        
            var randomNum = Math.random() * (max-min) + min;
            randomNum = Math.floor(randomNum);
            const colorRole = colorRolesArr[randomNum];

            message.member.addRole(colorRole);
            message.channel.send(`You got the ${colorRole.name} role!`);

        });

        setTimeout(() => {
            lastTalked.delete(message.author.id);
            timeout.delete(message.author.id);
        }, Threehours);
        
    }
}

      
      