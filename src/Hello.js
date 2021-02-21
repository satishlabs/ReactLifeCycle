import { Component } from "react";

class Hello extends Component {
    static displayName = "MyHelloComponent";
    static defaultProps = {
        mytrainer: "Srinivas",
        mycolor: 'Red'
    }


    constructor(props) {
        super(props);
        console.log("[Hello]-M1-Constrcutor");
        this.state = {
            message: "OK Guys",
        };

    }
    changeHelloMessage = () => {
        console.log("Button - Clicked");
        this.setState({
            message: "Hello Guys, How are you!!!",
        });
    }
    static getDerivedStateFromProps(myprops, mystate) {
        console.log("[Hello]-getDerivedStateFromProps()");
        return null;
    }
    componentDidMount() {
        console.log("[Hello]-componentDidMount()");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Hello] -shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Hello] - getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps, prevState, mysnapshot) {
        console.log("[Hello] -componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("[Hello] - componentWillUnmount");
    }


    render() {
        console.log("[Hello]-render()");
        return (

            <div className="container">
                <button
                    className="btn btn-primary"
                    onClick={this.changeHelloMessage} >
                    Show and Hide Hello
                    </button>
                <br />
                <h3> {this.state.message} </h3>
                <h3> MyTrainer : {this.props.mytrainer} </h3>
                <h3> MyColor : {this.props.mycolor} </h3>
                <br />
            </div>
        );
    }
}
export default Hello;