const { client } = require("../index.js")

client.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let args = message.content.slice(process.env.APP_PREFIX.length).trim().split(" ");
    let cmd = args.shift().toLowerCase()
    let command;

    if (message.content.startsWith(process.env.APP_PREFIX)) {

        if (client.commands.has(cmd)) {
            command = client.commands.get(cmd);
        } else {
            command = client.commands.get(client.aliases.get(cmd));
        }

        if (command) command.execute(client, message, args)
    }
})