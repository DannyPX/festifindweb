<template>
    <div id="content">
      <h1 class="title">Tickets</h1>
    
    <div class="ticket-container">

          <div v-for="i in 20" :key="i" class="ticket">
              <img class="ticket-img" src="../assets/maxresdefault.jpg" />
              <p class="ticket-text">Lowlands</p>

          </div>

    </div>
    <router-link to="/createchat">
    <i class="fa fa-plus fa-2x addIcon"></i>
    </router-link>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>

.addIcon {
  position: absolute;
    bottom: 18px;
    right: 18px;
    background-color: white;
    border-radius: 100%;
    text-align: center;
    line-height: 40px;
    height: 40px;
    width: 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: black;
}

.ticket-img {
  background-color: rgb(194, 194, 194);
  height: 100%;
  width: 100%;
  border-radius: 50%;
}

.ticket {
  padding: 4px;
  border-radius: 10px;
  height: 52px;
  background-color: white;
  box-shadow: 6px 6px 4px 2px rgba(0, 0, 255, 0.1);
  margin-bottom: 15px;
}

.ticket-container {
  width: 100%;
  height: 100%;
  overflow: scroll;
  margin: 0px;
}

.ticket-img {
  background-color: #dbdbdb;
  width: 44px;
  height: 44px;
  border-radius: 100%;
}

.ticket-text {
  vertical-align: middle;
  margin: 0px;
  margin-left: 10px;
  display: inline-block;
  font-family: "Nunito Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
}
</style>
