export const commonStore = (set) => ({
	isModalOpened: false,
	setModalOpened: (value) =>
		set(
			(state) => {
				state.common.isModalOpened = value
			},
			false,
			'setModalOpened'
		)
})
