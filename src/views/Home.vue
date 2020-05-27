<template>
  <div id="content">
    <h1 class="title">Home</h1>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <h4 class="heading">Populaire events</h4>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <a href="/Festival">
            <div class="event-container">
              <div class="event-img">
                <img class="festivalImage" src="../assets/maxresdefault.jpg" />
              </div>
              <div class="event-title">
                <p>Intents</p>
              </div>
            </div>
          </a>
        </div>

        <div class="carousel-item">
          <a href="/Festival">
            <div class="event-container">
              <div class="event-img">
                <img class="festivalImage" src="../assets/maxresdefault.jpg" />
              </div>
              <div class="event-title">
                <p>Supremacy</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <hr class="devide" />
    <div class="home-nav">
      <div class="home-nav-inner">
        <h4 class="heading">Ontdek</h4>
        <router-link :to="{name: 'Calender'}">
          <button class="home-btn">
            <i class="fa fa-calendar"></i> Aankomende festivals
          </button>
        </router-link>
        <br />
        <router-link :to="{name: ''}">
          <button class="home-btn">
            <i class="fas fa-street-view"></i> Wat is er in de buurt?
          </button>
        </router-link>
        <br />
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.heading {
  font-family: "Berlin Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 26px;
}
.festivalImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.devide {
  height: 1px;
  background-color: white;
  box-shadow: 2px 2px 1px 1px rgba(0, 0, 255, 0.1);
  margin-bottom: -30px;
}

.event-container {
  margin-left: 2%;
  margin-bottom: 10%;
  margin-top: 4%;
  height: 180px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 4px 4px 2px 1px rgba(0, 0, 255, 0.1);
  position: relative;
}

.event-title {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: white;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  text-align: center;
  font-family: "Nunito Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
}

.home-nav {
  margin-top: 25%;
}

.home-nav-inner {
  width: 230px;
}

.home-btn {
  color: black;
  text-align: left;
  font-family: "Nunito Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  width: 100%;
}
.home-btn a {
  color: white;
}

a {
  color: black;
}
</style>