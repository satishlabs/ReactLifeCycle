import { Component } from "react";
//import Hello from "./Hello";

class MyCoruses extends Component {
    constructor(props) {
        super(props);
        console.log("[MyCoruses]-M1-Constrcutor");
        this.state = {
            trainerName: "Satish Prasad",
            trainerEmail: "satish@jlc.com",
            mycourseList: [
                { cid: 101, cname: "Angular 7", price: 15000 },
                { cid: 102, cname: "React 16", price: 15000 },
                { cid: 103, cname: "Java FSD", price: 35000 },
                { cid: 104, cname: "MicroServices", price: 25000 },
                { cid: 105, cname: "DevOps", price: 15000 },
            ]
        };


    }

    showActiveCourses = () => {
        console.log("Button -clicked");

        this.setState({
            trainerEmail:"manish@gmail.com",
            mycourseList: [
                { cid: 101, cname: "Angular 7", price: 12000 },
                { cid: 102, cname: "React 16", price: 12000 },
                { cid: 105, cname: "MicroServices", price: 12000 },
            ]
        });
    }

    static getDerivedStateFromProps(props, state) {
        console.log("[MyCoruses]-M2-getDerivedStateFromProps()");
        console.log("props - ", props);
        console.log("state - ", state);
        return null;
    }

    componentDidMount() {
        console.log("[MyCoruses]-M4-componentDidMount()");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("[MyCourses] - shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[MyCourses] - getSnapshotBeforeUpdate");
        let mysnapshot = {
            mymessage: "I am a SnapShot",
            trainerName: prevState.trainerName,
            trainerEmail: prevState.trainerName,
        };
        return mysnapshot;
    }
    componentDidUpdate(prevProps, prevState, mysnapshot) {
        console.log("[MyCourses] -componentDidUpdate");
        // console.log("[MyCourses] -", mysnapshot);
    }


    componentWillUnmount() {
        console.log("[MyCourses] - componentWillUnmount");
    }

    static getDerivedStateFromError(error) {
        console.log("[MyCourses] - getDerivedStateFromError", error);
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log("[MyCourses] - componentDidCatch", error);
        console.log("[MyCourses] - componentDidCatch", info.componentStack);
    }

    render() {
        console.log("[MyCoruses]-M3-render()");
        let courseListToDisplay = this.state.mycourseList.map(
            (mycourse) => (
                <tr key={mycourse.cid}>
                    <td><h6>{mycourse.cid}</h6></td>
                    <td><h6>{mycourse.cname}</h6></td>
                    <td><h6>{mycourse.price}</h6></td>
                </tr>
            )
        );
        return (
            <div className="container">
                <button className="btn btn-primary" onClick={this.showActiveCourses}>Show Active Courses</button>
                <br /><br />
                <div className="container">
                    <table className="table">
                        <tbody>
                            {courseListToDisplay}
                        </tbody>
                    </table>
                </div>
                <h3>Trainer Name: {this.state.trainerName}</h3>
                <h3>Trainer Email: {this.state.trainerEmail}</h3>
                <h3>Hello: {this.props.hello}</h3>
                <h3>Hai: {this.props.hai}</h3>
            </div>
        );
    }
}
export default MyCoruses;