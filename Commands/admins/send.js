module.exports = {
  name: 'send',																// Name of this command. Required for all commands.
  description: 'Sends A Message With The Bot As The Author.',	// [Optional] Description of this command for the help command
  usage: '[#channel] <message>',												// [Optional] Displays how to use this command in the help command.
  permissions: 'MANAGE_MESSAGES',												// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
  args: true, 																// [Optional] When True - Requires Arguments Be Provided In Message Object
  guildOnly: true, 															// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
  cooldown: 5, 																// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
  execute(msgObject, args, client) {
    const firstArgument = args[0].replace(/<|#|>/g, '');
    const channelDestination = msgObject.mentions.channels.first() || msgObject.channel;
    if (firstArgument === channelDestination.id) { // Parse Message When Channel Is Not Mentioned
      const msg = args.slice(1).join(' ') || '';
      channelDestination.send(msg);
    } else { // Parse Message When Channel Is Not Mentioned
      const msg = args.join(' ') || '';
      msgObject.channel.send({content: msg});
    }
    msgObject.delete();
  },
};
