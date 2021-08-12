const Discord = require('discord.js');

module.exports = {
  name: 'color',																			// Name of this command. Required for all commands.
  description: 'Displays A Random Color With It\'s Hex & RGB values.',			// [Optional] Description of this command for the help command
  aliases: ['colour', 'rgb'], 															// [Optional] Permits additional command names to be used for this command
  cooldown: 5, 																			// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
  execute(msgObject, args, client) {
    const convertToRGB = (hex) => {
      const aRgbHex = hex.match(/.{1,2}/g);
      const aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16),
      ];
      return aRgb;
    };
    const hex = Math.floor(Math.random() * 16777215).toString(16);

    const embed = new Discord.MessageEmbed()
      .setColor(`#${hex}`)
      .setTitle('Random Color')
      .addFields(
        { name: 'RGB', value: `[ ${convertToRGB(hex)} ]`, inline: true },
        { name: 'Hexidecimal', value: `#${hex}`, inline: true },
      );
    msgObject.channel.send({embeds: [embed]})
      .catch(console.error);
  },
};
