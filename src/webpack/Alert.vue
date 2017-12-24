<template>
  <div
    class="Alert"
    :class="[
      `-${color}`,
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: 'info',
      },
    },
  };
</script>

<style scoped>
  .Alert {
    padding: 10px;
  }
  .Alert.-info {
    color: #fff;
    background: #34495e;
  }
  .Alert.-error {
    color: #fff;
    background: #e74c3c;
  }
</style>
