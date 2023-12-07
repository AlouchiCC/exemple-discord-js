const Discord = require ("discord.js")
const loadCommand = require ("../function/loadCommand")
const loadEvent = require ("../function/loadEvent")
const config = require("../config.json")

const start = async (client) => {
    client.commands = new Discord.Collection()
    client.login(config.token)
    loadCommand(client)
    loadEvent(client)
}

module.exports = {
    start
}