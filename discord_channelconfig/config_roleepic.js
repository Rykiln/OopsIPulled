const Discord = require("discord.js");
module.exports = {
	name: 'roleepic',									// Name of this command. Required for all commands.
	description: 'Sends Embed For Epic.',				// [Optional] Description of this command for the help command
	aliases: ['epic'], 									// [Optional] Permits additional command names to be used for this command 
	// usage: '<required_args> [optional_args]',		// [Optional] Displays how to use this command in the help command.
    permissions: `MANAGE_ROLES`,						// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
    args: false, 										// [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: true, 									// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5, 										// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	execute(msgObject, args, client) {
		const strobe = client.emojis.cache.find(emoji => emoji.name === "strobe");
		const roleStam = `<@&721303321780027464>`; // Epic Stamina DPS Role
		const roleMag = `<@&773048024779718708>`; // Epic Magicka DPS Role
		const roleHealer = `<@&721309156920787045>`; // Epic Healer Role
		const roleTank = `<@&721308461736001586>`; // Epic Tank Role
		const rolePreviousHealer = `<@&721309339935047750>`; // Superior Healer Role
		const roleprevioustank = `<@&721308611955130378>`; // Superior Tank Role
		const roles = `${roleStam}${roleMag}${roleHealer}${roleTank}\n${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}`;
		const embed = new Discord.MessageEmbed()
			.setTitle(`Trial Role: Epic`)
			.setColor(0x9f2df7)
			.setDescription(`${roles}\nThese are additional sets that start allowing groups to optimize in more situations, including large trash pulls between bosses.`)
			.setFooter(client.user.username, client.user.displayAvatarURL())
			.setTimestamp()
			.addField(`Previous Rank Requirements`, `All <@&721310549547417671> Ranks must first meet the requirements of <@&721310651137654834> for the same role.`)
			.addField(`Damage Dealers`, `80K Magikca DPS\n90K Stamina DPS\nNo [Blood For Blood](https://eso-skillbook.com/skill/blood-for-blood)\nNo [Thrassians Stranglers](https://eso-sets.com/set/thrassian-stranglers)\nNo [Ring of the Pale Order](https://eso-sets.com/set/ring-of-the-pale-order)\nNo Werewolf Parses`, true)
			.addField(`Healers`, `${rolePreviousHealer}\n[Martial Knowledge](https://eso-sets.com/set/way-of-martial-knowledge)\n[Z'en's Redress](https://eso-sets.com/set/zens-redress) (Pair w/Martial Knowledge)\n[Blackrose Prison Restoration Staff](https://eso-sets.com/set/menders-ward)`, true)
			.addField(`Tanks`, `${roleprevioustank}\n[Dragon’s Defilement](https://eso-sets.com/set/dragons-defilement)\n[Frozen Watcher](https://eso-sets.com/set/frozen-watcher)\n[Roar of Alkosh](https://eso-sets.com/set/roar-of-alkosh)\n[Lady Thorn](https://eso-sets.com/set/lady-thorn)`, true)
			.addField(`Trial Completions`, `Must have clears on a minimum of 3 of the following trials:\n\n - vHOF\n - vAS+1\n - vMOL\n - vCR+1\n - vSS\n - vKA\n\nLogs are not required for epic, please post screenshots of your achievements to show these clears. If you have already posted them in #vet-trial-clears, you do not have to post them again.`)
			.addField(`How To Apply`,`Please use the [📩｜apply-for-ranks](https://discord.com/channels/694306288250781699/774505827113107466/802968528017162273) channel to open a request. This will create a new channel for your submit your screenshots for our Officers and Raid Leaders to review.`);
		msgObject.delete();
		msgObject.channel.send({files: [{
			attachment: `./images/rank03.Epic.png`,
			name: `rank03.Epic.png`
		}]}).then(msg => {msgObject.channel.send(embed);})
	},
};