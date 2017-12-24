<template>
  <div id="app">
    <div class="l-container">
      <counter-component></counter-component>
      <alert-component
        v-if="$store.getters.isMinus"
        color="error"
        class="u-mt10"
      >
        カウンターが負の値です
      </alert-component>
    </div>
  </div>
</template>


<style>
  * {
    padding: 0;
    margin: 0;
  }

  .u-mt10 {
    margin-top: 10px;
  }
  .u-mb10 {
    margin-bottom: 10px;
  }

  .l-container {
    width: 100%;
    max-width: 200px;
    padding: 30px;
    box-sizing: border-box;

    margin: 0 auto;
  }
</style>
