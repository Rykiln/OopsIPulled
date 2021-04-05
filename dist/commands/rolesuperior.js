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
class rolesuperior {
    constructor() {
        this._command = "rolesuperior";
    }
    help() {
        return "This command does absolutely nothing!";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let iconGuild = msgObject.guild.iconURL;
            let iconClient = client.user.displayAvatarURL;
            let strobe = client.emojis.find(emoji => emoji.name === "strobe");
            let roledps = msgObject.guild.roles.find(role => role.id === `721304233219063838`);
            let rolehealer = msgObject.guild.roles.find(role => role.id === `721309339935047750`);
            let roletank = msgObject.guild.roles.find(role => role.id === `721308611955130378`);
            let roleprevioushealer = msgObject.guild.roles.find(role => role.id === `721309056161284109`);
            let roleprevioustank = msgObject.guild.roles.find(role => role.id === `721307639224598549`);
            let roles = `${roledps}${rolehealer}${roletank}\n${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}`;
            let embed = new Discord.RichEmbed()
                .setTitle(`Trial Role: Superior`)
                .setColor(0x3991ff)
                .setDescription(`${roles}\nThese sets, skills, and damage requirements allow for more group optimization than fine sets, but also require more understanding of how and when to perform certain actions to cause the gear to activate.`)
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .addField(`Damage Dealers`, `65K DPS\nNo [Blood For Blood](https://eso-skillbook.com/skill/blood-for-blood)\nNo [Thrassians Stranglers](https://eso-sets.com/set/thrassian-stranglers)\nNo [Ring of the Pale Order](https://eso-sets.com/set/ring-of-the-pale-order)\nNo Werewolf Parses`, true)
                .addField(`Healers`, `${roleprevioushealer} Requirements And...\n[Vestments of Olorime](https://eso-sets.com/set/perfect-vestment-of-olorime) (Pair w/Hollowfang)\n[Roaring Opportunist](https://eso-sets.com/set/perfect-roaring-opportunist) (Pair w/Jorvuld's Guidance)\n[Jorvuld's Guideance](https://eso-sets.com/set/jorvulds-guidance)\n[Symphony of Blades](https://eso-sets.com/set/symphony-of-blades)\n[Troll King](https://eso-sets.com/set/the-troll-king)`, true)
                .addField(`Tanks`, `${roleprevioustank} Requirements And...\n[Powerful Assault](https://eso-sets.com/set/powerful-assault)\n[Aegis of Galenwe](https://eso-sets.com/set/aegis-of-galenwe)\n[Drake's Rush](https://eso-sets.com/set/drakes-rush)`, true)
            msgObject.delete();
            msgObject.channel.send({files: [`../src/images/Superior.png`]}).then(msg => {msgObject.channel.send(embed)})
                .catch(console.error);
        });
    }
}
exports.default = rolesuperior;

// Change Log 
// ---------------- 2021 March 08 ----------------
// Removed From Healers Master's Restoration Staff
// Removed From Tanks Worm's Raiment, Roar of Alkosh, Earthgore, Tremorscale
// Added To Healers Jorvuld's Guidance
// Added To Tanks Powerful Assault, Aegis of Galenwe, Drake's Rush