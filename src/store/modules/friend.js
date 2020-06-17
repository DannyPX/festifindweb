import axios from "axios";

const apiLinks = {
  friendAPI: "https://i409979core.venus.fhict.nl/api/v1.0/friendships",
  userAPI: "https://i409979core.venus.fhict.nl/api/v1.0/users",
}

const state = {
  friendsID: [],
  friends: [],
  incomingRequests: [],
  incomingDetails: [],
  outgoingRequests: [],
  outgoingDetails: []
};

const mutations = {
  SET_FRIENDSID(state, data) {
    state.friendsID = data
  },
  SET_INCOMINGREQUESTS(state, data) {
    state.incomingRequests = data
  },
  SET_OUTGOINGREQUESTS(state, data) {
    state.outgoingRequests = data
  },
  CLEAN_LIST(state) {
    state.friends = []
    state.incomingDetails = []
    state.outgoingDetails = []
  }
};

const actions = {
  getFriends: ({ commit, rootGetters }) => {
    return axios
      .get(apiLinks.friendAPI + "/mine", {
        headers: {
          Authorization: `Bearer ${rootGetters.token}`
        }
      })
      .then((response) => {
        commit("SET_FRIENDSID", response.data)
      })
  },
  getFriendDetails: ({ state }) => { 
    (state.friendsID).forEach(friend => {
      axios
      .get(apiLinks.userAPI + "/" + friend.friendId)
      .then((response) => {
        state.friends.push({...response.data})
      })
    });
  },
  getIncomingDetails: ({ state }) => { 
    (state.incomingRequests).forEach(friend => {
      axios
      .get(apiLinks.userAPI + "/" + friend.friendId)
      .then((response) => {
        state.incomingDetails.push({...response.data})
      })
    });
  },
  getOutgoingDetails: ({ state }) => { 
    (state.outgoingRequests).forEach(friend => {
      axios
      .get(apiLinks.userAPI + "/" + friend.friendId)
      .then((response) => {
        state.outgoingDetails.push({...response.data})
      })
    });
  },
  sendRequest: ({ rootGetters }, id) => {
    let data = JSON.stringify({
      friendid: id
    })
    return axios
      .post(apiLinks.friendAPI, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${rootGetters.token}`
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getIncomingRequests: ({ commit, rootGetters }) => {
    return axios
      .get(apiLinks.friendAPI + "/incoming", {
        headers: {
          Authorization: `Bearer ${rootGetters.token}`
        }
      })
      .then((response) => {
        commit("SET_INCOMINGREQUESTS", response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getOutgoingRequests: ({ commit, rootGetters }) => {
    return axios
      .get(apiLinks.friendAPI + "/outgoing", {
        headers: {
          Authorization: `Bearer ${rootGetters.token}`
        }
      })
      .then((response) => {
        commit("SET_OUTGOINGREQUESTS", response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  },
  acceptRequest: ({ rootGetters }, id) => {
    let data = JSON.stringify({
      friendid: id
    })
    return axios
      .post(apiLinks.friendAPI + "/accept", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${rootGetters.token}`
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  removeRequest: ({ rootGetters }, id) => {
    let data = JSON.stringify({
      friendid: id
    })
    return axios
      .delete(apiLinks.friendAPI, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${rootGetters.token}`
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const getters = {
  friends: (state) => {
    return state.friends
  },
  incoming: (state) => {
    return state.incomingDetails
  },
  outgoing: (state) => {
    return state.outgoingDetails
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
