// Connect To Discord API
const Discord = require(`discord.js`);

// Connect To Twitch API
const Twitch = require(`twitch`).ApiClient;
const TwitchAuth = require(`twitch-auth`).ClientCredentialsAuthProvider;
const twitchClientID = process.env.OOPS_TWITCH_CLIENTID;
const twitchClientSecret = process.env.OOPS_TWITCH_SECRET;
const twitchAuthProvider = new TwitchAuth(twitchClientID, twitchClientSecret);
const apiClient = new Twitch({authProvider:twitchAuthProvider});
const interval = process.env.OOPS_TWITCH_REFRESH;
const streamers = require(process.env.OOPS_JSON_STREAMERS);
const twitchColor = 0x6441a5;

// Function To Get Currently Active Streamers From JSON List of Streamers
module.exports = (client, guildID) => {setInterval(() => {
    const currentTime = new Date().getTime()
    streamers.forEach(async streamer => {
        try{
            // Get Match Twitch Users and Channels From JSON Objects
            const tUser = await apiClient.helix.users.getUserByName(streamer.TwitchID); // Searches For User Data
            const tSearch = await apiClient.helix.search.searchChannels(streamer.TwitchID); // Searches For Channels By Name
            const tChannel = tSearch.data.find(c => {return c.name === streamer.TwitchID}); // Filters Channels Found For Exact String Matches
            const tChannelURL = `https://twitch.tv/${tChannel.name}`;

            // Checks Channel For isLive Status
            if (!tChannel.isLive){
                // await console.log(`${tUser.displayName} -- OFFLINE --`); // Console Logs Offline Users For Debugging.
                return; 
            };
            // Gets Stream And Game Data For Active Channels
            const tStream = await tUser.getStream();
            const tStreamTime = tStream.startDate.getTime();
            const tStreamTitle = tStream.title;
            const tStreamThumbnail = tStream.getThumbnailUrl(320, 180);
            const tStreamViewers = tStream.viewers;
            const tGame = tStream.gameName;
            // Set Destination Channel In Discord By Game
            let dChannel;
            switch (tGame) {
                case `The Elder Scrolls Online`:
                case `The Elder Scrolls Online: Collection`:
                case `The Elder Scrolls: Arena`:
                case `The Elder Scrolls: Blades`:
                case `The Elder Scrolls: Legends`:
                case `The Elder Scrolls II: Daggerfall`:
                case `The Elder Scrolls III: Morrowind`:
                case `The Elder Scrolls IV: Oblivion`:
                case `The Elder Scrolls V: Skyrim`:
                case `The Elder Scrolls V: Skyrim Special Edition`:
                case `The Elder Scrolls VI:`:
                case `The Elder Scrolls Travels: Oblivion`:
                case `The Elder Scrolls Travels: Stormhold`:
                case `The Elder Scrolls Travels: Dawnstar`:
                case `The Elder Scrolls Travels: Shadowkey`:
                case `The Elder Scrolls Adventures: Redguard`:
                    dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_CHAT);
                    break;
                case `Among Us`:
                    dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_AMONGUS);
                    break;
                case `Assassin's Creed`:
                case `Assassin's Creed II`:
                case `Assassin's Creed: Brotherhood`:
                case `Assassin's Creed: Revelations`:
                case `Assassin's Creed III`:
                case `Assassin's Creed III Remastered`:
                case `Assassin's Creed III: Liberation`:
                case `Assassin's Creed III: Liberation - Remastered`:
                case `Assassin's Creed IV: Black Flag`:
                case `Assassin's Creed: Liberation HD`:
                case `Assassin's Creed: Rogue`:
                case `Assassin's Creed: Rogue Remastered`:
                case `Assassin's Creed: Unity`:
                case `Assassin's Creed: Syndicate`:
                case `Assassin's Creed: Origins`:
                case `Assassin's Creed: Odyssey`:
                case `Assassin's Creed: Rebellion`:
                    dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_ASSASSINSCREED);
                    break;
                case `Black Desert Online`:
                    dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_BLACKDESERT);
                    break;
                case `Cyberpunk 2077`:
                    dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_CYBERPUNK);
                    break;
                case `Destiny`:
                case `Destiny 2`:
                    dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_DESTINY);
                    break;
                case `Fallout`:
                case `Fallout 2`:
                case `Fallout 3`:
                case `Fallout: New Vegas`:
                case `Fallout 4`:
                case `Fallout Shelter`:
                case `Fallout 76`:
                    dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_FALLOUT);
                    break;
                case `Final Fantasy`:
                case `Final Fantasy II`:
                case `Final Fantasy III`:
                case `Final Fantasy IV`:
                case `Final Fantasy V`:
                case `Final Fantasy VI`:
                case `Final Fantasy VII`:
                case `Final Fantasy VIII`:
                case `Final Fantasy IX`:
                case `Final Fantasy X`:
                case `Final Fantasy X-2`:
                case `Final Fantasy XI`:
                case `Final Fantasy XII`:
                case `Final Fantasy XIII`:
                case `Final Fantasy XIII-2`:
                case `Final Fantasy XIV Online`:
                case `Final Fantasy XV`:
                    dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_FINALFANTASY);
                    break;
                case `Genshin Impact`:
                    dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_GENSHINIMPACT);
                    break;
                case `Horizon Zero Dawn`:
                    dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_HORIZONZERODAWN);
                    break;
                case `League of Legends`:
                case `League of Legends: Wild Rift`:
                    dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_LEAGUEOFLEGENDS);
                    break;
                case `Red Dead Redemption`:
                case `Red Dead Redemption 2`:
                    dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_REDDEADREDEMPTION);
                    break;
                case `The Witcher`:
                case `The Witcher: Adventure Game`:
                case `The Witcher 2: Assassin's of Kings`:
                case `The Witcher 3: Wild Hunt`:
                    dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_THEWITCHER);
                    break;
                case `World of Warcraft`:
                    dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_WORLDOFWARCRAFT);
                    break;
                case `Subnautica`:
                case `Subnautica: Below Zero`:
                    dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_SUBNAUTICAL);
                    break;
                case `Valheim`:
                    dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_VALHEIM);
                    break;
                default:
                    dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_OTHER);
                    break;
            }

            // Checks To See If Activity Started Within The Last Interval
            const tStreamRecent = currentTime - tStreamTime <= interval
            if(!tStreamRecent){ // Return if Not Recent
                return;
            }
            // Console Log Recent Streams
            console.log(`[${tUser.displayName}] Started Streaming [${tGame}]`)
            
            // Format Data Into An Embed And Send To The Destination Channel
            let embed = new Discord.MessageEmbed()
                .setTitle(tStreamTitle)
                .setAuthor(tUser.displayName, tUser.profilePictureUrl)
                .setURL(tChannelURL)
                .setColor(twitchColor)
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setThumbnail(tUser.profilePictureUrl)
                .setImage(tStreamThumbnail)
                .addField(`Game`, tGame, true)
                .addField(`Current Viewers`, tStreamViewers, true)
            dChannel.send(embed)
                .catch(console.error());
        }catch {return};;
    });
}, interval);
};