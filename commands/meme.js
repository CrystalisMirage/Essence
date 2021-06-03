const memeAPI='https://meme-api.herokuapp.com/gimme'
const { MessageEmbed }=require('discord.js')
const fetch=require('node-fetch')

module.exports.help={
    name:'meme',
    aliases:['memes']
}

module.exports.run=async(client, message, args)=>{
    await fetch(memeAPI)
    .then(res=>res.json())
    .then(data=>{
        let memeEmbed=new MessageEmbed()
        .setTitle(data.title)
        .setURL(data.postLink)
        .setAuthor(data.author)
        .setImage(data.url)
        .setTimestamp()
        .setFooter(`NSFW: ${data.nsfw}|| Subreddit: ${data.subreddit}||${message.guild.name}`)
        return message.channel.send(memeEmbed)
    })
}