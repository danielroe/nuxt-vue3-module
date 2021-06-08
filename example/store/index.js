export const state = () => ({
  info: "store is working!"
});

export const mutations = {
  update: (state, payload) => {
    state.info = payload
  },
}
