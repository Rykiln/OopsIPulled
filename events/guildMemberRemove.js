module.exports = {
    name: `guildMemberRemove`,
    once: false,
    execute(member, client) {
        console.log(`-- [${member.user.username}] has left [${member.guild.name}].`)
    }
}