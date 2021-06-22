// Copyright © 2021 @Rykiln All Rights Reserved

// Environment Variables and API Calls
require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client({ intents: new Discord.Intents(Discord.Intents.ALL) });

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
client.cooldowns = new Discord.Collection();

// Global Variables
const Prefix = process.env.PREFIX_DEFAULT;

// Client Command List From Commands Folder Recursively
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');
commandFolders.forEach((folder) => {
  const commandFiles = fs.readdirSync(`./commands/${folder}`).filter((file) => file.endsWith('.js'));
  commandFiles.forEach((file) => {
    // eslint-disable-next-line global-require
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
    // console.log(client.commands) // Write Full List of Known Commands To Console
  });
});

// Confirmation Of Client Initialization
client.once('ready', () => {
  console.log(`${client.user.username} Bot Is Now Online!`);
  console.log(`This bot is a Tier ${client.guilds.resolve(GuildID).premiumTier} server with ${client.guilds.resolve(GuildID).premiumSubscriptionCount} boosts!`);
  console.log(`Twitch API Request interval is set to ${process.env.OOPS_TWITCH_REFRESH} seconds.`);
  console.log(Date());
  console.log('========================================');
  console.log();
  client.user.setActivity(`${client.user.username} | .help`, { type: 'PLAYING' });
  // console.log(client.guilds.resolve(`406551139061071902`).members.resolve(`376178762569744384`))
});

// Client Guild Member Join
client.on('guildMemberAdd', (member) => {
  console.log(`++ [${member.user.username}] has joined [${member.guild.name}].`);
  // Send Welcome DM To New Members On Joining
  const embed = new Discord.MessageEmbed()
    .setTitle(`${member.user.username}, Welcome To ${member.guild.name}!`)
    .setURL('https://discord.gg/oops-i-pulled')
    .setColor(0x7ac8fb)
    .setDescription('We are glad to have you as part of our awesome team and growing community.')
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp()
    .setThumbnail(client.user.displayAvatarURL())
    .addField('Learn More About Us', 'Please Head over to our [🎉｜welcome](https://discord.com/channels/694306288250781699/728692333280886884/830317590756065310) channel. After reading, react to accept our server rules using with 🔔 or 🚫 to specify whether you want to recieve pings or not; it will give you a role that unlocks access to more of our channels.')
    .addField('Join The Guild In Game', 'Go to [🚪｜need-guild-invite](https://discord.com/channels/694306288250781699/725415873929674782/751946917121884251) to request an invitation to the guild.')
    .addField('Let Us Know Who You Are', 'Please set your discord nickname to match your ESO Account Name (Not Character Name)');
  member.send(embed);
});

// Client Guild Member Update
client.on('guildMemberUpdate', (oldMember, newMember) => {
  if (oldMember.pending === true && newMember.pending === false) {
    // `++ ++ [${newMember.username} has accepted the guild rules.]`;
    // Define Default Role
    const roleDefault = process.env.OOPS_ROLE_DEFAULT; // Role: Accepted Guild Rules
    // const rolePendingMembership = process.env.OOPS_ROLE_PENDINGMEMBERSHIP; // Role: Pending Potato
    // Define Role Separators
    const roleSeparatorMemberRanks = process.env.OOPS_ROLE_SEPARATOR_MEMBERRANKS;
    const roleSeparatorProficiencies = process.env.OOPS_ROLE_SEPARATOR_PROFICIENCIES;
    const roleSeparatorClears = process.env.OOPS_ROLE_SEPARATOR_CLEARS;
    const roleSeparatorCores = process.env.OOPS_ROLE_SEPARATOR_CORES;
    const roleSeparatorSelfAssignable = process.env.OOPS_ROLE_SEPARATOR_SELFASSIGNABLE;
    const rolesIDArray = [roleDefault, roleSeparatorClears, roleSeparatorCores, roleSeparatorMemberRanks, roleSeparatorProficiencies, roleSeparatorSelfAssignable];
    const rolesArray = [];
    rolesIDArray.forEach((role) => {
      newMember.roles.add(role);
      rolesArray.push(client.guilds.resolve(GuildID).roles.resolve(role).name);
    });
    const MemberLogChannel = client.guilds.resolve(GuildID).channels.resolve(process.env.OOPS_CHANNEL_MEMBERLOGS);
    const embed = new Discord.MessageEmbed()
      .setAuthor(newMember.user.tag, newMember.user.displayAvatarURL())
      .setColor(0x00ff00)
      .setDescription(`${newMember} has accepted the guild rules.`)
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setTimestamp()
      .addField('Name', `${newMember.user.tag} (${newMember.user.id}) ${newMember}`)
      .addField('Granted Roles', rolesArray.join('\n'));
    MemberLogChannel.send(embed);
  }
});

// Client Guild Member Leave
client.on('guildMemberRemove', (member) => {
  console.log(`-- [${member.user.username}] has left [${member.guild.name}].`);
});

// Client Message Handler
client.on('message', (msgObject) => {
  if (!msgObject.content.startsWith(Prefix) || msgObject.author.bot) return; // Ignore Messages That Don't Start With The Prefix And Messages That Come From Bots

  const args = msgObject.content.slice(Prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  // Check Command Names and Command Aliases. Ignore Commands That Don't Exist
  const command = client.commands.get(commandName)
        || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;
  console.log(`[${msgObject.author.username}] used Command [${commandName}] in Channel [${msgObject.channel.name}]`);
  console.log(`With Args : [${args}]`);
  console.log();

  // Return Error if User does not have the correct permissions
  if (command.permissions) {
    const authorPerms = msgObject.channel.permissionsFor(msgObject.author);
    if (!authorPerms || !authorPerms.has(command.permissions)) {
      msgObject.reply('You do not have the permissions to use this command!');
      return;
    }
  }

  // Return Error if GuildOnly command is Used in Direct Message
  if (command.guildOnly && msgObject.channel.type === 'dm') {
    msgObject.reply('I can\'t execute that command inside DMs!');
    return;
  }

  // Return Error if no args are given for commands that require args
  if (command.args && !args.length) {
    msgObject.channel.send('You didn\'t provide any arguments!');
    return;
  }

  // Return Error if command has a cooldown set and has been used too recently
  const { cooldowns } = client;

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;

  if (timestamps.has(msgObject.author.id)) {
    const expirationTime = timestamps.get(msgObject.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      msgObject.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
      return;
    }
  }

  // Execute Command. Give Error Message For Unknown Errors
  try {
    command.execute(msgObject, args, client);
  } catch (error) {
    console.error(error);
    msgObject.reply('ERROR: An Unknown Error Has Occurred');
  }
});

// Initialize Clients
client.login(Token);
require('./api/twitch')(client, GuildID);
