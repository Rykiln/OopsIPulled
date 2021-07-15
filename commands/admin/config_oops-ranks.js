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
    const strobeBar = `${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}`;
    // Roles: Placeholders
    let roleDPS;
    let roleHealer;
    let roleTank;
    let roleDescription;
    let dpsThreshold;
    let dpsDisqualifiers = [
      'No [Blood For Blood](https://eso-skillbook.com/skill/blood-for-blood)',
      'No [Mythic Items](https://eso-sets.com/sets/type/mythic)',
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
        case '721310503015546951':
          // Roles
          roleDPS = '<@&862549547771625522><@&862549598270128128>'; // Fine Stamina/Magicka DPS Role
          roleHealer = '<@&862549906840354826>'; // Fine Healer Role
          roleTank = '<@&862549791509446677>'; // Fine Tank Role
          // Embed Attributes
          roleDescription = 'These are the minimum requirements for joining veteran trials. The gear sets, skills, and damage are needed to be a contributing member of a coordinated trial group.';
          dpsThreshold = '70K DPS';
          imgName = 'rank01.Fine.png';
          break;
        // Superior Rank
        case '721310651137654834':
          // Roles
          roleDPS = '<@&862549018801209384><@&862549143427874826>'; // Superior Stamina/Magicka DPS Role
          roleHealer = '<@&862549432864342037>'; // Superior Healer Role
          roleTank = '<@&862549272725553173>'; // Superior Tank Role
          // Embed Attributes
          roleDescription = 'These sets, skills, and damage requirements allow for more group optimization than fine sets, but also require more understanding of how and when to perform certain actions to cause the gear to activate.\n\nAll <@&721310651137654834> ranks must first meet the requirements of <@&721310503015546951> for the same role.';
          dpsThreshold = '80K DPS';
          imgName = 'rank02.Superior.png';
          break;
        // Epic Rank
        case '721310549547417671':
          // Roles
          roleDPS = '<@&862548668930326548><@&862548753122852864>'; // Epic Stamina/Magicka DPS Role
          roleHealer = '<@&862548871966883870>'; // Epic Healer Role
          roleTank = '<@&862548809933783100>'; // Epic Tank Role
          // Embed Attributes
          roleDescription = 'These are additional sets that start allowing groups to optimize in more situations, including large trash pulls between bosses.\n\nAll <@&721310549547417671> ranks must first meet the requirements of <@&721310651137654834> for the same role.';
          dpsThreshold = '90K Magicka\n95K Stamina DPS';
          imgName = 'rank03.Epic.png';
          break;
        // Legendary Rank
        case '721310768859054130':
          // Roles
          roleDPS = '<@&721303692548112405><@&773048238164934656>'; // Legendary Stamina/Magicka DPS Role
          roleHealer = '<@&721309238877618186>'; // Legendary Healer Role
          roleTank = '<@&721308536923226175>'; // Legendary Tank Role
          // Embed Attributes
          roleDescription = 'By <@&721310768859054130>, it is expected that someone knows their role and class very well and will voluntarily obtain any additional sets that will benefit them in even the most niche situations. At this level, we are looking for mastery of your character, and awareness in trials.\n\nAll <@&721310768859054130> ranks must first meet the requirements of <@&721310549547417671> for the same role.';
          dpsThreshold = `95K DPS`;
          imgName = 'rank04.Legendary.png';
          dpsDisqualifiers = [
            `[Harpooner's Wading Kilt](https://eso-sets.com/set/harpooners-wading-kilt) is Allowed`,
            `\u200B`,
            'No [Blood For Blood](https://eso-skillbook.com/skill/blood-for-blood)',
            'No Other [Mythic Items](https://eso-sets.com/sets/type/mythic)',
            'No Transformation Ultimate Parses',
          ];
          howToApply = 'Please use the [📩｜apply-for-ranks](https://discord.com/channels/694306288250781699/774505827113107466/802968528017162273) channel to open a request. This will create a new channel for your submit your screenshots and logs for our Officers and Raid Leaders to review.';
          break;
        // Radiant Rank
        case '862427691038801940':
          // Roles
          roleDPS = '<@&862546768867491860><@&856745221487591454>'; // Legendary Stamina/Magicka DPS Role
          roleHealer = '<@&862547274382049300>'; // Legendary Healer Role
          roleTank = '<@&862547126873751562>'; // Legendary Tank Role
          // Embed Attributes
          roleDescription = '<@&862427691038801940> is intended for someone that has completed several trifecta trial achievements. At this level, we are expecting that you are proactively keeping up with the current META builds, swapping gear and skills for each boss and trash pull to optimize for maximum efficiency, and are capable of completing any content in the game.\n\nAll <@&862427691038801940> ranks must first meet the requirements of <@&721310768859054130> for the same role.';
          dpsThreshold = `95K DPS`;
          imgName = 'rank05.Radiant.png';
          dpsDisqualifiers = [
            `[Harpooner's Wading Kilt](https://eso-sets.com/set/harpooners-wading-kilt) is Allowed`,
            `\u200B`,
            'No [Blood For Blood](https://eso-skillbook.com/skill/blood-for-blood)',
            'No Other [Mythic Items](https://eso-sets.com/sets/type/mythic)',
            'No Transformation Ultimate Parses',
          ];
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
          array.forEach((v) => (v.RankName === rnk && v.Role === role && sets.push(`[${[v.SetName]}](${v.ESOSETSURL}) ${v.PairRequirements}`)));
          return sets;
        }
        // Call Functions To Get Gear Sets From JSON And Replace Null Values For The Embed
        let setsTank = getGearSets(gear, rank.name, 'Tank');
        if (!setsTank || setsTank === '') { setsTank = 'No Additional Sets Required'; }
        let setsHealer = getGearSets(gear, rank.name, 'Healer');
        if (!setsHealer || setsHealer === '') { setsHealer = 'No Additional Sets Required'; }

        // Format And Send Embed
        const embed = new Discord.MessageEmbed()
          .setTitle(`Trial Role: ${rank.name}`)
          .setColor(rank.color)
          .setDescription(`${roles}\n${strobeBar}\n${roleDescription}`)
          .setFooter(client.user.username, client.user.displayAvatarURL())
          .setTimestamp()
          .addField('Damage Dealers', `${dpsThreshold}\n${dpsDisqualifiers.join('\n')}`, true)
          .addField('Healers', setsHealer, true)
          .addField('Tanks', setsTank, true);
        // If Superior
        if (rank.id === '721310651137654834') {
          embed.addField('Trial Completions', 'Must have clears on a minimum of 3 of the following veteran trials:\n\n- vMOL\n- vHOF\n- vAS\n- vCR\n- vSS\n- vKA\n- vRG\n\nLogs are not required for <@&721310651137654834>. Please post screenshots of your achievements to show these clears. If you have already posted them in <#728742997667217559>, you do not have to post them again.');
        }
        // If Epic
        if (rank.id === '721310549547417671') {
          embed.addField('Trial Completions', 'Must have clears on all veteran DLC trials and a minimum of 3 of the following hard mode trials:\n\n- vMOL HM\n- vHOF HM\n- vAS HM\n- vCR HM\n- vSS HM\n- vKA HM\n- vRG HM\n\nLogs are not required for <@&721310549547417671>. Please post screenshots of your achievements to show these clears. If you have already posted them in <#728742997667217559>, you do not have to post them again.');
        }
        // If Legendary
        if (rank.id === '721310768859054130') {
          embed.addField(`Trial Completions`, `Must have clears on all hard mode DLC trials (excluding vRG for now)`)
          embed.addField('Trial Performance-Log Review', 'When applying for <@&721310768859054130> roles, you will be expected to provide trial logs to be reviewed by the guild officers. These logs will be used to determine several factors that cannot be determined by a dummy parse or gear alone. Acceptable trials for log sumbissions include:\n\n- vMOL HM\n- vHOF HM\n- vAS HM\n- vCR HM\n- vSS HM\n- vKA HM\n- vRG HM\n\nBelow are the criteria we\'re looking at for each role.');
          embed.addField('Damage Dealers', 'TRIAL Single Target Damage\nSurvivability\nExtra Duties (Backyard Runner, Portals, etc.)', true);
          embed.addField('Healers', 'Survivability\nCombat Prayer Uptime\nMajor Courage Uptime\nClass Specific Buffs/Debuffs\nGear Set Usage/Uptime', true);
          embed.addField('Tanks', 'Survivability\nFracture Uptime\nMaim Uptime\nCrusher Uptime\nClass Specific Buffs/Debuffs', true);
        }
        // If Radiant
        if (rank.id === `862427691038801940`) {
          embed.addField(`Trifecta Completions`,`Must have a minimum of 3 of the following trifecta trial achievements:\n\n- Tick Tock Tormenter\n- Immortal Redeemer\n- Gryphon Heart\n- Godslayer\n- Dawnbringer\n- Planesbreaker\n\n`)
        }
        embed.addField('How To Apply', howToApply);
        msgObject.delete();
        await channelDestination.send({
          files: [{
            attachment: `./images/${imgName}`,
            name: `${imgName}`,
          }],
        });
        await channelDestination.send(embed);
      });
    });
  },
};
