module.exports = {
    name: 'eval',
    description: 'Owner Only.',
    execute(message, args) {

        if(message.author.id !== ('226457061959925761' || '449970614380527618')) return;

        const clean = text => {
            if (typeof(text) === "string")
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
          }

        try {
            const code = args.join(' ');
            let evaled = eval(code);
      
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
      
            message.channel.send(clean(evaled), {code:"js"});
          } catch (err) {
            message.channel.send(`:warning: __**\`Eval Command Execution Failed.\`**__\`\`\`js\n${clean(err)}\n\`\`\``);
          }

    },
}