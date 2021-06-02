const { MessageEmbed}=require('discord.js')
module.exports.help={
    name:'member-count',
    aliases:['membercount','mbc']
}

module.exports.run=async(client, message, args)=>{
     message.channel.send(
         new MessageEmbed()
         .setTitle(`${message.guild.name} Member Count`)
         .setColor('ORANGE')
         .setDescription(`${message.guild.memberCount}`)
         .setTimestamp()
     )
}