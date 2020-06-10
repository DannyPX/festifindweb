<template>
  <div>
    <div id="content">
      <h1 class="title">Zoeken</h1>
      <form id="app"
        @submit="onSubmit">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Persoon, festival, etc."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-primary" v-on:click="onSubmit" type="button" id="button-addon2">
              Search
            </button>
          </div>
        </div>
      </form>
         <div class="search-container">
      <ul>
        <li v-for="index in 22" :key="index">
          <router-link :to="{ name: 'Home' }">
          <div class="result">
                  
            <div class="result-text">
              <p>Peter Jansen</p>
            </div>
          </div>
          </router-link>     
        </li>
      </ul>
    </div>
    </div>

    
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["users"])
  },
  methods : {
        onSubmit : function() {
            this.$store.dispatch('getUsers')             
        }
    }
}
</script>

<style>


.search-container {
  position: fixed;
  width: 82%;
  margin: 8px;
  height: 100%;
  padding-bottom: 124px;
  overflow: scroll;
}

.result{
  width: 85%;
  padding: 4px;
  border-radius: 14px;
  height: 52px;
  background-color: white;
  margin: 0 0 8px 0;
  box-shadow: 6px 6px 4px 2px rgba(0, 0, 255, 0.1);
}

.result-text{
  color: black;
  text-decoration: none;
}
</style>