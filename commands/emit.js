module.exports.help={
	name:'emit',
	aliases:[]
}

module.exports.run=async(client, message, args)=>{
	client.emit('guildMemberRemove',message.member)
}