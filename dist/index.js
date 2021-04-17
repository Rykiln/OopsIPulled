"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const ConfigFile = require("./config");
const client = new Discord.Client();
let commands = [];
loadCommands(`${__dirname}/commands`);
client.on("ready", () => {
    console.log(`${client.user.username} Bot Is Now Online!`);
    console.log(`This bot is a Tier ${client.guilds.get(`694306288250781699`).premiumTier} server with ${client.guilds.get(`694306288250781699`).premiumSubscriptionCount} boosts`);
    client.user.setActivity("Oops I Pulled | .help", { type: "PLAYING" });
});
client.on("guildMemberAdd", member => {
    let imgName = "oops.logo.gif";
    let imgPath = `../src/images/${imgName}`;
    let embedWelcome = new Discord.RichEmbed ()
        .setTitle(`${member.user.username}, Welcome To ${member.guild.name}!`)
        .setColor(0x7ac8fb)
        .setDescription(`We are glad to have you as part of our awesome team and growing community.`)
        .setFooter(client.user.username)
        .setTimestamp()
        .setThumbnail(`attachment://${imgName}`)
        .attachFile(imgPath)
        .addField(`Learn More About Us`, `Please head over to our [#🎉-welcome](https://discordapp.com/channels/694306288250781699/728692333280886884/728693715794788373) channel. After reading, react to accept our server rules with 🔔 or 🚫 to specify whether you want to recieve pings or not; it will give you a role that unlocks access to more of our channels.`)
        .addField(`Join The Guild In Game`, `Go to [#🚪-need-guild-invite](https://discordapp.com/channels/694306288250781699/725415873929674782/751946917121884251). to request and invitation.`)
        .addField(`Let Us Know Who You Are`, `Please set your discord nickname to match your ESO Account Name (Not Character Name)`);
        // .setImage(`attachment://${imgName}`);
    member.send(embedWelcome)
        .catch(console.log(`Error: Failed to send embed`));
    member.addRole(`765672991668568165`);
    member.addRole(`765673271987273768`);
    member.addRole(`765673105041391648`);
    member.addRole(`765672268286001213`);
    member.addRole(`765674102014476309`);
    member.addRole(`765672632137023549`);
    console.log(`[${member.user.username}] has joined [${member.guild.name}].`);
});
client.on("guildMemberRemove", member => {
    console.log(`(${member.user.username}) left ${member.guild.name}.`);
});
client.on("message", msg => {
    if (msg.author.bot) {
        return;
    }
    if (!msg.content.startsWith(ConfigFile.config.prefix)) {
        return;
    }
    handleCommand(msg);
});
function handleCommand(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "").toLowerCase();
        let args = msg.content.split(" ").slice(1);
        for (const commandClass of commands) {
            try {
                if (!commandClass.isThisCommand(command)) {
                    continue;
                }
                // yield commandClass.help(args, msg, client);
                yield commandClass.runCommand(args, msg, client);
            }
            catch (exception) {
                console.log(exception);
            }
        }
    });
}
function loadCommands(commandsPath) {
    if (!ConfigFile.config || ConfigFile.config.commands.length === 0) {
        return;
    }
    for (const commandName of ConfigFile.config.commands) {
        const commandClass = require(`${commandsPath}/${commandName}`).default;
        const command = new commandClass();
        commands.push(command);
    }
}
client.login(ConfigFile.config.token);
// 