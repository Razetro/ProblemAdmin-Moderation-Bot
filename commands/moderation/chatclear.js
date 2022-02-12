module.exports.execute = async (client, message) => {
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('You have no permissions to do this!');

    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please enter a number!') }

    if (parseInt(args[0]) > 99) {
        return message.reply('You can only delete 99 messages at a time!')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(`**Successfully** ***${deleteAmount}*** Messages deleted.`).then(msg=>msg.delete({timeout:"1000"}));
}

module.exports.help = {
    name: "chatclear",
    aliases: ["cc", "clear"],
    category: "Moderation",
    usage: "<number>",
    description: "To clear Chat messages."
}