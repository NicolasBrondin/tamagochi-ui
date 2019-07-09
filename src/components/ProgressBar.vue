<template>
  <div class="progress-bar-container">
    <label :title="value">{{title}}</label>
    <div class="bar">
      <div class="bar--inner" :style="'width:'+((value/(max-min))*100)+'%'"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "progress-bar",
  data: function() {
    return {};
  },
  mounted: function() {},
  props: ["title", "min", "max", "value"]
};
</script>

<style scoped>
label {
  width: 95px;
  display: inline-block;
}

.progress-bar-container {
  width: 100%;
}

.bar {
  display: inline-block;
  background: #ecf0f1;
  overflow: hidden;
  border-radius: 10px;
  height: 5px;
  width: calc(100% - 100px);
}

.bar--inner {
  background: #2ecc71;
  min-width: 5px;
  height: 100%;
}
</style>