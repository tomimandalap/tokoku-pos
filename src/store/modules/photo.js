import axios from 'axios'
const photos = {
  state: () => ({
    data_photo: [],
    loading: false,
  }),
  getters: {
    mapData: (state) => {
      const filter = state.data_photo.filter((e) => {
        return e.albumId === 1
      })
      return filter.map((e) => {
        return {
          id: e.id,
          title: e.title,
          url: e.url,
        }
      })
    },
  },
  mutations: {
    setData(state, payload) {
      state.data_photo = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
  },
  actions: {
    getPhotos({ commit }) {
      return axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
          commit('setData', res.data)
          commit('setLoading', false)
        })
        .catch((err) => {
          if (err.response) {
            commit('setData', [])
            commit('setLoading', false)
          }
        })
        .finally(() => {
          commit('setLoading', false)
        })
    },
  },
}
export default photos
