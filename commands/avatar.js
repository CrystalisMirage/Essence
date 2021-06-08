module.exports.help={
    name:'avatar',
    aliases:['pfp','profilepicture','profile-picture']
}

module.exports.run=async(client, message, args)=>{
    let person=message.mentions.users.first()||client.users.cache.get(args[1])||message.author;
    if(!person) return;
    message.channel.send(person.displayAvatarURL({dynamic:true,size:256}))
}