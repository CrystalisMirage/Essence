const express = require('express')
const app = express()

app.get("/", (req, res) => {
  res.send('hello')
})
app.listen(3000, () => {
  console.log('Project is Ready! Mira is very big brain')
})

const Discord = require('discord.js')
const client = new Discord.Client();
require('discord-buttons')(client)
const dotenv = require('dotenv').config();
client.login(process.env.TOKEN)

client.on('ready', () => {
	client.user.setPresence({
		activity: { name: 'Serving the BJH Students',type: 'STREAMING', url: 'https://twitch.tv/crystalixcodes' }
	})
})
client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
const fs = require('fs')
fs.readdir('./commands/', (err, files) => {
	if (err) console.log(err)
	let jsfile = files.filter(f => f.split('.').pop() === 'js')
	if (jsfile.length <= 0) {
		console.log('I searched high and low but no commands were found')
		return;
	}
	jsfile.forEach((f) => {
		let props = require(`./commands/${f}`)
		console.log(`${f} was loaded successfuly`)
		client.commands.set(props.help.name, props)

		props.help.aliases.forEach(alias => {
			client.aliases.set(alias, props.help.name)
		})

	})

})

const PREFIX = ';'
client.on('message', async message => {
	if (message.author.bot)
		return;
	if (!message.content.startsWith(`${PREFIX}`))
		return;
	let args = message.content.substring(PREFIX.length).split(' ')
	let cmd;
	let command;
	cmd = args[0].toLowerCase()
	if (client.commands.has(cmd)) {
		command = client.commands.get(cmd)
	} else if (client.aliases.has(cmd)) {
		command = client.commands.get(client.aliases.get(cmd))
	}
	try {
		command.run(client, message, args)
	} catch (e) {
		return;
	}
})
const {CanvasSenpai}=require('canvas-senpai')
const canva=new CanvasSenpai()

client.on('guildMemberAdd',async member=>{
 let channel=member.guild.channels.cache.find(c=>c.name==='chat')
    if(!channel){
        console.log("no channel found")
        return;
	}
    let data=await canva.welcome(member,{link:'https://media.discordapp.net/attachments/849828894608588850/853009641679355924/image0.jpg?width=701&height=473'})
    let attachment=new Discord.MessageAttachment(data,'welcome-image.png')
    channel.send(`Welcome ${member} to ${channel.guild.name}! Don't be a simp and you'll enjoy your stay here quite nicely, also don't be gay, or emo or less than 5ft jkjk. Seriously though have a nice time! Don't forget to use the register command to register yourself in the server!!`,attachment)
})

client.on('guildMemberRemove',async member=>{
 let channel=member.guild.channels.cache.find(c=>c.name==='chat')
    if(!channel){
        console.log("no channel found")
        return;
	}
    let data=await canva.welcome(member,{link:'https://media.discordapp.net/attachments/849828894608588850/853009641679355924/image0.jpg?width=701&height=473'})
    let attachment=new Discord.MessageAttachment(data,'leave-image.png')
    channel.send(`${member.user.tag} left! They were too much of a simp to handle our awesome vibes, who cares about them :/`,attachment)
})