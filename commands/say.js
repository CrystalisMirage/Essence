const Discord=module.require('discord.js')
module.exports.help={
    name:'say',
    aliases:[]
}

module.exports.run=async(client, message, args)=>{
    let msg = args.splice(1).join(" ");
    if(!msg) return;
    message.channel.send(msg);
    message.delete();
}