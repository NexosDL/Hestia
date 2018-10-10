const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login(process.env.TOKEN)
var prefix = ("?")
const ytdl = require('ytdl-core');
const queue = new Map();
var servers = {};

bot.on('ready', function() {
    bot.user.setPresence({ game: { name: 'la modération', type: 2} })
    bot.user.setStatus('dnd');
    console.log(`Logged in as ${bot.user.tag}!`);
})
bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', '👤 | Abonné')
    member.addRole(role)
})
