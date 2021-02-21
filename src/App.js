
import { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCoruses from './MyCourses';
import Hello from './Hello';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App]-M1-Constrcutor");
    this.state = {
      compnayName: 'CourseCube',
      courseFlag: true,
    }
  }
  // state = {
  //   compnayName:'CourseCube';
  //}

  static getDerivedStateFromProps(props, state) {
    console.log("[App]-M2-getDerivedStateFromProps()");
    console.log("state - ", state);
    console.log("props - ", props);
    return null;
  }

  componentDidMount() {
    console.log("[App]-M4-componentDidMount()");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App] - shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[App] - getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(prevProps, prevState, mysnapshot) {
    console.log("[App] - componentDidUpdate");
    //console.log("[App] -", mysnapshot);
  }
  componentWillUnmount() {
    console.log("[App] - componentWillUnmount");
  }
  static getDerivedStateFromError(error) {
    console.log("[App] - getDerivedStateFromError", error);
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log("[App] - componentDidCatch", error);
    console.log("[App] - componentDidCatch", info.componentStack);
  }
  showHideCourse = () => {
    let mycourseFlag = this.state.courseFlag;
    this.setState({
      courseFlag: !mycourseFlag
    });
  }
  render() {
    console.log("[App]-M3-render()");
    let displayCourse = null;
    if (this.state.courseFlag === true) {
      displayCourse = (
        <MyCoruses hello="Hello Guys" hai="Hai Guys" />
      );
    }

    return (
      <div className="container">
        <h1>Lab 12</h1>
        <h1>CompnayName is: {this.state.compnayName}</h1>

        <br />
        <button className="btn btn-danger" onClick={this.showHideCourse}>Show Hide Courses</button>
        <br /><br />
        {displayCourse}
        <br />
        <table className="table">
          <tbody>
            <tr>
              <td> <Hello /> </td>
              <td> <Hello mytrainer="Dande" /> </td>
              <td> <Hello mytrainer="Srinivas Dande" mycolor="Blue" /> </td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
