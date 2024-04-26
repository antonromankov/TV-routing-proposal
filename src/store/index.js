import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { historyStore } from './history.js'
import { commonStore } from './common.js'

export const useStore = create(
  devtools(
    immer((...args) => ({
      common: { ...commonStore(...args) },
      history: { ...historyStore(...args) }
    }))
  )
)
