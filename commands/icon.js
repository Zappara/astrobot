const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("Generating....");
  let target = message.guild.iconURL;
await message.channel.send({files:[
    {
      attachment: target,
      name: "icon.jpg"
    }
    
  ]});
                       
    msg.delete();
}

module.exports.help = {
  name: "avatar"
}