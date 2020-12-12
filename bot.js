require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client(
  {partials: ["MESSAGE"]}
);

const BOT_COMMAND_PREFIX = '!'
const MOD_ME_COMMAND = 'mod-me'

client.on("ready", () => {
  console.log(`Our Bot is ready to go!`);
});

client.on("message", msg => {
  if (msg.content === "Hola") {
    // msg.reply("pong!")    //This will tag message sender
    msg.channel.send("Que haces capo, soy yo el BOT");
  }
});

client.on("message", msg => {
  if (msg.content === "estas?") {
    msg.channel.send("si, aca");
  }
});

client.on("message", msg => {
  if (msg.content === `${BOT_COMMAND_PREFIX}${MOD_ME_COMMAND}`) 
    modUser(msg.member)
});

client.on("message", msg => {
  if (msg.content == "que onda jao?")
  msg.react("❤️")
});

client.on("messageDelete", msg=> {
  msg.channel.send("que haces capo? bancatela")
})

function modUser(member){
  member.roles.add("787342339131047947")

}

client.login(process.env.BOT_TOKEN);
