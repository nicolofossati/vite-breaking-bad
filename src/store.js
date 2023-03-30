import { reactive } from 'vue'

export const store = reactive({
    cardsList: [],
    loader: true,
    archetypeList: [],
    archetypeSelected: ''
});