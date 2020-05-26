<template>
<div id="content">
  <h1 class="title">Home</h1>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <h5 style="text-align: center;">Populaire events</h5>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="event-container">
        <div class="event-title">
          <p>Intents</p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="event-container">
        <div class="event-title">
          <p>Supremacy</p>
        </div>
        
      </div>
    </div>
    <div class="carousel-item">
      <div class="event-container">
        <div class="event-title">
          <p>Tomorrowland</p>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="event-container">
        <div class="event-title">
          <p>Lowlands</p>
        </div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div class="home-nav">
  <div class="home-nav-inner">
    <router-link :to="{name: 'Calender'}">
      <button class="home-btn"><i class="fa fa-calendar"></i> kalender</button>
    </router-link>
    <br />
        <router-link :to="{name: ''}">
      <button class="home-btn"><i class="fas fa-street-view"></i> Dichtbij</button>
    </router-link>
    <br />
  </div>
</div>
</div>
</template>

<script>

</script>

<style>
  .event-container 
  {
    width: 80%;
    margin-left: 10%;
    margin-bottom: 10%;
    margin-top: 4%;
    height: 180px;
    background-color: white;
    color: #333;
    border-radius: 8px;
    box-shadow: 6px 6px 4px 2px rgba(0, 0, 255, .1);
    position: relative;
  }

  .event-title
  {
    position: absolute; 
    bottom: 0; 
    width: 100%; 
    height: 40px; 
    background-color: white;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    text-align: center;
    font-family: 'Nunito Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
  }
 
  .home-nav
  {
    margin-top: 25%;
  }

  .home-nav-inner
  {
    width: 180px;
    margin: auto;
  }

  .home-btn
  {   
    color: white;
    text-align: left;
    font-family: 'Nunito Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    width: 100%;
  }
  .home-btn a 
  {
    color: white;
  }
</style>