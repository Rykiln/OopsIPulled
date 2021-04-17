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
class ConfigGuildBankRules {
    constructor() {
        this._command = "configguildbankrules";
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
            let embed = new Discord.RichEmbed()
                .setTitle(`Bank Rules`)
                .setDescription(`<a:check_yes:739549432659312751> Take What You Need For Your Character/Account\n<a:check_yes:739549432659312751> Split And Return Excess Items When Taking Stacked Items\n\n<a:check_no:739549433066291241> Do Not Take More Than You'll Use\n<a:check_no:739549433066291241> Do Not Take Items To Sell Them On Guild Stores\n<a:check_no:739549433066291241> Do Not Take Items Without Depositing SOMETHING (at least a little gold, if you have no items of value. Does not have to equal cost of items taken.)\n<a:check_no:739549433066291241> Do Not Take GOLD ITEMS Without First Asking An Officer`)
                .setColor(0x7ac8fb)
                // .setThumbnail(iconGuild)
                .setFooter(client.user.username, iconClient)
                .setTimestamp()
                .addField (`Acceptable Donation Items`,`\`\`\`diff\n+ Crafting Motifs/Recipes/Furnishings\n+ Crafting Master Writs\n+ Collectable Item Rune Boxes\n+ CP160 Foods/Drinks(Bi-Stat, Tri-Stat, Legendary)\n+ CP160 Crafted Potions (Spell Power, Weapon Power, Tri-Stat, Double HoT, Heroism)\n+ CP160 Crafted Poisons (Double DoT)\n+ CP160 Intricate Items And Enchantement Glyphs For Deconstructions\n+ CP160 Overworld Gear Sets (Mother's Sorrow, Akaviri Dragonguard, etc)\`\`\``)
                .addField (`Unwanted Donation Items`,`\`\`\`diff\n- World Dropped Food/Drink\n- World Dropped Potions/Poisons\n- Low Level Food/Drink\n- Low Level Potions/Poisons\n- Low Level Gear/Jewelry/Enchantments\`\`\``)
                .addField (`Alternate Options`,`\`\`\`ini\n[Sell unwanted desirable items in our guild store. Make money off your trash and help the guild at the same time]\`\`\``)
                .addField(`Acceptance`,`By Clicking the ✅ emoji below, you are accepting the guild bank rules. This will automatically assign you the role "Pending Bank Access". Our officers will periodically review all members with this role and grant access to those that we are comfortable giving access to based on our interactions with you in chats and events.`)
            msgObject.delete();
            msgObject.channel.send(embed)
                .catch(console.error);
        });
    }
}
exports.default = ConfigGuildBankRules;