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
class rolelegendary {
    constructor() {
        this._command = "rolelegendary";
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
            let roledpsstam = msgObject.guild.roles.find(role => role.id === `721303692548112405`);
            let roledpsmag = msgObject.guild.roles.find(role => role.id === `773048238164934656`);
            let rolehealer = msgObject.guild.roles.find(role => role.id === `721309238877618186`);
            let roletank = msgObject.guild.roles.find(role => role.id === `721308536923226175`);
            let roleprevioushealer = msgObject.guild.roles.find(role => role.id === `721309156920787045`);
            let roleprevioustank = msgObject.guild.roles.find(role => role.id === `721308461736001586`);
            let roles = `${roledpsstam}${roledpsmag}${rolehealer}${roletank}\n${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}`;
            let embed = new Discord.RichEmbed()
                .setTitle(`Trial Role: Legendary`)
                .setColor(0xeec929)
                .setDescription(roles)
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .addField(`Damage Dealers`, `90K Magicka DPS\n95K Stamina DPS\nNo [Blood For Blood](https://eso-skillbook.com/skill/blood-for-blood)\nNo [Thrassians Stranglers](https://eso-sets.com/set/thrassian-stranglers)\nNo [Ring of the Pale Order](https://eso-sets.com/set/ring-of-the-pale-order)\nNo Werewolf Parses`, true)
                .addField(`Healers`, `${roleprevioushealer} Requirements And...\n[Blackrose Restoration Staff](https://eso-sets.com/set/perfect-menders-ward)`, true)
                .addField(`Tanks`, `${roleprevioustank} Requirements And...\n[Master's Sword and Board](https://eso-sets.com/set/perfected-puncturing-remedy)\n[Swarm Mother](https://eso-sets.com/set/swarm-mother)`, true)
                .addBlankField()
                .addField(`Trial Performance-Log Review`, `When applying for Legendary roles, you will be expected to provide trial logs to be reviewed by the guild officers. These logs will be used to determine several factors that cannot be determined by a dummy parse or gear alone. Acceptable trials for log sumbissions include:\n\n - vMOL (or HM)\n - vHOF (or HM)\n - vCR+2 (or HM)\n - vSS (or any HM)\n - vKA (or any HM)\n\nBelow are the criteria we're looking at for each role.`)
                .addBlankField()
                .addField(`Damage Dealers`, `TRIAL Single Target Damage\nSurvivability\nExtra Duties (Backyard Runner, Portals, etc)`, true)
                .addField(`Healers`, `Survivability\nEle Drain uptime\nCombat Prayer \nMajor Courage\nClass specific buffs/debuffs\nGear set usage/uptime`, true)
                .addField(`Tanks`, `Survivability\nFracture Uptime\nMaim Uptime\nCrusher Uptime\nClass specific buffs/debuffs`, true)
            msgObject.delete();
            msgObject.channel.send({files: [`../src/images/Legendary.png`]}).then(msg => {msgObject.channel.send(embed)})
                .catch(console.error);
        });
    }
}
exports.default = rolelegendary;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiel90ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy96X3RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsV0FBVztJQUFoQztRQUNxQixhQUFRLEdBQUcsYUFBYSxDQUFBO0lBZTdDLENBQUM7SUFiRyxJQUFJO1FBQ0EsT0FBTyx1Q0FBdUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUMvRSxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUMzQyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQzlDLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ3BDLENBQUM7S0FBQTtDQUNKO0FBaEJELDhCQWdCQyJ9