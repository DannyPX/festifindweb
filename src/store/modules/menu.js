// const apiLinks = {
// }

const state = {
    menu: [{
        header: true,
        title: 'Account',
        hiddenOnCollapse: true
      },
      {
        href: '/login',
        title: 'Login',
        icon: 'fa fa-user'
      },
      {
        header: true,
        title: 'Festival',
        hiddenOnCollapse: true
      },
      {
        href: '/',
        title: 'Home',
        icon: 'fa fa-home'
      },
      {
        href: '/Tickets',
        title: 'Tickets',
        icon: 'fa fa-barcode'
      },
      {
        href: '/Calender',
        title: 'Kalender',
        icon: '	fa fa-calendar'
      },
      {
        header: true,
        title: 'Sociaal',
        hiddenOnCollapse: true
      },
      {
        href: '/Groups',
        title: 'Groepen',
        icon: 'fa fa-users'
      },
      
      {
        href: '/Messages',
        title: 'Berichten',
        icon: 'fa fa-comment'
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