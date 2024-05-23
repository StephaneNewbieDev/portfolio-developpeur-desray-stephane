<script>
import { RouterLink, RouterView } from 'vue-router'
import Contenu from './components/Contenu.vue';
import Contenub from './components/Contenub.vue';



export default {
  name: 'App',
  components: {
    'contenu': Contenu,
    'contenub': Contenub
      },
      data() {
        return {
          showForm: false
        }
      }
}
  


  
</script>

<template>
  <body>
    <header>
      <div id="title">
      <h1>PORTFOLIO DEVELOPPEUR DESRAY STEPHANE</h1>
      </div>
    <nav>
      <a href="#A-propos">A propos</a>
      <a href="#Créations">Créations</a>
      <a href="#Contact">Contact</a>
    </nav>
    <div id="logo-mobil">
    <a href="#title"><img src="../src/assets/logos/go-up-5.webp" alt="accueil"></a>
    </div>
    <p>Actuellement, je suis un développeur web en formation full-stack au Centre Européen de Formation.
      J'ai entrepris cette formation en juin dernier, ce qui me donne la flexibilité d'adapter mon apprentissage 
      en fonction des technologies spécifiques réclamées par une entreprise à la recherche d'un développeur enthousiaste
      et motivé. J'ai toujours eu pour ambition de devenir développeur web, et c'est avec passion que je poursuis ce but.
    </p>
    </header>

    <main>
    <section id="A-propos">
      <h2>A propos</h2>
      <p>Apres une carrière dans différents domaines comme la maçonnerie, la livraison et le montage de mobilier, la gestion de stock d'un laboratoire, j'ai toujours eu pour objectif de me former au metier de developpeur web Suite a la fin de mon dernier contrat j'ai commencé une formation au pres du centre européen de formation. La transition est complexe mais en ce donnant les moyens on peut s'adapter a toutes sorte de situations comme le montre mon debut de carrière</p>
    </section>

    <section id="Créations">
        <h2>Création</h2>
        <div id="modale">
        <contenu></contenu>
        </div>
        <div id="modaleb">
        <contenub></contenub>
        </div>
    </section>

    <section id="Contact">
      <h2 @click="showForm = !showForm">Formulaire de Contact</h2>

    <form v-if="showForm" action="/submit_form" method="post">
        <label for="fname">Prénom:</label><br>
        <input type="text" id="fname" name="fname">
        <label for="lname">Nom:</label><br>
        <input type="text" id="lname" name="lname">
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email">
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="3" cols="40"></textarea><br>
        <input type="submit" value="Envoyer">
    </form>
    </section>
    </main>
    <footer>
    <section id="menu">
            <div id="Github">
                <a href="https://github.com/" target="_blank"><img src="./assets/logos/Github.png" alt="Logo github"></a>
            </div>
            <div id="linkedin">
                <a href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit" target="_blank"><img src="./assets/logos/linkedin.png" alt="logo linkedin"></a>
            </div>
            <div id="Contact">
                <a href="Mailto:s.desray@gmail.com" target="_blank"><img src="./assets/logos/mail.jpg" alt="contact"></a>
            </div>
            <p><small>Mis a jour le 21/05/2024</small></p>
    </section>
    </footer>
  </body>

  <RouterView />
</template>

<style>

</style>
