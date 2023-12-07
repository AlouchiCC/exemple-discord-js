const fs = require("fs");

module.exports = async client => {

    fs.readdirSync("./event").filter(f => f.endsWith(".js")).forEach(async file => {

        let event = require(`../event/${file}`)
        client.on(file.split(".js").join(""), event.bind(null, client))
        console.log(`Event ${file} loaded! ✅`);
    })
}