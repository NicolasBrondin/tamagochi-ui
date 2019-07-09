<template>
  <label class="switch">
    <input type="checkbox" v-model="value" @change="on_value_change">
    <span class="switch-slider is-round"></span>
  </label>
</template>

<script>
export default {
  data: function() {
    return {
      value: this.original_value
    };
  },
  methods: {
    on_value_change: function(new_value) {
      this.on_change(this.value);
    }
  },
  props: ["original_value", "on_change"]
};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 50.5px !important;
  height: 24px !important;
}

.switch.is-large {
  height: 34px !important;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.switch-slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.switch.is-large .switch-slider:before {
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
}

input:checked + .switch-slider {
  background-color: #2196F3;
}

input:focus + .switch-slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .switch-slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.switch-slider.is-round {
  border-radius: 34px;
}

.switch-slider.is-round:before {
  border-radius: 50%;
}
</style>
