// Connect To Discord API
const { MessageEmbed } = require('discord.js');

// Connect To Twitch API
const Twitch = require('twitch').ApiClient;
const TwitchAuth = require('twitch-auth').ClientCredentialsAuthProvider;

const twitchClientID = process.env.OOPS_TWITCH_CLIENTID;
const twitchClientSecret = process.env.OOPS_TWITCH_SECRET;
const twitchAuthProvider = new TwitchAuth(twitchClientID, twitchClientSecret);
const apiClient = new Twitch({ authProvider: twitchAuthProvider });
const interval = process.env.OOPS_TWITCH_REFRESH;
const streamers = require(process.env.OOPS_JSON_STREAMERS);
const twitchColor = 0x6441a5;

// Function To Get Currently Active Streamers From JSON List of Streamers
module.exports = (client) => {
  setInterval(() => {
    const currentTime = new Date().getTime();
    streamers.forEach(async (streamer) => {
      try {
        // Get Match Twitch Users and Channels From JSON Objects
        const tUser = await apiClient.helix.users.getUserByName(streamer.TwitchID); // Searches For User Data
        const tSearch = await apiClient.helix.search.searchChannels(streamer.TwitchID); // Searches For Channels By Name
        const tChannel = tSearch.data.find((c) => c.name === streamer.TwitchID); // Filters Channels Found For Exact String Matches
        const tChannelURL = `https://twitch.tv/${tChannel.name}`;

        // Checks Channel For isLive Status
        if (!tChannel.isLive) {
          // await console.log(`${tUser.displayName} -- OFFLINE --`); // Console Logs Offline Users For Debugging.
          return;
        }
        // await console.log(`${tUser.displayName} -- ONLINE --`); // Console Logs Online Users For Debugging.
        // Gets Stream And Game Data For Active Channels
        const tStream = await tUser.getStream();
        const tStreamTime = tStream.startDate.getTime();
        const tStreamTitle = tStream.title;
        const tStreamThumbnail = tStream.getThumbnailUrl(320, 180);
        const tStreamViewers = tStream.viewers;
        const tGame = tStream.gameName;
        // Set Destination Channel In Discord By Game
        let dChannel;
        switch (tGame.toLowerCase()) {
          case 'the elder scrolls online':
          case 'the elder scrolls online: collection':
          case 'the elder scrolls online: blackwood':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_DEFAULT);
            break;
          case 'among us':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_AMONGUS);
            break;
          case `dungeons & dragons`:
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_TABLETOP);
            break;
          case 'fallout':
          case 'fallout 2':
          case 'fallout 3':
          case 'fallout: new vegas':
          case 'fallout 4':
          case 'fallout shelter':
          case 'fallout 76':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_FALLOUT);
            break;
          case 'final fantasy':
          case 'final fantasy ii':
          case 'final fantasy iii':
          case 'final fantasy iv':
          case 'final fantasy v':
          case 'final fantasy vi':
          case 'final fantasy vii':
          case 'final fantasy viii':
          case 'final fantasy ix':
          case 'final fantasy x':
          case 'final fantasy x-2':
          case 'final fantasy xi':
          case 'final fantasy xii':
          case 'final fantasy xiii':
          case 'final fantasy xiii-2':
          case 'final fantasy xiv online':
          case 'final fantasy xv':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_FINALFANTASY);
            break;
          case 'genshin impact':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_GENSHINIMPACT);
            break;
          case 'league of legends':
          case 'league of legends: wild rift':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_LEAGUEOFLEGENDS);
            break;
          case `new world`:
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_NEWWORLD);
            break;
          case 'valheim':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_VALHEIM);
            break;
          default:
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_OTHER);
            break;
        }

        // Checks To See If Activity Started Within The Last Interval
        const tStreamRecent = currentTime - tStreamTime <= interval;
        if (!tStreamRecent) { // Return if Not Recent
          return;
        }
        // Console Log Recent Streams
        console.log(`[${tUser.displayName}] Started Streaming [${tGame}]`);

        // Format Data Into An Embed And Send To The Destination Channel
        const embed = new MessageEmbed()
          .setTitle(tStreamTitle)
          .setAuthor(tUser.displayName, tUser.profilePictureUrl)
          .setURL(tChannelURL)
          .setColor(twitchColor)
          .setFooter(client.user.username, client.user.displayAvatarURL())
          .setTimestamp()
          .setThumbnail(tStreamThumbnail)
          .addFields(
            { name: `Game`, value: tGame.toString(), inline: true },
            { name: `Current Viewers`, value: tStreamViewers.toString(), inline: true }
          )
        dChannel.send({ embeds: [embed] })
          .catch(console.error());
      } catch (e) {
        // console.error(e);
        return;
      }
    });
  }, interval);
};
