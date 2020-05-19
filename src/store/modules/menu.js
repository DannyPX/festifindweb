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
      }
    ],
    collapsed: false
}


const mutations = {
}

const actions = {
}

const getters = {
}

export default {
    state,
    mutations,
    actions,
    getters
}