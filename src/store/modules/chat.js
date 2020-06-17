import axios from "axios";

const apiLinks = {
  chatAPI: "https://localhost:5001/api/v1.0/chat"
}

const state = {
  chats: [],
  chat: ''
};

const mutations = {
  SET_CHATS(state, data) {
    state.chats = data
  },
  SET_CHAT(state, data) {
    state.chat = data
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
  },
  createChat: ({ rootGetters }, incomingData) => {
    let listID = []
    listID.push(incomingData.id)
    listID.push(rootGetters.credentials.id)
    let data = JSON.stringify({
      name: incomingData.name,
      users: listID
    })
    return axios
      .post(apiLinks.chatAPI, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${rootGetters.token}`
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
  getChat: ({ commit, rootGetters } , id) => {
    return axios
      .get(apiLinks.chatAPI + "/" + id, {
        headers: {
          Authorization: `Bearer ${rootGetters.token}`
        }
      })
      .then((response) => {
        commit("SET_CHAT", response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  sendMessage: ({ state, rootGetters }, message) => {
    let data = JSON.stringify({
      text: message
    })
    return axios
    .put(apiLinks.chatAPI + "/" + state.chat.id, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${rootGetters.token}`
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }
};

const getters = {
  chats: (state) => {
    return state.chats
  },
  chat: (state) => {
    return state.chat
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
