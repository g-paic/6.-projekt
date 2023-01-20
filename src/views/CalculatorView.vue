<template>
  <div>
    <h1>Calculator</h1>

    <div class="h">
      <h3>Date: {{ startedDateAt }}</h3>
      <h3>Time: {{ startedTimeAt }}</h3>
    </div>

    <div class="container-fluid p-2 d-flex justify-content-center">
      <calculator></calculator>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        startedDateAt: new Date().toLocaleDateString("hr-HR"),
        startedTimeAt: new Date().toLocaleTimeString("hr-HR"),
      };
    },
    
    mounted() {
      window.setInterval(() => {
        this.startedTimeAt = new Date().toLocaleTimeString("hr-HR");
      }, 1000);
    }
  };
</script>

<style scoped>
  .h {
    margin-top: 30px;
    margin-left: 20px;
  }
</style>