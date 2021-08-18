module.exports = {
    name: `guildMemberAdd`,
    once: false,
    execute(member, client) {
        console.log(`++ [${member.user.username}] has joined [${member.guild.name}].`)
    }
}