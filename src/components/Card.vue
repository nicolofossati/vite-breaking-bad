<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        }
    },
    props: {
        image: String,
        name: String,
        archetype: String
    }
}
</script>

<template>
    <div class="card">
        <img :src="image">
        <h4 class="name">{{ name.toUpperCase() }}</h4>
        <span class="archetype">{{ archetype }}</span>
    </div>
</template>


<!--  
<template>
    <div class="card" v-for="(card, index) in store.cardsList" :key="index">
        <img :src="card.card_images[0].image_url">
        <h4 class="name">{{ card.name.toUpperCase() }}</h4>
        <span class="archetype">{{ card.archetype }}</span>
    </div>
</template>
-->

<style scoped lang="scss">
.card {
    margin: 0 10px 10px 10px;
    background-color: white;
    width: calc(100%/5 - 20px);
    background-color: orange;

    h4 {
        color: white;
        text-align: center;
    }

    span {
        display: block;
        text-align: center;
        padding: 5px;
    }

    img {
        width: 100%;
    }
}
</style>