export const historyStore = (set) => ({
	pages: [],
	pushPage: (page) =>
		set(
			(state) => {
				state.history.pages = [...state.history.pages, page]
			},
			false,
			'addPage'
		),
	removeLastPage: () =>
		set(
			(state) => {
				state.history.pages = state.history.pages.slice(-1)
			},
			false,
			'removeLastPage'
		)
})
