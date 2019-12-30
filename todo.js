import React from "react";
import List from "./List";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: "",
      tasks: [],
      editMode: false
    };
  }
  inputRef = React.createRef();
  localIndex = undefined;

  updateCurrentTask = event => {
    const value = event.target.value;
    console.log(value);
    this.setState({ currentValue: value });
  };

  addTask = () => {
    this.setState({ task: this.state.currentValue });
    const addedTasks = this.state.tasks;
    console.log("before push: ", addedTasks);
    //addedTasks.push(this.state.currentValue);
    addedTasks.push(this.inputRef.current.value);
    this.setState({ tasks: addedTasks });
    this.inputRef.current.value = " ";
  };
  delTasks = index => {
    const addedTasks = this.state.tasks;
    addedTasks.splice(index, 1);
    this.setState({ tasks: addedTasks });
  };
  onEdit = index => {
    this.localIndex = index;
    this.setState({ editMode: true });
    const addedTasks = this.state.tasks;
    this.inputRef.current.value = addedTasks[index];
    console.log("Before Edit:", addedTasks);
    this.setState({ tasks: addedTasks });
  };
  cancelTasks = () => {
    this.setState({ editMode: false });
    this.inputRef.current.value = " ";
  };
  updateTasks = index => {
    const existedTasks = this.state.tasks;
    existedTasks[this.localIndex] = this.inputRef.current.value;
    this.setState({ tasls: existedTasks });
    this.setState({ editMode: false });
    this.inputRef.current.value = "";
  };
  render() {
    return (
      <div>
        <form action="javascript:void(0)">
          <input type="text" ref={this.inputRef} />
          {!this.state.editMode ? (
            <button onClick={this.addTask}>Add</button>
          ) : (
            <span>
              <button onClick={this.updateTasks}>Update</button>
              <button onClick={this.cancelTasks}>Cancel</button>
            </span>
          )}
        </form>
        <List
          items={this.state.tasks}
          onClick={this.delTasks}
          items={this.state.tasks}
          editClick={this.onEdit}
        />
      </div>
    );
  }
}
