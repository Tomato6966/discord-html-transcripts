import { DMChannel, TextChannel, ThreadChannel, type Awaitable, VoiceChannel, type Message, type Role, type User } from 'discord.js';
export declare type RenderMessageContext = {
    messages: Message[];
    channel: DMChannel | TextChannel | ThreadChannel | VoiceChannel;
    callbacks: {
        resolveChannel: (channelId: string) => Awaitable<DMChannel | TextChannel | ThreadChannel | VoiceChannel | null>;
        resolveUser: (userId: string) => Awaitable<User | null>;
        resolveRole: (roleId: string) => Awaitable<Role | null>;
    };
    poweredBy?: boolean;
    saveImages: boolean;
    favicon: 'guild' | string;
};
export default function renderMessages({ messages, channel, callbacks, ...options }: RenderMessageContext): Promise<string>;
