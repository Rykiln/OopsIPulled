const Discord = require('discord.js');

const Prefix = process.env.PREFIX_DEFAULT;
module.exports = {
  name: 'help',
  description: 'Displays This Help Menu.',
  aliases: ['commands'],
  usage: '[command name]',
  cooldown: 5,
  execute(msgObject, args, client) {
    const { commands } = msgObject.client;
    const color = process.env.OOPS_COLOR_WARNING;
    let commandAdmin = [];
    let commandUser = [];

    // Display List Of All Commands And Descriptions If No Args Are Provided
    if (!args.length) {
      // Loop Through Commands And Check If They Require Eleveated Permissions In Order To Use Them
      commands.forEach(command => {
        const cmdPermissions = command.permissions;
        if (!cmdPermissions) {
          commandUser.push(command)
          return;
        }
        commandAdmin.push(command)
      });
      
      // Gets Message Author's Permissions For Validation
      const authorPermissions = msgObject.guild.members.resolve(msgObject.author.id).permissions.has(`MANAGE_ROLES`)
      
      // Format Embed For Admin Commands
      const embed_AdminCommands = new Discord.MessageEmbed()
        .setTitle(`Administrative Commands`)
        .setColor(color)
        .setDescription(`The following list of command are only available to Raid Leaders, Treasurers, and Officers. Other members of this discord do not see this list of commands when using the help command, and cannot use any of the commands on this list.`)
        .addFields(
          { name: `Command Prefix`, value: `.`, inline: false },
          { name: `Command Name`, value: commandAdmin.map(c => c.name), inline: true },
          { name: `Description`, value: commandAdmin.map(cmd => cmd.description), inline: true },
          { name: `Options`, value: `You can get more detailed help for specific commands by using\n\`.help [command]\`\n\`example: .help purge\``, inline: false }
        )
      
        // Format Embed For Non Admin Commands
      const embed_UserCommands = new Discord.MessageEmbed()
        .setTitle(`Commands`)
        .setColor(color)
        .setDescription(`Below is a list of the commands you can use with this bot.`)
        .addFields(
          { name: `Command Prefix`, value: `.`, inline: false },
          { name: `Command Name`, value: commandUser.map(c => c.name), inline: true },
          { name: `Description`, value: commandUser.map(cmd => cmd.description), inline: true },
          { name: `Options`, value: `You can get more detailed help for specific commands by using\n\`.help [command]\`\n\`example: .help roll\``, inline: false }
        )
      // Delete Author's Original Command Message From Chat
      msgObject.delete(1000)
      
      // Perform Permission Validation For Admin Commands
      if (authorPermissions) {
        // Send Admin Command List To DM If Validation Is Passed
        msgObject.author.send('', { embed: embed_AdminCommands, split: true })
          .then(msgObject.author.send('', { embed: embed_UserCommands, split: true }))
        return;
      }
      // Send Non Admin Command List To DM
      msgObject.author.send(embed_UserCommands)
        .then(() => {
          if (msgObject.channel.type === 'dm') return;
          msgObject.reply('The command list has been sent to your DMs');
        })
        .catch((error) => {
          console.error(`Could not send help DM to ${msgObject.author.tag}.\n, error`);
          msgObject.reply('It seems like I can\'t DM you!. Do you have DMs disabled?');
        });
      return;
    }
    // Display Specific Command Details If Args Are Provided
    const name = args[0].toLowerCase();
    const command = commands.get(name) || commands.find((c) => c.aliases && c.aliases.includes(name));5
    if (!command) {
      msgObject.reply('That\'s not a valid command!');
      return;
    }
    if (!command.usage) { command.usage = ''; }
    // Format Embed For Specific Command
    const helpEmbed = new Discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Command Help: ${command.name.toUpperCase()}`)
      .setDescription(command.description)
      .addFields(
        { name: 'Aliases', value: command.aliases || 'none' },
        { name: 'Usage', value: `${Prefix}${command.name} ${command.usage}` },
      );
    // Send Specific Command Description To DM
    msgObject.author.send('', { embed: helpEmbed, split: true })
      .then(() => {
        if (msgObject.channel.type === 'dm') return;
        msgObject.reply('The command information has been sent to your DMs');
      })
      .catch((error) => {
        console.error(`Could not send help DM to ${msgObject.author.tag}.\n, error`);
        msgObject.reply('It seems like I can\'t DM you!. Do you have DMs disabled?');
      });
  },
};
