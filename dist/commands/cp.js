"use strict";

const Discord = require("discord.js");
const ESOUPresets = require("../cpcalculator/ESOUPresets").default;

const TRIALS_BY_ABBREVIATION = {
    "aa": "Aetherian Archive",
    "as": "Asylum Sanctorium",
    "brp": "Blackrose Prison",
    "cr": "Cloudrest",
    "dsa": "Dragonstar Arena",
    "hof": "Halls of Fabrication",
    "hrc": "Hel Ra Citadel",
    "ka": "Kyne's Aegis",
    "ma": "Maelstrom Arena",
    "mol": "Maw of Lorkhaj",
    "so": "Sanctum Ophidia",
    "ss": "Sunspire",
    "vh": "Vateshran Hollows"
}

class CP {
    constructor() {
        this._command = "cp";
    }

    help() {
        return "DMs Red And Green CP Builds Distributed Based On Your CP Level";
    }

    isThisCommand(command) {
        return command === this._command;
    }

    runCommand(args, msgObject, client) {
        const trial = this.normalizeTrialAbbreviation(args[0] || "");
        const cpInput = parseInt(args[1]) || 810;
        const cpLevel = Math.min(Math.max(cpInput, 0), 810); // Constrain CP between 0 and 810.

        if (!trial) {
            const invalidInputResponse = new Discord.RichEmbed()
                .setTitle("Invalid Trial")
                .setDescription("Please retype the command, followed by the abbreviation of the trial or arena you want CP builds for, and optionally your current CP level")
                .setColor("FFFF00")
                .setFooter(client.user.username, client.user.displayAvatarURL)
                .setTimestamp()
                .addField("Example", "`.cp KA`, `.cp KA 600`")
                .addField("Trial Abbreviations", `
                    AA - Aetherian Archive
                    AS - Asylum Sanctorium
                    BRP - Blackrose Prison
                    CR - Cloudrest
                    DSA - Dragonstar Arena
                    HOF - Halls of Fabrication
                    HRC - Hel Ra Citadel
                    KA - Kyne's Aegis
                    MA - Maelstrom Arena
                    MOL - Maw of Lorkhaj
                    SO - Sanctum Ophidia
                    SS - Sunspire
                    VH - Vateshran Hollows
                `);
            msgObject.author.send(invalidInputResponse)
                .catch(console.error);
        } else {
            const presets = ESOUPresets[trial];
            const cpResponse = new Discord.RichEmbed()
                .setTitle(TRIALS_BY_ABBREVIATION[trial])
                .setColor("FFFF00")
                .setFooter(client.user.username, client.user.displayAvatarURL)
                .setTimestamp();
            for (const preset of presets) {
                cpResponse.addField(preset.name, preset.calculateCp(cpLevel), true);
            }
            msgObject.author.send(cpResponse)
                .catch(console.error);
        }

        msgObject.delete()
            .catch(console.error);
    }

    normalizeTrialAbbreviation(trial) {
        switch (trial.toLowerCase()) {
            case "aa":
            case "naa":
            case "vaa":
                return "aa";
            case "as":
            case "nas":
            case "vas":
                return "as";
            case "brp":
            case "nbrp":
            case "vbrp":
                return "brp";
            case "cr":
            case "ncr":
            case "vcr":
                return "cr";
            case "dsa":
            case "ndsa":
            case "vdsa":
                return "dsa";
            case "hof":
            case "nhof":
            case "vhof":
                return "hof";
            case "hrc":
            case "nhrc":
            case "vhrc":
                return "hrc";
            case "ka":
            case "nka":
            case "vka":
                return "ka";
            case "ma":
            case "nma":
            case "vma":
                return "ma";
            case "mol":
            case "nmol":
            case "vmol":
                return "mol";
            case "so":
            case "nso":
            case "vso":
                return "so";
            case "ss":
            case "nss":
            case "vss":
                return "ss";
            case "vh":
            case "nvh":
            case "vvh":
                return "vh";
            default:
                return null;
        }
    }
}

exports.default = CP;