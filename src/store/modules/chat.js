import axios from "axios";

const apiLinks = {
  chatAPI: "https://localhost:5001/api/v1.0/chat"
}

const state = {
  chats: []
};

const mutations = {
  SET_CHATS(state, data) {
    state.chats = data
  }
};

const actions = {
  getChats: ({ commit, rootGetters }) => {
    return axios
      .get(apiLinks.chatAPI, {
        headers: {
          Authorization: `Bearer ${rootGetters.token}`
        }
      })
      .then ((response) => {
        commit("SET_CHATS", response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
