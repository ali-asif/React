import React from "react";
export default class List extends React.Component {
  constructor(props) {
    super(props);
  }
  delete = index => {
    this.props.delTasks();
  };
  Edit = index => {
    this.props.onEdit();
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((task, index) => (
            <li key={index}>
              {task}{" "}
              <button onClick={() => this.props.onClick(index)}>Delete</button>
              <button onClick={() => this.props.editClick(index)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
