import type { Emoji } from 'discord.js';
interface RawEmojiData {
    id: string;
    name?: string;
    animated?: boolean;
}
export declare function formatBytes(bytes: number, decimals?: number): string;
export declare function parseDiscordEmoji(emoji: Emoji | RawEmojiData): string;
export declare function downloadImageToDataURL(url: string): Promise<string | null>;
export {};
