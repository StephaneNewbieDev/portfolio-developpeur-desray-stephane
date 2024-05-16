<template>
    <div class="container my-5">

        <modaleb v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modaleb>
        <div id="buttonModale" v-on:click="toggleModale" class="btn btn-success">Dynamiser un formulaire</div>
        <a href="https://github.com/StephaneNewbieDev/depot-formulaire-fini"><img src="../assets/images/formulaire.png" alt="Formulaire"></a>

    </div>
</template>


<script>
    import Modaleb from './Modaleb.vue';

    export default {
        name: 'Contenub',
        data(){
            return {
                revele: false
            }
        },
        components: {
            'modaleb': Modaleb
        },
        methods: {
            toggleModale: function(){
                this.revele =!this.revele;
            }
        }
    }

</script>


<style>
#buttonModaleb {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    color: yellowgreen;
    cursor: pointer;
    font-size: 40px;
}


img {
    transition: box-shadow 0.7s;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20%;
    width: 80px;
    height: 80px;
}

img:hover {
    box-shadow: 5px 5px 5px 10px rgba(0, 0, 0, 0.5);
}

a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: whitesmoke;
    margin: auto;
    font-size: 30px;
    font-weight: bold;
    padding: 10%;
    padding-top: 5px;
    padding-bottom: 5px;

}

</style>