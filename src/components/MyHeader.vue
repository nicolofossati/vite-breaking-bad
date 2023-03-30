<template>
    <div class="container-header">
        <img src="http://vignette1.wikia.nocookie.net/yugiohenespanol/images/a/aa/Yugioh_anime_logo.jpg/revision/latest?cb=20130310042737&path-prefix=es"
            alt="">
        <h1>Yu-Gi-Oh Api</h1>
    </div>
</template>

<script>

export default {
    data() {
        return {
        };
    },
};
</script>

<style scoped lang="scss">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.container-header {
    display: flex;
    align-items: center;
    height: 60px;

    img {
        width: 150px;
        padding: 20px;
    }

    h1 {
        color: grey;
    }
}
</style>