<template>
    <div class="container-header">
        <div>Logo</div>
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

    div {
        background-color: red;
        height: 40px;
        width: 100px;
    }

    h1 {
        color: grey;
    }
}
</style>