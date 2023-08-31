import * as korlorist from 'kolorist'
import type { MessageValue, Options } from '../types'

function log(msg: string | void) {
  if (!msg)
    return
  console.log(msg)
}

async function printWithBoxen(res: MessageValue) {
  const { default: boxen } = await import('boxen')
  res.borderStyle = res.borderStyle || 'none'
  // @ts-expect-error missing type
  log(boxen(res.text, res))
}

export async function print(info: Options['info']) {
  for (const message of info) {
    if (typeof message === 'function') {
      const res = await message(korlorist)
      if (typeof res === 'object')
        printWithBoxen(res)

      else log(res)
    }
    else if (typeof message === 'object') {
      printWithBoxen(message)
    }
    else {
      log(message)
    }
  }
}
