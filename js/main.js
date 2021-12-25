const vm = Vue.createApp({
  data () {
    return {
      todos: [],
      newTodo: '',
      editedTodo: ''
    }
  },
  watch: {
    todos: {
      handler: function () {
        localStorage.setItem('todos', JSON.stringify(this.todos))
      },
      deep: true
    }
  },
  mounted: function () {
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
  },
  methods: {
    addItem () {
      const item = { title: this.newTodo, isDone: false , editable: false}
      this.todos.push(item)
      this.newTodo = ''
    },
    startEditing (index) {
      this.todos[index].editable = true 
    },
    editItem (index) {
      this.todos[index].title = this.editedTodo
      this.todos[index].editable = false
    },
    cancelEditing (index) {
      this.todos[index].editable = false
    },
    deleteItem (index) {
      if (confirm('Are you sure?')) {
        this.todos.splice(index, 1)
      }
    }
  }
}).mount('#app')
