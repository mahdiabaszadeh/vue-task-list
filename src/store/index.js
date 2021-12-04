import { createStore } from "vuex";

export const store = createStore({
  state: {
    todoList: [],
    editMode: false,
  },
  getters: {
    getEditMode: (state) => {
      return state.editMode;
    },
    getToDoList: (state) => {
      return state.todoList;
    },
  },
  mutations: {
    ADD_TODO: (state, payload) => {
      state.todoList.push({ title: payload, fine: false, edited: false });
    },
    REMOVE_TODO: (state, payload) => {
      state.todoList.splice(payload, 1);
    },
    FINE_TODO: (state, payload) => {
      state.todoList[payload].fine = true;
    },
    START_EDIT: (state, payload) => {
      state.editMode = true;
      state.todoList[payload].edited = true;
    },
    FINAL_EDIT: (state, payload) => {
      state.todoList.forEach((item) => {
        if (item.edited === true) {
          item.title = payload;
          item.edited = false;
        }
      });
      state.editMode = false;
    },
    CANCEL_EDIT: (state) => {
      state.todoList.forEach((item) => {
        if (item.edited === true) {
          item.edited = false;
        }
      });
      state.editMode = false;
    },
  },
});
