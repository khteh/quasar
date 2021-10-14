<template>
  <q-page padding>
    <div class="q-pa-md">
      <div class="row">
        <img
          alt="Quasar logo"
          src="~assets/quasar-logo-vertical.svg"
          style="width: 200px; height: 200px"
        />
      </div>
      <div class="row" style="margin-top: 10px">
        <div class="col-6">
          <q-input filled v-model="greetings" :dense="dense" readonly disable />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PageIndex",
  setup() {
    return {
      greetings: ref(""),
      dense: ref(false),
    };
  },
  mounted() {
    this.Greetings(); // 1
  },
  methods: {
    async Greetings() {
      this.greetings = "Hello";
      let now = new Date();
      let time = now.toLocaleString("en-SG", {
        timeZone: "Asia/Singapore",
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      this.greetings += "! It's " + time + " now.";
    },
  },
});
</script>
