"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class ConfigGDRaffle {
    constructor() {
        this._command = "configgdraffle";
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
                .setTitle(`Weekly Raffle`)
                .setDescription(`This is a great way to help fund the trader and maybe feed your gambling addiction while you're at it so lets go!`)
                .setColor(0x2ecc71)
                .setThumbnail(`attachment://gd.oops.png`)
                .setFooter(client.user.username, iconGuild)
                .setTimestamp()
                .addField(`Entry Price`,`1000 gold per ticket (If you wish to donate to the guild without entering the raffle, add 1 gold so that the last number is not a zero)`)
                .addField(`Winners Pot`,`The pot will be the total donations, plus an additional 50k weekly provided by the guild, with 40% of the pot going to the guild bank\n - The first ticket pulled will win 30% of the total pot\n - The second ticket pulled will win 20% of the total pot\n - The third ticket pulled will win 10% of the total pot`)
                .addField(`Drawing Method`,`We use an addon that reads the guild bank history for donations values in multiples of 1000 gold (ie: 1000 = 1 ticket, 5000 = 5 tickets, etc) and then randomly picks 3 tickets as winners. We cannot manually remove entries once they have been deposited.`)
                .addField(`When To Buy`,`Between Sunday morning and Saturday at midnight.`)
                .addField(`When Do Winners Get Paid`,`Winners for the previous week will be paid out on Tuesday after trader flip`)
                .addField(`Fair Play`,`Each person can only be drawn once per week.\nGuild Leadership cannot be pulled two weeks in a row.\nAny instance of the above will be redrawn for fairness to give others a chance of winning`)
            await msgObject.channel.send({embed, files: [{
                attachment: `../src/images/gd.oops.png`,
                name: `gd.oops.png`
            }] })
            .catch(console.error);
    }
}
exports.default = ConfigGDRaffle;