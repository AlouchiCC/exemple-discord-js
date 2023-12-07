const Discord = require("discord.js")

module.exports = {

    name: "ping",
    description: "Vous envoie votre ping",
    dm: false,

    async run(client, message) {
        
        let pingEmbed = new Discord.EmbedBuilder()
            .setDescription(`API Ping : \`${client.ws.ping}\``)
            .setColor("40EA88")
            .setFooter( {text: client.user.username, iconURL: client.user.displayAvatarURL({dynamic: true})} )
        
        await message.reply( {embeds: [pingEmbed] } )
    }
}