<template>
  <div>
    <div class="border_container">
      <div v-for="item in length" :key="item" class="tenth_separator"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    length: {
      type: Number,
      default: 4,
    },
  },
  method: {
    calculate() {
      $(".progress-bar").css("width", n + "%");
      $("#pourcentage").text(n + "%");
      if (n < 100) {
        setTimeout(function() {
          timer(n + 1);
        }, 200);
      }
      if (n > 50) {
        $(".progress-bar-warning").css("z-index", 6);
      }
      if (n > 80) {
        $(".progress-bar-danger").css("z-index", 20);
      }
    },
  },
};
</script>

<style scoped>
.container {
  background: lightgray;
}

.border_container {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
}
.tenth_separator {
  height: 100%;
  width: 10%;
  border: 3px solid white;
  z-index: 100;
}

.progress {
  margin-top: 50px;
  width: 1000px;
  position: relative;
}
.under_part {
  background-color: #eee;
  background: transparent;
  z-index: 0;
}

.progress-bar {
  width: 0px;
  position: absolute;
  left: 0px;
}

.progress-bar-success {
  z-index: 5;
}
.progress-bar-warning {
  z-index: 4;
}
.progress-bar-danger {
  z-index: 3;
}
</style>
