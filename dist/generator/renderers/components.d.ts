/// <reference types="react" />
import { type MessageActionRowComponent, type MessageActionRow } from 'discord.js';
export default function renderComponentRow(row: MessageActionRow<MessageActionRowComponent>, id: number): JSX.Element;
export declare function renderComponent(component: MessageActionRowComponent, id: number): JSX.Element | undefined;
