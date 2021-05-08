const Discord = require("discord.js");
module.exports = {
	name: 'rolesuperior',								// Name of this command. Required for all commands.
	description: 'Sends Embed For Superior.',			// [Optional] Description of this command for the help command
	aliases: ['superior'],								// [Optional] Permits additional command names to be used for this command 
	// usage: '<required_args> [optional_args]',		// [Optional] Displays how to use this command in the help command.
    permissions: `MANAGE_ROLES`,						// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
    args: false, 										// [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: true, 									// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5, 										// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	execute(msgObject, args, client) {
		const strobe = client.emojis.cache.find(emoji => emoji.name === "strobe");
		const roleDPS = `<@&721304233219063838>`; // Superior DPS Role
		const roleHealer = `<@&721309339935047750>`; // Superior Healer Role
		const roleTank = `<@&721308611955130378>`; // Superior Tank Role
		const rolePreviousHealer = `<@&721309056161284109>`; // Fine Healer Role
		const rolePreviousTank = `<@&721307639224598549>`; // Fine Tank Role
		const roles = `${roleDPS}${roleHealer}${roleTank}\n${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}`;
		const embed = new Discord.MessageEmbed()
			.setTitle(`Trial Role: Superior`)
			.setColor(0x3991ff)
			.setDescription(`${roles}\nThese sets, skills, and damage requirements allow for more group optimization than fine sets, but also require more understanding of how and when to perform certain actions to cause the gear to activate.`)
			.setFooter(client.user.username, client.user.displayAvatarURL())
			.setTimestamp()
			.addField(`Previous Rank Requirements`, `All <@&721310651137654834> Ranks must first meet the requirements of <@&721310503015546951> for the same role.`)
			.addField(`Damage Dealers`, `65K DPS\nNo [Blood For Blood](https://eso-skillbook.com/skill/blood-for-blood)\nNo [Thrassians Stranglers](https://eso-sets.com/set/thrassian-stranglers)\nNo [Ring of the Pale Order](https://eso-sets.com/set/ring-of-the-pale-order)\nNo Werewolf Parses`, true)
            .addField(`Healers`, `${rolePreviousHealer}\n[Vestments of Olorime](https://eso-sets.com/set/perfect-vestment-of-olorime) (Pair w/Hollowfang)\n[Roaring Opportunist](https://eso-sets.com/set/perfect-roaring-opportunist) (Pair w/Jorvuld's Guidance)\n[Jorvuld's Guideance](https://eso-sets.com/set/jorvulds-guidance)\n[Symphony of Blades](https://eso-sets.com/set/symphony-of-blades)\n[Troll King](https://eso-sets.com/set/the-troll-king)`, true)
            .addField(`Tanks`, `${rolePreviousTank}\n[Powerful Assault](https://eso-sets.com/set/powerful-assault)\n[Aegis of Galenwe](https://eso-sets.com/set/aegis-of-galenwe)\n[Drake's Rush](https://eso-sets.com/set/drakes-rush)`, true)
			.addField(`How To Apply`,`Please use the [📩｜apply-for-ranks](https://discord.com/channels/694306288250781699/774505827113107466/802968528017162273) channel to open a request. This will create a new channel for your submit your screenshots for our Officers and Raid Leaders to review.`);
		msgObject.delete();
		msgObject.channel.send({files: [{
			attachment: `./images/rank02.Superior.png`,
			name: `rank02.Superior.png`
		}]}).then(msg => {msgObject.channel.send(embed);})
	},
};