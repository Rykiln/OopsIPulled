const Discord = require(`discord.js`);
const fs = require(`fs`);
module.exports = {
    // Name of this command. Required for all commands.
    name: 'twitch',

    // [Optional] Description of this command for the help command
    description: 'Adds or Removes Channels From Twitch.',

    // [Optional] Permits additional command names to be used for this command 
    aliases: [`ttv`, `stream`, `streamer`],

    // [Optional] Displays how to use this command in the help command.
    usage: '<Add / Remove> <Twitch Channel Name>',

    // [Optional] Checks for default discord.js permissions. See https://discord.js.org/#/docs/main/stable/class/Permissions?scrollTo=s-FLAGS
    permissions: `MANAGE_ROLES`,

    // [Optional] When True - Requires Arguments Be Provided In Message Object
    args: true,

    // [Optional] When True - Prevents Command from being used in a Direct Message With The Bot Account
    guildOnly: true,

    // [Optional] See https://discordjs.guide/command-handling/adding-features.html#cooldowns
    cooldown: 5,

    execute(msgObject, args, client) {

        // Args Required Codeblock
        switch (args[0].toLowerCase()) {
            case `add`: // Defines Specific Argument Value For Success
            case `+`:
                console.log(`Operator Selected: [Add]`)
                const discordID = msgObject.author.id
                if(!args[1]){
                    msgObject.reply({content: `You didn't provide a Twitch Channel Name to be added.`}); 
                    return;
                }
                const twitchID = args[1].toLowerCase()
                break;
            case `remove`: // Defines Alternate Specific Argument Value For Success
            case `-`:
                console.log(`Operator Selected: [Remove]`)
                break;
            default: // Returns Instructions that Add or Remove must be specified
            console.log(`Operator Selected: [None]`)
                break;

        }
        msgObject.channel.send({content: `Arguments: ${args}\nArguments length: ${args.length}`}); // Returns Error If Above Is Not Successful
        // End of Args Required Codeblock
    },
};