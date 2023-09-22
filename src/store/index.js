import { createStore } from "vuex";

const store = createStore({
  state: {
    searchResults: [],
  },
  mutations: {
    setResults(state, results) {
      state.searchResults = results;
    },
  },
  actions: {
    updateResults({ commit }, results) {
      commit("setResults", results);
    },
  },
});

export default store;
