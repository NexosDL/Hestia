const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN)
var prefix = ("?")

bot.on('ready', function() {
    bot.user.setPresence({ game: { name: 'Nexøs. ', type: 2} })
    bot.user.setStatus('dnd');
    console.log("Connected");
});
bot.on('message', message => {
    if (message.content === prefix + ""){
        var imagetest = new Discord.RichEmbed()
            message.channel.sendEmbed(imagetest);
            message.delete()
    }
})
bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', '👤 | Nouveau')
    member.addRole(role)
})
bot.on("guildMemberAdd", member => {
    const bvn = member.guild.channels.find(m => m.name === "welcome")
    if (!bvn) return;
    const embed = new Discord.RichEmbed()
    .setColor('#009114')
    .setAuthor(member.user.tag)
    .setThumbnail(member.user.avatarURL)
    .addField(`Nombre de membres après son arrivée`, member.guild.memberCount)
    .setTimestamp()
    bvn.send(embed)
})
bot.on("guildMemberAdd", member => {
    message.reply(`Merci à toi d'avoir rejoins le serveur ! ${msg.guild}`)
})
