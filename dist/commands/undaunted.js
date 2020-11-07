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
class Undaunted {
    constructor() {
        this._command = "undaunted";
    }
    help() {
        return "Displays Basic Information About Undaunted And Pledges.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let iconGuild = msgObject.guild.iconURL;
            let iconClient = client.user.displayAvatarURL;
            let embed = new Discord.RichEmbed()
                .setTitle(`Undaunted - Dungeons, Pledges, Rewards`)
                .setColor("#000099")
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .setImage(`attachment://undaunted.info.png`);
            msgObject.delete()
                .catch(console.error);
            msgObject.channel.send({ embed, files: [{
                        attachment: `../src/images/undaunted.info.png`,
                        name: `undaunted.info.png`
                    }] })
                .catch(console.error);
        });
    }
}
exports.default = Undaunted;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5kYXVudGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3VuZGF1bnRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDLE1BQXFCLFNBQVM7SUFBOUI7UUFDcUIsYUFBUSxHQUFHLFdBQVcsQ0FBQTtJQThCM0MsQ0FBQztJQTVCRyxJQUFJO1FBQ0EsT0FBTyx5REFBeUQsQ0FBQTtJQUNwRSxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUMvRSxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUN4QyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ2pELElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDM0IsUUFBUSxDQUFDLHdDQUF3QyxDQUFDO2lCQUNyRCxRQUFRLENBQUMsU0FBUyxDQUFDO2lCQUNuQixTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO2lCQUN4QyxZQUFZLEVBQUU7aUJBRWQsUUFBUSxDQUFDLGlDQUFpQyxDQUFDLENBQUE7WUFDaEQsU0FBUyxDQUFDLE1BQU0sRUFBRTtpQkFDYixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDO3dCQUVsQyxVQUFVLEVBQUMsa0NBQWtDO3dCQUM3QyxJQUFJLEVBQUMsb0JBQW9CO3FCQUM1QixDQUFDLEVBQUMsQ0FBQztpQkFDTCxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhCLENBQUM7S0FBQTtDQUNKO0FBL0JELDRCQStCQyJ9