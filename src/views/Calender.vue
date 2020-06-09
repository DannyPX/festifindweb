<template>
  <div id="content">
    <div class="d-flex justify-content-between header">
      <a href="javascript:history.go(-1)">
        <i class="fas fa-arrow-left fa-3x back-btn"></i>
      </a>
      <h1 class="title">Kalender</h1>
      <div class="fillTop"></div>
    </div>
    <ul>
      <li v-for="festival in festivals" :key="festival.id">
        <div class="event-container">
          <div class="event-date">
            <p><i class="fa fa-calendar">{{ festival.startDate }}</i></p>
          </div>
          <div class="event-img">
            <img class="festivalImage" src="../assets/maxresdefault.jpg" />
          </div>
          <div class="event-title">
            <p>{{ festival.name }}</p>
          </div>
        </div>
      </li>
      <!-- <li v-for="index in 20" :key="index">
        <div class="event-container">
          <div class="event-date">
            <p><i class="fa fa-calendar"></i> 12 apr. 2020 - 13 apr. 2020</p>
          </div>
          <div class="event-img">
            <img class="festivalImage" src="../assets/maxresdefault.jpg" />
          </div>
          <div class="event-title">
            <p>Awakenings</p>
          </div>
        </div>
      </li> -->
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['festivals'])
  },
  mounted() {
    this.$store.dispatch('getFestivals').then(() => {
      this.$store.getters.festivals.sort(function(a, b) {
        return new Date(a.startDate) - new Date(b.startDate)
      })
    })
  }
}
</script>

<style scoped>
.header {
  margin-top: 18px;
}
.fillTop {
  width: 28px;
}
.title {
  margin-top: 0;
  display: inline-block;
}
.back-btn {
  font-size: 36px;
  color: black;
}

ul {
  height: calc(100% - 63px);
  list-style-type: none;
  width: 100%;
  margin: auto;
  overflow: auto;
}

.festivalImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

.wrapper {
  position: absolute;
  width: 90%;
  margin: 8px;
  height: 100%;
  padding-bottom: 100px;
  overflow: scroll;
}

.event-date {
  width: 100%;
  height: 24px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  text-align: center;
  font-family: "Nunito Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
}

.event-container {
  width: 100%;
  height: 180px;
  background-color: white;
  color: #333;
  border-radius: 8px;
  box-shadow: 4px 4px 2px 1px rgba(0, 0, 255, 0.1);
  position: relative;
}

.event-title {
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  text-align: center;
  font-family: "Nunito Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
}

.event-img {
  background-color: rgb(194, 194, 194);
  height: 65%;
  width: 100%;
}

p {
  margin-bottom: 0px;
}
li {
  margin: auto;
  margin-bottom: 20px;
  width: 100%;
}
</style>
