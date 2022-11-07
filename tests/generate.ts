import * as discord from 'discord.js';
import { createTranscript } from '../src';

import { config } from 'dotenv';
config();

const client = new discord.Client({
  intents: [discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.GUILDS],
});

client.on('ready', async () => {
  const channel = await client.channels.fetch(process.env.CHANNEL!);

  if (!channel || (!channel.isText() && !channel.isThread())) {
    console.error('Invalid channel provided.');
    process.exit(1);
  }

  const attachment = await createTranscript(channel);

  await channel.send({
    files: [attachment],
  });

  client.destroy();
  process.exit(0);
});

client.login(process.env.TOKEN!);
