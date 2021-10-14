<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
    <q-input v-model="greetings" :dense="dense" readonly />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  setup() {
    const Greetings = async () => {
      greetings.value = "Hello";
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
      greetings.value += "! It's " + time + " now.";
    };
    return {
      greetings: ref(""),
      dense: ref(false),
    };
  },
  methods: {},
});
</script>
