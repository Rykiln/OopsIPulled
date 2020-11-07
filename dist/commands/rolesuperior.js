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
                .setDescription(roles)
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .addField(`Damage Dealers`, `65K DPS\nNo [Blood For Blood](https://eso-skillbook.com/skill/blood-for-blood)\nNo [Thrassians Stranglers](https://eso-sets.com/set/thrassian-stranglers)\nNo [Ring of the Pale Order](https://eso-sets.com/set/ring-of-the-pale-order)`, true)
                .addField(`Healers`, `${roleprevioushealer} Requirements And...\n[Vestments of Olorime](https://eso-sets.com/set/perfect-vestment-of-olorime) (Pair w/Hollowfang)\n[Roaring Opportunist](https://eso-sets.com/set/perfect-roaring-opportunist)\n[Ebon Armory](https://eso-sets.com/set/ebon-armory)\n[Master’s Restoration Staff](https://eso-sets.com/set/grand-rejuvenation)\n[Symphony of Blades](https://eso-sets.com/set/symphony-of-blades)\n[Troll King](https://eso-sets.com/set/the-troll-king)`, true)
                .addField(`Tanks`, `${roleprevioustank} Requirements And...\n[Worm's Raiment](https://eso-sets.com/set/the-worms-raiment)\n[Roar of Alkosh](https://eso-sets.com/set/roar-of-alkosh)\n[Earthgore](https://eso-sets.com/set/earthgore)\n[Tremorscale](https://eso-sets.com/set/tremorscale)`, true)
            msgObject.delete();
            msgObject.channel.send({files: [`../src/images/Superior.png`]}).then(msg => {msgObject.channel.send(embed)})
                .catch(console.error);
        });
    }
}
exports.default = rolesuperior;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiel90ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy96X3RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsV0FBVztJQUFoQztRQUNxQixhQUFRLEdBQUcsYUFBYSxDQUFBO0lBZTdDLENBQUM7SUFiRyxJQUFJO1FBQ0EsT0FBTyx1Q0FBdUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUMvRSxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUMzQyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQzlDLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ3BDLENBQUM7S0FBQTtDQUNKO0FBaEJELDhCQWdCQyJ9