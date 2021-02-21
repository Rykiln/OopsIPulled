"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const ConfigFile = require("../config");
const commands = ConfigFile.config.commands
class Help {
    constructor() {
        this._command = "help";
    }
    help() {
        return "This Displays This Commands Menu";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    async runCommand(args, msgObject, client){
        let iconClient = client.user.displayAvatarURL;
        for (const commandClass of commands){
            try {
                console.log(commandClass);
                // let embed = new Discord.RichEmbed()
                //     .setTitle(`Command Help For Oops I Pulled Bot`)
                //     .setColor(`0xFF9900`)
                //     .setThumbnail(`attachment://oops.icon.gif`)
                //     .setFooter(client.user.username, iconClient)
                //     .setTimeStamp()
                //     .addField(commandClass ,true)
                //     .addField(`test`,true)
                    // await msgObject.channel.send({ embed, files: [{
                        // attachment: `../src/images/oops.icon.gif`,
                        // name: `oops.icon.gif`
                    // }]});
            }
            catch{console.log("error")}
            // catch{msgObject.reply(`An Error Has Occured`)};
        };
        
    }
}
exports.default = Help;