import { createStore } from "vuex";

const store = createStore({
  state: {
    searchResults: [],
    selectedCard: null,
  },
  mutations: {
    setResults(state, results) {
      state.searchResults = results;
    },
    setSelectedCard(state, cardData) {
      state.selectedCard = cardData;
    },
  },
  actions: {
    updateResults({ commit }, results) {
      commit("setResults", results);
    },
  },
});

export default store;
