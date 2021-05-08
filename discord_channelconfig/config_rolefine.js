const Discord = require("discord.js");
module.exports = {
	name: 'rolefine',									// Name of this command. Required for all commands.
	description: 'Sends Embed For Fine.',				// [Optional] Description of this command for the help command
	aliases: ['fine'], 									// [Optional] Permits additional command names to be used for this command 
	// usage: '<required_args> [optional_args]',		// [Optional] Displays how to use this command in the help command.
    permissions: `MANAGE_ROLES`,						// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
    args: false, 										// [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: true, 									// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5, 										// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	execute(msgObject, args, client) {
		const strobe = client.emojis.cache.find(emoji => emoji.name === "strobe");
		const roleDPS = `<@&721303101285597244>`; // Fine DPS Role
		const roleHealer = `<@&721309056161284109>`; // Fine Healer Role
		const roleTank = `<@&721307639224598549>`; // Fine Tank Role
		const roles = `${roleDPS}${roleHealer}${roleTank}\n${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}${strobe}`;
		const embed = new Discord.MessageEmbed()
			.setTitle(`Trial Role: Epic`)
			.setColor(0x2cc50d)
			.setDescription(`${roles}\nThese are additional sets that start allowing groups to optimize in more situations, including large trash pulls between bosses.`)
			.setFooter(client.user.username, client.user.displayAvatarURL())
			.setTimestamp()
			.addField(`Damage Dealers`, `50K DPS\nNo [Blood For Blood](https://eso-skillbook.com/skill/blood-for-blood)\nNo [Thrassians Stranglers](https://eso-sets.com/set/thrassian-stranglers)\nNo [Ring of the Pale Order](https://eso-sets.com/set/ring-of-the-pale-order)\nNo Werewolf Parses`, true)
			.addField(`Healers`, `[Spell Power Cure](https://eso-sets.com/set/spell-power-cure) (Pair w/Hollowfang)\n[Hollowfang Thirst](https://eso-sets.com/set/hollowfang-thirst) (Pair w/SPC)\n[Sentinel of Rkugamz](https://eso-sets.com/set/sentinel-of-rkugamz)\n[Bogdan the Nightflame](https://eso-sets.com/set/nightflame)\n[Master's Restoration Staff](https://eso-sets.com/set/grand-rejuvenation)`, true)
			.addField(`Tanks`, `[Claw of Yolnahkrin](https://eso-sets.com/set/claw-of-yolnahkriin)\n[Ebon Armory](https://eso-sets.com/set/ebon-armory)\n[Worm's Raiment](https://eso-sets.com/set/the-worms-raiment)\n[Earthgore](https://eso-sets.com/set/earthgore)\n[Lord Warden](https://eso-sets.com/set/lord-warden)`, true)
			.addField(`How To Apply`,`Please use the [📩｜apply-for-ranks](https://discord.com/channels/694306288250781699/774505827113107466/802968528017162273) channel to open a request. This will create a new channel for your submit your screenshots for our Officers and Raid Leaders to review.`);
		msgObject.delete();
		msgObject.channel.send({files: [{
			attachment: `./images/rank01.Fine.png`,
			name: `rank01.Fine.png`
		}]}).then(msg => {msgObject.channel.send(embed);})
	},
};