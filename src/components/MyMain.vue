<template>
    <div class="main-container">
        <select name="" id="">
            <option v-for="archetype in store.archetypeList">{{ archetype.archetype_name }}</option>
        </select>
        <div class="main-content">
            <div class="main-header">
                <h3>Found {{ store.cardsList.length }} cards</h3>
            </div>
            <div class="card-container">
                <div class="card-wrapper" v-for="(card, index) in store.cardsList" :key="index">
                    <card :image="card.card_images[0].image_url" :name="card.name" :archetype="card.archetype" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import Card from './Card.vue';

export default {
    data() {
        return {
            store
        }
    },
    components: {
        Card
    }
}
</script>

<style scoped lang="scss">
.main-container {
    background-color: orange;
    padding: 20px;

    select {
        margin-left: 5%;
        margin-bottom: 20px;
        padding: 10px 5px;
        border-radius: 5px;
    }
}

.main-content {
    width: 90%;
    padding: 20px;
    margin: auto;
    background-color: white;
}

.main-header {
    height: 40px;
    background-color: #212529;
    margin: 0 10px 0 10px;

    h3 {
        color: white;
    }
}

.card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.card-wrapper {
    display: contents;
}
</style>