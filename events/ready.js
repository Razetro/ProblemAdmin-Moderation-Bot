const Discord = require("discord.js")
const { client } = require("../index.js")

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}! v` + process.env.APP_VERSION);
    client.user.setActivity(process.env.APP_NAME + ` v` + process.env.APP_VERSION, { type: "STREAMING" }).catch(console.error);
})