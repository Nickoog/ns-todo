<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!">
      <ActionItem
        ios.systemIcon="4"
        ios.position="right"
        android.systemIcon="ic_input_add"
        android.position="actionBar"
        @tap="addTodo"
      />
    </ActionBar>
    <ListView for="todo in todos" class="list-group" @itemTap="removeTodo">
      <v-template>
        <Label class="list-group-item" :text="todo.name"></Label>
      </v-template>
    </ListView>
  </Page>
</template>

<script>
import * as dialogs from 'tns-core-modules/ui/dialogs'
import * as fromTodo from '../store/mutation-types'

export default {
  methods: {
    addTodo() {
      prompt({
        title: 'New Task',
        message: 'Task name:',
        okButtonText: 'OK',
        cancelButtonText: 'Cancel',
        defaultText: '',
        inputType: dialogs.inputType.text
      }).then(result => {
        this.$store.dispatch(fromTodo.ADD_TODO, { id: 4, name: result.text })
      })
    },
    removeTodo(event) {
      const item = event.item

      this.$store.commit(fromTodo.REMOVE_TODO, item)
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos
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
