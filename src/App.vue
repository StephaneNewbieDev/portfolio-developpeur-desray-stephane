<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <body>
    <header>
      <h1>PORTFOLIO DEVELOPPEUR DESRAY STEPHANE</h1>
    <nav>
      <a href="#A-propos">A propos</a>
      <a href="#Créations">Créations</a>
      <a href="#Contact">Contact</a>
    </nav>
    <p>Jeune Developpeur en formation fullstack au Centre Européen de Formation.
            J'ai commencé a me former en juin et peut donc adapter mon apprentissage en fonction des technologie demander par une entreprise qui souhaiterait recrutée un developpeur tres motivé.
            Je suis passionné par le developpement web et je souhaite en faire mon métier.
    </p>
    </header>
  </body>

  <RouterView />
</template>

<style scoped>

</style>
