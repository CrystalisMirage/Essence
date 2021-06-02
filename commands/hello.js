module.exports.help={
    name:'hello',
    aliases:[]
}

module.exports.run=async(client, message, args)=>{
    return message.channel.send('Hello BJH students!')
}