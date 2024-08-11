import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
      count2: 2,
    };
    console.log("Child constructor");
  }
  componentDidMount() {
    console.log("Child componentDidMount");
  }
  render() {
    console.log("Child render");
    let { count, count1, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Increase count
        </button>
        <h4>Name : {this.props.name}</h4>
        <h4>Location : {this.props.location}</h4>
        <h4>Mode : {this.props.mode}</h4>
      </div>
    );
  }
}

export default UserClass;
