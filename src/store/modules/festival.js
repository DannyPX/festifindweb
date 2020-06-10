import axios from "axios"
const apiLinks = {
  festivalAPI: "https://localhost:5001/api/v1.0/festivals"
}

const state = {
  festivals: {},
  location: {
    latitude: '',
    longitude: '',
    address: ''
  }
};

const mutations = {
  SET_FESTIVAL(state, data) {
    state.festivals = data
  },
  SET_ADDRESS(state, address) {
    state.location.address = address
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
    commit
  }, id) => {
    return axios 
      .get(apiLinks.festivalAPI + '/' + id)
      .then(response => {
        if(response.status == 200) {
          commit("SET_FESTIVAL", response.data)
        }
      })
      .catch(error => {
        console.log(error.response)
      })
  },
  sortByDate: ({
    state
  }) => {
    state.festivals.sort(function(a, b) {
      return new Date(a.startDate) - new Date(b.startDate)
    })
  },
  sortByDistance: ({
    state
  }) => {
    function deg2rad(deg) {
      return deg * (Math.PI/180)
    }

    function dist({latitude: lat1, longitude: lon1}, {latitude: lat2, longitude: lon2}) {
      var R = 6371;
      var dLat = deg2rad(lat2-lat1);
      var dLon = deg2rad(lon2-lon1); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
    }

    navigator.geolocation.getCurrentPosition(({coords}) => {
      state.location.latitude = parseFloat(coords.latitude)
      state.location.longitude = parseFloat(coords.longitude)

      state.festivals.sort((a, b) => dist(state.location, {latitude: parseFloat(a.location.latitude), longitude: parseFloat(a.location.longitude)}) - 
       dist(state.location, {latitude: parseFloat(b.location.latitude), longitude: parseFloat(b.location.longitude)}))
    })
  },
  getLocationAddress: ({
    commit,
    state
  }) => {
    const Http = new XMLHttpRequest()
    const url = 'https://eu1.locationiq.com/v1/reverse.php'
    const key = '409bc2c998f4f2'
    var params =  `lat=${state.festivals.location.latitude}&` + 
      `lon=${state.festivals.location.longitude}&` +
      `key=${key}&` +
      `format=json`
    Http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var res = JSON.parse(this.responseText).address
        commit('SET_ADDRESS', res.road + ' ' + res.house_number + ', ' + res.postcode + ' ' + res.city)
      }
      if (this.readyState == 4 && this.status == 404) {
        commit('SET_ADDRESS', 'Unknown')
      }
    }
    Http.open("GET", url+ "?" + params)
    Http.send()
  }
};

const getters = {
  festivals: state => {
    return state.festivals
  },
  location: state => {
    return state.location.address
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
