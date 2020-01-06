<template>
  <Page>
    <ActionBar :title="selectedProject.name">
      <ActionItem
        ios.systemIcon="4"
        ios.position="right"
        android.systemIcon="ic_input_add"
        android.position="actionBar"
        @tap="addTodo"
      />
    </ActionBar>
    <ListView
      for="todo in todos"
      class="list-group"
      @itemTap="removeTodo($event)"
    >
      <v-template>
        <Label class="list-group-item" :text="todo.name"></Label>
      </v-template>
    </ListView>
  </Page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import * as dialogs from 'tns-core-modules/ui/dialogs'
import * as fromTodo from '../store/modules/todo/mutation-types'

export default {
  props: ['selectedProject'],
  created() {
    this.GET_TODOS()
  },
  methods: {
    ...mapActions('Todo', [
      fromTodo.ADD_TODO,
      fromTodo.GET_TODOS,
      fromTodo.REMOVE_TODO
    ]),
    addTodo() {
      prompt({
        title: 'New Task',
        message: 'Task name:',
        okButtonText: 'OK',
        cancelButtonText: 'Cancel',
        defaultText: '',
        inputType: dialogs.inputType.text
      }).then(result => {
        this.ADD_TODO({ name: result.text, projectId: this.selectedProject.id })
      })
    },
    removeTodo(event) {
      const item = event.item
      this.REMOVE_TODO(item)
    }
  },
  computed: {
    ...mapGetters({
      getTodosByProjectId: 'Todo/getTodosByProjectId'
    }),
    todos() {
      return this.getTodosByProjectId(this.selectedProject.id)
    }
  }
}
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
