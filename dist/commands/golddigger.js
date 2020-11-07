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
class GoldDigger {
    constructor() {
        this._command = "golddigger";
    }
    help() {
        return "Displays Guild Information.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let iconGuild = msgObject.guild.iconURL;
            let iconClient = client.user.displayAvatarURL;
            let officersSR = msgObject.guild.roles.find(role => role.name === "Officer").members.map(m => m.user);
            let officersJR = msgObject.guild.roles.find(role => role.name === "Raid Leader").members.map(m => m.user);
            let membercount = msgObject.guild.roles.find(role => role.name === "Potato").members.map(m => m.user).length;
            let guestcount = msgObject.guild.members.filter(member => !member.user.bot).size - membercount;
            let embed = new Discord.RichEmbed()
                .setTitle(`Are you a Gold Digger?`)
                .setDescription(`Gold Digger is a role for anyone interested in social events and trading. This role is self-assignable, and can be removed at any time by coming back to this page. Events may include things such as Skill Point Farming, Skyshard Hunting, Zone Boss Killing, Public Dungeons, Resource Farming Events, Murder Sprees, etc.`)
                .setColor(0x7ac8fb)
                .setThumbnail(iconGuild)
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .addField(`How To Become A Gold Digger`,"React to the 💰 emoji below to give yourself the Gold Digger role.");
            msgObject.delete();
            msgObject.channel.send(embed)
                .catch(console.error);
        });
    }
}
exports.default = GoldDigger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvZ3VpbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUd0QyxNQUFxQixLQUFLO0lBQTFCO1FBQ3FCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUFrQ3ZDLENBQUM7SUFoQ0csSUFBSTtRQUNBLE9BQU8sNkJBQTZCLENBQUE7SUFDeEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFDbEYsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDeEMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNqRCxJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEcsSUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUduSCxJQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztZQUM1RixJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQzNCLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDakMsY0FBYyxDQUFDLDJMQUEyTCxDQUFDO2lCQUMzTSxRQUFRLENBQUMsUUFBUSxDQUFDO2lCQUNsQixZQUFZLENBQUMsU0FBUyxDQUFDO2lCQUN2QixTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO2lCQUMzQyxZQUFZLEVBQUU7aUJBQ2QsUUFBUSxDQUFDLFNBQVMsRUFBQyw2RkFBNkYsQ0FBQztpQkFDakgsUUFBUSxDQUFDLGlCQUFpQixFQUFFLCtLQUErSyxDQUFDO2lCQUNsTixRQUFRLENBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUM7aUJBQzVDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDO2lCQUM1QyxRQUFRLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUM7aUJBQ3pDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUMzQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLENBQUM7S0FBQTtDQUNKO0FBbkNELHdCQW1DQyJ9