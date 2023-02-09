const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Estoy listo!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("hola")) {
     message.channel.send("pong!");
   }
 
 });
 
 client.login("TU TOKEN");
