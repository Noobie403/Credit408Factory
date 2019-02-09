const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543752674055553029")
setInterval(function() {
channel.send(`anyone here mother sister? i need you nr to fuck you at your fucking house لسلام عليكووو يا مزز ابي بنت انيكها بالله جيبولي ابييييي يا قوممممممممم`);
}, 30)
})

client.login(process.env.BOT_TOKEN);