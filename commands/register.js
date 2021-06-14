module.exports.help={
	name:'register',
	aliases:[]
}

module.exports.run=async(client, message, args)=>{
 let name=args.splice(1).join(' ')
 if(!name) return message.channel.send('Please input the your first name and the first later of your last name like "Idiotic B"')
 if(!message.member.nickname) {
	 message.member.setNickname(name)
	 let norm=message.guild.roles.cache.find(r=>r.id==='789527547854848010')
	 message.member.roles.add(norm)
	 message.channel.send('You have been registered in the server!!')
 }
 else return message.channel.send('I think you are already registered!') 
}