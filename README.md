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
const Bot = require('problemadmin')

const client = new Bot({
  token: 'your token here',
  modules: 'path/to/modules',
  // Eris client options here
})

client.register('commands', 'path/to/commands')

client.run()
```

# 📑 Features
- [ ] Modular system
- [ ] Database Support (MySQL & MongoDB)
- [ ] Web Rest API
- [ ] Log System (paste upload)
- [ ] Colored Console
- [ ] Moderation features (kick/ban/softban/hackban, mod-log, filter, chat cleanup)
- [ ] Music features (YouTube, SoundCloud, local files, playlists, queues)

# 🙏 Thanks to:
### 🧑🏻‍🤝‍🧑🏻 Contributors
* Razetro
### 🚧 Used Open-Source projects
* [discordjs/discord.js](https://github.com/discordjs/discord.js)
