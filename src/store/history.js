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
				const { pages } = state.history
				state.history.pages = pages.slice(0, pages.length - 1)
			},
			false,
			'removeLastPage'
		)
})
