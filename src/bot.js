const Discord = require("discord.js");
const client = new Discord.Client();
let info = new Discord.Message();

require("dotenv").config();

client.on("message", (message) => {
  if (message.author.bot) return;
  if (message.content === "!info") {
    info = "Welcome to the DiscordBotTesting Discord Server";
    message.reply(info);
  }
});

client
  .login(process.env.DISCORD_JS_BOT_TOKEN)
  .then(() => {
    console.log("The bot is online");
  })
  .catch((err) => {
    console.log(err);
  });
