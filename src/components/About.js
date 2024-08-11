import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h4>About us</h4>
        <h3>
          This is About page is the create for Learning from Namste react
          series.
        </h3>
        <UserClass name="rohan" location="indore" mode="Class componenet" />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h4>About us</h4>
//       <h3>
//         This is About page is the create for Learning from Namste react series.
//       </h3>

//       <User name="rohan" location="indore" mode="functional componenet" />
//       <UserClass name="rohan" location="indore" mode="Class componenet" />
//     </div>
//   );
// };

export default About;
