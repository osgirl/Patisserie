const fs = require('fs');
module.exports = {
    name: 'createServerRoles',
    description: 'Writes server roles to ./Roles/serverRoles.json',
    execute(message, args) {

        if(message.author.id !== '226457061959925761') return;

        var roleObj = {};

        var roles = message.guild.roles.map(res => res.name);   
        roles = Array.from(roles);
        
        for(var i in roles){
            roleObj[i] = roles[i];
        }

        roleObj = JSON.stringify(roleObj, null, 2);

    
        fs.writeFileSync('./Roles/serverRoles.json', roleObj , err =>{
            if(err) throw err;
        });
        message.channel.send('Finished writing JSON');
        
    }
}