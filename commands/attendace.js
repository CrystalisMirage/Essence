module.exports.help={
    name:'attendance',
    aliases:[]
}

module.exports.run=async(client, message, args)=>{
    const date=new Date();
  message.delete();
  message.channel.send(`Attendance ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}. Say "Present"`)
}