import axios from "axios";
const apiLinks = {
  userAPI: "https://localhost:5001/api/v1.0/users",
};

const state = {
  login: false,
  user: {
    id: "",
    email: "",
    name: "",
    password: "",
    birthdate: "",
    bio: "",
    gender: "",
    city: "",
    passwordConfirm: "",
    tac: false,
    facebookid: "",
  },
};

const mutations = {
  SET_ACCOUNTDETAILS(state, data) {
    state.credentials.name = data.name;
    state.credentials.id = data.id;
    state.credentials.email = data.email;
    state.credentials.birthdate = data.birthdate;
    state.credentials.bio = data.bio;
    state.credentials.gender = data.gender;
    state.credentials.city = data.city;
  },
};

const actions = {};

const getters = {
  user: (state) => {
    return state.user;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
