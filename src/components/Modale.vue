<template>

    <div class="bloc-modale" v-if="revele">
    
        <div class="overlay" v-on:click="toggleModale">date de creation septembre 2023</div>
    
        <div class="modale card">
            <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>
            <a href="https://github.com/StephaneNewbieDev/CV_GITHUB"><img src="/src/assets/images/cv.png" alt="Curiculum Vitea"></a>
            
        </div>
    </div>
    </template>
    
    
    <script>
    
    export default {
        name: 'Modale',
        props: ['revele','toggleModale']
    }
    
    </script>
    
    
    <style scoped>



    .bloc-modale {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .overlay {
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    
    .modale {
        background: (f1,f1,f1);
        color: rgb(76, 247, 19);
        padding: 100px;
        position: fixed;
        top: 30%;
        left: 30%;
        width: 40%;
        height: 40%;
        font-size:large;
    }
    
    .btn-modale {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: x-large;
        font: bold;
    }

    </style>