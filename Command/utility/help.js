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
    const commandAdmin = [];
    const commandUser = [];

    // Display List Of All Commands And Descriptions If No Args Are Provided
    if (!args.length) {
      // Loop Through Commands And Check If They Require Eleveated Permissions In Order To Use Them
      commands.forEach((command) => {
        const cmdPermissions = command.permissions;
        if (!cmdPermissions) {
          commandUser.push(command);
          return;
        }
        commandAdmin.push(command);
      });

      // Gets Message Author's Permissions For Validation
      const authorPermissions = msgObject.guild.members.resolve(msgObject.author.id).permissions.has(Discord.Permissions.FLAGS.MANAGE_ROLES);

      // Format Embed For Admin Commands
      const embedAdminCommands = new Discord.MessageEmbed()
        .setTitle('Administrative Commands')
        .setColor(color)
        .setDescription('The following list of command are only available to Raid Leaders, Treasurers, and Officers. Other members of this discord do not see this list of commands when using the help command, and cannot use any of the commands on this list.')
        .addFields(
          { name: 'Command Prefix', value: '.', inline: false },
          { name: 'Command Name', value: commandAdmin.map((c) => c.name).join(`\n`), inline: true },
          { name: 'Description', value: commandAdmin.map((cmd) => cmd.description).join(`\n`), inline: true },
          { name: 'Options', value: 'You can get more detailed help for specific commands by using\n`.help [command]`\n`example: .help purge`', inline: false },
        );

      // Format Embed For Non Admin Commands
      const embedUserCommands = new Discord.MessageEmbed()
        .setTitle('Commands')
        .setColor(color)
        .setDescription('Below is a list of the commands you can use with this bot.')
        .addFields(
          { name: 'Command Prefix', value: '.', inline: false },
          { name: 'Command Name', value: (commandUser.map((c) => c.name)).join(`\n`), inline: true },
          { name: 'Description', value: (commandUser.map((cmd) => cmd.description).join(`\n`)), inline: true },
          { name: 'Options', value: 'You can get more detailed help for specific commands by using\n`.help [command]`\n`example: .help roll`', inline: false },
        );
      // Delete Author's Original Command Message From Chat
      setTimeout(() => msgObject.delete(), 1000);

      // Perform Permission Validation For Admin Commands
      if (authorPermissions) {
        // Send Admin Command List To DM If Validation Is Passed
        msgObject.author.send({ embeds: [embedAdminCommands], split: true })
          .then(msgObject.author.send({ embeds: [embedUserCommands], split: true }))
        return;
      }
      // Send Non Admin Command List To DM
      // msgObject.author.send(embedUserCommands)
      msgObject.author.send({ embeds: [embedUserCommands], split: true })
        .then(() => {
          if (msgObject.channel.type === 'DM') return;
          msgObject.reply({ content: 'The command list has been sent to your DMs', allowedMentions: { repliedUser: true } });
        })
        .catch((error) => {
          console.error(`Could not send help DM to ${msgObject.author.tag}.\n, error`);
          msgObject.reply({ content: 'It seems like I can\'t DM you!. Do you have DMs disabled?', allowedMentions: { repliedUser: true } });
        });
      return;
    }
    // Display Specific Command Details If Args Are Provided
    const name = args[0].toLowerCase();
    const command = commands.get(name) || commands.find((c) => c.aliases && c.aliases.includes(name));
    if (!command) {
      msgObject.reply({ content: 'That\'s not a valid command!', allowedMentions: { repliedUser: true } });
      return;
    }
    if (!command.usage) { command.usage = ''; }
    // Format Embed For Specific Command
    const helpEmbed = new Discord.MessageEmbed()
      .setColor(color)
      .setTitle(`Command Help: ${command.name.toUpperCase()}`)
      .setDescription(command.description)
      .addFields(
        { name: 'Aliases', value: command.aliases.join(`\n`) || 'none' },
        { name: 'Usage', value: `${Prefix}${command.name} ${command.usage}` },
      );
    // Send Specific Command Description To DM
    msgObject.author.send({ embeds: [helpEmbed], split: true })
      .then(() => {
        if (msgObject.channel.type === 'DM') return;
        msgObject.reply({ content: 'The command information has been sent to your DMs', allowedMentions: { repliedUser: true } });
      })
      .catch((error) => {
        console.error(`Could not send help DM to ${msgObject.author.tag}.\n`, error);
        msgObject.reply({ content: 'It seems like I can\'t DM you!. Do you have DMs disabled?', allowedMentions: { repliedUser: true } });
      });
  },
};
