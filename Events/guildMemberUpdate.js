module.exports = {
    name: `guildMemberUpdate`,
    once: false,
    execute(oldMember, newMember, client, Discord, GuildID) {
        if (oldMember.pending === true && newMember.pending === false) {
            `++ ++ [${newMember.username} has accepted the guild rules.]`;
            // Define Default Role
            const roleDefault = process.env.OOPS_ROLE_DEFAULT; // Role: Accepted Guild Rules
            // const rolePendingMembership = process.env.OOPS_ROLE_PENDINGMEMBERSHIP; // Role: Pending Potato
            // Define Role Separators
            const roleSeparatorMemberRanks = process.env.OOPS_ROLE_SEPARATOR_MEMBERRANKS;
            const roleSeparatorProficiencies = process.env.OOPS_ROLE_SEPARATOR_PROFICIENCIES;
            const roleSeparatorClears = process.env.OOPS_ROLE_SEPARATOR_CLEARS;
            const roleSeparatorCores = process.env.OOPS_ROLE_SEPARATOR_CORES;
            const roleSeparatorSelfAssignable = process.env.OOPS_ROLE_SEPARATOR_SELFASSIGNABLE;
            const rolesIDArray = [roleDefault, roleSeparatorClears, roleSeparatorCores, roleSeparatorMemberRanks, roleSeparatorProficiencies, roleSeparatorSelfAssignable];
            const rolesArray = [];
            rolesIDArray.forEach((role) => {
              newMember.roles.add(role);
              rolesArray.push(client.guilds.resolve(GuildID).roles.resolve(role).name);
            });
            const MemberLogChannel = client.guilds.resolve(GuildID).channels.resolve(process.env.OOPS_CHANNEL_MEMBERLOGS);
            // Send Console Log and Embed Notifications
            console.log(`    └ [${newMember.user.tag}] has accepted the guild rules.`)
            const embed = new Discord.MessageEmbed()
              .setAuthor(newMember.user.tag.toString(), newMember.user.displayAvatarURL())
              .setColor(0x00ff00)
              .setDescription(`${newMember.toString()} has accepted the guild rules.`)
              .setFooter(client.user.username, client.user.displayAvatarURL())
              .setTimestamp()
              .addField('Name', `${newMember.user.tag.toString()} (${newMember.user.id}) ${newMember.toString()}`)
              .addField('Granted Roles', rolesArray.join('\n'));
            MemberLogChannel.send({ embeds: [embed] });
        }

    }
}