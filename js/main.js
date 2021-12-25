const vm = Vue.createApp({
  data () {
    return {
      todos: [],
      newTodo: '',
      editedTodo: ''
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
      this.save()
    },
    startEditing (index) {
      this.todos[index].editable = true 
    },
    editItem (index) {
      this.todos[index].title = this.editedTodo
      this.todos[index].editable = false
      this.save()
    },
    cancelEditing (index) {
      this.todos[index].editable = false
    },
    deleteItem (index) {
      if (confirm('Are you sure?')) {
        this.todos.splice(index, 1)
        this.save()
      }
    },
    save () {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }
}).mount('#app')
