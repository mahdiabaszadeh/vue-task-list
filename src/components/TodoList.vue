<template>
  <div class="row todo-list">
    <q-list bordered class="rounded-borders" style="width: 100%">
      <h4 header>ToDo Lists</h4>
      <template v-for="(item, index) in items" :key="index">
        <q-separator spaced></q-separator>
        <q-item>
          <q-item-section avatar top>
            <q-icon
              name="sticky_note_2"
              :color="item.fine ? 'secondary' : 'negative'"
              size="34px"
            ></q-icon>
          </q-item-section>

          <q-item-section top>
            <q-item-label class="q-mt-sm" :class="item.fine && 'fine-text'">{{
              item.title
            }}</q-item-label>
          </q-item-section>

          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs">
              <q-btn
                class="gt-xs"
                size="12px"
                flat
                dense
                round
                :disabled="item.fine ? true : false"
                icon="delete"
                color="red"
                @click="deleted(index)"
              ></q-btn>
              <q-btn
                class="gt-xs"
                size="12px"
                flat
                dense
                round
                icon="done"
                color="positive"
                @click="fine(index)"
              ></q-btn>
              <q-btn
                class="gt-xs"
                size="12px"
                flat
                dense
                round
                icon="edit"
                color="info"
                @click="edit(index)"
              ></q-btn>
            </div>
          </q-item-section>
        </q-item>
      </template>
    </q-list>
  </div>
</template>

<style>
</style>

<script>
export default {
  data() {
    return {
      items: this.$store.state.todoList,
    };
  },
  methods: {
    deleted(index) {
      this.$store.commit("REMOVE_TODO", index);
    },
    fine(index) {
      this.$store.commit("FINE_TODO", index);
    },
    edit(index){
      console.log("START_EDIT"); 
      this.$store.commit("START_EDIT",index);
    }
  },
};
</script>
<style scoped>
.todo-list {
  margin-top: 20px;
}
h4 {
  color: green;
  font-weight: bold;
}
.fine-text {
  text-decoration: line-through;
}
</style>
