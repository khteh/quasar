<template>
  <q-page padding>
    <div class="row">
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-vertical.svg"
        style="width: 200px; height: 200px"
      />
    </div>
    <div class="row" style="margin-top: 10px">
      <div class="col-6">
        <q-input borderless v-model="greetings" :dense="dense" readonly />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { date } from "quasar";
export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      greetings: ref(""),
      dense: ref(false),
      afternoon: date.buildDate({
        hours: 12,
      }),
      evening: date.buildDate({
        hours: 18,
      }),
      midnight: date.buildDate({
        hours: 0,
      }),
    };
  },
  mounted() {
    this.Greetings(); // 1
  },
  methods: {
    async Greetings() {
      let timeStamp = Date.now();
      const formattedTimeStamp = date.formatDate(
        timeStamp,
        "Do MMMM YYYY HH:mm:ss"
      );
      let suffix = "";
      this.greetings = "";
      if (timeStamp > this.midnight && timeStamp < this.afternoon) {
        this.greetings += "Good morning! ";
        suffix = "Have a great day!";
      } else if (timeStamp > this.afternoon && timeStamp < this.evening) {
        this.greetings += "Good afternoon! ";
        suffix = "Have a great day!";
      } else if (timeStamp > this.evening) {
        this.greetings += "Good evening! ";
        suffix = "Have a great evening!";
      }
      this.greetings += "It's " + formattedTimeStamp + " now. " + suffix;
    },
  },
});
</script>
