<template>
    <div class="main-container">
        <div class="main-content">
            <div class="main-header">
                <h3>Found 39 cards</h3>
                <!-- https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien  -->
            </div>
            <div class="card-container">
                <div class="card">
                    <img src="" alt="">
                    <h4 class="name">PROVA NOME</h4>
                    <span class="archetype">archetype</span>
                </div>
                <div class="card">
                    <img src="" alt="">
                    <h4 class="name">PROVA NOME</h4>
                    <span class="archetype">archetype</span>
                </div>
                <div class="card">
                    <img src="" alt="">
                    <h4 class="name">PROVA NOME</h4>
                    <span class="archetype">archetype</span>
                </div>
                <div class="card">
                    <img src="" alt="">
                    <h4 class="name">PROVA NOME</h4>
                    <span class="archetype">archetype</span>
                </div>
                <div class="card">
                    <img src="" alt="">
                    <h4 class="name">PROVA NOME</h4>
                    <span class="archetype">archetype</span>
                </div>
                <div class="card">
                    <img src="" alt="">
                    <h4 class="name">PROVA NOME</h4>
                    <span class="archetype">archetype</span>
                </div>
                <div class="card">
                    <img src="" alt="">
                    <h4 class="name">PROVA NOME</h4>
                    <span class="archetype">archetype</span>
                </div>
                <div class="card">
                    <img src="" alt="">
                    <h4 class="name">PROVA NOME</h4>
                    <span class="archetype">archetype</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script></script>

<style scoped lang="scss">
.main-container {
    height: calc(100vh - 60px);
    background-color: orange;
    padding: 20px;
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

    h3 {
        color: white;
    }
}

.card-container {
    background-color: #3677b7;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.card {
    margin: 10px;
    background-color: white;
    width: calc(100%/5 - 20px);
}
</style>