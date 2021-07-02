module.exports = {
  name: 'ping',
  description: 'Test If The Bot Is Working.',
  execute(msgObject, args) {
    msgObject.channel.send('Pong!');
  },
};
