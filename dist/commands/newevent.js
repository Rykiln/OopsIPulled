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
class NewEvent {
    constructor() {
        this._command = "newevent";
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
            const filter = (msg) => msg.author.id === msgObject.author.id;
            msgObject.reply(`What is the Event Called?`);
            msgObject.channel.awaitMessages(filter, {
                max: 1,
                time: 10000
            }).then(collected => {
                if (collected.first().content === `cancel`) {
                    return msgObject.reply(`Cancelled!`);
                }
                newEventName = collected.first().content;
                msgObject.reply(`What Day is the Event?`);
                msgObject.channel.awaitMessages(filter, {
                    max: 1,
                    time: 10000
                }).then(collected => {
                    if (collected.first().content === `cancel`) {
                        return msgObject.reply(`Cancelled!`);
                    }
                    newEventDay = collected.first().content;
                    let embed = new Discord.RichEmbed()
                        .setTitle(newEventName)
                        .setColor(`#000099`)
                        .setFooter(client.user.username, iconClient)
                        .setTimestamp()
                        .setDescription(`Description`)
                        .addField(`Day`, `NoDaySet`);
                    msgObject.delete()
                        .catch(console.error);
                    msgObject.channel.send(embed)
                        .catch(console.error);
                });
            });
        });
    }
}
exports.default = NewEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3ZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvbmV3ZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUl0QyxNQUFxQixRQUFRO0lBQTdCO1FBQ3FCLGFBQVEsR0FBRyxVQUFVLENBQUE7SUE4Q3pDLENBQUMsQUFBRDtJQTVDRyxJQUFJO1FBQ0EsT0FBTyx1Q0FBdUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUMvRSxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUMzQyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBRTNDLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBaUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDNUYsU0FBUyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQzdDLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtnQkFDcEMsR0FBRyxFQUFFLENBQUM7Z0JBQ04sSUFBSSxFQUFFLEtBQUs7YUFDZCxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNoQixJQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFDO29CQUN0QyxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ3hDO2dCQUNMLFlBQVksR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUN6QyxTQUFTLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7Z0JBQzFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtvQkFDcEMsR0FBRyxFQUFFLENBQUM7b0JBQ04sSUFBSSxFQUFFLEtBQUs7aUJBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtvQkFDaEIsSUFBRyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBQzt3QkFDdEMsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUN4QztvQkFDTCxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDeEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO3lCQUM5QixRQUFRLENBQUMsWUFBWSxDQUFDO3lCQUN0QixRQUFRLENBQUMsU0FBUyxDQUFDO3lCQUNuQixTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO3lCQUMzQyxZQUFZLEVBQUU7eUJBQ2QsY0FBYyxDQUFDLGFBQWEsQ0FBQzt5QkFDN0IsUUFBUSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDakMsU0FBUyxDQUFDLE1BQU0sRUFBRTt5QkFDYixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMxQixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7eUJBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFCLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQyxDQUFBLENBQUE7UUFDTCxDQUFDO0tBQUE7Q0FBQTtBQS9DRCwyQkErQ0MifQ==