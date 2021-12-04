<template>
  <div class="row">
    <div class="col-7">
      <q-input
        outlined
        label="Title"
        ref="titleInput"
        v-model="taskTitl"
        name="taskTitle"
      />
    </div>
    <div class="col-5">
      <q-btn
        push
        color="primary"
        size="lg"
        type="button"
        label="Submit"
        @click="onClick"
        v-if="!this.editStatus"
      />
      <div class="row" v-else>
        <div class="col-4" />
        <div class="col-4">
          <q-btn
            round
            push
            color="positive"
            icon="done"
            size="md"
            type="button"
            @click="finalEdit()"
          />
        </div>
        <div class="col-4">
          <q-btn
            round
            push
            color="negative"
            icon="clear"
            size="md"
            type="button"
            @click="cancelEdit"
          />
        </div>
      </div>
    </div>
    <span>
      {{ show }}
    </span>
  </div>
</template>

<script>
const autoFocus = (vueObject) => {
  vueObject.$refs.titleInput.focus();
};
const emptyInput = (vueObject)=>{
  vueObject.taskTitl = "";
}

export default {
  data() {
    return {
      taskTitl: "",
      editStatus: false,
    };
  },
  mounted() {
    autoFocus(this);
  },
  computed: {
    editMode: function () {
      return this.$store.getters.getEditMode;
    },
  },
  watch: {
    editMode: function () {
      this.editStatus = this.$store.getters.getEditMode;
      if (this.editStatus) {
        const list = this.$store.getters.getToDoList;
        const tempItem = list.filter((item) => item.edited === true);
        this.taskTitl = tempItem[0].title;
        autoFocus(this);
      }
    },
    taskTitl: function () {
      if (this.taskTitl === "") {
        autoFocus(this);
      }
    },
  },
  methods: {
    onClick: function () {
      this.$store.commit("ADD_TODO", this.taskTitl);
      emptyInput(this);
    },
    finalEdit: function () {
      this.$store.commit("FINAL_EDIT", this.taskTitl);
      emptyInput(this);
    },
    cancelEdit: function(){
      this.$store.commit("CANCEL_EDIT");
      emptyInput(this);
    }
  },
};
</script>
