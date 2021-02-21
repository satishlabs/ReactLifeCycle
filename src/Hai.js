import { Component } from "react";

class Hai extends Component {
    static displayName = "MyHaiComponent";
    constructor(props) {
        super(props);
        console.log("[Hai]-Constrcutor");
        this.state = {
        }
    }
    static getDerivedStateFromProps(myprops, mystate) {
        console.log("[Hai]-getDerivedStateFromProps()");
        return null;
    }
    componentDidMount() {
        console.log("[Hai]-componentDidMount()");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Hai] -shouldComponentUpdate");
        return true;
        // return false;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Hai] - getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(prevProps, prevState, mysnapshot) {
        console.log("[Hai] -componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("[Hai] - componentWillUnmount");
    }
    render() {
        console.log("[Hai]-render()");
        return (
            <div className="container">
                <br />
                <h3> {this.props.mymessage} </h3>
                <h3> {this.props.mymessage} </h3>
                <br />
            </div>
        )
    }
}
export default Hai;