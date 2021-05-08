const Discord = require("discord.js");
module.exports = {
	name: 'rolelegendary',										// Name of this command. Required for all commands.
	description: 'Sends Embed For Legendary.',					// [Optional] Description of this command for the help command
	aliases: ['legendary'], 									// [Optional] Permits additional command names to be used for this command 
	// usage: '<required_args> [optional_args]',				// [Optional] Displays how to use this command in the help command.
    permissions: `MANAGE_ROLES`,								// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
    args: false, 												// [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: true, 											// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5, 												// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	execute(msgObject, args, client) {
		const strobe = client.emojis.cache.find(emoji => emoji.name === "strobe");
		const roleStam = `<@&721303692548112405>`; // Legendary Stamina DPS Role
		const roleMag = `<@&773048238164934656>`; // Legendary Magicka DPS Role
		const roleHealer = `<@&721309238877618186>`; // Legendary Healer Role
		const roleTank = `<@&721308536923226175>`; // Legendary Tank Role
		const rolePreviousStam = `<@&721303321780027464>`; // Epic Stamina DPS Role
		const rolePreviousMag = `<@&773048024779718708>`; // Epic Magicka DPS Role
		const rolePreviousHealer = `<@&721309156920787045>`; // Epic Healer Role
		const rolePreviousTank = `<@&721308461736001586>`; // Epic Tank Role
		const roles = `${roleStam}${roleMag}${roleHealer}${roleTank}\n${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}`;
		const embed = new Discord.MessageEmbed()
			.setTitle(`Trial Role: Legendary`)
			.setColor(0xeec929)
			.setDescription(`${roles} By Legendary, it is expected that someone knows their role and class very well and will voluntarily obtain any additional sets that will benefit them in even the most niche situations. At this level, we are looking for mastery of your character, and awareness in trials.`)
			.setFooter(client.user.username, client.user.displayAvatarURL())
			.setTimestamp()
			.addField(`Previous Rank Requirements`, `All <@&721310768859054130> Ranks must first meet the requirements of <@&721310549547417671> for the same role.`)
			.addField(`Damage Dealers`, `${rolePreviousStam}/${rolePreviousMag}\n90K Magicka DPS\n95K Stamina DPS\nNo [Simmering Frenzy](https://eso-skillbook.com/skill/simmering-frenzy)\nNo [Thrassians Stranglers](https://eso-sets.com/set/thrassian-stranglers)\nNo [Ring of the Pale Order](https://eso-sets.com/set/ring-of-the-pale-order)\nNo Werewolf Parses`, true)
			.addField(`Healers`, `${rolePreviousHealer}`, true)
			.addField(`Tanks`, `${rolePreviousTank}`, true)
			// .addField(`Trial Completions`, `Must have clears on all of 3 of the following trials:\n\n - vHOF\n - vAS+1\n - vMOL\n - vCR+1\n - vSS\n - vKA\n\nLogs are not required for epic, please post screenshots of your achievements to show these clears. If you have already posted them in #vet-trial-clears, you do not have to post them again.`)
			.addField(`Trial Performance-Log Review`, `When applying for Legendary roles, you will be expected to provide trial logs to be reviewed by the guild officers. These logs will be used to determine several factors that cannot be determined by a dummy parse or gear alone. Acceptable trials for log sumbissions include:\n\n - vMOL (or HM) If backyard runner, log must be from your perspective\n - vHOF (or HM)\n - vAS HM\n - vCR+2 (or HM) If portals, log must be from your perspective\n - vSS (or HM) If portals, log must be from your perspective\n - vKA (or HM)\n\nBelow are the criteria we're looking at for each role.`)
			.addField(`Damage Dealers`, `TRIAL Single Target Damage\nSurvivability\nExtra Duties (Backyard Runner, Portals, etc)`, true)
			.addField(`Healers`, `Survivability\nEle Drain uptime\nCombat Prayer \nMajor Courage\nClass specific buffs/debuffs\nGear set usage/uptime`, true)
			.addField(`Tanks`, `Survivability\nFracture Uptime\nMaim Uptime\nCrusher Uptime\nClass specific buffs/debuffs`, true)
			.addField(`How To Apply`,`Please use the [📩｜apply-for-ranks](https://discord.com/channels/694306288250781699/774505827113107466/802968528017162273) channel to open a request. This will create a new channel for your submit your screenshots and logs for our Officers and Raid Leaders to review.`);
	msgObject.delete();
	msgObject.channel.send({files: [{
		attachment: `./images/rank04.Legendary.png`,
		name: `rank04.Legendary.png`
	}]}).then(msg => {msgObject.channel.send(embed)})
	},
};