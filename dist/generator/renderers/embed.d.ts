/// <reference types="react" />
import type { MessageEmbed, Message } from 'discord.js';
import type { RenderMessageContext } from '..';
declare type RenderEmbedContext = RenderMessageContext & {
    index: number;
    message: Message;
};
export declare function renderEmbed(embed: MessageEmbed, context: RenderEmbedContext): Promise<JSX.Element>;
export {};
