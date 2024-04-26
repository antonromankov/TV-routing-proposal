export const historyStore = (set) => ({
  pages: {},
  pushPage: (page) =>
    set(
      (state) => {
        for (const key in page) {
          state.history.pages[key] = page[key]
        }
      },
      false,
      'addPage'
    ),
  removePage: (path) =>
    set(
      (state) => {
        delete state.history.pages[path]
      },
      false,
      'removePage'
    ),
  clearPages: () =>
    set(
      (state) => {
        state.history.pages = {}
      },
      false,
      'clearPages'
    )
})
