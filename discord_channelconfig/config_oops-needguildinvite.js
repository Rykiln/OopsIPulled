const Discord = require('discord.js');

module.exports = {
  name: 'config_oops-needguildinvite',									// Name of this command. Required for all commands.
  description: 'ADMIN: Sends embed for Need Guild Invite chnanel.',		// [Optional] Description of this command for the help command
  aliases: ['ngi'],					 									// [Optional] Permits additional command names to be used for this command
  // usage: '<required_args> [optional_args]',							// [Optional] Displays how to use this command in the help command.
  permissions: 'MANAGE_ROLES',											// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
  // args: true,		 													// [Optional] When True - Requires Arguments Be Provided In Message Object
  guildOnly: true, 														// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
  cooldown: 5, 															// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
  execute(msgObject, args, client) {
    // Set Embed Properties
    const OIP_CYAN = process.env.OOPS_COLOR_CYAN;
    // const ESO_OUROBOROS = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab371d58-f694-4953-a2e5-c79acedd9f56/d9j5i6k-e1a85b7d-1621-4e5b-b5cc-4ddea16325db.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYWIzNzFkNTgtZjY5NC00OTUzLWEyZTUtYzc5YWNlZGQ5ZjU2XC9kOWo1aTZrLWUxYTg1YjdkLTE2MjEtNGU1Yi1iNWNjLTRkZGVhMTYzMjVkYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.UrDYskkNJpd9RFcmxNpkpoVppS3eKSl0cd53KUH_8-4';

    // Format The Embeded Message
    const embed = new Discord.MessageEmbed()
      .setTitle('Need a Guild Invite?')
      .setColor(OIP_CYAN)
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setTimestamp()
    // .setThumbnail(ESO_Ouroboros)
    // .setDescription(`These roles are directly related to Elder Scrolls Online. To assign any of the roles to yourself, read the description and click on the corresponding emoji below. they can be removed at any time by coming back to this page and clicking the emoji again.`)
      .addFields(
        { name: 'IMPORTANT - Set Your Nickname', value: 'Please make sure that your [Discord Nickname](https://support.discord.com/hc/en-us/articles/219070107-Server-Nicknames) is set the same as your ESO Account Name. This is your @name, not your character name', inline: false },
        { name: 'Requesting An Invitation', value: 'Once your nickname is set as mentioned in the line above, click the emoji below. Doing so will add the role "Pending Potato" to you in discord. We will send an invite to your nickname exactly as it is shown in discord. Once you accept the invite, the "Pending Potato" role will be removed and you\'ll be given "Potato" instead which is our membership role. Please allow up to 24 hours for our leadership to send you the invitation in-game.', inline: false },
      );

    // Send Embeded Message To Channel
    msgObject.channel.send(embed)
      .catch((error) => {
        console.log(error);
      });
  },
};
