module.exports = {
  name: 'getmembers',						// Name of this command. Required for all commands.
  description: 'Command_Description.',			// [Optional] Description of this command for the help command
  // aliases: ['', ``], 			// [Optional] Permits additional command names to be used for this command
  // usage: '<required_args> [optional_args]',		// [Optional] Displays how to use this command in the help command.
  permissions: 'MANAGE_ROLES',				// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
  // args: true, 								// [Optional] When True - Requires Arguments Be Provided In Message Object
  guildOnly: true, 							// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
  cooldown: 5, 								// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
  execute(msgObject, args, client) {
    const members = msgObject.guild.roles.cache.get('828479966698143795').members.map((m) => m.user.id);
    members.forEach((uid) => {
      const member = msgObject.guild.members.cache.get(uid);
      const role = msgObject.guild.roles.cache.get('694310159769403462');

      try {
        console.log(`Adding member ${member.user.username} to role ${role.name}`);
        member.roles.add(role);
      } catch (error) {
        console.log(error);
      }
    });
    console.log('Command Complete');
    console.log('Allow 20 to 30 minutes for Discord To Finish Adding Roles.');
    console.log();
  },
};
