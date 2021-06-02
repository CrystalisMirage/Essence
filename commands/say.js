module.exports.help={
    name:'say',
    aliases:[]
}

module.exports.run=async(client, message, args)=>{
    if(!args[1]) return;
    message.delete()
    message.channel.send(args.splice(1).join(' '))
}