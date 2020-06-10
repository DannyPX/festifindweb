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
    </div>

    <div></div>
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

</style>