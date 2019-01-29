const fs = require('fs');
module.exports = {
    name: 'createColorRoles',
    description: 'Writes allowed color roles using ./Roles/serverRoles.json, to ./Roles/colorRoles.json' ,
    execute(message, args) {

        if(message.author.id !== '226457061959925761') return;


        fs.readFile('./Roles/serverRoles.json', (err, data) =>{
            if(err) throw err;

            const serverRoles = JSON.parse(data);
            //Retrieve allowed color roles by key from serverRoles.json
            var validColorRoles = ['1','3','4','5','6','8','11','12','13','15','17','18','21','23','24','28','31','32','33','35','36','37','38','39','40'];
            
            validColorRoles = Object.keys(serverRoles)
             .filter(key => validColorRoles.includes(key))
             .reduce((obj, key) => {
                 obj[key] = serverRoles[key];
                 return obj;
             }, {});

            var validColorRolesData = {};
            for(i = 0; i < Object.keys(validColorRoles).length; i++){
                validColorRolesData[i] = validColorRoles[Object.keys(validColorRoles)[i]];
            }
            
            validColorRolesData = JSON.stringify(validColorRolesData, null, 2);

            fs.writeFileSync('./Roles/colorRoles.json', validColorRolesData , err =>{
                if(err) throw err;
            });
            message.channel.send('Finished writing JSON');
            
        })
    }
}