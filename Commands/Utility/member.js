const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
  name: 'member', // Name of this command. Required for all commands.
  description: 'Gets Guild Information Of A Member.',			// [Optional] Description of this command for the help command
  aliases: ['userinfo', 'user', 'memberinfo'], // [Optional] Permits additional command names to be used for this command
  usage: '[@mention]', // [Optional] Displays how to use this command in the help command.
  args: false, // [Optional] When True - Requires Arguments Be Provided In Message Object
  guildOnly: true, // [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
  cooldown: 5, // [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
  execute(msgObject, args, client) {
    msgObject.guild.members.fetch(msgObject.mentions.users.first() || msgObject.author)
    // msgObject.guild.fetchMember(args.mentions.users.first() || msgObject.author)
      .then((usrMember) => {
        let nick = usrMember.nickname;
        if (!nick) { nick = usrMember.user.username; }
        // let rolesArray = [`389273680334815242`, `389273982546739200`, `389274052885348372`, `389274119717388290`, `629438634386259968`, `629439033923207168`, `694707033110478849`, `629439039396642827`, `612483656241643525`] // OOPS ROLES
        // let rankId = rolesArray.find(id => usrMember.roles.keyArray().includes(id))

        // Retrieve JSON Data For Warning and No-Show Information
        fs.readFile(process.env.OOPS_JSON_WARNINGS, (err, data) => {
          if (err) throw err;

          const warns = JSON.parse(data);
          // Function To Get A Count Of Total Warnings For The Member
          function getOccurence(array, value) {
            let count = 0;
            array.forEach((v) => {
              if (v.ID === value) {
                count += 1;
              }
            });
            return count;
          }
          // Function To Get The Names Of Channels The Member Was Marked As A No-Show In For The Member
          function getEvents(array, value) {
            const events = [];
            array.forEach((v) => (v.ID === value && events.push(v.event)));
            return events;
          }
          // Function To Get The Names Of The Raid Leader Or Officer That Submitted The No-Show For The Member
          function getWarnedBy(array, value) {
            const events = [];
            array.forEach((v) => (v.ID === value && events.push(v.warnedby)));
            return events;
          }
          function getWarnedDate(array, value) {
            const events = [];
            array.forEach((v) => (v.ID === value && events.push(v.date)));
            return events;
          }
          // Store Variables And Format As Text If Blank To Prevent Null Values In MessageEmbed
          const loggedwarnings = getOccurence(warns, usrMember.id);
          const loggedevent = getEvents(warns, usrMember.id);
          const warnedby = getWarnedBy(warns, usrMember.id);
          const warneddate = getWarnedDate(warns, usrMember.id);
          // if(loggedwarnings.length==0){loggedwarnings="None"};
          // if(loggedevent.length==0){loggedevent="None"};
          // if(warnedby.length==0){warnedby="None"};

          const embed = new Discord.MessageEmbed()
            .setColor(usrMember.displayHexColor.toString())
            .setTitle('Member Information')
            .setThumbnail(usrMember.user.displayAvatarURL())
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .addFields( // Name Nickame and Tag Fields
              { name: 'Server Nickname', value: nick, inline: true },
              { name: 'Account Name', value: usrMember.user.username, inline: true },
              { name: 'Discord ID', value: usrMember.user.tag, inline: true },
            )
          // .addField("Your Guild Rank", usrMember.roles.get(rankId))
            .addField('Your Guild Rank', usrMember.roles.highest.toString())
            .addField('You Joined The Guild', usrMember.joinedAt.toString())
            .addField('Warnings', loggedwarnings.toString());
          if (loggedwarnings > 0) {
            embed.addFields(
              { name: 'Events', value: loggedevent.join(`\n`), inline: true },
              { name: 'Warned By', value: warnedby.join(`\n`), inline: true },
              { name: 'Date', value: warneddate.join(`\n`), inline: true },
            );
          }
          msgObject.channel.send({embeds: [embed]});
        });
      });
  },
};
