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
class Nirn {
    constructor() {
        this._command = "nirn";
    }
    help() {
        return "Displays A Map Of Nirn.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let iconGuild = msgObject.guild.iconURL;
            let iconClient = client.user.displayAvatarURL;
            let embed = new Discord.RichEmbed()
                .setTitle(`Map of Nirn`)
                .setColor("#000099")
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .setImage(`https://images-ext-2.discordapp.net/external/eprQ71nycmBcooJNaVpvzTfVpUF4sN3BdhyNnFP7iJw/https/img00.deviantart.net/8326/i/2017/315/d/9/the_elder_scrolls__world_map_of_nirn_by_okiir-dbgnkci.png?width=1006&height=663`);
            msgObject.channel.send(embed)
                .catch(console.error);
        });
    }
}
exports.default = Nirn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmlybi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9uaXJuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsSUFBSTtJQUF6QjtRQUNxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBc0J0QyxDQUFDO0lBcEJHLElBQUk7UUFDQSxPQUFPLHlCQUF5QixDQUFBO0lBQ3BDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBQy9FLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzNDLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDOUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUMzQixRQUFRLENBQUMsYUFBYSxDQUFDO2lCQUMxQixRQUFRLENBQUMsU0FBUyxDQUFDO2lCQUNuQixTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO2lCQUMzQyxZQUFZLEVBQUU7aUJBQ2QsUUFBUSxDQUFDLHlOQUF5TixDQUFDLENBQUM7WUFDN08sU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUMzQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLENBQUM7S0FBQTtDQUNKO0FBdkJELHVCQXVCQyJ9