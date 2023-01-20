<template>
  <h1>Sorry, {{ $route.params.catchAll }} is not found.</h1>

  <p>Try <router-link to="/">home.</router-link></p>
</template>

<style scoped>
  p {
    margin-left: 20px;
    font-size: 20px;
  }
</style>