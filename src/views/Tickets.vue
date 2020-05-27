<template>
  <div>
    <div id="content">
      <h1 class="title">Tickets</h1>
    </div>
    <div class="wrapper-btn">
      <input type="button" class="btn btn2" id="btn2" value="+" />
    </div>
    <div class="ticket-container">
      <ul>
        <li v-for="index in 28" :key="index">
          <div class="ticket">
            <router-link :to="{ name: 'Home' }">
              <button class="ticket-btn">
                <i class="fas fa-arrow-right"></i>
              </button>
            </router-link>
            <div>
              <img class="ticket-img" src="../assets/maxresdefault.jpg" />
            </div>
            <div class="ticket-text">
              <p>Lowlands</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper-btn {
  text-align: center;
  margin-left: -50px;
}

.btn {
  width: 45px;
  height: 45px;
  background: #065bff;
  border-radius: 10px;
  font-family: "Nunito Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  text-align: center;
  color: #ffffff;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
}

.ticket-btn {
  position: absolute;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  margin-left: 62%;
  font-size: 20px;
  width: 44px;
  height: 44px;
  background-color: #0275d8;
  color: white;
}

.ticket-img {
  background-color: rgb(194, 194, 194);
  height: 100%;
  width: 100%;
  border-radius: 50%;
}

.btn-primary {
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 24px;
}

.ticket {
  width: 80%;
  padding: 4px;
  border-radius: 14px;
  height: 52px;
  background-color: white;
  margin: 8px auto auto auto;
  box-shadow: 6px 6px 4px 2px rgba(0, 0, 255, 0.1);
}

.ticket-container {
  position: fixed;
  width: 82%;
  margin: 8px;
  height: 100%;
  padding-bottom: 124px;
  overflow: scroll;
}

.ticket-img {
  background-color: #dbdbdb;
  position: absolute;
  width: 44px;
  height: 44px;
  border-radius: 24px;
}

.ticket-text {
  margin-left: 60px;
  margin-top: 8px;
  font-family: "Nunito Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
}
</style>
