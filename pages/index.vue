<template>
  <div>
    <div class="button-container">
    <div class="myContainer">
      <div class="calendar">
          Loading....
      </div>
    </div>
      <a class="button" href="#" @click="callHehe">Update github profile</a>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import githubCalendar from 'github-calendar';
// const githubCalendar = inject('githubCalendar');
onMounted(()=> {
  if(githubCalendar){
    githubCalendar('.calendar', 'advancedor96');
  }else{
    console.log('還沒載入');
    
  }

})
const callHehe = async ()=>{
  const { data } = await useFetch('/api/hehe')
  alert('完成: ' + data.value.number);
  console.log('來了:',data.value.number);

}

</script>

<style>
    body {
        background: linear-gradient(to bottom right, #FF9966, #FF6666);
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        font-family: Arial, sans-serif;
    }

    .button-container {
        text-align: center;
    }

    .button {
        display: inline-block;
        padding: 12px 24px;
        background-color: #FFFFFF;
        color: #FF6666;
        text-decoration: none;
        border-radius: 4px;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }

    .button:hover {
        background-color: #FF9999;
        color: #FFFFFF;
    }
    .myContainer{
      max-width: 100vw;
       overflow-x: auto;
    }
</style>