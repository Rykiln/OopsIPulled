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
class roleepic {
    constructor() {
        this._command = "roleepic";
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
            let roledpsstam = msgObject.guild.roles.find(role => role.id === `721303321780027464`);
            let roledpsmag = msgObject.guild.roles.find(role => role.id === `773048024779718708`);
            let rolehealer = msgObject.guild.roles.find(role => role.id === `721309156920787045`);
            let roletank = msgObject.guild.roles.find(role => role.id === `721308461736001586`);
            let roleprevioushealer = msgObject.guild.roles.find(role => role.id === `721309339935047750`);
            let roleprevioustank = msgObject.guild.roles.find(role => role.id === `721308611955130378`);
            let roles = `${roledpsstam}${roledpsmag}${rolehealer}${roletank}\n${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}`;
            let embed = new Discord.RichEmbed()
                .setTitle(`Trial Role: Epic`)
                .setColor(0x9f2df7)
                .setDescription(`${roles}\nThese are additional sets that start allowing groups to optimize in more situations, including large trash pulls between bosses.`)
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .addField(`Damage Dealers`, `80K Magikca DPS\n90K Stamina DPS\nNo [Blood For Blood](https://eso-skillbook.com/skill/blood-for-blood)\nNo [Thrassians Stranglers](https://eso-sets.com/set/thrassian-stranglers)\nNo [Ring of the Pale Order](https://eso-sets.com/set/ring-of-the-pale-order)\nNo Werewolf Parses`, true)
                .addField(`Healers`, `${roleprevioushealer} Requirements And...\n[Martial Knowledge](https://eso-sets.com/set/way-of-martial-knowledge)\n[Z'en's Redress](https://eso-sets.com/set/zens-redress) (Pair w/Martial Knowledge)\n[Blackrose Prison Restoration Staff](https://eso-sets.com/set/menders-ward)`, true)
                .addField(`Tanks`, `${roleprevioustank} Requirements And...\n[Dragon’s Defilement](https://eso-sets.com/set/dragons-defilement)\n[Frozen Watcher](https://eso-sets.com/set/frozen-watcher)\n[Roar of Alkosh](https://eso-sets.com/set/roar-of-alkosh)\n[Lady Thorn](https://eso-sets.com/set/lady-thorn)`, true)
                .addBlankField()
                .addField(`Trial Completions`, `Must have clears on each of the following trials:\n\n - vHOF\n - vAS+1 (Both)\n - vMOL\n - vCR+1 (Any)\n - vSS\n - vKA\n\nLogs are not required for epic, please post screenshots of your achievements to show these clears. If you have already posted them in #vet-trial-clears, you do not have to post them again.`)
            msgObject.delete();
            msgObject.channel.send({files: [`../src/images/Epic.png`]}).then(msg => {msgObject.channel.send(embed)})
                .catch(console.error);
        });
    }
}
exports.default = roleepic;

// Change Log
// ---------------- 2021 March 08 ----------------
// Removed From Tanks Powerful Assault
// Added To Healers Blackrose Prison Restoration Staff
// Added To Tanks Frozen Watcher, Roar of Alkosh