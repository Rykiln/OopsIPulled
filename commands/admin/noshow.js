const Discord = require("discord.js");
module.exports = {
	name: 'noshow',																					// Name of this command. Required for all commands.
	description: 'RAID LEADER: Notifies a member that they missed an event that they signed up for.',		// [Optional] Description of this command for the help command
	// aliases: [``, ``], 																			// [Optional] Permits additional command names to be used for this command 
	usage: '<@member>',																				// [Optional] Displays how to use this command in the help command.
    // permissions: `MANAGE_ROLES`,																	// [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
    args: true, 																					// [Optional] When True - Requires Arguments Be Provided In Message Object
	guildOnly: true, 																				// [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
	cooldown: 5, 																					// [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
	execute(msgObject, args, client) {
		msgObject.guild.members.fetch(msgObject.mentions.users.first())
			.then(noshowMember => {
				const noshowMemberTag = noshowMember.user.tag;
				const noshowMemberID = noshowMember.id;

				const eventName = msgObject.channel.name;
				const warnedBy = msgObject.author.username;

				const channelNoShow = client.channels.resolve(process.env.OOPS_CHANNEL_WARNINGS); // Oops I Pulled Warnings Warnings Channel
				// const channelNoShow = client.channels.resolve(process.env.TEST_CHANNEL_WARNINGS); // Test Server Warnings Warnings Channel
				// console.log(channelNoShow.name)
				const fs = require('fs');
				const _ = require('lodash');
				fs.readFile(process.env.OOPS_JSON_WARNINGS, (err, data) => {
					if (err) throw err;

					fs.readFile(process.env.OOPS_JSON_WARNINGS_OLD, (err2, oldData) => {
						if (err2) throw err2;

						const currWarns = JSON.parse(data);
						const oldWarns = JSON.parse(oldData);
						const warns = [...oldWarns, currWarns];

						const newObject = {
							Member: (noshowMemberTag),
							ID: (noshowMemberID),
							event: (eventName),
							warnedby: (warnedBy.tag),
							reason: (`No-Show`),
							date: (Date()),
						};
						warns.push(newObject);
	
						// Split `warns` into warnings older/newer than 90 days ago and write them to separate files.
						const ninetyDaysAgo = new Date().setDate(new Date().getDate() - 90);
						const [oldWarnings, newWarnings] = _.partition(warns, (warning ) => Date.parse(warning.date) < ninetyDaysAgo);
	
						const writeWarnings = (path, warnings) => {
							fs.writeFile(path, JSON.stringify(warnings, null, 4), err => {
								if (err) throw err;
							});
						};
	
						writeWarnings(process.env.OOPS_JSON_WARNINGS, newWarnings);
						writeWarnings(process.env.OOPS_JSON_WARNINGS_OLD, oldWarnings);
					});
				});

				msgObject.delete();
				let embed = new Discord.MessageEmbed()
					.setTitle(`Guild Member Added To No Show List`)
					.setColor(0xFF0000)
					.setThumbnail(noshowMember.user.displayAvatarURL())
					.setFooter(client.user.username, client.user.displayAvatarURL())
					.setTimestamp()
					.addField(`Guild Member`, noshowMember)
					.addField(`Event`, eventName)
					.addField(`Warned By`, warnedBy);

				let embedDM = new Discord.MessageEmbed()
					.setTitle(`We Missed You Today!`)
					.setColor(0xFF9900)
					.setFooter(client.user.username, client.user.displayAvatarURL())
					.setTimestamp()
					.setDescription(`Hello ${noshowMember}. You missed a guild event that you signed up for in our Discord. We hope that everything is okay. As per our guild rules, this is considered as a no-show, and three (3) no-shows can result in you being excluded from future events, or possibly even removed from the guild. Please see our [Guild Info](https://discordapp.com/channels/694306288250781699/728692333280886884/728693715794788373) channel to review the guild rules. With this said, we do understand that life happens. Just let us know when you're not going to make it. Also if you missed this because of an emergency, we're not heartless, message an officer and let one of us know, we don't need the private details, but we can remove this no-show for valid reasons.`)
					.addField(`Event`, eventName);

				channelNoShow.send(embed);
				noshowMember.send(embedDM);
			});
	},
};