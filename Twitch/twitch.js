// Connect To Discord API
const Discord = require('discord.js');

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
module.exports = (client, guildID) => {
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
          case 'the elder scrolls: arena':
          case 'the elder scrolls: blades':
          case 'the elder scrolls: legends':
          case 'the elder scrolls ii: daggerfall':
          case 'the elder scrolls iii: morrowind':
          case 'the elder scrolls iv: oblivion':
          case 'the elder scrolls v: skyrim':
          case 'the elder scrolls v: skyrim special edition':
          case 'the elder scrolls vi:':
          case 'the elder scrolls travels: oblivion':
          case 'the elder scrolls travels: stormhold':
          case 'the elder scrolls travels: dawnstar':
          case 'the elder scrolls travels: shadowkey':
          case 'the elder scrolls adventures: redguard':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_DEFAULT);
            break;
          case 'among us':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_AMONGUS);
            break;
          case 'assassin\'s creed':
          case 'assassin\'s creed ii':
          case 'assassin\'s creed: brotherhood':
          case 'assassin\'s creed: revelations':
          case 'assassin\'s creed iii':
          case 'assassin\'s creed iii remastered':
          case 'assassin\'s creed iii: liberation':
          case 'assassin\'s creed iii: liberation - remastered':
          case 'assassin\'s creed iv: black flag':
          case 'assassin\'s creed: liberation hd':
          case 'assassin\'s creed: rogue':
          case 'assassin\'s creed: rogue remastered':
          case 'assassin\'s creed: unity':
          case 'assassin\'s creed: syndicate':
          case 'assassin\'s creed: origins':
          case 'assassin\'s creed: odyssey':
          case 'assassin\'s creed: rebellion':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_ASSASSINSCREED);
            break;
          case 'black desert online':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_BLACKDESERT);
            break;
          case 'cyberpunk 2077':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_CYBERPUNK);
            break;
          case 'destiny':
          case 'destiny 2':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_DESTINY);
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
          case 'horizon zero dawn':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_HORIZONZERODAWN);
            break;
          case 'league of legends':
          case 'league of legends: wild rift':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_LEAGUEOFLEGENDS);
            break;
          case `new world`:
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_NEWWORLD);
            break;
          case 'red dead redemption':
          case 'red dead redemption 2':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_REDDEADREDEMPTION);
            break;
          case 'the witcher':
          case 'the witcher: adventure game':
          case 'the witcher 2: assassin\'s of kings':
          case 'the witcher 3: wild hunt':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_THEWITCHER);
            break;
          case 'world of warcraft':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_WORLDOFWARCRAFT);
            break;
          case 'subnautica':
          case 'subnautica: below zero':
            dChannel = client.channels.cache.get(process.env.OOPS_CHANNEL_GAME_SUBNAUTICAL);
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
        const embed = new Discord.MessageEmbed()
          .setTitle(tStreamTitle)
          .setAuthor(tUser.displayName, tUser.profilePictureUrl)
          .setURL(tChannelURL)
          .setColor(twitchColor)
          .setFooter(client.user.username, client.user.displayAvatarURL())
          .setTimestamp()
          .setThumbnail(tStreamThumbnail)
          .addFields(
            {name: `Game`, value: tGame.toString(), inline: true},
            {name: `Current Viewers`, value: tStreamViewers.toString(), inline: true}
          )
        dChannel.send({embeds: [embed]})
          .catch(console.error());
      } catch (e) {
        // console.error(e);
        return;
      }
    });
  }, interval);
};
