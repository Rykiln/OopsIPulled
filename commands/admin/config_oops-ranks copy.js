const Discord = require("discord.js");
const { description } = require("./config_oops-ranks");
module.exports = {
  name: 'config_oops-ranks2',						                  // Name of this command. Required for all commands.
  description: 'ADMIN: Sends Embeds For All Ranks.',			// [Optional] Description of this command for the help command
  aliases: [`ranks`], 			                      // [Optional] Permits additional command names to be used for this command 
  // usage: '<required_args> [optional_args]',		        // [Optional] Displays how to use this command in the help command.
  permissions: `MANAGE_ROLES`,				                    // [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
  // args: true, 								                          // [Optional] When True - Requires Arguments Be Provided In Message Object
  guildOnly: true, 							                          // [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
  cooldown: 5, 								                            // [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
  execute(msgObject, args, client) {
    const fs = require(`fs`);
    const fileRanks = process.env.OOPS_JSON_RANKS;

    const strobe = client.emojis.cache.find((emoji) => emoji.name === 'strobe');
    const strobeBar = `${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}`;

    fs.readFile(fileRanks, function (err, data) {
      if (err) throw err;
      const ranks = JSON.parse(data);
      function getRoleData(JSONObject) {
        // Get Object Keys
        const keys = Object.keys(JSONObject);
        keys.forEach(key => {
          const subkeys = JSONObject[key];
          const role = msgObject.guild.roles.resolve(subkeys.roleID);
          const ddStam = msgObject.guild.roles.resolve(subkeys.ddStamID);
          const ddMag = msgObject.guild.roles.resolve(subkeys.ddMagID);
          const healer = msgObject.guild.roles.resolve(subkeys.healerID);
          const tank = msgObject.guild.roles.resolve(subkeys.tankID);
          const roles = `${ddStam}${ddMag}${healer}${tank}`;
          const roleDescription = `${subkeys.description}`;

          let ddArray = [];
          const dpsThreshold = `${subkeys.dpsThreshold}`;
          const dpsMythics = `${subkeys.dpsMythics}`;
          const dpsRestrictions = `${subkeys.dpsDisqualifiers}`;
          if (dpsThreshold !== `undefined`) { ddArray.push(`${dpsThreshold}K DPS`) }
          if (dpsMythics !== `undefined`) { ddArray.push(dpsMythics) }
          if (dpsRestrictions !== `undefined`) { ddArray.push(dpsRestrictions) }
          if (dpsThreshold === `undefined` && dpsMythics === `undefined` && dpsRestrictions === `undefined`) { ddArray.push(`\u200B`) }
          
          // CONTINUE WORKING HERE
          // STILL NEED TO SEPARATE dpsMythics AND dpsRestrictions ARRAYS TO SEPARATE LINES
          console.log(ddArray)

          const gearHealer = subkeys.gearHealer
          console.log(gearHealer)
          const gearTank = subkeys.gearTank
          console.log(gearTank)
          let gearHealerMapped;
          let gearTankMapped;

          // CONTINUE WORKING HERE
          // STILL NEED TO GET STRING SUBSTITUTION WORKING FOR UNDEFINED ARRAYS OR ARRAYS WITH NULL VALUES
          // STILL NEED TO ADD setRequirements STRING TO THE END OF THE SET HYPERLINK
          if (gearHealer === `undefined`) {
            gearHealerMapped = `\u200B`
          } else {
            gearHealerMapped = Object.keys(gearHealer).map(setIndex => `[${subkeys.gearHealer[setIndex].setName}](${subkeys.gearHealer[setIndex].setURL})`);
          }
          if (gearTank === `undefined`) {
            gearTankMapped = `\u200B`
          } else {
            gearTankMapped = Object.keys(gearTank).map(setIndex => `[${subkeys.gearTank[setIndex].setName}](${subkeys.gearTank[setIndex].setURL})`);
          }
          
           

          // Object.keys(subkeys.gearHealer).map(setIndex => `[${subkeys.gearHealer[setIndex].setName}](${subkeys.gearHealer[setIndex].setURL})`);

          // Object.keys(subkeys.gearTank).map(setIndex => `[${subkeys.gearTank[setIndex].setName}](${subkeys.gearTank[setIndex].setURL})`);
          const trialCompletions = `${subkeys.trialCompletions}`;
          const trialPerformanceReview = `${subkeys.trialPerformanceReview}`;
          const howToApply = `${subkeys.howToApply}`
          const embed = new Discord.MessageEmbed()
            .setTitle(role.name)
            .setDescription(`${roles}\n${strobeBar}\n${roleDescription}`)
            .setColor(role.color)
            .addFields(
              { name: `Damage Dealers`, value: `${ddArray.join(`\n`)}`, inline: true },
              { name: `Healer`, value: gearHealerMapped.join(`\n`), inline: true },
              { name: `Tank`, value: gearTankMapped.join(`\n`), inline: true },
            )
          if (trialCompletions !== `undefined`) {
            embed.addFields(
              { name: `Trial Completions`, value: trialCompletions, inline: false }
            )
          }
          if (trialPerformanceReview !== `undefined`) {
            embed.addFields(
              { name: `Trial Performance Review`, value: trialPerformanceReview, inline: false }
            )
          }
          embed.addFields(
            { name: `How To Apply`, value: howToApply, inline: false }
          )

          msgObject.channel.send(embed)
        });

      }
      getRoleData(ranks)
    });

  },
};