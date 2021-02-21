"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const { Server } = require("http");
class NewCore {
    constructor() {
        this._command = "newcore";
    }
    help() {
        return "This command does absolutely nothing!";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    async runCommand(args, msgObject, client) {
        let iconGuild = msgObject.guild.iconURL;
        let iconClient = client.user.displayAvatarURL;
        let RL_ID = msgObject.author.id;
        let RL = msgObject.guild.members.get(RL_ID);
        let coreName = args.join(` `);
        let coreRoleName = `Core - ${coreName}`
        let coreNameFormatted = coreName.replace(" ","-").toLowerCase();
        let coreChannelName = `💢-${coreNameFormatted}`
        let coreApplyChannel = `apply-${coreNameFormatted}`
        if(!msgObject.member.hasPermission(`MANAGE_ROLES`)){
            msgObject.reply(`Sorry ${msgObject.member}, but you do not have the access required to use this command.`)
            return
        };
        // Create Core Role And Assign The Message Author As The First Member
            await msgObject.guild.createRole({
                name: coreRoleName,
                hoist: false,
                mentionable: true
            }).then(async r => {
                // Adds Message Author As The First Member Of The Newly Created Role
                RL.addRole(r);
            });
        
        // Retrieve Created Role Information
            let CreatedCoreRole = msgObject.guild.roles.find(`name`, coreRoleName)            

        // Create Core Channel And Set Parent Permissions As Default And Then Add The New Role With Permission Overwrites
            await msgObject.guild.createChannel(coreChannelName, `text`).then(async c => {
                await c.setParent(`760983218525962250`);
                await c.lockPermissions();
                await c.overwritePermissions(CreatedCoreRole, {
                    VIEW_CHANNEL: true,
                    SEND_MESSAGES: true,
                    EMBED_LINKS: true,
                    ATTACH_FILES: true,
                    ADD_REACTIONS: true, 
                    READ_MESSAGE_HISTORY: true
                });
            });
        // Create Core Application Channel And Set Parent Permissions As Default
            await msgObject.guild.createChannel(coreApplyChannel, `text`).then(async c => {
                await c.setParent(`780307973175115776`);
                await c.lockPermissions();
                });
        // Retrieve Created Channel Names
            let CreatedCoreChannel = msgObject.guild.channels.find(`name`, coreChannelName)
            let CreatedApplyChannel = msgObject.guild.channels.find(`name`, coreApplyChannel)

        // Send Confirmation Message
            let embed = new Discord.RichEmbed()
               .setTitle(`New Core Group Created!`)
               .setColor(0x7ac8fb)
               .setThumbnail(`attachment://oops.icon.gif`)
               .setFooter(client.user.username, iconGuild)
               .setTimestamp()
               .addField(`Core Role`, CreatedCoreRole)
               .addField(`Core Channels`, `${CreatedCoreChannel}\n${CreatedApplyChannel}`)
            await msgObject.channel.send({embed, files: [{
                attachment: `../src/images/oops.icon.gif`,
                name: `oops.icon.gif`
            }] })
             .catch(console.error); 
        };
    };
// };
exports.default = NewCore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiel90ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy96X3RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsV0FBVztJQUFoQztRQUNxQixhQUFRLEdBQUcsYUFBYSxDQUFBO0lBZTdDLENBQUM7SUFiRyxJQUFJO1FBQ0EsT0FBTyx1Q0FBdUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUMvRSxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUMzQyxJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQzlDLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ3BDLENBQUM7S0FBQTtDQUNKO0FBaEJELDhCQWdCQyJ9