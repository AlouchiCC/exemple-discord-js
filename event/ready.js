const Discord = require("discord.js");
const loadSlashCommand = require("../loader/loadSlashCommand");

module.exports = async client =>{

    await loadSlashCommand(client)
    
    console.log(`${client.user.tag} is online !`);
}