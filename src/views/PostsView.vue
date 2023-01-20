<template>
  <div v-if="selectedPost" class="d-flex flex-column align-items-center">
    <h2>Post #{{ selectedPost.id }}</h2>

    <post-card :key="selectedPost.id" v-bind="selectedPost" :zoom="1" @delete-post="deletePost"></post-card>
  </div>

  <div v-else>
    <h2>All posts ({{ allPosts.length }})</h2>
    <hr />
    <div class="g">
      <post-card class="m" v-for="post in allPosts" :key="post.id" v-bind="post" @delete-post="deletePost"></post-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        allPosts: [],
        selectedPost: null,
      };
    },
    watch: {
      $route(to, from) {
        console.log(`Route changed: ${from.path} -> ${to.path} `);
        this.setSelectedPost();
      },
    },
    methods: {
      async refreshPosts() {
        try {
          let response = await fetch("https://jsonplaceholder.typicode.com/posts");
          if(response.ok) {
            this.allPosts = await response.json();
            console.log(this.allPosts);
          } else {
            throw new Error("HTTP-Error: " + response.status);
          }
        } catch (error) {
          console.error(error);
        }
      },
      setSelectedPost() {
        this.selectedPost = this.allPosts.find(
          (x) => x.id == this.$route.params.id
        );
      },
      deletePost(args) {
        console.log("deleting post", args, this.allPosts.length);
        this.allPosts = this.allPosts.filter((x) => x.id !== args.id);
        if (this.selectedPost && this.selectedPost.id === args.id) {
          this.selectedPost = null;
        }
      },
    },
    async mounted() {
      await this.refreshPosts();
      this.setSelectedPost();
    }
  };
</script>

<style scoped>
  .g {
    display: grid;
    grid-template-columns: auto auto auto auto;
  }

  .m {
    margin-left: auto;
    margin-right: auto;
  }

  h2 {
    text-align: center;
  }
</style>