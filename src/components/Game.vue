<template>
  <div>
    <div v-if="game">
      <div v-if="ui == 'all'">
        <h1
          class="title"
        >{{Object.keys(game.characters).length}} personnes générées en {{game.simulation_time/1000}}s</h1>
        <div style="margin-bottom: 50px;">
          <p class="is-white">Afficher les morts
            <on-off-switch :original_value="show_dead_people" :on_change="dead_switch"/>
          </p>
        </div>
        <person-card
          :person="person"
          :in_love_with="game.characters[person.in_love_with]"
          v-for="person in game.characters"
          :key="person.id"
          v-show="person.is_alive || show_dead_people"
          :clicked_callback="handle_person_click"
        />
      </div>
      <div v-else>
        <person-card
          :person="selected_character"
          :in_love_with="game.characters[selected_character.in_love_with]"
        />
        <person-timeline
          :person="selected_character"
          :back_callback="handle_back_click"
          :open_callback="handle_open_click"
        />
      </div>
    </div>
    <div v-else>
      <h1 class="title">Game loading...</h1>
    </div>
  </div>
</template>

<script>
import PersonCard from "./PersonCard.vue";
import PersonTimeline from "./PersonTimeline.vue";
import Switch from "./Switch.vue";

export default {
  name: "Game",
  data: function() {
    return {
      game: null,
      ui: "all",
      show_dead_people: false,
      selected_character: null
    };
  },
  mounted: function() {
    this.refresh_data();
  },
  methods: {
    dead_switch: function(value) {
      this.show_dead_people = value;
    },
    handle_person_click: function(person) {
      this.ui = "focus";
      this.selected_character = person;
    },
    handle_back_click: function() {
      this.selected_character = null;
      this.ui = "all";
    },
    handle_open_click: function(id) {
      this.selected_character = this.game.characters[id];
    },
    refresh_data: function() {
      var myHeaders = new Headers();

      var myInit = {
        method: "GET",
        headers: myHeaders,
        mode: "cors",
        cache: "default"
      };

      fetch("https://2kv7t.sse.codesandbox.io/", myInit)
        .then(function(response) {
          return response.json();
        })
        .then(
          function(data) {
            this.game = data;
          }.bind(this)
        )
        .catch(
          function(e) {
            setTimeout(this.refresh_data, 5000);
          }.bind(this)
        );
    }
  },
  props: {},
  components: {
    "person-card": PersonCard,
    "person-timeline": PersonTimeline,
    "on-off-switch": Switch
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
