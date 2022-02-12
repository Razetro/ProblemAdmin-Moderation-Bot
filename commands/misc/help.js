const discord = require("discord.js");
const { client } = require("../../index.js");

module.exports.execute = async (client, message, args) => {

    const helpCommand = client.commands.get("help").help;
    const embed = new discord.MessageEmbed()
        .setThumbnail(client.user.avatarURL(client.user))
        .setColor(process.env.SUCCESS_COLOR)
        .setFooter(`To get info of each command you can do ?help [command]`)
        .setImage('https://images-ext-2.discordapp.net/external/C70lt0w-w-gzSalkAgwq1_cOgwsreroeCVplwkIw6tk/https/janakiev.com/assets/creating_gifs_in_the_command_line_files/webgl_02.gif?width=1039&height=585')

    if (!args[0]) {

        const categories = [...new Set(client.commands.map(command => command.help.category))];
    
        embed.setTitle(`Commands of ` + process.env.APP_NAME);
        embed.setDescription([`**Prefix:** \`` + process.env.APP_PREFIX, `\``].join("\n"));
    
        let categorisedCommands;
    
        for (const category of categories) {
            categorisedCommands = client.commands.filter(cmd => cmd.help.category == category);
            embed.addField(category, categorisedCommands.map(cmd => `\`` + process.env.APP_PREFIX + `${cmd.help.name}\``).join(", "));
        }
    
        message.channel.send(embed);
        return;
    }

    const command = client.commands.get(args[0]) || client.commands.get(client.aliases.get(args[0]));
    if (!command) return this.execute(client, message, []);

    const commandInfo = command.help;
    const aliasesPresent = commandInfo.aliases.length > 0;
    
    embed.setTitle(`${commandInfo.name.toUpperCase()} COMMAND`);
    embed.setDescription(commandInfo.description);
    embed.addField("Usage", `\`` + process.env.APP_PREFIX + `${commandInfo.name}${commandInfo.usage != "" ? ` ${commandInfo.usage}` : ""}\``);
    embed.addField("Aliases", `${aliasesPresent ? commandInfo.aliases.map(alias => `\`${alias}\``).join(", ") : "\`None\`"}`);

    message.channel.send(embed);

}

module.exports.help = {
    name: "help",
    aliases: ["info", "help me", "commands"],
    category: "Miscellaneous",
    usage: "[command]",
    description: "Need some help with commands because they are too complicated? Look no further! I am here to your aid!"
}