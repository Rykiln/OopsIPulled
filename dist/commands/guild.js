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
class Guild {
    constructor() {
        this._command = "guild";
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
                .setTitle(`Welcome to ${msgObject.guild.name}!`)
                .setDescription(`${msgObject.guild.name} is a Trials guild dedicated to completing all Veteran and HM content while providing training to members who strive to be part of an elite team of raiders.`)
                .setColor(0x7ac8fb)
                .setThumbnail(iconGuild)
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .addField(`Guild Rules`, `- Be Respectful to other guild members, guests, and open chats. Represent the guild well.\n- No Discrimination of any kind.\n- Keep politics and religion out of chat and Discord.\n- Show up, on time and prepared, to events that you sign up for.\n- No selling loot from events. If you need gear, keep it, if you don't, be willing to give it to someone who does.\n- No Backseat Leading. Raid Leaders are in charge of the trial. If you have suggestions that you'd like to bring up, please discuss them with the Raid Leader privately via Discord DM or in-game whisper. This helps keep comms clear and avoids confusion during the trial.
                `)
                .addBlankField()
                .addField(`Let Us Know Who You Are`,`Please change your nickname in Discord to match your in-game name by clicking the dropdown box at the top of the server and selecting "Change Nickname"`)
                .addBlankField()
                .addField(`Acceptance`,`
                By clicking one of the emojis below, you are accepting the guild rules. Doing so will open more Discord channels for you to see and use.\n
                Please click 🔔 if you would like to recieve notifications often regarding guild events, achievements, clears, etc.\n
                Otherwise, click 🚫 if you would prefer less pings. You will still receive pings based on any other roles you are given such as your rank or any special teams that you decide to join.`)
                // .addField("Guild Members", membercount, true)
                // .addField("Discord Guests", guestcount, true)
                // .addField("Officers (Guild Admins)", officersSR.sort(), false)
                // .addField("Raid Leaders", officersJR.sort(), false)
                // .addField("Created On", msgObject.guild.createdAt, true);
            msgObject.channel.send(embed)
                .then(embedMessage => embedMessage.react(`🔔`))
                .then(embedMessage => embedMessage.message.react(`🚫`))
                .then(msg => {msgObject.channel.send(`https://discord.gg/oops-i-pulled`)})
                .catch(console.error);
        });
    }
}
exports.default = Guild;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvZ3VpbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUd0QyxNQUFxQixLQUFLO0lBQTFCO1FBQ3FCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUFrQ3ZDLENBQUM7SUFoQ0csSUFBSTtRQUNBLE9BQU8sNkJBQTZCLENBQUE7SUFDeEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFDbEYsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDeEMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNqRCxJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEcsSUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUduSCxJQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztZQUM1RixJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQzNCLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDakMsY0FBYyxDQUFDLDJMQUEyTCxDQUFDO2lCQUMzTSxRQUFRLENBQUMsUUFBUSxDQUFDO2lCQUNsQixZQUFZLENBQUMsU0FBUyxDQUFDO2lCQUN2QixTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO2lCQUMzQyxZQUFZLEVBQUU7aUJBQ2QsUUFBUSxDQUFDLFNBQVMsRUFBQyw2RkFBNkYsQ0FBQztpQkFDakgsUUFBUSxDQUFDLGlCQUFpQixFQUFFLCtLQUErSyxDQUFDO2lCQUNsTixRQUFRLENBQUMsZUFBZSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUM7aUJBQzVDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDO2lCQUM1QyxRQUFRLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUM7aUJBQ3pDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUMzQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLENBQUM7S0FBQTtDQUNKO0FBbkNELHdCQW1DQyJ9