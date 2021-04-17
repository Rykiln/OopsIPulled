"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class ConfigGDStickerbook {
    constructor() {
        this._command = "configgdstickerbook";
    }
    help() {
        return "Displays Guild Information.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    async runCommand(args, msgObject, client) {
            let iconGuild = msgObject.guild.iconURL;
            let iconClient = client.user.displayAvatarURL;
            let embed = new Discord.RichEmbed()
                .setTitle(`Stickerbook Hireling`)
                .setDescription(`Want to fill your stickerbook but hate farming? Get your very own Oops Stickerbook Hireling! This is a great way to help fund the trader.`)
                .setColor(0x2ecc71)
                .setThumbnail(`attachment://gdmystery.oops.png`)
                .setFooter(client.user.username, iconGuild)
                .setTimestamp()
                .addField(`Entry Price`,`5555 gold per week (You can pay for multiple weeks in advance by making multiple separate deposits of 5555. Please do not add multiple deposits as one large sum.)`)
                .addField(`What You Get`,`3 random overland set items in your mail\nRare chance for Motifs or Purple Jewelry\nA special message from your Oops Stickerbook Hireling "Fez'Emu".`)
                .addField(`When To Donate`,`Between Sunday morning and Saturday at midnight.`)
                .addField(`When Are Items Sent`,`Biweekly on Sunday. Each payout will include up to two weeks worth of items at a time, depending on how many you are entered.`)
                .addField(`How Are Items Picked`,`We aren't keeping track of what's been sent or what you have. You will simply receive 3 different items at random that have been picked up throughout the week. Hopefully you get something good for your stickerbook! Received something you already have? List it for sale at our trader! Gold for you AND for the guild = win, win!`)
            await msgObject.channel.send({embed, files: [{
                    attachment: `../src/images/gdmystery.oops.png`,
                    name: `gdmystery.oops.png`
                }] })
                .catch(console.error);
    }
}
exports.default = ConfigGDStickerbook;