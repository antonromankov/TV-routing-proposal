import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { historyStore } from './history.js'

export const useStore = create()(
	devtools(
		immer((...args) => ({
			history: { ...historyStore(...args) }
		}))
	)
)
