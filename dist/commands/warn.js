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
class testCommand {
    constructor() {
        this._command = "testcommand";
    }
    help() {
        return "ADMIN - Warns A Mentioned User Of A Rule Violation.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let modRole = msgObject.guild.roles.find("name", "Officers");
            if (msgObject.member.roles.has(modRole.id)) {
                let User_Warn = msgObject.guild.member(msgObject.mentions.users.first() || msgObject.guild.members.get(args[0]));
                let Reason = args.join(" ").slice(22);
                let Channel_Rules = msgObject.guild.channels.find('name', "rules-and-guidelines");
                let Embed_Warning = new Discord.RichEmbed()
                    .setAuthor(msgObject.guild.name, msgObject.guild.iconURL)
                    .setTitle("Warning")
                    .setDescription(User_Warn)
                    .setColor("#FFFF00")
                    .setTimestamp()
                    .addField("Reported For Violation", Reason)
                    .addBlankField(true)
                    .addField("Please Review The Guild Rules", Channel_Rules);
                let Channel_MemberLog = msgObject.guild.channels.find(`name`, "member-logs");
                msgObject.delete().catch(O_o => { });
                Channel_MemberLog.send(Embed_Warning)
                    .catch(console.error);
                User_Warn.send(Embed_Warning)
                    .catch(console.error);
            }
            else {
                msgObject.reply("You don't have access to use this command");
            }
        });
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Fybi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy93YXJuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsV0FBVztJQUFoQztRQUNxQixhQUFRLEdBQUcsYUFBYSxDQUFBO0lBb0M3QyxDQUFDO0lBbENHLElBQUk7UUFDQSxPQUFPLHFEQUFxRCxDQUFBO0lBQ2hFLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBQy9FLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDaEUsSUFBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMxQyxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFakgsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztnQkFDbEYsSUFBSSxhQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO3FCQUN0QyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7cUJBQ3hELFFBQVEsQ0FBQyxTQUFTLENBQUM7cUJBQ25CLGNBQWMsQ0FBQyxTQUFTLENBQUM7cUJBQ3pCLFFBQVEsQ0FBQyxTQUFTLENBQUM7cUJBRW5CLFlBQVksRUFBRTtxQkFDZCxRQUFRLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDO3FCQUMxQyxhQUFhLENBQUMsSUFBSSxDQUFDO3FCQUNuQixRQUFRLENBQUMsK0JBQStCLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBQzlELElBQUksaUJBQWlCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFFN0UsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUEsRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO3FCQUNuQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztxQkFDM0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2QjtpQkFBTTtnQkFBQyxTQUFTLENBQUMsS0FBSyxDQUFFLDJDQUEyQyxDQUFDLENBQUE7YUFBQztRQUN2RSxDQUFDO0tBQUE7Q0FDSjtBQXJDRCw4QkFxQ0MifQ==