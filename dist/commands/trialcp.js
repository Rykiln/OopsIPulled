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
class TrialCP {
    constructor() {
        this._command = "trialcp";
    }
    help() {
        return "Displays Red CP Distribution For Each Trial.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let iconGuild = msgObject.guild.iconURL;
            let iconClient = client.user.displayAvatarURL;
            let embed = new Discord.RichEmbed()
                .setTitle(`Trial Champion Points`)
                .setColor(`#000099`)
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .addField(`Aetherian Archive`, `72 Ironclad, 57 Spellshield, 66 Thick Skinned, 75 Elemental Defender`)
                .addField(`Asylum Sanctorium`, `81 Ironclad, 70 Spellshield,  44 Thick Skinned, 75 Elemental Defender`)
                .addField(`Cloudrest`, `66 Ironclad, 40 Spellshield, 66 Thick Skinned, 75 Elemental Defender, 23 Quick Recovery`)
                .addField(`Halls of Fabrication`, `72 Ironclad, 56 Hardy, 66 Thick Skinned, 56 Elemental Defender, 20 Light Armor Focus`)
                .addField(`Hel Ra Citadel`, `81 Ironclad, 16 Spellshield, 56 Hardy, 61 Thick Skinned, 56 Elemental Defender`)
                .addField(`Maw of Lorkhaj`, `72 Ironclad, 38 Spell Shield, 19 Hardy, 66 ThickSkinned, 75 Elemental Defender`)
                .addField(`Sanctum Ophidia`, `72 Ironclad, 64 Hardy, 66 ThickSkinned, 43 Elemental Defender, 25 LightArmorFocus`)
                .addField(`Sunspire`, `56 Ironclad, 43 Spell Shield, 32 Hardy, 56 ThickSkinned, 56 Elemental Defender, 27 Quick Recovery`);
            msgObject.channel.send(embed)
                .catch(console.error);
        });
    }
}
exports.default = TrialCP;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpYWxjcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy90cmlhbGNwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsT0FBTztJQUE1QjtRQUNxQixhQUFRLEdBQUcsU0FBUyxDQUFBO0lBOEJ6QyxDQUFDO0lBNUJHLElBQUk7UUFDQSxPQUFPLDhDQUE4QyxDQUFBO0lBQ3pELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBQy9FLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzNDLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDOUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUM5QixRQUFRLENBQUMsdUJBQXVCLENBQUM7aUJBQ2pDLFFBQVEsQ0FBQyxTQUFTLENBQUM7aUJBQ25CLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUM7aUJBQzNDLFlBQVksRUFBRTtpQkFFcEIsUUFBUSxDQUFDLG1CQUFtQixFQUFFLHNFQUFzRSxDQUFDO2lCQUMvRixRQUFRLENBQUMsbUJBQW1CLEVBQUUsdUVBQXVFLENBQUM7aUJBQ3RHLFFBQVEsQ0FBQyxXQUFXLEVBQUUseUZBQXlGLENBQUM7aUJBQ2hILFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxzRkFBc0YsQ0FBQztpQkFDeEgsUUFBUSxDQUFDLGdCQUFnQixFQUFFLGdGQUFnRixDQUFDO2lCQUM1RyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsZ0ZBQWdGLENBQUM7aUJBQ2xILFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxtRkFBbUYsQ0FBQztpQkFDaEgsUUFBUSxDQUFDLFVBQVUsRUFBRSxtR0FBbUcsQ0FBQyxDQUFDO1lBQ3pILFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDM0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDO0tBQUE7Q0FDSjtBQS9CRCwwQkErQkMifQ==