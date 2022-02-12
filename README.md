# 💾 ProbelmAdmin-Moderation-Bot

<div align="center">
    <a href="https://discord.js.org"><img src="https://discord.js.org/static/logo.svg" width="546" alt="discord.js" /></a>
</div>

![](https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=6aa6f8)
![](https://img.shields.io/badge/npm-v.16.13.2-informational?style=flat&logo=npm&logoColor=white&color=6aa6f8)

# 💾 ProbelmAdmin-Moderation-Bot
ProblemAdmin is a functional, beginner friendly Discord Modular Bot written in JavaScript. The goal is to help beginners gain experience in JavaScript with this Discord Modular Bot.

# Getting Started
### Requirements
* **Node.js 16.13.2+**

#### Example
```js
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
```

# 📑 Features
- [x] Modular system
- [ ] Database Support (MySQL & MongoDB)
- [ ] Web Rest API
- [ ] Log System (paste upload)
- [x] Colored Console
- [ ] Moderation features (kick/ban/, mod-log, filter, chat cleanup)
- [ ] Music features (YouTube, SoundCloud, local files, playlists, queues)

# 🙏 Thanks to:
### 🧑🏻‍🤝‍🧑🏻 Contributors
* Razetro
### 🚧 Used Open-Source projects
* [discordjs/discord.js](https://github.com/discordjs/discord.js)
* [npmjs/dotenv](https://www.npmjs.com/package/dotenv)
