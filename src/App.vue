<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <div class="row flex flex-center">
        <img
          alt="Quasar logo"
          src="./assets/logo.svg"
          style="width: 200px; height: 200px; margin: 20px 0"
        />
      </div>
      <div class="row todo-container">
        <div class="col-6">
          <div class="todo-list-container">
            <Form />
            <TodoList />
          </div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import Form from "./components/Form";
import TodoList from "./components/TodoList.vue";

export default {
  name: "LayoutDefault",

  components: {
    Form,
    TodoList,
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
    };
  },
};
</script>

<style>
.todo-container {
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 200px 0;
}
.todo-list-container {
  margin: auto;
  display: block;
  padding: 0 100px;
}
</style>
