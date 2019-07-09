<template>
  <div class="person-timeline">
    <cute-button :clicked_callback="back_callback" title="Retour"/>
    <p>Timeline</p>
    <ul class="events-list">
      <li v-for="(event, index) in person.timeline" :key="index">
        <img
          class="event--icon"
          :src="event_types[event.type] ? event_types[event.type].icon : null"
        >
        Année {{Math.floor((event.data.age|| 0)/365) }} : {{event_types[event.type] ? event_types[event.type].label : event.type}}
        <span
          v-show="event.type === 'birth'"
        >en {{Math.floor(event.data.date/365)}}</span>
        <a
          v-if="event.type === 'new_child'"
          @click="open_callback(event.data.child.id)"
        >{{event.data.child.firstname}} {{event.data.child.lastname}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import CuteButton from "./CuteButton.vue";

export default {
  name: "person-timeline",
  data: function() {
    return {
      event_types: {
        birth: {
          label: "Je suis né",
          icon: require("@/assets/img/timeline/birth.png")
        },
        new_job: {
          label: "J'ai trouvé un travail",
          icon: require("@/assets/img/timeline/new_job.png")
        },
        new_child: {
          label: "J'ai donné la vie à",
          icon: require("@/assets/img/timeline/new_child.png")
        },
        found_love: {
          label: "J'ai trouvé l'amour",
          icon: require("@/assets/img/timeline/found_love.png")
        },
        death: {
          label: "Je suis mort",
          icon: require("@/assets/img/timeline/death.png")
        }
      }
    };
  },
  methods: {},
  mounted: function() {},
  components: {
    "cute-button": CuteButton
  },
  props: ["person", "back_callback", "open_callback"]
};
</script>

<style scoped>
.person-timeline {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 400px;
  border-radius: 5px;
  background: white;
  padding: 20px;
  padding-top: 40px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  margin: 10px;
  margin-bottom: 30px;
}

ul.events-list {
  position: relative;
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: left;
}

ul.events-list::before,
ul.events-list::after {
  content: "";
  display: block;
  position: absolute;
  left: -3px;
  width: 10px;
  height: 10px;
  background: #3498db;
  border-radius: 5px;
  z-index: 2;
}

ul.events-list::before {
  top: -5px;
}
ul.events-list::after {
  bottom: -5px;
}

ul.events-list li {
  border-left: 4px solid #3498db;
  padding: 10px;
  font-size: 12px;
  background: white;
  position: relative;
}

ul.events-list li::before {
  content: "";
  display: block;
  position: absolute;
  left: -6px;
  top: 20px;
  width: 8px;
  height: 8px;
  background: #3498db;
  border-radius: 5px;
}

ul.events-list li:nth-child(even) {
  background: #ecf0f1;
}

.event--icon {
  height: 30px;
  vertical-align: middle;
  margin-right: 10px;
}
</style>