const { MessageEmbed }=require('discord.js')
module.exports.help={
    name:'info',
    aliases:['stats','whois']
}

module.exports.run=async(client, message, args)=>{
    let person=message.mentions.members.first()||message.guild.members.cache.get(args[1])||message.member
    let embed=new MessageEmbed()
    .setTitle(`${person.displayName}'s Info`)
    .setAuthor(message.guild.members.cache.get(client.user.id).displayName,client.user.displayAvatarURL({dynamic:true}))
    .setThumbnail(person.user.displayAvatarURL({dynamic:true}))
    .setDescription(`Some info about ${person}`)
    .addFields(
        {
            name:'Display Name',
            value:person.displayName,
            inline:true
        },
        {
            name:'Username',
            value:person.user.tag,
            inline:true
        },
        {
            name:'Is A bot?',
            value:person.user.bot,
            inline:true
        },
        {
            name:'Account Created Date',
            value:person.user.createdAt.toLocaleString(),
            inline:true
        },
        {
            name: 'User Presence',
            value:person.user.presence.status,
            inline:true
        },
        {
            name:'Profile Picture Link',
            value:person.user.displayAvatarURL(),
            inline:true
        }
    )
    .setColor('ORANGE')
    .setTimestamp()
    .setFooter(`${client.user.username}||${message.guild.name}`,client.user.displayAvatarURL({dynamic:true}))
    
    message.channel.send(embed)
}