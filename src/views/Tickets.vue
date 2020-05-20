<template>
<div>
<div id="content">
 <h1 class="title">Tickets</h1>
</div> 
<div class="ticket-container">
    <ul>
  <li v-for="index in 40" :key="index">
    
        <div class="ticket">
            <div class="ticket-img">
                
            </div>
            <div class="ticket-text">
                <p>Lowlands</p>
            </div>
        </div>
   
  </li>
  </ul>

   </div>
<div class="add-btn">
    <button type="button" class="btn btn-primary btn-lg">+</button>
</div>
</div>

</template>

<script>
export default{

}
</script>

<style>
.add-btn
{
    width: 100%;
    position: absolute; 
    bottom: 0; 
    left: 73%;
    bottom: 2%;
    font-family: 'Nunito Regular';
}

.btn-primary
{
    box-shadow: 2px 2px  rgba(0, 0, 0, 0.2);
    border-radius: 24px;
}

.ticket
{
    width: 280px;
    padding: 4px;
    border-radius: 14px;
    height: 52px;
    background-color: white;
    margin: 8px auto auto auto;
    box-shadow: 6px 6px 4px 2px rgba(0, 0, 255, .1);
}

.ticket-container
{  
    position: absolute;
    width: 82%;
    margin: 8px;
    height: 85%;
    overflow: scroll;
}

.ticket-img 
{
    background-color: #DBDBDB;
    position: absolute;
    width: 44px;
    height: 44px;
    border-radius: 24px;
}

.ticket-text
{
    margin-left: 60px;
    margin-top: 8px;
    font-family: 'Nunito Regular';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
}
</style>