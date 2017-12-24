<template>
  <div class="Counter">
    <div class="Counter_count">{{ count }}</div>
    <div class="Counter_tools">
      <button class="Counter_toolBtn" @click="decrement">-</button>
      <button class="Counter_toolBtn" @click="increment">+</button>
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    count: function() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment: function() {
      this.$store.commit('increment');
    },
    decrement: function() {
      this.$store.commit('decrement');
    },
  },
}
</script>

<style scoped>
  .Counter {
    display: block;

    padding: 10px;

    background: #000;
  }
  .Counter_count {
    padding: 5px 10px;
    margin-bottom: 10px;

    text-align: center;

    background: #fff;
  }
  .Counter_tools {
    display: flex;
    justify-content: space-between;
  }
  .Counter_toolBtn {
    display: inline-block;
    vertical-align: middle;

    padding: 10px 20px;
    border: 0;
    border-radius: 0;

    background: #fff;

    cursor: pointer;
  }
</style>
