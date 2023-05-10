const app = Vue.createApp({
	data() {
		return {
			newTodoText: '',
			inputError: false,
			todos: [
				{
					text: 'Fare i compiti',
					done: false,
				},
				{
					text: 'Fare la spesa',
					done: true,
				},
				{
					text: 'Fare il bucato',
					done: false,
				},
			],

			// newTodoNested: {
			// 	content: {
			// 		text: '',
			// 		comment: '',

			// 	},
			// 	done: false,
			// },
			// todos: [
			// 	{
			// 		content: {
			// 			text: 'Fare i compiti',
			// 			comment: '',
			// 		},
			// 		done: false,
			// 	},
			// 	{
			// 		content: {
			// 			text: 'Fare la spesa',
			// 			comment: '',
			// 		},
			// 		done: true,
			// 	},
			// 	{
			// 		content: {
			// 			text: 'Fare il bucato',
			// 			comment: '',
			// 		},
			// 		done: false,
			// 	},
			// ],

			// newTodo: {
			// 	text: '',
			// 	done: false,
			// },
		};
	},
	methods: {
		addTodo() {
			// this.todos.unshift({...this.newTodo});
			// this.newTodo.text = '';

			// per fare il deep copy di oggetti innestati senza metodi
			// const objStr = JSON.stringify(this.newTodoNested);
			// this.todos.unshift(JSON.parse(objStr));

			// this.todos.unshift({
			// 	text: this.newTodoText,
			// 	done: false,
			// });

			let cleanedTodo = this.newTodoText.trim();
			if (cleanedTodo.length >= 5) {
				this.todos.unshift({
					text: this.newTodoText,
					done: false,
				});
				this.newTodoText = '';
				this.inputError = false;
			} else {
				this.inputError = true;
			}
		},
		deleteItem(index) {
			this.todos.splice(index, 1);
		},
		toggleDone(objTodo) {
			objTodo.done = !objTodo.done;
		}
	},
});

app.mount('#root');
