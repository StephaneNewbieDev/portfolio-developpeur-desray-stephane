<template>
    <div class="overlay">
        <h1>404 Not Found</h1>
        <p>La page que vous cherchez n'existe pas.</p>
        <div id="lien"><router-link to="/">Retour à l'accueil</router-link></div>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
    data () {
        return {
            components: 'NotFound.vue'
        }
    }
}
</script>

<style>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/404-not-found-wallpaper-preview.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    color: greenyellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2em;
}

#lien {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10em;
}

</style>