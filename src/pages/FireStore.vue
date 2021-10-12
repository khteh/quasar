<template>
  <q-page padding>
    <div v-if="loading"><q-spinner /> Fetching data...</div>
    <div v-else>
      <q-list>
        <q-item-label header>Todos</q-item-label>
        <q-item v-for="(todo, index) in todos" :key="index">
          <q-item-label>
            {{ todo.title }}
          </q-item-label>
        </q-item>
      </q-list>
    </div>
    <q-btn
      v-if="!loading"
      color="primary"
      label="Seed Data"
      class="q-mt-md"
      @click="seedData()"
    />
  </q-page>
</template>

<script>
import seedData from "../../data/todos.json";
import { defineComponent } from "vue";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from "firebase/firestore";

export default defineComponent({
  name: "FireStorePage",
  data() {
    return {
      loading: true,
      todos: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.loading = true;
      this.todos = [];
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "todos"));
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        this.todos.push(data.todo);
        console.log(doc.id, " => ", doc.data());
      });
      this.loading = false;
    },
    async seedData() {
      const db = getFirestore();
      seedData.forEach(async (todo) => {
        console.log("Processing ", todo.title, "...");
        const q = query(
          collection(db, "todos"),
          where("title", "==", todo.title)
        );
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          // Contents of first document
          console.log("Add missing todo: ", todo.title);
          await addDoc(collection(db, "todos"), { todo });
          this.todos.push(todo);
        } else {
          console.log("Skip existing record: ", querySnapshot.docs[0].data());
        }
      });
    },
  },
});
</script>
