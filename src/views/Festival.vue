<template>
  <div id="content">
    <div class="innercontent">
      <a href="javascript:history.go(-1)">
        <i class="fas fa-arrow-left fa-3x back-btn"></i>
      </a>
      <img class="festivalImage" src="../assets/maxresdefault.jpg" />
      <h3 class="festivalName">{{ festivals.name}}</h3>
      <button class="btn">Tickets</button>
      <!-- Check if user is going to festival And edit value accordingly -->
      <input
        type="button"
        class="btn btn2"
        id="btn2"
        value="Ik ga"
        @click="change"
      />
      <h6 class="heading">12 vrienden gaan</h6>
      <!-- Per friend -->
      <img
        src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
        class="profilePicture"
      />

      <!-- More than 10 friends: show the first 9 and the counter underneath -->
      <div class="maxFriends">
        <!-- Amount of friends -9-->
        <p class="maxFriendsCounter">+3</p>
      </div>

      <h6 class="heading">Info</h6>

      <div>
        <i class="fas fa-music"></i>
        <p class="info">{{ festivals.genre }}</p>
      </div>

      <div>
        <i class="fas fa-calendar"></i>
        <!--Start date - End date-->
        <p class="info">{{ new Date(festivals.startDate).toDateString() }} - {{ new Date(festivals.endDate).toDateString() }}</p>
      </div>
      <div>
        <i class="fas fa-clock"></i>
        <!--Start time - End time-->
        <p class="info">{{ new Date(festivals.startDate).toLocaleTimeString('en-US') }} - {{ new Date(festivals.endDate).toLocaleTimeString('en-US') }}</p>
      </div>
      <div>
        <i class="fas fa-map-marker-alt"></i>
        <!--Location with link to google maps ^-->
        <a
          target="_blank"
          :href="'https://www.google.com/maps/search/' + location"
          class="info"
          >{{ location }}</a
        >
      </div>

      <h6 class="heading">Lineup</h6>
      <!-- For all artists -->
      <div class="artist">
        <img
          src="../assets/blank-profile-picture-973460_1280-1-e1546851120685.png"
          class="artistPicture"
        />
        <p class="artistName">Artist Name</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['festivals', 'location'])
  },
  methods: {
    //Function to attend/unattend festival
    change: function () {
      var elem = document.getElementById("btn2");
      if (elem.value == "Ik ga") elem.value = "Aanwezig!";
      else elem.value = "Ik ga";
    },
  },
  beforeCreate () {
    this.$store.dispatch('getFestival', this.$route.params.id).then(() => {
      this.$store.dispatch('getLocationAddress')
    })
  }
};
</script>

<style scoped>
.back-btn {
  font-size: 36px;
  color: black;
  margin-top: 18px;
}
.innercontent {
  height: 100%;
  overflow: auto;
}

.innercontent::-webkit-scrollbar {
  display: none;
}

.festivalImage {
  margin-top: 18px;
  width: 100%;
  height: 315px;
  object-fit: cover;
  border-radius: 10px;
}

.festivalName {
  margin-top: 18px;
  margin-bottom: 18px;
  font-family: "Berlin Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 26px;
  align-items: center;
  text-align: center;
  color: #333;
}

.btn {
  display: inline-block;
  width: 48%;
  height: 45px;
  text-align: center;
  background: #065bff;
  border-radius: 10px;

  font-family: "Nunito Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 23px;
  line-height: 29px;
  align-items: center;
  text-align: center;

  color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.btn2 {
  float: right;
  background: white;
  color: #065bff;
}

h6 {
  margin-top: 18px;
  font-family: "Nunito Regular";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  align-items: center;
}

.profilePicture {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-right: -10px;
}

.maxFriends {
  background: white;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: inline-block;
  justify-content: center;
  align-items: center;
  line-height: 36px;
  border: 2px solid white;
}

.maxFriendsCounter {
  margin: auto;
  width: 100%;
  text-align: center;
}

.info {
  margin-left: 5px;
  display: inline;
}

i {
  width: 16px;
}

a {
  color: #333;
  text-decoration: underline;
  font-family: "Nunito Regular";
  font-style: normal;
  font-weight: normal;
}

p {
  margin-bottom: 0px;
  font-family: "Nunito Regular";
  font-style: normal;
  font-weight: normal;
}

.genre {
  display: inline;
  margin-right: 5px;
}

.artist {
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: auto;
  padding: 5px 0;
  margin-bottom: 9px;
}

.artistPicture {
  display: inline-block;
  margin-left: 10px;
  height: 25px;
  width: 25px;
  border-radius: 100%;
}

.artistName {
  display: inline-block;
  margin-left: 10px;
}

.artistTime {
  line-height: 15px;
  margin-left: 10px;
  font-size: 10px;
  display: inline-block;
  overflow: hidden;
  max-width: 30px;
  height: 20px;
}
</style>
