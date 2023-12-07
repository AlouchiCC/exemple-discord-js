const fs = require("fs");

module.exports = async client => {

    fs.readdirSync("./command").filter(f => f.endsWith(".js")).forEach(async file => {

        let command = require(`../command/${file}`)
        if(!command.name || typeof command.name !== "string") throw new TypeError(`La commande ${file.slice(0, file.length - 3)} n'est pas un nom de commande valide.`)
        client.commands.set(command.name, command)
        console.log(`${file} ✅`);
    })
}