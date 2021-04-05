"use strict";
const Discord = require("discord.js");

Object.defineProperty(exports, "__esModule", { value: true });
class Announcement {
    constructor() {
        this._command = "announcement";
    }
    help() {
        return "Sends A Formatted Embed Message Into Announcements.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    async runCommand(args, msgObject, client) {
        let destinationChannel = client.channels.get(`726886203328036905`);
        let Pug = `<@&694310159769403462>`;
        let iconClient = client.user.displayAvatarURL;
        let suppliedMessage = args.join(` `);
        let embed = new Discord.RichEmbed()
            .setTitle(`Important Announcement`)
            .setColor(`0x7ac8fb`)
            .setAuthor(msgObject.author.username, msgObject.author.displayAvatarURL)
            .setThumbnail(`attachment://oops.icon.gif`)
            .setFooter(client.user.username, iconClient)
            .setTimestamp()
            .setDescription(suppliedMessage)
        msgObject.delete(3000);
        await destinationChannel.send(Pug);
        await destinationChannel.send({ embed, files: [{
            attachment: `../src/images/oops.icon.gif`,
            name: `oops.icon.gif`
        }]})
            .then(m => m.pin())

    }
}
exports.default = Announcement;