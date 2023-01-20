<template>
  <small-card class="d-flex flex-column justify-content-between">
    <router-link :to="'/posts/' + id" class="mr-3">
      link{{ id }}
    </router-link>

    <div class="card-body">
      <h4 class="card-title">{{ title }}</h4>
      <p class="card-text">{{ body }}</p>
    </div>

    <button class="btn btn-danger w-50 align-self-center" @click="deletePost">
      Delete
    </button>
  </small-card>
</template>

<script>
  export default {
    emits: ["deletePost"],
    props: [
      "id",
      "userId",
      "title",
      "body"
    ],
    computed: {
      idUrl() {
        return "/posts" + this.id;
      },
    },
    methods: {
      deletePost() {
        console.log("emitting delete post for ", this.id);
        this.$emit("deletePost", { id: this.id });
      },
    },
  };
</script>

<style scoped>
  h4 {
    margin-bottom: 20px;
  }

  button {
    margin-top: 20px;
  }
</style>
