const Discord = require("discord.js")

module.exports = {

    name: "user-info",
    description: "Donne les informations d'un joueur",
    dm: false,
    options: [
        {
            type: "user",
            name: "user",
            description: "Utilisateur du Discord.",
            required: true
        }
    ],
    
    async run(client, message, args) {
        
        const member = args.get("user")
        
        let userInfoEmbed = new Discord.EmbedBuilder()
            .setDescription(`Voici quelque information du serveur \`${member.user.tag}\``)
            .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
            .addFields(
                { name: `Nom du compte`, value: `${member.user.tag}`, inline: true },
                { name: `ID du Serveur`, value: `${member.user.id}`, inline: true },
                //{ name: `Date de join`, value: `${member.joinedAt()}` },
                //{ name: `Date de création du compte`, value: `${member.createdAt()}` },
                )
            .setColor("40EA88")
            .setFooter( {text: client.user.username, iconURL: client.user.displayAvatarURL({dynamic: true})} )
        
        await message.reply( {embeds: [userInfoEmbed] } )
    }
}