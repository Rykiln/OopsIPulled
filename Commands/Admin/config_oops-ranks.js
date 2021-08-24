const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
  name: 'config_oops-ranks',											// Name of this command. Required for all commands.
  description: 'ADMIN: Sends Embed For Mentioned Rank.',				// [Optional] Description of this command for the help command
  aliases: ['updateranks', `rank`],									// [Optional] Permits additional command names to be used for this command
  usage: '<@rank>',													// [Optional] Displays how to use this command in the help command.
  permissions: 'MANAGE_ROLES',										// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
  args: true, 														// [Optional] When True - Requires Arguments Be Provided In Message Object
  guildOnly: true, 													// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
  cooldown: 5, 														// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
  execute(msgObject, args, client) {
    const strobe = client.emojis.cache.find((emoji) => emoji.name === 'strobe');
    const strobeBar = strobe.toString().repeat(26);
    // Roles: Placeholders
    let roleDPS;
    let roleHealer;
    let roleTank;
    let roleDescription;
    let dpsThreshold;
    let dpsDisqualifiers = [
      'No [Blood For Blood](https://eso-skillbook.com/skill/blood-for-blood)',
      'No Transformation Ultimate Parses'
    ];
    let howToApply = 'Please use the [📩｜apply-for-ranks](https://discord.com/channels/694306288250781699/774505827113107466/802968528017162273) channel to open a request. This will create a new channel for your submit your screenshots for our Officers and Raid Leaders to review.';
    let imgName;
    let channelDestination = msgObject.mentions.channels.first();
    if (!channelDestination || channelDestination === '') { channelDestination = msgObject.channel; }
    msgObject.mentions.roles.forEach((rank) => {
      // console.log(`${rank.name} : ${rank.id}`);
      switch (rank.id) {
        // Fine Rank
        case '864649807942778890':
          // Roles
          roleDPS = '<@&862549547771625522><@&862549598270128128>'; // Fine Stamina/Magicka DPS Role
          roleHealer = '<@&862549906840354826>'; // Fine Healer Role
          roleTank = '<@&862549791509446677>'; // Fine Tank Role
          roleDescription = 'These are the minimum requirements for joining veteran trials. The gear sets, skills, and damage are needed to be a contributing member of a coordinated trial group.';
          dpsThreshold = '70K DPS';
          imgName = 'rank01.Fine.png';
          break;
        // Superior Rank
        case '864649692759195658':
          // Roles
          roleDPS = '<@&862549018801209384><@&862549143427874826>'; // Superior Stamina/Magicka DPS Role
          roleHealer = '<@&862549432864342037>'; // Superior Healer Role
          roleTank = '<@&862549272725553173>'; // Superior Tank Role
          roleDescription = 'These sets, skills, and damage requirements allow for more group optimization than fine sets, but also require more understanding of how and when to perform certain actions to cause the gear to activate.\n\nAll <@&864649692759195658> ranks must first meet the requirements of <@&864649807942778890> for the same role.';
          dpsThreshold = '80K DPS';
          imgName = 'rank02.Superior.png';
          break;
        // Epic Rank
        case '864649114917535771':
          // Roles
          roleDPS = '<@&862548668930326548><@&862548753122852864>'; // Epic Stamina/Magicka DPS Role
          roleHealer = '<@&862548871966883870>'; // Epic Healer Role
          roleTank = '<@&862548809933783100>'; // Epic Tank Role
          roleDescription = 'These are additional sets that start allowing groups to optimize in more situations, including large trash pulls between bosses.\n\nAll <@&864649114917535771> ranks must first meet the requirements of <@&864649692759195658> for the same role.';
          dpsThreshold = '90K Magicka\n95K Stamina DPS';
          imgName = 'rank03.Epic.png';
          break;
        // Legendary Rank
        case '864649036791414804':
          // Roles
          roleDPS = '<@&721303692548112405><@&773048238164934656>'; // Legendary Stamina/Magicka DPS Role
          roleHealer = '<@&721309238877618186>'; // Legendary Healer Role
          roleTank = '<@&721308536923226175>'; // Legendary Tank Role
          roleDescription = 'By <@&864649036791414804>, it is expected that someone knows their role and class very well and will voluntarily obtain any additional sets that will benefit them in even the most niche situations. At this level, we are expecting that you are proactively keeping up with the current META builds, swapping gear and skills for each boss and trash pull to optimize for maximum efficiency.\n\nAll <@&864649036791414804> ranks must first meet the requirements of <@&864649114917535771> for the same role.';
          dpsThreshold = `95K DPS`;
          imgName = 'rank04.Legendary.png';
          howToApply = 'Please use the [📩｜apply-for-ranks](https://discord.com/channels/694306288250781699/774505827113107466/802968528017162273) channel to open a request. This will create a new channel for your submit your screenshots and logs for our Officers and Raid Leaders to review.';
          break;
        // Radiant Rank
        case '862427691038801940':
          // Roles
          roleDPS = '<@&862546768867491860><@&856745221487591454>'; // Legendary Stamina/Magicka DPS Role
          roleHealer = '<@&862547274382049300>'; // Legendary Healer Role
          roleTank = '<@&862547126873751562>'; // Legendary Tank Role
          roleDescription = `<@&862427691038801940> is intended for someone that has completed several trifecta trial achievements. This is a vanity role to show off your achivements.\n\nAll <@&862427691038801940> ranks must first meet the requirements of <@&864649036791414804> for the same role.`
          dpsThreshold = `95K DPS`;
          imgName = 'rank05.Radiant.png';
          howToApply = 'Please use the [📩｜apply-for-ranks](https://discord.com/channels/694306288250781699/774505827113107466/802968528017162273) channel to open a request. This will create a new channel for your submit your screenshots and logs for our Officers and Raid Leaders to review.';
          break;
        default:
          break;
      }
      const roles = `${roleDPS}${roleHealer}${roleTank}\n`;
      fs.readFile(process.env.OOPS_JSON_TRIALGEAR, async (err, data) => {
        if (err) throw err;

        const gear = JSON.parse(data);
        // Function To Get Gear Sets For A Role
        function getGearSets(array, rnk, role) {
          const sets = [];
          array.forEach((v) => (v.RankID === rnk && v.Role === role && sets.push(`[${[v.SetName]}](${v.ESOSETSURL}) ${v.PairRequirements}`)));
          return sets;
        }
        // Call Functions To Get Gear Sets From JSON And Replace Null Values For The Embed
        let setsTank = getGearSets(gear, rank.id, 'Tank');
        if (!setsTank || setsTank === '') { setsTank = 'No Additional Sets Required'; }
        let setsHealer = getGearSets(gear, rank.id, 'Healer');
        if (!setsHealer || setsHealer === '') { setsHealer = 'No Additional Sets Required'; }

        console.log(dpsThreshold);
        console.log(dpsDisqualifiers.join(`\n`));
        console.log(setsHealer);
        console.log(setsTank);
        // Format And Send Embed
        const embed = new Discord.MessageEmbed()
          .setTitle(`Trial Role: ${rank.name}`)
          .setColor(rank.color)
          .setDescription(`${roles}\n${strobeBar}\n${roleDescription}`)
          .setFooter(client.user.username, client.user.displayAvatarURL())
          .setTimestamp()
          .addFields(
            { name: 'Damage Dealers', value: `${dpsThreshold}\n${dpsDisqualifiers.join('\n')}`, inline: true },
            { name: 'Healers', value: setsHealer.join(`\n`), inline: true },
            { name: 'Tanks', value: setsTank.join(`\n`), inline: true }
          )
        // If Superior
        if (rank.id === '864649692759195658') {
          embed.addFields(
            { name: 'Trial Completions', value: 'Must have clears on a minimum of 3 of the following veteran trials:\n\n- vMOL\n- vHOF\n- vAS\n- vCR\n- vSS\n- vKA\n- vRG\n\nLogs are not required for <@&864649692759195658>. Please post screenshots of your achievements to show these clears. If you have already posted them in <#728742997667217559>, you do not have to post them again.', inline: false }
          );
        }
        // If Epic
        if (rank.id === '864649114917535771') {
          embed.addFields(
            { name: 'Trial Completions', value: 'Must have clears on all veteran DLC trials and a minimum of 3 of the following hard mode trials:\n\n- vMOL HM\n- vHOF HM\n- vAS HM\n- vCR HM\n- vSS HM\n- vKA HM\n- vRG HM\n\nLogs are not required for <@&864649114917535771>. Please post screenshots of your achievements to show these clears. If you have already posted them in <#728742997667217559>, you do not have to post them again.', inline: false }
          );
        }
        // If Legendary
        if (rank.id === '864649036791414804') {
          embed.addFields(
            { name: `Trial Completions`, value: `Must have clears on all hard mode DLC trials (excluding vRG for now)`, inline: false },
            { name: 'Trial Performance-Log Review', value: 'When applying for <@&864649036791414804> roles, you will be expected to provide trial logs to be reviewed by the guild officers. These logs will be used to determine several factors that cannot be determined by a dummy parse or gear alone. Acceptable trials for log sumbissions include:\n\n- vMOL HM\n- vHOF HM\n- vAS HM\n- vCR HM\n- vSS HM\n- vKA HM\n- vRG HM\n\nBelow are the criteria we\'re looking at for each role.', inline: false },
            { name: 'Damage Dealers', value: 'TRIAL Single Target Damage\nSurvivability\nExtra Duties (Backyard Runner, Portals, etc.)', inline: true },
            { name: 'Healers', value: 'Survivability\nCombat Prayer Uptime\nMajor Courage Uptime\nClass Specific Buffs/Debuffs\nGear Set Usage/Uptime', inline: true },
            { name: 'Tanks', value: 'Survivability\nFracture Uptime\nMaim Uptime\nCrusher Uptime\nClass Specific Buffs/Debuffs', inline: true }
          )

        }
        // If Radiant
        if (rank.id === `862427691038801940`) {
          embed.setTitle(`Vanity Role: ${rank.name}`)
          embed.addFields(
            { name: `Trifecta Completions`, value: `Must have a minimum of 3 of the following trifecta trial achievements:\n\n- Tick Tock Tormenter\n- Immortal Redeemer\n- Gryphon Heart\n- Godslayer\n- Dawnbringer\n- Planesbreaker\n\n`, inline: false }
          )
        }
        embed.addFields(
          { name: 'How To Apply', value: howToApply, inline: false }
        );
        msgObject.delete();
        await channelDestination.send({
          files: [{
            attachment: `./images/${imgName}`,
            name: `${imgName}`,
          }],
        });
        await channelDestination.send({embeds: [embed]});
      });
    });
  },
};
