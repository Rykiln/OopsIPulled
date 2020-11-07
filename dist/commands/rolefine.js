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
                .setDescription(roles)
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                // .attachFiles([`../src/images/fine_fire.png`])
                // .setImage(`attachment://fine_fire.png`)
                .addField(`Damage Dealers`, `50K DPS\nNo [Blood For Blood](https://eso-skillbook.com/skill/blood-for-blood)\nNo [Thrassians Stranglers](https://eso-sets.com/set/thrassian-stranglers)\nNo [Ring of the Pale Order](https://eso-sets.com/set/ring-of-the-pale-order)`, true)
                .addField(`Healers`, `[Spell Power Cure](https://eso-sets.com/set/spell-power-cure) (Pair w/Hollowfang)\n[Jorvuld's Guidance](https://eso-sets.com/set/jorvulds-guidance)\n[Worm’s Raiment](https://eso-sets.com/set/the-worms-raiment)\n[Hollowfang Thirst](https://eso-sets.com/set/hollowfang-thirst) (Pair w/SPC)\n[Hircine's Veneer](https://eso-sets.com/set/hircines-veneer)\n[Sentinel of Rkugamz](https://eso-sets.com/set/sentinel-of-rkugamz)\n[Bogdan the Nightflame](https://eso-sets.com/set/nightflame)`, true)
                .addField(`Tanks`, `[Claw of Yolnahkrin](https://eso-sets.com/set/claw-of-yolnahkriin)\n[Aegis of Galenwe](https://eso-sets.com/set/aegis-of-galenwe)\n[Hircine's Veneer](https://eso-sets.com/set/hircines-veneer)\n[Torug's Pact](https://eso-sets.com/set/torugs-pact)\n[Ebon Armory](https://eso-sets.com/set/ebon-armory)\n[Bloodspawn](https://eso-sets.com/set/bloodspawn)\n[Engine Guardian](https://eso-sets.com/set/engine-guardian)`, true)
            msgObject.delete();
            msgObject.channel.send({files: [`../src/images/fine_fire.png`]}).then(msg => {msgObject.channel.send(embed)})
                .catch(console.error);
        });
    }
}
exports.default = rolefine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiel90ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy96X3RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsV0FBVztJQUFoQztRQUNxQixhQUFRLEdBQUcsYUFBYSxDQUFBO0lBZTdDLENBQUM7SUFiRyxJQUFJO1FBQ0EsT0FBTyx1Q0FBdUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUMvRSxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUMzQyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQzlDLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ3BDLENBQUM7S0FBQTtDQUNKO0FBaEJELDhCQWdCQyJ9