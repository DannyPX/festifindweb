import axios from 'axios'
const apiLinks = {
  userAPI: 'https://localhost:5001/api/v1.0/users'
}

const state = {
  login: false,
  credentials: {
    id: '',
    email: '',
    name: '',
    password: '',
    birthdate: '',
    bio: '',
    gender: '',
    city: '',
    passwordConfirm: '',
    tac: false,
    facebookid: ''
  },
  token: '',
  access_token: '',
  hasAcc: false,
  loginStatus: ''
}

const mutations = {
  'SET_LOGIN'(state, data) {
    state.credentials.facebookid = data.id
    state.credentials.name = data.name
  },
  'UPDATE_EMAIL'(state, email) {
    state.credentials.email = email
  },
  'UPDATE_NAME'(state, name) {
    state.credentials.name = name
  },
  'UPDATE_PASSWORD'(state, password) {
    state.credentials.password = password
  },
  'UPDATE_BIRTHDATE'(state, birthdate) {
    state.credentials.birthdate = birthdate
  },
  'UPDATE_BIO'(state, bio) {
    state.credentials.bio = bio
  },
  'UPDATE_GENDER'(state, gender) {
    state.credentials.gender = gender
  },
  'UPDATE_CITY'(state, city) {
    state.credentials.city = city
  },
  'UPDATE_PASSWORDC'(state, passwordC) {
    state.credentials.passwordConfirm = passwordC
  },
  'UPDATE_TAC'(state, tac) {
    state.credentials.tac = tac
  },
  'SET_TOKEN'(state, token) {
    state.token = token
  },
  'SET_STATUS'(state, status) {
    state.login = status
  },
  'HAS_ACC'(state, status) {
    state.hasAcc = status
  },
  'SET_MESSAGE'(state, message) {
    state.loginStatus = message
  },
  'SET_FBTOKEN'(state, token) {
    state.access_token = token
  },
  'SET_ACCOUNTDETAILS'(state, data) {
    state.credentials.name = data.name
    state.credentials.id = data.id
    state.credentials.email = data.email
    state.credentials.birthdate = data.birthdate
    state.credentials.bio = data.bio
    state.credentials.gender = data.gender
    state.credentials.city = data.city
  },
  'CLEAR_CREDENTIALS'(state) {
    state.credentials.name = ''
    state.credentials.id = ''
    state.credentials.email = ''
    state.credentials.birthdate = ''
    state.credentials.bio = ''
    state.credentials.gender = ''
    state.credentials.city = ''
  }
}

const actions = {
  setMessage: ({
    commit
  }, data) => {
    commit('SET_MESSAGE', data)
  },
  setAccount: ({
    commit
  }, data) => {
    commit('SET_LOGIN', data)
  },
  registerAccount: ({
    commit,
    state
  }) => {
    let data = new FormData()
    data.append('facebookid', state.credentials.facebookid)
    data.append('email', state.credentials.email)
    data.append('name', state.credentials.name)
    data.append('password', state.credentials.password)
    if (state.credentials.birthdate != '') {
      data.append('birthdate', state.credentials.birthdate)
    }
    data.append('bio', state.credentials.bio)
    data.append('gender', state.credentials.gender)
    data.append('city', state.credentials.city)

    return axios.post(apiLinks.userAPI, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((response) => {
      if(response.status == 200) {
        commit('SET_ACCOUNTDETAILS', response.data)
      }
    }).catch((error) => {
      console.log(error.response)
    })
  },
  authenticateAccount: ({
    commit,
    state
  }) => {
    let data = JSON.stringify({
      email: state.credentials.email,
      password: state.credentials.password
    })
    return axios.post(apiLinks.userAPI + '/authenticate', data, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if(response.status == 200) {
        commit('SET_TOKEN', response.data)
      }
    }).catch((error) => {
      console.log(error.response)
    })
  },
  fbAuthenticateAccount: ({
    commit,
    state
  }) => {
    return axios.post(apiLinks.userAPI + '/facebook_auth?token=' + state.access_token)
      .then(response => {
        if(response.status == 200) {
          commit('SET_TOKEN', response.data)
          commit('SET_STATUS', true)
        }
      }).catch((error) => {
        console.log(error.response)
        commit('SET_STATUS', false)
      })
  },
  checkFBAccountExist: ({
    commit,
    state
  }) => {
    return axios.get(apiLinks.userAPI).then(response => {
      if (response.data.some(user => user.facebookId === "" + state.credentials.facebookid)) {
        commit('HAS_ACC', true)
      } else {
        commit('HAS_ACC', false)
      }
    })
  }
}

const getters = {
  credentials: state => {
    return state.credentials
  },
  hasAcc: state => {
    return state.hasAcc
  },
  message: state => {
    return state.loginStatus
  },
  login: state => {
    return state.login
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}