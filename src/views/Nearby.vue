<template>
  <div id="content">
    <router-link :to="{ name: 'Home' }">
      <button class="back-btn"><i class="fas fa-arrow-left"></i></button>
    </router-link>
    <h1 class="title">In de buurt</h1>
    <div class="wrapper">
      <ul>
        <li v-for="festival in festivals" :key="festival.id">
          <div class="event-container">
            <div class="event-date">
              <p><i class="fa fa-calendar">{{ festival.startDate }}</i></p>
            </div>
            <router-link :to="`/festival/${festival.id}`">
              <div class="event-img">
                <img class="festivalImage" src="../assets/maxresdefault.jpg" />
              </div>
              <div class="event-title">
                <p>{{ festival.name }}</p>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
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
      this.$store.dispatch('sortByDistance')
    })
  }
}
</script>

<style scoped>
.back-btn {
  font-size: 32px;
  color: black;
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
  width: 90%;
  margin-left: 0%;
  margin-bottom: 2%;
  margin-top: 4%;
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
</style>
