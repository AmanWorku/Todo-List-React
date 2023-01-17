import React from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.todos.map((todo) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						handleChangeProps={this.props.handleChangeProps}
						deleteTodoProps={this.delTodo}
					/>
				))}
			</ul>
		);
	}
}
