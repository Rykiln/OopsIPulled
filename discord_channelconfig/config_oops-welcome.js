const Discord = require('discord.js');

module.exports = {
  name: 'config_oops-welcome',						// Name of this command. Required for all commands.
  description: 'ADMIN: Sends embed for welcome page with guild rules.',			// [Optional] Description of this command for the help command
  aliases: ['welcome', 'w'], 			// [Optional] Permits additional command names to be used for this command
  // usage: '<required_args> [optional_args]',		// [Optional] Displays how to use this command in the help command.
  permissions: 'MANAGE_ROLES',				// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
  // args: true, 								// [Optional] When True - Requires Arguments Be Provided In Message Object
  guildOnly: true, 							// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
  cooldown: 5, 								// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
  execute(msgObject, args, client) {
    // Define The Fields That Will Be Used In The Message
    const guildName = client.user.username;
    const guildIcon = client.user.displayAvatarURL();
    const guildInviteURL = 'https://discord.gg/oops-i-pulled';
    const guildWebsiteURL = 'https://www.oopsipulled.com';
    const guildWelcomeMessage = 'Welcome To Oops I Pulled';
    const guildDescription = 'Oops I Pulled is a Trials guild dedicated to completing all Veteran, Hard Mode, and Trifecta content while providing training to members who strive to be part of an exceptional team of raiders.';
    const guildRules = [
      'Be Respectful to other guild members, guests, and open chats.',
      'No Discrimination of any kind.',
      'Keep politics and religion out of chat and Discord.',
      'Show up, on time and prepared, to events that you sign up for.',
      'No selling loot from events. If you need gear, keep it, if you don\'t, be willing to give it to someone who does.',
      'Raid Leaders are in charge of the trial. If you have suggestions that you\'d like to bring up, please discuss them with the Raid Leader privately via Discord DM or in-game whisper.',
      'ESO is Rated M for Mature (17+) for Blood and Gore, Sexual Themes, Use of Alcohol, and Violence. Online Interactions are Not Rated. As such, similar content will be present in this discord. While we do moderate chat and keep things friendly, we do recommend that you consider this rating when joining, as chat can sometimes get vulgar or inappropriate for children.',
    ];
    const guildRequiredAddonsDisclaimer = 'In addition, the Raid Leader may require additional addons specific to the content that is being run.';
    const guildRequiredAddons = [
      // [Addon Name](ESOUI Download URL)
      '[Raid Notifier](https://www.esoui.com/downloads/info1355-RaidNotifierUpdated.html)',
      '[Code\'s Combat Alerts](https://www.esoui.com/downloads/info1855-CodesCombatAlerts.html)',
      '[Hodor Reflexes](https://www.esoui.com/downloads/info2311-HodorReflexes-DPSUltimateShare.html)',
    ];
    const guildNicknameMessage = 'Please change your nickname in Discord to match your in-game UserID by clicking the dropdown box at the top of the server and selecting "Change Nickname"';

    // Format Embeded Message For The Welcome Channel In Discord
    const embed = new Discord.MessageEmbed()
      .setTitle(guildWelcomeMessage)
      .setDescription(guildDescription)
      .setColor(process.env.OOPS_COLOR_CYAN)
      .setThumbnail(guildIcon)
      .setFooter(guildName, guildIcon)
      .setTimestamp()
      .setURL(guildWebsiteURL)
      .addFields(
        { name: 'Guild Rules', value: `>>> ${guildRules.join('\n\n')}`, inline: false },
        { name: 'Required Addons', value: `${guildRequiredAddons.join('\n')}\n\n${guildRequiredAddonsDisclaimer}`, inline: false },
        { name: 'Let Us Know Who You Are', value: guildNicknameMessage, inline: false },
      );
    // Send the Embed And The Guild Invite Link
    msgObject.channel.send(embed)
      .then(msgObject.channel.send(guildInviteURL));
  },
};
