<template>
  <div class="load" v-if="store.loader">Caricamento...</div>
  <MyHeader />
  <MyMain @selected="callToApi" />
</template>

<script>
import axios from 'axios';
import { store } from './store.js';
import MyHeader from './components/MyHeader.vue';
import MyMain from './components/MyMain.vue';

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    MyHeader, MyMain
  }, methods: {
    callToApi() {
      let url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
      if (store.archetypeSelected != '') {
        url += "?archetype=" + store.archetypeSelected;
      }
      axios.get(url)
        .then(response => {
          this.store.cardsList = response.data.data;
          this.store.loader = false;
          console.log(store.archetypeSelected);
        });
    }
  },
  created() {
    axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
      .then(response => {
        store.archetypeList = response.data;
      });
    this.callToApi();
  }
}
</script>

<style lang="scss">
@use "./styles/general.scss";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.load {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: white;
}
</style>
