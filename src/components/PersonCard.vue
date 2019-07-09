<template>
  <div class="person-card" :class="{'is-dead': !person.is_alive}">
    <div class="card--main-picture">
      <img src="./../assets/img/man.png" v-show="person.gender === 'M'">
      <img src="./../assets/img/woman.png" v-show="person.gender === 'F'">
    </div>
    <div class="card--main-picture-overlay" v-show="!person.is_alive">
      <img src="./../assets/img/skull.png">
    </div>
    <p>{{person.firstname}} {{person.lastname}}</p>
    <!--<p class="card--id" :title="person.id">{{person.id}}</p>-->
    <div class="separator"></div>
    <p class="card--section-title" @click="sections.general = !sections.general">
      Infos générales
      <span v-if="!sections.general">►</span>
      <span v-else>▼</span>
    </p>
    <section v-show="sections.general">
      <ul>
        <li>Age: {{Math.floor(person.age / 365)}} ans</li>
        <li>Orientation sexuelle: {{person.sexuality}}</li>
        <li>En couple: {{in_love_with ? in_love_with.firstname+" "+in_love_with.lastname : "Non"}}</li>
        <li>Nombre d'enfants: {{person.kids.length}}</li>
      </ul>
    </section>
    <div class="separator"></div>
    <p class="card--section-title" @click="sections.situation = !sections.situation">
      Situation
      <span v-if="!sections.situation">►</span>
      <span v-else>▼</span>
    </p>
    <section v-show="sections.situation">
      <ul>
        <li>Niveau scolaire: {{person.education_level}}</li>
        <li>Job: {{person.job || "Sans emploi"}}</li>
        <li>Entreprise: {{person.company ? person.company.name : "Sans emploi"}}</li>
      </ul>
    </section>
    <div class="separator"></div>
    <p class="card--section-title" @click="sections.traits = !sections.traits">
      Traits
      <span v-if="!sections.traits">►</span>
      <span v-else>▼</span>
    </p>
    <section v-show="sections.traits">
      <ul>
        <li>
          <progress-bar title="Logique" min="0" max="10" :value="person.traits.logic"/>
        </li>
        <li>
          <progress-bar title="Bienveillance" min="0" max="10" :value="person.traits.kindness"/>
        </li>
        <li>
          <progress-bar title="Dynamisme" min="0" max="10" :value="person.traits.dynamism"/>
        </li>
        <li>
          <progress-bar title="Romantisme" min="0" max="10" :value="person.traits.romantism"/>
        </li>
        <li>
          <progress-bar title="Créativité" min="0" max="10" :value="person.traits.creativity"/>
        </li>
        <li>
          <progress-bar title="Jovialité" min="0" max="10" :value="person.traits.joviality"/>
        </li>
        <li>
          <progress-bar title="Spontanéité" min="0" max="10" :value="person.traits.spontaneity"/>
        </li>
        <li>
          <progress-bar title="Sociabilité" min="0" max="10" :value="person.traits.sociability"/>
        </li>
        <li>
          <progress-bar title="Humour" min="0" max="10" :value="person.traits.humor"/>
        </li>
        <li>
          <progress-bar title="Ego" min="0" max="10" :value="person.traits.ego"/>
        </li>
        <li>
          <progress-bar title="Santé mentale" min="0" max="10" :value="person.traits.sanity"/>
        </li>
        <li>
          <progress-bar
            title="Perfectionisme"
            min="0"
            max="10"
            :value="person.traits.perfectionism"
          />
        </li>
        <li>
          <progress-bar
            title="Ouverture d'esprit"
            min="0"
            max="10"
            :value="person.traits.openness"
          />
        </li>
      </ul>
    </section>
    <div class="separator"></div>
    <p class="card--section-title" @click="sections.interests = !sections.interests">
      Centres d'intérêts
      <span v-if="!sections.interests">►</span>
      <span v-else>▼</span>
    </p>
    <section v-show="sections.interests">
      <p>
        <img
          :src="interests[interest.slug]"
          v-for="interest in person.interests"
          :key="interest.name"
        >
      </p>
    </section>
    <div class="separator" v-show="clicked_callback"></div>
    <cute-button
      v-show="clicked_callback"
      title="Voir"
      :clicked_callback="handle_click"
      is_stretched="true"
      has_no_margin="true"
    />
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
import CuteButton from "./CuteButton.vue";

export default {
  name: "PersonCard",
  data: function() {
    return {
      sections: {
        general: true,
        situation: false,
        traits: false,
        interests: false
      },
      interests: {
        books: require("@/assets/img/interests/books.png"),
        chess: require("@/assets/img/interests/chess.png"),
        cinema: require("@/assets/img/interests/cinema.png"),
        cooking: require("@/assets/img/interests/cooking.png"),
        "do-it-yourself": require("@/assets/img/interests/do-it-yourself.png"),
        ecology: require("@/assets/img/interests/ecology.png"),
        games: require("@/assets/img/interests/games.png"),
        magic: require("@/assets/img/interests/magic.png"),
        music: require("@/assets/img/interests/music.png"),
        party: require("@/assets/img/interests/party.png"),
        sport: require("@/assets/img/interests/sport.png"),
        technology: require("@/assets/img/interests/technology.png"),
        theater: require("@/assets/img/interests/theater.png")
      }
    };
  },
  methods: {
    load_picture: function(key) {
      return require("./../assets/img/interests/" + key + ".png");
    },
    handle_click: function() {
      this.clicked_callback(this.person);
    }
  },
  mounted: function() {},
  components: {
    "progress-bar": ProgressBar,
    "cute-button": CuteButton
  },
  props: ["person", "in_love_with", "clicked_callback"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.person-card {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 250px;
  border-radius: 5px;
  background: white;
  padding: 20px;
  padding-top: 40px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  margin: 10px;
  margin-bottom: 30px;
}

.person-card.is-dead {
  opacity: 0.5;
}

.card--main-picture,
.card--main-picture-overlay {
  position: absolute;
  top: -25px;
  left: calc(50% - 25px);
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: white;
  overflow: hidden;
  line-height: 50px;
}

.card--main-picture-overlay {
  background: rgba(0, 0, 0, 0.3);
  z-index: 2;
}

.card--main-picture img {
  height: 80%;
  margin-top: 10px;
}

.card--main-picture-overlay img {
  height: 40%;
  vertical-align: middle;
}

.card--id {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 10px;
  font-weight: bold;
}

.person-card p {
  margin: 0;
}

.person-card .separator {
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.2);
  margin: 5px 0px;
}

.person-card ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 12px;
  text-align: left;
}
.person-card ul li {
  padding: 5px 0px;
}

.card--section-title {
  font-weight: bold;
  font-size: 12px;
  padding: 10px 0px;
  cursor: pointer;
}
</style>
