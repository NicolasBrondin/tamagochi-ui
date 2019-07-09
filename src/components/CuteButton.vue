<template>
  <button
    @click="clicked_callback"
    :class="{'is-stretched': is_stretched, 'has-no-margin': has_no_margin}"
  >{{title}}</button>
</template>

<script>
export default {
  name: "cute-button",
  data: function() {
    return {};
  },
  mounted: function() {},
  props: ["title", "clicked_callback", "is_stretched", "has_no_margin"]
};
</script>

<style scoped>
button {
  background-color: #3498db;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
}

button.is-stretched {
  width: 100%;
}

button.has-no-margin {
  margin: 0;
}
</style>