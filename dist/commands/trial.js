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
class Trial {
    constructor() {
        this._command = "trial"||"trials";
    }
    help() {
        return "Displays Gear Sets That Drop From Specific Trials Or Dungeons";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let iconGuild = msgObject.guild.iconURL;
            let iconClient = client.user.displayAvatarURL;
            let source = (args.join()).toLowerCase() || "";
            let trials = [
                `AA - Aetherian Archive`,
                `AS - Asylum Sanctorium`,
                `CR - Cloudrest`,
                `HOF - Halls Of Fabrication`,
                `HRC - Hel Ra Citadel`,
                `MOL - Maw Of Lorkhaj`,
                `SO - Sanctum Ophidia`,
                `SS - Sunspire`
            ];
            if (!source) {
                let embed_noSource = new Discord.RichEmbed()
                    .setTitle("You Must Chose A Trial")
                    .setDescription(`Please retype the command followed by a space, and then the abbreviations of the trial or dungeon you'd like to know about.\nYou will receive a private message with a list of all possible abbreviations.`)
                    .setColor("FFFF00")
                    .setFooter(client.user.username, iconClient)
                    .setTimestamp()
                    .addField("Example", ".drops MOL");
                let embed_DM = new Discord.RichEmbed()
                    .setTitle("Trial Abbreviations")
                    .setDescription(trials)
                    .setFooter(client.user.username, iconClient)
                    .setTimestamp()
                    .addField(`Command Example`, `.drops MOL`);
                msgObject.channel.send(embed_noSource)
                    .catch(console.error)
                    .then(msg => {
                    msg.delete(20000)
                        .catch(console.error);
                });
                msgObject.author.send(embed_DM)
                    .catch(console.error);
            }
            else {
                let trialname = `Coming Soon`;
                let gearsets = `Coming Soon`;
                let location = `Coming Soon`;
                let motifstyle = `Coming Soon`;
                let cpsetupDPS = `Coming Soon`;
                let cpsetupH = `Coming Soon`;
                let cpsetupMT = `Coming Soon`;
                let cpsetupOT = `Coming Soon`;
                let thumbnail = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab371d58-f694-4953-a2e5-c79acedd9f56/d9j5i6k-e1a85b7d-1621-4e5b-b5cc-4ddea16325db.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FiMzcxZDU4LWY2OTQtNDk1My1hMmU1LWM3OWFjZWRkOWY1NlwvZDlqNWk2ay1lMWE4NWI3ZC0xNjIxLTRlNWItYjVjYy00ZGRlYTE2MzI1ZGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FJwVnTTzBzntxq-t9Lqo8SsyUS0OiGpcwmI99uTul3k"
                let dlcrequired = ` `;
                switch (source) {
                    case "aa":
                    case "naa":
                    case "vaa":
                        trialname = `Aetherian Archive`;
                        location = `Located In Craglorn`;
                        motifstyle = `[Celestial](https://elderscrollsonline.wiki.fextralife.com/Celestial+Style)`;
                        thumbnail = `../src/images/aetherianarchive.jpg`;
                        gearsets = `[Defending Warrior](https://eso-sets.com/set/defending-warrior)
                        [Healing Mage](https://eso-sets.com/set/healing-mage)
                        [Quick Serpent](https://eso-sets.com/set/quick-serpent)
                        [Eternal Warrior](https://eso-sets.com/set/eternal-warrior)
                        [Infalliable Mage](https://eso-sets.com/set/infallible-mage)
                        [Vicious Serpent](https://eso-sets.com/set/vicious-serpent)`;
                        cpsetupDPS = `72 Ironclad\n68 Spellshield\n64 Elemental Defender\n66 Thick Skinned`;
                        cpsetupH = `72 Ironclad\n68 Spellshield\n64 Elemental Defender\n66 Thick Skinned`;
                        cpsetupMT = `81 / 81 Ironclad\n44 / 56 Hardy\n56 / 56 Elemental Defender\n66 / 40 Thick Skinned\n24 / 0 Heavy Armor Focus\n0 / 37 Medium Armor Focus`;
                        break;
                    case "hrc":
                    case "nhrc":
                    case "vhrc":
                        trialname = `Hel Ra Citadel`;
                        location = `Located In Craglorn`;
                        motifstyle = `[Celestial](https://elderscrollsonline.wiki.fextralife.com/Celestial+Style)`;
                        thumbnail = `../src/images/helracitadel.jpg`;
                        gearsets = `[Destructive Mage](https://eso-sets.com/set/destructive-mage)
                        [Poisonous Serpent](https://eso-sets.com/set/poisonous-serpent)
                        [Berserking Warrior](https://eso-sets.com/set/berserking-warrior)
                        [Eternal Warrior](https://eso-sets.com/set/eternal-warrior)
                        [Infalliable Mage](https://eso-sets.com/set/infallible-mage)
                        [Vicious Serpent](https://eso-sets.com/set/vicious-serpent)`;
                        cpsetupDPS = `81 Ironclad\n16 Spellshield\n56 Hardy\n56 Elemental Defender\n61 Thick Skinned`;
                        cpsetupH = `81 Ironclad\n16 Light Armor Focus\n56 Hardy\n56 Elemental Defender\n61 Thick Skinned`;
                        cpsetupMT = `81 Ironclad\n64 Hardy\n43 Elemental Defender\n66 Thick Skinned\n16 Heavy Armor Focus`;
                        break;
                    case "so":
                    case "nso":
                    case "vso":
                        trialname = `Sanctum Ophidia`;
                        location = `Located In Craglorn`;
                        motifstyle = `[Celestial](https://elderscrollsonline.wiki.fextralife.com/Celestial+Style)`;
                        thumbnail = `../src/images/sanctumophidia.png`;
                        gearsets = `[Immortal Warrior](https://eso-sets.com/set/immortal-warrior)
                        [Twice-Fanged Serpent](https://eso-sets.com/set/twice-fanged-serpent)
                        [Wise Mage](https://eso-sets.com/set/wise-mage)
                        [Eternal Warrior](https://eso-sets.com/set/eternal-warrior)
                        [Infalliable Mage](https://eso-sets.com/set/infallible-mage)
                        [Vicious Serpent](https://eso-sets.com/set/vicious-serpent)`;
                        cpsetupDPS = `72 Ironclad\n25 Light/Medium Armor Focus\n64 Hardy\n43 Elemental Defender\n66 Thick Skinned`;
                        cpsetupH = `72 Ironclad\n25 Light Armor Focus\n64 Hardy\n43 Elemental Defender\n66 Thick Skinned`;
                        cpsetupMT = `81 Ironclad\n64 Hardy\n43 Elemental Defender\n66 Thick Skinned\n16 Quick Recovery`;
                        break;
                    case "mol":
                    case "nmol":
                    case "vmol":
                        trialname = `Maw Of Lorkhaj`;
                        location = `Located In Reaper's March`;
                        motifstyle = `[Dro-m'Athra](https://elderscrolls.fandom.com/wiki/Dro-m%27Athra_Style)`;
                        thumbnail = `../src/images/mawoflorkhaj.png`;
                        gearsets = `[Lunar Bastion](https://eso-sets.com/set/lunar-bastion)
                        [Moondancer](https://eso-sets.com/set/moondancer)
                        [Roar Of Alkosh](https://eso-sets.com/set/roar-of-alkosh)
                        [Twilight Remedy](https://eso-sets.com/set/twilight-remedy)`;
                        dlcrequired = ` (Thieves Guild DLC Required)`;
                        cpsetupDPS = `72 Ironclad\n49 Spellshield\n19 Hardy\n64 Elemental Defender\n66 Thick Skinned`;
                        cpsetupH = `72 Ironclad\n49 Spellshield\n19 Hardy\n64 Elemental Defender\n66 Thick Skinned`;
                        cpsetupMT = `81 Ironclad\n3 / 16 Spellshield\n37 / 43 Hardy\n64 Elemental Defender\n66 Thick Skinned\n19 / 0 Quick Recovery`;
                        break;
                    case "hof":
                    case "nhof":
                    case "vhof":
                        trialname = `Halls Of Fabrication`;
                        location = `Located In Vvardenfell`;
                        motifstyle = `[Refabricated](https://elderscrollsonline.wiki.fextralife.com/Refabricated+Style)`;
                        thumbnail = `../src/images/hallsoffabrication.jpg`;
                        gearsets = `[Automated Defense](https://eso-sets.com/set/automated-defense)
                        [Inventor's Guard](https://eso-sets.com/set/inventors-guard)
                        [Master Architect](https://eso-sets.com/set/master-architect)
                        [War Machine](https://eso-sets.com/set/war-machine)`;
                        dlcrequired = ` (Morrowind DLC Required)`;
                        cpsetupDPS = `81 Ironclad\n10 Light/Medium Armor Focus\n49 Hardy\n49 Elemental Defender\n81 Thick Skinned`;
                        cpsetupH = `81 Ironclad\n10 Light Armor Focus\n49 Hardy\n49 Elemental Defender\n81 Thick Skinned`;
                        cpsetupMT = `81 Ironclad\n56 Hardy\n56 Elemental Defender\n66 Thick Skinned\n11 Heavy Armor Focus`;
                        break;
                    case "as":
                    case "nas":
                    case "vas":
                        trialname = `Asylum Sanctorium`;
                        location = `Located In Clockwork City`;
                        motifstyle = `NONE`;
                        thumbnail = `../src/images/asylumsanctorium.jpg`;
                        gearsets = `[Chaotic Whirlwind](https://eso-sets.com/set/chaotic-whirlwind)  [[Perfected]](https://eso-sets.com/set/chaotic-whirlwind-perfected-)
                        [Concentrated Force](https://eso-sets.com/set/concentrated-force-imperfect-)  [[Perfected]](https://eso-sets.com/set/concentrated-force-perfected-)
                        [Defensive Position](https://eso-sets.com/set/defensive-position)  [[Perfected]](https://eso-sets.com/set/defensive-position-perfected-)
                        [Disciplined Slash](https://eso-sets.com/set/disciplined-slash)  [[Perfected]](https://eso-sets.com/set/disciplined-slash-perfected-)
                        [Piercing Spray](https://eso-sets.com/set/piercing-spray-imperfected-)  [[Perfected]](https://eso-sets.com/set/piercing-spray-perfected-)
                        [Timeless Blessing](https://eso-sets.com/set/timeless-blessing)  [[Perfected]](https://eso-sets.com/set/timeless-blessing-perfected-)`;
                        dlcrequired = `- Clockwork City DLC`;
                        cpsetupDPS = `81 Ironclad\n81 Spellshield\n64 Elemental Defender\n44 Thick Skinned`;
                        cpsetupH = `81 Ironclad\n27 Spellshield\n37 Hardy\n64 Elemental Defender\n61 Thick Skinned`;
                        cpsetupMT = `81 Ironclad\n56 / 37 Hardy\n56 / 64 Elemental Defender\n51 / 44 Thick Skinned\n26 / 1 Heavy Armor Focus\n0 / 43 Quick Recovery`;
                        break;
                    case "cr":
                    case "ncr":
                    case "vcr":
                        trialname = `Cloudrest`;
                        location = `Located In Summerset`;
                        motifstyle = `[Welkynar](https://elderscrollsonline.wiki.fextralife.com/Welkynar+Style)`;
                        thumbnail = `../src/images/cloudrest.jpg`;
                        gearsets = `[Aegis of Galenwe](https://eso-sets.com/set/aegis-of-galenwe)  [[Perfected]](https://eso-sets.com/set/perfect-aegis-of-galenwe)
                        [Arms of Relequen](https://eso-sets.com/set/arms-of-relequen)  [[Perfected]](https://eso-sets.com/set/perfect-arms-of-relequen)
                        [Mantle of Siroria](https://eso-sets.com/set/mantle-of-siroria)  [[Perfected]](https://eso-sets.com/set/perfect-mantle-of-siroria)
                        [Vestment of Olorime](https://eso-sets.com/set/vestment-of-olorime)  [[Perfected]](https://eso-sets.com/set/perfect-vestment-of-olorime)`;
                        dlcrequired = ` (Summerset DLC Required)`;
                        cpsetupDPS = `66 Ironclad\n51 Spellshield\n64 Elemental Defender\n66 Thick Skinned\n23 Quick Recovery`;
                        cpsetupH = `66 Ironclad\n55 Spellshield\n64 Elemental Defender\n66 Thick Skinned\n19 Quick Recovery`;
                        cpsetupMT = `81 / 81 Ironclad\n1 / 0 Spellshield\n64 Elemental Defender\n81 / 66 Thick Skinned\n43 / 43 Quick Recovery\n0 / 16 Heavy Armor Focus`;
                        break;
                    case "ss":
                    case "nss":
                    case "vss":
                        trialname = `Sunspire`;
                        location = `Located In Northern Elswyr`;
                        motifstyle = `[Sunspire](https://elderscrollsonline.wiki.fextralife.com/Sunspire+Style)`;
                        thumbnail = `../src/images/sunspire.png`;
                        gearsets = `[Claw of Yolnahkriin](https://eso-sets.com/set/claw-of-yolnahkriin)  [[Perfected]](https://eso-sets.com/set/perfected-claw-of-yolnahkriin)
                        [Tooth of Lokkestiiz](https://eso-sets.com/set/tooth-of-lokkestiiz)  [[Perfected]](https://eso-sets.com/set/perfected-tooth-of-lokkestiiz)
                        [False God's Devotion](https://eso-sets.com/set/false-gods-devotion)  [[Perfected]](https://eso-sets.com/set/perfected-false-gods-devotion)
                        [Eye of Nahviintaas](https://eso-sets.com/set/eye-of-nahviintaas)  [[Perfected]](https://eso-sets.com/set/perfected-eye-of-nahviintaas)`;
                        dlcrequired = ` (Elswyr DLC Required)`;
                        cpsetupDPS = `81 Ironclad\n42 Spellshield\n56 Elemental Defender\n72 Thick Skinned\n19 Quick Recovery`;
                        cpsetupH = `81 Ironclad\n42 Spellshield\n56 Elemental Defender\n72 Thick Skinned\n19 Quick Recovery`;
                        cpsetupMT = `81 Ironclad\n43 Hardy\n49 Elemental Defender\n81 Thick Skinned\n16 Heavy Armor Focus`;
                        break;
                    case "ka":
                    case "nka":
                    case "vka":
                        trialname = `Kyne's Aegis`;
                        location = `Located In Western Skyrim`;
                        motifstyle = `[Sea Giant](https://en.uesp.net/wiki/Online:Sea_Giant_Style)`;
                        thumbnail = `../src/images/kynesaegis.jpg`;
                        gearsets = `[Kyne's Wind](https://eso-sets.com/set/kynes-wind)  [[Perfected]](https://eso-sets.com/set/perfect-kynes-wind)
                        [Roaring Opportunist](https://eso-sets.com/set/roaring-opportunist)  [[Perfected]](https://eso-sets.com/set/perfect-roaring-opportunist)
                        [Vrol's Command](https://eso-sets.com/set/vrols-command)  [[Perfected]](https://eso-sets.com/set/perfect-vrols-command)
                        [Yandir's Might](https://eso-sets.com/set/yandirs-might)  [[Perfected]](https://eso-sets.com/set/perfect-yandirs-might)`;
                        dlcrequired = ` (Greymoor DLC Required)`;
                        cpsetupDPS = `73 Ironclad\n54 Spellshield\n27 Hardy\n64 Elemental Defender\n37 Thick Skinned\n15 Quick Recovery`;
                        cpsetupH = `73 Ironclad\n54 Spellshield\n27 Hardy\n64 Elemental Defender\n37 Thick Skinned\n15 Quick Recovery`;
                        cpsetupMT = `81 Ironclad\n64 Hardy\n37 Elemental Defender\n68 Thick Skinned\n11 Quick Recovery\n11 Heavy Armor Focus`;
                        break;
                    default:
                        trialname = `Coming Soon`;
                        gearsets = `Coming Soon`;
                        break;
                }
                let embed = new Discord.RichEmbed()
                    .setTitle(`Trial: ${trialname}`)
                    .setDescription(`${location}${dlcrequired}`)
                    .setFooter(client.user.username, iconClient)
                    .setTimestamp()
                    .addField("Gear Sets", gearsets, true)
                    .addField("Motif Style", motifstyle, true)
                    .addField("CP Distribution For Main Tank / Off Tank", cpsetupMT)
                    .addField("CP Distribution For Healers", cpsetupH, true)
                    .addField("CP Distribution For Damage Dealers", cpsetupDPS, true);
                msgObject.channel.send({files: [thumbnail]})
                    .then(msg => {msgObject.channel.send(embed)})
                    .catch(console.error);
            }
        });
    }
}
exports.default = Trial;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvZHJvcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUl0QyxNQUFxQixLQUFLO0lBQTFCO1FBQ3FCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUF3SXZDLENBQUM7SUF0SUcsSUFBSTtRQUNBLE9BQU8sK0RBQStELENBQUE7SUFDMUUsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFDL0UsSUFBSSxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDeEMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUM5QyxJQUFJLE1BQU0sR0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUN2RCxJQUFJLE1BQU0sR0FBYTtnQkFDbkIsd0JBQXdCO2dCQUN4Qix3QkFBd0I7Z0JBQ3hCLGdCQUFnQjtnQkFDaEIsNEJBQTRCO2dCQUM1QixzQkFBc0I7Z0JBQ3RCLHNCQUFzQjtnQkFDdEIsc0JBQXNCO2dCQUN0QixlQUFlO2FBQ2xCLENBQUE7WUFDRCxTQUFTLENBQUMsTUFBTSxFQUFFO2lCQUNiLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDVCxJQUFJLGNBQWMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7cUJBQ3ZDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQztxQkFDbEMsY0FBYyxDQUFDLDRNQUE0TSxDQUFDO3FCQUM1TixRQUFRLENBQUMsUUFBUSxDQUFDO3FCQUNsQixTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDO3FCQUMzQyxZQUFZLEVBQUU7cUJBQ2QsUUFBUSxDQUFDLFNBQVMsRUFBQyxZQUFZLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO3FCQUNqQyxRQUFRLENBQUMscUJBQXFCLENBQUM7cUJBQy9CLGNBQWMsQ0FBQyxNQUFNLENBQUM7cUJBQ3RCLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUM7cUJBQzNDLFlBQVksRUFBRTtxQkFDZCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLENBQUE7Z0JBRzlDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztxQkFDakMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7cUJBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDWCxHQUF1QixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7eUJBQ2pDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO2dCQUNILFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztxQkFDMUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QjtpQkFDSTtnQkFDRCxJQUFJLFNBQVMsR0FBRyxhQUFhLENBQUM7Z0JBQzlCLElBQUksUUFBUSxHQUFHLGFBQWEsQ0FBQztnQkFDN0IsSUFBSSxXQUFXLEdBQUcsNkJBQTZCLENBQUM7Z0JBQ2hELFFBQU8sTUFBTSxFQUFDO29CQUNWLEtBQUssSUFBSTt3QkFDTCxTQUFTLEdBQUcsbUJBQW1CLENBQUM7d0JBQ2hDLFFBQVEsR0FBRzs7Ozs7b0ZBS3FELENBQUM7d0JBQ2pFLE1BQU07b0JBQ1YsS0FBSyxLQUFLO3dCQUNOLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQzt3QkFDOUIsUUFBUSxHQUFHOzs7OztvRkFLcUQsQ0FBQzt3QkFDakUsTUFBTTtvQkFDVixLQUFLLElBQUk7d0JBQ0wsU0FBUyxHQUFHLGlCQUFpQixDQUFDO3dCQUM5QixRQUFRLEdBQUc7Ozs7O29GQUtxRCxDQUFDO3dCQUNqRSxNQUFNO29CQUNWLEtBQUssS0FBSzt3QkFDTixTQUFTLEdBQUcsZ0JBQWdCLENBQUM7d0JBQzdCLFFBQVEsR0FBRzs7O29GQUdxRCxDQUFDO3dCQUNqRSxXQUFXLEdBQUcsNEJBQTRCLENBQUM7d0JBQzNDLE1BQU07b0JBQ1YsS0FBSyxLQUFLO3dCQUNOLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQzt3QkFDbkMsUUFBUSxHQUFHOzs7NEVBRzZDLENBQUM7d0JBQ3pELFdBQVcsR0FBRyx3QkFBd0IsQ0FBQzt3QkFDdkMsTUFBTTtvQkFDVixLQUFLLElBQUk7d0JBQ0wsU0FBUyxHQUFHLG1CQUFtQixDQUFDO3dCQUNoQyxRQUFRLEdBQUc7Ozs7O3dGQUt5RCxDQUFDO3dCQUNyRSxXQUFXLEdBQUcsNkJBQTZCLENBQUM7d0JBQzVDLE1BQU07b0JBQ1YsS0FBSyxJQUFJO3dCQUNMLFNBQVMsR0FBRyxXQUFXLENBQUM7d0JBQ3hCLFFBQVEsR0FBRzs7OzRGQUc2RCxDQUFDO3dCQUN6RSxXQUFXLEdBQUcsd0JBQXdCLENBQUM7d0JBQ3ZDLE1BQU07b0JBQ1YsS0FBSyxJQUFJO3dCQUNMLFNBQVMsR0FBRyxVQUFVLENBQUM7d0JBQ3ZCLFFBQVEsR0FBRyxhQUFhLENBQUM7d0JBQ3pCLFdBQVcsR0FBRyxRQUFRLENBQUM7b0JBQzNCO3dCQUNJLFNBQVMsR0FBRyxhQUFhLENBQUM7d0JBQzFCLFFBQVEsR0FBRyxhQUFhLENBQUM7d0JBQ3pCLE1BQU07aUJBQ2I7Z0JBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO3FCQUM5QixRQUFRLENBQUMsVUFBVSxTQUFTLEVBQUUsQ0FBQztxQkFDL0IsY0FBYyxDQUFDLFdBQVcsQ0FBQztxQkFDM0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQztxQkFDM0MsWUFBWSxFQUFFO3FCQUNkLFFBQVEsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUE7Z0JBQ3BDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztxQkFDeEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM3QjtRQUNMLENBQUM7S0FBQTtDQUNKO0FBeklELHdCQXlJQyJ9