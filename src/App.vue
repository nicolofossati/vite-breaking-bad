<template>
  <MyHeader />
  <MyMain />
</template>

<script>
import axios from 'axios';
import MyHeader from './components/MyHeader.vue';
import MyMain from './components/MyMain.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    MyHeader, MyMain
  }
}
</script>

<style scoped lang="scss">
@use "./styles/general.scss";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
