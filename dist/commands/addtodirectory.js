"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class AddToDirectory {
    constructor() {
        this._command = "addtodirectory";
    }
    help() {
        return "Displays The Guild Logo.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    async runCommand(args, msgObject, client) {
        const filter = m => m.author.id === msgObject.author.id;
        msgObject.channel.send(`What is the name of the guild/community?`)
        // msgObject.channel.awaitMessages(m => m.author.id == msgObject.author.id, {max: 1, time: 10000, errors: [`time`]})
        msgObject.channel.awaitMessages(filter, {max: 2, time: 10000, errors: [`time`] })
            .then(
                collected => {const partnerName = collected.first().content},
                // await msgObject.channel.send(`Who is the GM/Owner?`)
            )
            .catch (collected => console.log(`Time Expired! ${collected.size} out of 1`));
   }
}
exports.default = AddToDirectory;