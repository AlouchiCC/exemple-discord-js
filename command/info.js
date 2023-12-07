const Discord = require("discord.js")

module.exports = {

    name: "info",
    description: "Information sur le bot Discord.",
    dm: false,

    async run(client, message) {
        
        let infoEmbed = new Discord.EmbedBuilder()
            .addFields(
                { name: "Creator", value: "**@AlouchiCC**", inline: true},
                { name: "Version", value: "**Bêta 0.1.2**", inline: true},
                { name: "Discord", value: "**[BotExemple][tt.fr]**", inline: true}
            )
            .setColor("40EA88")
            .setFooter( {text: client.user.username, iconURL: client.user.displayAvatarURL({dynamic: true})} )
        
        await message.reply( {embeds: [infoEmbed] } )
    }
}