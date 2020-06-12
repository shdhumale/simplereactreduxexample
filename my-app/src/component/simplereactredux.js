import React from 'react'
//below package is used to connect react application or react component with Redux.
import { connect } from 'react-redux'

class Simplereactredux extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // counter: 1

        }
        /* this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this); */
    }

    /*  increment() {
         this.setState({ counter: this.state.counter + 1 })
     }
 
     decrement() {
         this.setState({ counter: this.state.counter - 1 })
     }
  */


    render() {
        return (
            <div>
                <h1>This is parent component</h1>
                <label > Counter: <span>{this.props.counter}</span> </label>
                <br></br>
                <button onClick={this.props.increment}>Increment</button>
                <button onClick={this.props.decrement}>Decrement</button>
            </div >
        )
    }


}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: "action_type_increment" }),
        decrement: () => dispatch({ type: "action_type_decrement" }),
    }

}
// use the connect HOC to connect reactjs component to redux
export default connect(mapStateToProps, mapDispatchToProps)(Simplereactredux)