const vm = Vue.createApp({
  data () {
    return {
      todos: [],
      newTodo: '',
      editedTodo: '',
      editingIndex: null
    }
  },
  mounted: function () {
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
  },
  methods: {
    addItem () {
      const item = { title: this.newTodo, isDone: false}
      this.todos.push(item)
      this.newTodo = ''
      this.save()
    },
    startEditing (index) {
      this.editingIndex = index
    },
    editItem (index) {
      this.todos[index].title = this.editedTodo
      this.editingIndex = null
      this.save()
    },
    cancelEditing () {
      this.editingIndex = null
    },
    deleteItem (index) {
      if (confirm('Are you sure?')) {
        this.todos.splice(index, 1)
        this.save()
      }
    },
    saveItem () {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }
}).mount('#app')
