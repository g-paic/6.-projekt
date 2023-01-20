<template>
  <div class="border rounded border-dark p-3">
    <h3>Euro-Kuna converter</h3>
    <form>
      <div class="form-group row">
        <label class="col-sm-4 col-form-label">Euro</label>
        <div class="col-4">
          <input type="number" placeholder="C" v-model.number="euro" @keyup="k2e"/>
        </div>
      </div>
      <div class="form-group row">
        <label class="col-4 col-form-label">Kune</label>
        <div class="col-4">
          <input type="number" placeholder="F" v-model.number="kune" @keyup="e2k"/>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        euro: 1,
        kune: 7.53,
      };
    },
    methods: {
      k2e() {
        this.kune = (this.euro * 7.53).toFixed(2);
      },
      e2k() {
        this.euro = (this.kune / 7.53).toFixed(2)
      },
    },
  };
</script>
