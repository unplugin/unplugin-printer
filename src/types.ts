import type * as kolorist from 'kolorist'

import type { Options as BoxenOptions } from 'boxen'

type Kolorist = Omit<typeof kolorist, 'SupportLevel' | 'options'>

export type MessageValue = Omit<BoxenOptions, 'borderStyle'> & { text: string } & {
  borderStyle?: BoxenOptions['borderStyle'] | 'none'
}

type Message = string | MessageValue | ((kolorist: Kolorist) => string | MessageValue | Promise<string | MessageValue | void>)

export interface Options {
  info: Message[]
}
