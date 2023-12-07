const Discord = require ("discord.js")
const intents = new Discord.IntentsBitField(3276799);
const client = new Discord.Client( {intents} )
const Client = require( "./module/Client" )


Client.start(client)