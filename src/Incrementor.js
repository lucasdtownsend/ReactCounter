import React, {Component} from 'react';

class Incrementor extends Component {
    render() {
        // const increase = this.props.increase
        // Above and below do some thing. Below is destructured.
        const {increase} = this.props;
        return(
           <button onClick={increase}>
                +1
           </button>
        );
    }
}

export default Incrementor;