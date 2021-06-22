const Discord = require('discord.js');

module.exports = {
  name: 'config_oops-selfassign',									// Name of this command. Required for all commands.
  description: 'ADMIN: Sends embed for Self Assign chnanel.',		// [Optional] Description of this command for the help command
  aliases: ['sa'],					 							// [Optional] Permits additional command names to be used for this command
  // usage: '<required_args> [optional_args]',					// [Optional] Displays how to use this command in the help command.
  permissions: 'MANAGE_ROLES',									// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
  // args: true,		 											// [Optional] When True - Requires Arguments Be Provided In Message Object
  guildOnly: true, 												// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
  cooldown: 5, 													// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
  execute(msgObject, args, client) {
    // Set Embed Properties
    const OIP_CYAN = process.env.OOPS_COLOR_CYAN;
    const ESO_Ouroboros = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ab371d58-f694-4953-a2e5-c79acedd9f56/d9j5i6k-e1a85b7d-1621-4e5b-b5cc-4ddea16325db.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYWIzNzFkNTgtZjY5NC00OTUzLWEyZTUtYzc5YWNlZGQ5ZjU2XC9kOWo1aTZrLWUxYTg1YjdkLTE2MjEtNGU1Yi1iNWNjLTRkZGVhMTYzMjVkYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.UrDYskkNJpd9RFcmxNpkpoVppS3eKSl0cd53KUH_8-4';

    // Declare Assignable Roles As Objects
    const roleGoldDigger = {
      name: 'Gold Digger',
      description: 'Gold Digger is a role for anyone interested in social events and trading. Events may include things such as Skill Point Farming, Skyshard Hunting, Zone Boss Killing, Public Dungeons, Resource Farming Events, Murder Sprees, etc.',
      icon: '💰',
    };
    const roleCrownSeller = {
      name: 'Crown Seller',
      description: 'Money Burning A Hole In Your Pocket? Why not sell some crowns? This allows people to ping you when they are wanting to buy crowns from you.',
      icon: '💎',
    };
    const roleMasterCrafter = {
      name: 'Master Crafter',
      description: 'Master Crafters have all 9 traits researched on all of their crafting skills. Assign this role if you are able and willing to help craft gear for other members.',
      icon: '🔨',
    };
    const roleGrandMasterCrafter = {
      name: 'Grand Master Crafter',
      description: 'Grand Master Crafters have gone above and beyond by collecting nearly all of the Mofifs, Recipies, Blueprints, etc, and can craft items in nearly any style.',
      icon: '🛠️',
    };
    const rolePug = {
      name: 'Pug',
      description: "Looking for a group? Assign this role to be pinged when we're looking for last minute group fills, or when our members are looking for fills for external events.",
      icon: '❗',
    };

    // Format The Embeded Message
    const embed = new Discord.MessageEmbed()
      .setTitle('Elder Scrolls Online: Optional Notification Roles')
      .setColor(OIP_CYAN)
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setTimestamp()
      .setThumbnail(ESO_Ouroboros)
      .setDescription('These roles are directly related to Elder Scrolls Online. To assign any of the roles to yourself, read the description and click on the corresponding emoji below. they can be removed at any time by coming back to this page and clicking the emoji again.')
      .addFields(
        { name: `${rolePug.icon} ${rolePug.name}`, value: rolePug.description, inline: false },
        { name: `${roleGoldDigger.icon} ${roleGoldDigger.name}`, value: roleGoldDigger.description, inline: false },
        { name: `${roleCrownSeller.icon} ${roleCrownSeller.name}`, value: roleCrownSeller.description, inline: false },
        { name: `${roleMasterCrafter.icon} ${roleMasterCrafter.name}`, value: roleMasterCrafter.description, inline: false },
        { name: `${roleGrandMasterCrafter.icon} ${roleGrandMasterCrafter.name}`, value: roleGrandMasterCrafter.description, inline: false },
      );

    // Send Embeded Message To Channel
    msgObject.channel.send(embed)
    // Add Reactions To Embeded Message			// This is currently disabled because Zira is handling the reaction roles.
    // .then(message => message.react(roleGoldDigger.icon)
    // .then(msg => message.react(roleCrownSeller.icon)
    // .then(msg => message.react(roleMasterCrafter.icon)
    // .then(msg => message.react(roleGrandMasterCrafter.icon)
    // .then(msg => message.react(rolePug.icon))))))
      .catch((error) => {
        console.log(error);
      });
  },
};
