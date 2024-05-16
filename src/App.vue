<script>
import { RouterLink, RouterView } from 'vue-router'
import Contenu from './components/Contenu.vue';
import Contenub from './components/Contenub.vue';


export default {
  name: 'App',
  components: {
    'contenu': Contenu,
    'contenub': Contenub
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
      <div class="contactez-nous">
            <h3>Contactez-moi</h3>
            <p>Un problème, une question, envie de m'envoyer un message sympa ?<br/>N hésitez pas à utiliser ce formulaire pour prendre contact avec moi !</p>

        </div>
        <div>
            <label for="nom">Votre nom</label>
            <input type="text" id="nom" name="nom" placeholder="Votre nom" required>
            
        </div>
        <div>
            <label for="email">Votre e-mail</label>
            <input type="email" id="email" placeholder="monadresse@mail.com" autocomplete="email" required>
        </div>
        <div>
            <label for="sujet">Quel est le sujet de votre message ?</label>
            <select name="sujet" id="sujet" required>
                <option value="sujet message" disabled selected hidden>Choisissez le sujet de votre message</option>
                <option value="contact proffessionnel">contact proffessionnel</option>
                <option value="probleme-technique">Problème technique</option>
                <option value="autre">Autre...</option>
            </select>
        </div>
        <div>
            <label for="message">Votre message</label>
            <textarea id="message" name="message" placeholder="Bonjour, je vous contacte car...." required></textarea>
            <button v-on:click="" type="submit">Envoyer</button>
        </div>
      </section>
    </main>
    <footer>
    <section id="menu">
            <div id="Github">
                <a href="https://github.com/"><img src="./assets/logos/Github.png" alt="Logo github"></a>
            </div>
            <div id="linkedin">
                <a href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"><img src="./assets/logos/linkedin.png" alt="logo linkedin"></a>
            </div>
            <div id="Discord">
                <a href="Discord"><img src="./assets/logos/discod.png" alt="logo discord"></a>
            </div>
            <div id="Contact">
                <a href="Mailto:s.desray@gmail.com"><img src="./assets/logos/mail.jpg" alt="contact"></a>
            </div>
            <p><small>Mis a jour le 26/04/2024</small></p>
    </section>
    </footer>
  </body>

  <RouterView />
</template>

<style scoped>

</style>
