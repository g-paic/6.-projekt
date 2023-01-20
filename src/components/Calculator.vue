<template>
  <div>
    <table>
      <tr>
        <td class="text">First:</td>
        <td class="number">{{ first }}</td>
        <td class="number">
          <button @click="incrementFirst">inc</button>
        </td>
        <td class="number">
          <button @click="decrementFirst">dec</button>
        </td>
      </tr>

      <tr>
        <td class="text">Second:</td>
        <td class="number">{{ second }}</td>
        <td class="number">
          <button @click="incrementSecond">inc</button>
        </td>
        <td class="number">
          <button @click="decrementSecond">dec</button>
        </td>
      </tr>

      <tr>
        <td class="text">Result:</td>
        <td class="number">{{ result }}</td>
        <td class="number">
          <button @click="add">add</button>
        </td>
        <td class="number">
          <button @click="subtract">sub</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import { useStore } from "../stores/counter";
  import { mapState, mapActions } from "pinia";
  export default {
    computed: {
      ...mapState(useStore, ["first", "second", "result"]),
    },
    methods: {
      ...mapActions(useStore, ["add", "subtract", "incrementFirst", "decrementFirst", "incrementSecond", "decrementSecond"]),
    },
  };
</script>

<style scoped>
  .f {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .text {
    text-align: right;
  }

  .number {
    text-align: center;
  }

  table, th, td {
    padding: 20px;
    font-size: 50px;
  }
</style>