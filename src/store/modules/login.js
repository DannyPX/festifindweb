
// const apiLinks = {
// }

const state = {
    account: {
        id: '',
        name: '',
    },
    login: false
}

const mutations = {
    'SET_ACCOUNT' (state, data) {
        state.account.id = data.id
        state.account.name = data.name
    }
}

const actions = {
    setAccount: ({
        commit
    }, data) => {
        commit('SET_ACCOUNT', data)
    }
}

const getters = {
    account: state => {
        return state.account
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}