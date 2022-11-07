import { DiscordActionRow, DiscordButton } from '@derockdev/discord-components-react';
import { type MessageActionRowComponent, type MessageActionRow } from 'discord.js';
import React from 'react';
import { parseDiscordEmoji } from '../../utils/utils';

export default function renderComponentRow(row: MessageActionRow<MessageActionRowComponent>, id: number) {
  return (
    <DiscordActionRow key={id}>
      {row.components.map((component, id) => renderComponent(component, id))}
    </DiscordActionRow>
  );
}

const ButtonStyleMapping = {
  ["PRIMARY"]: 'primary',
  ["SECONDARY"]: 'secondary',
  ["SUCCESS"]: 'success',
  ["DANGER"]: 'destructive',
  ["LINK"]: 'secondary',
} as const;

export function renderComponent(component: MessageActionRowComponent, id: number) {
  if (component.type === "BUTTON") {
    return (
      <DiscordButton
        key={id} // @ts-ignore
        type={ButtonStyleMapping[String(component.style)]} // @ts-ignore
        url={component.url ?? undefined} // @ts-ignore
        emoji={component.emoji ? parseDiscordEmoji(component.emoji) : undefined}
      // @ts-ignore
      > {component.label} 
      </DiscordButton>
    );
  }

  return undefined;
}
