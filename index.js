// Copyright © 2021 @Rykiln All Rights Reserved

// Environment Variables and API Calls
require('dotenv').config();
const Discord = require('discord.js');
const { Client, Collection, Intents } = require(`discord.js`);
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] })

const fs = require('fs');

const BotStatusLive = true;
let Token;
let GuildID;
if (BotStatusLive) {
  // If True - Use Oops I Pulled Token and Guild ID
  Token = process.env.OOPS_TOKEN;
  GuildID = process.env.OOPS_GUILDID;
} else {
  // If False - Use AJ_TestBot Token and AJ_TestServer Guild ID
  Token = process.env.TEST_TOKEN;
  GuildID = process.env.TEST_GUILDID;
}
client.cooldowns = new Collection();

// Event Handler: Listens For Defined Events Located In The Events Folder
const eventFiles = fs.readdirSync(`./events`).filter(file => file.endsWith(`.js`));
for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, client, Discord, GuildID));
  } else {
    client.on(event.name, (...args) => event.execute(...args, client, Discord, GuildID));
  }
}

// Command Handler: Listens For Messages With A Defined Command Prefix Located In The Commands Folder Recursively
client.commands = new Collection();
const commandFolders = fs.readdirSync('./commands');
commandFolders.forEach((folder) => {
  const commandFiles = fs.readdirSync(`./commands/${folder}`).filter((file) => file.endsWith('.js'));
  commandFiles.forEach((file) => {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  });
});

// Initialize Clients
client.login(Token);
require('./api/twitch')(client, GuildID);
