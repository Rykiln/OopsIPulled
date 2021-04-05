"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class ConfigSelfAssignESO {
    constructor() {
        this._command = "configselfassigneso";
    }
    help() {
        return "Displays Guild Information.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        let iconGuild = msgObject.guild.iconURL;
        let iconClient = client.user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
            .setTitle(`Elder Scrolls Online: Optional Notification Roles`)
            .setDescription(`These roles are directly related to Elder Scrolls Online. To assign any of the roles to yourself, read the description and click on the corresponding emoji below. they can be removed at any time by coming back to this page and clicking the emoji again.`)
            .setColor(0x7ac8fb)
            .setThumbnail(`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab371d58-f694-4953-a2e5-c79acedd9f56/d9j5i6k-e1a85b7d-1621-4e5b-b5cc-4ddea16325db.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYWIzNzFkNTgtZjY5NC00OTUzLWEyZTUtYzc5YWNlZGQ5ZjU2XC9kOWo1aTZrLWUxYTg1YjdkLTE2MjEtNGU1Yi1iNWNjLTRkZGVhMTYzMjVkYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.UrDYskkNJpd9RFcmxNpkpoVppS3eKSl0cd53KUH_8-4`)
            .setFooter(client.user.username, iconClient)
            .setTimestamp()
            .addField(`💰 Gold Digger`,`Gold Digger is a role for anyone interested in social events and trading. Events may include things such as Skill Point Farming, Skyshard Hunting, Zone Boss Killing, Public Dungeons, Resource Farming Events, Murder Sprees, etc.`)
            .addField(`💎 Crown Seller`,`Money Burning A Hole In Your Pocket? Why not sell some crowns? This allows people to ping you when they are wanting to buy crowns from you.`)
            .addField(`🔨 Master Crafter`,`Master Crafters have all 9 traits researched on all of their crafting skills. Assign this role if you are able and willing to help craft gear for other members.`)
            .addField(`🛠️ Grand Master Crafter`,`Grand Master Crafters have gone above and beyond by collecting nearly all of the Mofifs, Recipies, Blueprints, etc, and can craft items in nearly any style.`)
            .addField(`👀 LFG`,`Looking for a group? Assign this role to be pinged when we're looking for last minute group fills, or when our members are looking for fills for external events.`)
            .addField(`⚙️ XP / CP Grind`,`Do you need to level a new character, or increase your CP to squeeze out more damage or survive better in trials? Assign this role to be notified when people are looking for grinding partners.`)
        msgObject.delete();
        msgObject.channel.send(embed)
            .catch(console.error);
    }
}
exports.default = ConfigSelfAssignESO;