import axios from "axios"
const apiLinks = {
  festivalAPI: "https://localhost:5001/api/v1.0/festivals"
}

const state = {
  festivals: {},
  selectedID: ''
};

const mutations = {
  SET_FESTIVAL(state, data) {
    state.festivals = data
  }
};

const actions = {
  getFestivals: ({
    commit
  }) => {
    return axios
      .get(apiLinks.festivalAPI)
      .then(response => {
        if(response.status == 200) {
          commit("SET_FESTIVAL", response.data);
        }
      })
      .catch(error => {
        console.log(error.response)
      })
  },
  getFestival: ({
    state,
    commit
  }) => {
    return axios 
      .get(apiLinks.festivalAPI + '/' + state.selectedID)
      .then(response => {
        if(response.status == 200) {
          commit("SET_FESTIVAL", response.data)
        }
      })
      .catch(error => {
        console.log(error.response)
      })
  }
};

const getters = {
  festivals: state => {
    return state.festivals
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
