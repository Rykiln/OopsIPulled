// Copyright © 2021 @Rykiln All Rights Reserved

// Environment Variables and API Calls
require(`dotenv`).config();
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require(`fs`);
const BotStatusLive = true;
if (BotStatusLive) {
    // If True - Use Oops I Pulled Token and Guild ID
    Token = process.env.OOPS_TOKEN
    GuildID = process.env.OOPS_GUILDID
} else {
    // If False - Use AJ_TestBot Token and AJ_TestServer Guild ID
    Token = process.env.TEST_TOKEN
    GuildID = process.env.TEST_GUILDID
}
client.cooldowns = new Discord.Collection();

// Guild Specific Global Variables
const Prefix = process.env.PREFIX_DEFAULT;

// Client Command List From Commands Folder Recursively
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync(`./commands`);
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(`.js`));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
        // console.log(client.commands) // Write Full List of Known Commands To Console
    }
}

// Confirmation of Client Initialization
client.once(`ready`, () => {
    console.log(`${client.user.username} Bot Is Now Online!`);
    console.log(`This bot is a Tier ${client.guilds.resolve(GuildID).premiumTier} server with ${client.guilds.resolve(GuildID).premiumSubscriptionCount} boosts!`);
    client.user.setActivity(`${client.user.username} | .help`, { type: "PLAYING" });
});

// Client Guild Member Join
client.on(`guildMemberAdd`, member => {
    console.log(`++ [${member.user.username}] has joined [${member.guild.name}].`);
    // Send Welcome DM To New Members On Joining
    const embed = new Discord.MessageEmbed()
        .setTitle(`${member.user.username}, Welcome To ${member.guild.name}!`)
        .setColor(0x7ac8fb)
        .setDescription(`We are glad to have you as part of our awesome team and growing community.`)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL())
        .addField(`Learn More About Us`, `Please Head over to our [🎉｜welcome](https://discord.com/channels/694306288250781699/728692333280886884/830317590756065310) channel. After reading, react to accept our server rules using with 🔔 or 🚫 to specify whether you want to recieve pings or not; it will give you a role that unlocks access to more of our channels.`)
        .addField(`Join The Guild In Game`, `Go to [🚪｜need-guild-invite](https://discord.com/channels/694306288250781699/725415873929674782/751946917121884251) to request an invitation to the guild.`)
        .addField(`Let Us Know Who You Are`, `Please set your discord nickname to match your ESO Account Name (Not Character Name)`);
    member.send(embed);
    // Add Default Role Separators To New Members On Joining
    member.roles.add(`765672991668568165`); // Member Ranks Separator
    member.roles.add(`765673271987273768`); // Proficiencies Separator
    member.roles.add(`765673105041391648`); // Clears Separator
    member.roles.add(`765672268286001213`); // Cores Separator
    member.roles.add(`765674102014476309`); // Streaming Separator
    member.roles.add(`765672632137023549`); // Self-Assignable Separator
});

// Client Guild Member Leave
client.on(`guildMemberRemove`, member => {
    console.log(`-- [${member.user.username}] has left [${member.guild.name}].`);
});

// Client Message Handler
client.on(`message`, msgObject => {
    if (!msgObject.content.startsWith(Prefix) || msgObject.author.bot) return; // Ignore Messages That Don't Start With The Prefix And Messages That Come From Bots

    const args = msgObject.content.slice(Prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // Check Command Names and Command Aliases. Ignore Commands That Don't Exist
    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    // Return Error if User does not have the correct permissions
    if (command.permissions) {
        const authorPerms = msgObject.channel.permissionsFor(msgObject.author);
        if (!authorPerms || !authorPerms.has(command.permissions)) {
            return msgObject.reply(`You do not have the permissions to use this command!`);
        }
    }

    // Return Error if GuildOnly command is Used in Direct Message
    if (command.guildOnly && msgObject.channel.type === `dm`) {
        return msgObject.reply(`I can\'t execute that command inside DMs!`);
    }

    // Return Error if no args are given for commands that require args
    if (command.args && !args.length) {
        return msgObject.channel.send(`You didn't provide any arguments!`);
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

        if (now < expirationTime){
            const timeLeft = (expirationTime - now) / 1000;
            return msgObject.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
        }
    }

    // Execute Command. Give Error Message For Unknown Errors
    try {
        command.execute(msgObject, args, client);
    } catch (error) {
        console.error(error);
        msgObject.reply(`ERROR: An Unknown Error Has Occurred`);
    }
});

// Initialize Clients
client.login(Token);
require(`./api/twitch.js`)(client, GuildID)