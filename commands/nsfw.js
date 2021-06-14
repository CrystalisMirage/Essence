const { MessageButton }=require('discord-buttons')
module.exports.help={
	name:'nsfw',
	aliases:[]
}

module.exports.run=async(client, message, args)=>{
	let button=new MessageButton()
	.setStyle('url')
	.setLabel('Porn Website!')
	.setURL('https://rr.noordstar.me/porn-site-4cf02903');
	message.channel.send('Click this button to get unlimited amounts of nsfw, porn and lewd!!',button)
}