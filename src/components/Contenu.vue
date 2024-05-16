<template>
    <div class="container my-5">

        <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
        <div id="buttonModale" v-on:click="toggleModale" class="btn btn-success">Curiculum Vitea</div>
        <a href="https://github.com/StephaneNewbieDev/CV_GITHUB"><img src="/src/assets/images/cv.png" alt="Curiculum Vitea"></a>

    </div>
</template>


<script>
    import Modale from './Modale.vue';

    export default {
        name: 'Contenu',
        data(){
            return {
                revele: false
            }
        },
        components: {
            'modale': Modale
        },
        methods: {
            toggleModale: function(){
                this.revele =!this.revele;
            }
        }
    }

</script>


<style>

#buttonModale {
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
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
}

img:hover {
    box-shadow: 5px 5px 5px 10px rgba(255, 255, 255, 0.5);
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