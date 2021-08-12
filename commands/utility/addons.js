const Discord = require('discord.js');

module.exports = {
  name: 'addons',														// Name of this command. Required for all commands.
  description: 'Displays Recommended ESO Addons.',			// [Optional] Description of this command for the help command
  aliases: ['addon', 'minion', 'esoui'], // [Optional] Permits additional command names to be used for this command
  // usage: '<required_args> [optional_args]',		                // [Optional] Displays how to use this command in the help command.
  // permissions: `MANAGE_ROLES`,				                        // [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
  args: false, // [Optional] When True - Requires Arguments Be Provided In Message Object
  guildOnly: false, // [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
  cooldown: 5, // [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
  execute(msgObject, args, client) {
    const embed = new Discord.MessageEmbed()
      .setTitle('Recommended Addons')
      .setDescription('The links below navigate to descriptions on [ESOUI Downloads](https://www.esoui.com/downloads/search.php).\nIt\'s recommended to use [Minion Addon Manager](https://minion.mmoui.com/?download) to configure addons.')
      .setColor(0x000099)
      .setThumbnail('http://static.elderscrollsonline.com/uploads/art/Vuba472wZ9lTzqpaHmS61Lcs8ryKLJdG0uU2OuQD07tYoQyhwLXDeQrBWgDdrGV/ESO-Volcano-UNIQUE-COLLECTIBLES-Dwarven-Spider-Pet.png')
      .setFooter(client.user.username, client.user.displayAvatarURL())
      .setTimestamp()
      .addField('User Interface', '[Action Duration Reminder](https://www.esoui.com/downloads/info1536-ActionDurationReminder.html) | [Advanced UI](https://www.esoui.com/downloads/info919-AUI-AdvancedUI.html) | [Inventory Insight](https://www.esoui.com/downloads/info731-InventoryInsight.html) | [LUI Extended](https://www.esoui.com/downloads/info818-LuiExtended.html) | [Srendarr](https://www.esoui.com/downloads/info655-Srendarr-AuraBuffDebuffTracker.html)')
      .addField('Market Economy', '[Awesome Guildstore](https://www.esoui.com/downloads/info695-AwesomeGuildStore.html) | [Master Merchant](https://www.esoui.com/downloads/info928-MasterMerchant.html) | [Tamriel Trade Centre](https://www.esoui.com/downloads/info1245-TamrielTradeCentre.html)')
      .addField('Crafting', '[Crafting Calculator](https://www.esoui.com/downloads/info1240-TinydogsCraftingCalculator.html) | [Craftstore](https://www.esoui.com/downloads/info1590-CraftStoreMurkmire.html) | [Lazy Writ Crafter](https://www.esoui.com/downloads/info1346-DolgubonsLazyWritCrafter.html) | [Writ Worthy](https://www.esoui.com/downloads/info1605-WritWorthy.html)')
      .addField('Cartography', '[Harvest Map](https://www.esoui.com/downloads/info57-HarvestMap.html) | [Map Pins](https://www.esoui.com/downloads/info1881-MapPins.html)')
      .addField('PvE - Trials and Dungeons', '[Code\'s Combat Alerts](https://www.esoui.com/downloads/info1855-CodesCombatAlerts.html) | [Combat Metrics](https://www.esoui.com/downloads/info1360-CombatMetrics.html) | [Purge Tracker](https://www.esoui.com/downloads/info1803-PurgeTracker.html) | [Raid Notifier](https://www.esoui.com/downloads/info1355-RaidNotifierUpdated.html) | [Samurai](https://www.esoui.com/downloads/info2684-Samurai.html) | [Untaunted](https://www.esoui.com/downloads/info1475-Untaunted.html)')
    msgObject.channel.send({embeds: [embed]});
  },
};
