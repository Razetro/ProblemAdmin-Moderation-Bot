module.exports.execute = async (client, message) => {
    const { channel } = message
    channel.send('Testing success!')
}

module.exports.help = {
    name: "test",
    aliases: [],
    category: "Miscellaneous",
    usage: "",
    description: "This is a Test Command!"
}