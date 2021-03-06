// const apiLinks = {
// }

const menuType = {
  noAuth: [
    {
      href: "/login",
      title: "Home",
      icon: "fa fa-home",
    },
  ],
  withAuth: [
    {
      header: true,
      title: 'Account',
      hiddenOnCollapse: true
    },
    {
      href: "/profile",
      title: "Profile",
      icon: "fa fa-user"
    },
        {
      href: "/friends",
      title: "Friends",
      icon: "fa fa-users"
    },
    {
      header: true,
      title: 'Navigation',
      hiddenOnCollapse: true
    },
    {
      href: "/home",
      title: "Home",
      icon: "fa fa-home",
    },
    {
      href: "/search",
      title: "Search",
      icon: "fa fa-search",
    },
    {
      href: "/messages",
      title: "Berichten",
      icon: "fa fa-envelope"
    },
    {
      href: "/tickets",
      title: "Tickets",
      icon: "fa fa-ticket-alt",
    },
    {
      href: "/settings",
      title: "Instellingen",
      icon: "fa fa-cog",
    },
  ],
};

const state = {
  menu: [],
  collapsed: false,
};

const mutations = {
  SET_COLLAPSED(state, bool) {
    state.collapsed = bool;
  },
  SET_MENU(state, menu) {
    state.menu = menu;
  },
};

const actions = {
  setCollapsed: ({ commit }, bool) => {
    commit("SET_COLLAPSED", bool);
  },
  setWithAuth: ({ commit }) => {
    commit("SET_MENU", menuType.withAuth);
  },
  setNoAuth: ({ commit }) => {
    commit("SET_MENU", menuType.noAuth);
  },
};

const getters = {
  menu: (state) => {
    return state.menu;
  },
  collapsed: (state) => {
    return state.collapsed;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
