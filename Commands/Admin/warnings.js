const Discord = require('discord.js');
const fs = require('fs');
const _ = require('lodash');

module.exports = {
  name: 'warnings',														// Name of this command. Required for all commands.
  description: 'Displays A List Of All Member Warnings.',			// [Optional] Description of this command for the help command
  aliases: ['noshows'],										 			// [Optional] Permits additional command names to be used for this command
  usage: '[@member]',														// [Optional] Displays how to use this command in the help command.
  permissions: 'MANAGE_ROLES',											// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
  args: false,							 								// [Optional] When True - Requires Arguments Be Provided In Message Object
  guildOnly: true, 														// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
  cooldown: 5, 															// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
  execute(msgObject, args, client) {
    const warningsFile = process.env.OOPS_JSON_WARNINGS;				// Oops I Pulled Warnings JSON File

    fs.readFile(warningsFile, (err, data) => {
      if (err) throw err;
      const warns = JSON.parse(data);
      async function getUniqueUserIds(array) {
        const Snowflakes = [];
        array.forEach((v) => Snowflakes.push(v.ID));
        const UniqueSnowflakes = [...new Set(Snowflakes)];
        const UniqueMembers = await Promise.all(UniqueSnowflakes.map(async (v) => client.users.fetch(v)));
        return UniqueMembers;
      }

      function getOccurence(array, value) {
        let count = 0;
        array.forEach((v) => {
          if (v.ID === value) {
            count += 1;
          }
        });
        return count;
      }

      getUniqueUserIds(warns).then((Members) => {
        const Nick = [];
        const Counts = [];
        Members.forEach((m) => {
          // console.log(m)
          Nick.push(m.username);
          Counts.push(getOccurence(warns, m.id));
        });

        const CHUNK_SIZE = 30;
        const chunkedMembers = _.chunk(Members, CHUNK_SIZE);
        const chunkedNicknames = _.chunk(Nick, CHUNK_SIZE);
        const chunkedCounts = _.chunk(Counts, CHUNK_SIZE);

        chunkedMembers.forEach((members, i) => {
          const nicknames = chunkedNicknames[i];
          const counts = chunkedCounts[i];

          const embed = new Discord.MessageEmbed()
            .setTitle('Guild Member Warnings Issued')
            .setColor(0xFF9900)
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp()
            .addFields(
              {name: 'Member', value: members.join(`\n`), inline: true},
              {name: 'Nickname', value: nicknames.join(`\n`), inline: true},
              {name: 'Warnings', value: counts.join(`\n`), inline: true}
            );
          msgObject.channel.send({embeds: [embed]});
        });
      });
    });
  },
};
