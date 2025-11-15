import type { BinaryConfig } from './types'
import { loadConfig } from 'bunfig'

export const defaultConfig: BinaryConfig = {
  verbose: true,
}

// eslint-disable-next-line antfu/no-top-level-await
export const config: BinaryConfig = await loadConfig({
  name: 'project',
  defaultConfig,
})
