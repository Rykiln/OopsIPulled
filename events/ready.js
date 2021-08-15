module.exports = {
  name: `ready`,
  once: true,
  execute(client) {
    console.log(`ready`)
    console.log(`${client.user.username} Bot Is Now Online!`);
    // console.log(`This bot is a Tier ${client.guilds.resolve(GuildID).premiumTier} server with ${client.guilds.resolve(GuildID).premiumSubscriptionCount} boosts!`); // Commented because GuildID is not being passed correctly from index.js
    console.log(`Twitch API Request interval is set to ${process.env.OOPS_TWITCH_REFRESH} seconds.`);
    console.log(Date());
    console.log('========================================');
    console.log();
    client.user.setActivity(`${client.user.username} | .help`, { type: 'PLAYING' });
  }
}