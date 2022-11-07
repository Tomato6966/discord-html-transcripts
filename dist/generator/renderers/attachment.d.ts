/// <reference types="react" />
import type { MessageAttachment, Message } from 'discord.js';
import type { RenderMessageContext } from '..';
export default function renderAttachments(message: Message, context: RenderMessageContext): Promise<JSX.Element | null>;
export declare function renderAttachment(attachment: MessageAttachment, context: RenderMessageContext): Promise<JSX.Element>;
