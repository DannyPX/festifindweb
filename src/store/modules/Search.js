import axios from "axios"
const apiLinks = {
  userAPI: "https://localhost:5001/api/v1.0/users/search"
}

const state = {
  users: {},
  selectedID: ''
};

const mutations = {
  SET_USERS(state, data) {
    state.users = data
  }
};

const actions = {
  getUsers: ({
    commit
  }) => {
    return axios
      .get(apiLinks.userAPI)
      .then(response => {
        if(response.status == 200) {
          commit("SET_USERS", response.data);
        }
      })
      .catch(error => {
        console.log(error.response)
      })
  },
  getUser: ({
    state,
    commit
  }) => {
    return axios 
      .get(apiLinks.userAPI + '/' + state.selectedID)
      .then(response => {
        if(response.status == 200) {
          commit("SET_USERS", response.data)
        }
      })
      .catch(error => {
        console.log(error.response)
      })
  }
};

const getters = {
  users: state => {
    return state.users
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
