import React from "react";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }
  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        list,
        newItem: "",
      });
    }
  }
  deleteItem(id) {
    const list = [...this.state.list];
    const updatedlist = list.filter((item) => item.id !== id);
    this.setState({ list: updatedlist });
  }
  updateInput(input) {
    this.setState({ newItem: input });
  }
  render() {
    return (
      <div className="container mt-2">
        <h2>Add an Item</h2>
        <input
          type="text"
          className="form-control"
          placeholder="Your Todo Task"
          required
          value={this.state.newItem}
          onChange={(e) => this.updateInput(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={() => this.addItem(this.state.newItem)}
          disabled={!this.state.newItem.length}
        >
          Add
        </button>
        <div className="list">
          {this.state.list.map((item) => {
            return (
              <div key={item.id} className="mt-3">
                <h6 className="form-control">{item.value}</h6>
                <button
                  className="btn btn-danger"
                  value={this.updateInput.newItem}
                  onClick={() => {
                    this.deleteItem(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default App;
