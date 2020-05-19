// const apiLinks = {
// }

const state = {
    menu: [
      {
        href: '/login',
        title: 'Login',
        icon: 'fa fa-user'
      },
      {
        href: '/',
        title: 'Home',
        icon: 'fa fa-home'
      },
      {
        href: '/Friends',
        title: 'Vrienden',
        icon: 'fa fa-user-friends'
      },
      {
        href: '/Groups',
        title: 'Groepen',
        icon: 'fa fa-users'
      },
      {
        href: '/Tickets',
        title: 'Tickets',
        icon: 'fa fa-ticket-alt'
      },
      {
        href: '/Settings',
        title: 'Instellingen',
        icon: 'fa fa-cog'
      },
      
      
      
    ],
    collapsed: false
}


const mutations = {
    'SET_COLLAPSED' (state, bool) {
        state.collapsed = bool
    }
}

const actions = {
    setCollapsed: ({
        commit
    }, bool) => {
        commit('SET_COLLAPSED', bool)
    }
}

const getters = {
    menu: state => {
        return state.menu
    },
    collapsed: state => {
        return state.collapsed
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}