import axios from "axios";

const apiLinks = {
    userAPI: "https://localhost:5001/api/v1.0/users",
    AttendanceAPI: "https://localhost:5001/api/v1.0/Attendances"
};

const state = {
    login: false,
    Attandance: {
        Festivals: ""
    },
};

const mutations = {
    SET_FestivalAttendance(state, data) {
             state.Attandance.Festivals = data;
        let festivals =  [];
        data.forEach(item => festivals.push(item.festival));
        state.Attandance.Festivals = festivals;
    },
};

const actions = {
    getFestivalAttendance: ({commit, rootGetters}, id) => {
        return axios
            .get(apiLinks.AttendanceAPI + '/' + id, {
            headers: {
                Authorization: `Bearer ${rootGetters.token}`}})
            .then(response => {
                if (response.status == 200) {
                    commit("SET_FestivalAttendance", response.data)
                }
            })
            .catch(error => {
                console.log(error.response)
            })
    },
};

const getters = {
    festivalAttendance: (state) => {
        return state.Attandance;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};