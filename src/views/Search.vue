<template>
  <div>
    <div id="content">
      <h1 class="title">Zoeken</h1>
      <form>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Persoon, festival, etc."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" id="button-addon2">
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
new Vue({
  el: "#app",
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response));
  },
});
</script>

<style></style>
