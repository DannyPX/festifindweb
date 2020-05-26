<template>
<div id="content">
<h1 class="title">Kalender</h1>
<div class="wrapper">
    <ul>
        <li v-for="index in 20" :key="index">    
            <div class="event-container">
                <div class="event-date">
                <p>04-06-2021</p>
                </div>
                <div class="event-img">
                    image
                </div>
                <div class="event-title">
                <p>Intents</p>
                </div>
            </div>   
        </li>
    </ul>
</div>

</div>
</template>

<script>
</script>

<style scoped>
.wrapper
{  
    position: absolute;
    width: 90%;
    margin: 8px;
    height: 100%;
    padding-bottom: 100px;
    overflow: scroll;
}

.event-date
{
    width: 100%; 
    height: 24px; 
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    text-align: center;
    font-family: 'Nunito Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
}

  .event-container 
  {
    width: 90%;
    margin-left: 0%;
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

  .event-img
  {
      background-color: rgb(194, 194, 194);
      height: 65%;
      width: 100%;
  }
</style>