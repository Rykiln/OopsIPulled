// Connect To Discord API
const Discord = require(`discord.js`);

// Connect To Twitch API
const Twitch = require(`twitch`).ApiClient;
const TwitchAuth = require(`twitch-auth`).ClientCredentialsAuthProvider;
const twitchClientID = process.env.OOPS_TWITCH_CLIENTID;
const twitchClientSecret = process.env.OOPS_TWITCH_SECRET;
const twitchAuthProvider = new TwitchAuth(twitchClientID, twitchClientSecret);
const apiClient = new Twitch({authProvider:twitchAuthProvider});
const interval = 120000;
const streamers = require(process.env.OOPS_JSON_STREAMERS);
const twitchColor = 0x6441a5;

// Function To Get Currently Active Streamers From JSON List of Streamers
module.exports = (client, guildID) => {setInterval(() => {
    streamers.forEach(async streamer => {
        const twitchChannels = await apiClient.helix.search.searchChannels(streamer.TwitchID,{liveOnly: true}); // Check Twitch ID For Live Status
        let twitchChannel = twitchChannels.data.find(c => {
            return c.name === streamer.TwitchID;
        })
        if(!twitchChannel){return}
        let game = await twitchChannel.getGame()
        let twitchUser = await twitchChannel.getUser()
        let twitchStream = await twitchUser.getStream()
        let twitchStreamThumbnail = await twitchStream.getThumbnailUrl(320, 180)
        let gameTime = twitchChannel.startDate.getTime()
        let currentTime = new Date().getTime()
        // Check To See If The Stream Started Within The Allotted Time Interval
        if(currentTime - gameTime <= interval){
        console.log(`${twitchChannel.name} - ${game.name} - ${gameTime}`)
        
        // Format Data Into An Embed And Send To The Destination Channel
        discordChannel = client.guilds.resolve(guildID).channels.cache.get(`694314966077014118`)
        let embed = new Discord.MessageEmbed()
            .setTitle(twitchStream.title)
            .setAuthor(twitchUser.displayName, twitchUser.profilePictureUrl)
            .setURL(`https://twitch.tv/${streamer.TwitchID}`)
            .setColor(twitchColor)
            .setFooter(client.user.username, client.user.displayAvatarURL())
            .setTimestamp()
            .setThumbnail(twitchUser.profilePictureUrl)
            .setImage(twitchStreamThumbnail)
            .addField(`Game`, twitchStream.gameName, true)
            .addField(`Current Viewers`, twitchStream.viewers, true)
        discordChannel.send(embed)
            .catch(console.error());
    };
        
    });
}, interval);
};