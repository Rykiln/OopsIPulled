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
class rolefine {
    constructor() {
        this._command = "rolefine";
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
            let roledps = msgObject.guild.roles.find(role => role.id === `721303101285597244`);
            let rolehealer = msgObject.guild.roles.find(role => role.id === `721309056161284109`);
            let roletank = msgObject.guild.roles.find(role => role.id === `721307639224598549`);
            let roles = `${roledps}${rolehealer}${roletank}\n${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}`;
            let embed = new Discord.RichEmbed()
                .setTitle(`Trial Role: Fine`)
                .setColor(0x2cc50d)
                .setDescription(`${roles}\These are the minimum requirements for joining veteran trials. The gear sets, skills, and damage are needed to be a contributing member of a coordinated trial group.`)
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                // .attachFiles([`../src/images/fine_fire.png`])
                // .setImage(`attachment://fine_fire.png`)
                .addField(`Damage Dealers`, `50K DPS\nNo [Blood For Blood](https://eso-skillbook.com/skill/blood-for-blood)\nNo [Thrassians Stranglers](https://eso-sets.com/set/thrassian-stranglers)\nNo [Ring of the Pale Order](https://eso-sets.com/set/ring-of-the-pale-order)\nNo Werewolf Parses`, true)
                .addField(`Healers`, `[Spell Power Cure](https://eso-sets.com/set/spell-power-cure) (Pair w/Hollowfang)\n[Hollowfang Thirst](https://eso-sets.com/set/hollowfang-thirst) (Pair w/SPC)\n[Sentinel of Rkugamz](https://eso-sets.com/set/sentinel-of-rkugamz)\n[Bogdan the Nightflame](https://eso-sets.com/set/nightflame)\n[Master's Restoration Staff](https://eso-sets.com/set/grand-rejuvenation)`, true)
                .addField(`Tanks`, `[Claw of Yolnahkrin](https://eso-sets.com/set/claw-of-yolnahkriin)\n[Ebon Armory](https://eso-sets.com/set/ebon-armory)\n[Worm's Raiment](https://eso-sets.com/set/the-worms-raiment)\n[Earthgore](https://eso-sets.com/set/earthgore)\n[Lord Warden](https://eso-sets.com/set/lord-warden)`, true)
            msgObject.delete();
            msgObject.channel.send({files: [`../src/images/fine_fire.png`]}).then(msg => {msgObject.channel.send(embed)})
                .catch(console.error);
        });
    }
}
exports.default = rolefine;
// Change Log
// ---------------- 2021 March 08 ----------------
// Removed from Healers Jorvuld's Guidance, Worm’s Raiment
// Removed from Tanks Aegis of Galenwe, Torug's Pact, Bloodspawn, Engine Guardian
// Added to Healers Master's Restoration Staff
// Added to Tanks Worm's Raiment, Earthgore, Lord Warden