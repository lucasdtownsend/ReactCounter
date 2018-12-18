import React, {Component} from 'react';
import Decrementor from './Decrementor';
import Incrementor from './Incrementor';
import CounterDisplay from './CounterDisplay';

class Counter extends Component {
    render() {
        // This component only handles presentation.
        // Pass in functionality from parent Counter class as props.
        const {decrement, current, increment} = this.props;
        return(
            <div>
                <Decrementor decrease={decrement} />
                <CounterDisplay current={current} />
                <Incrementor increase={increment} />
            </div>
        );
    }
}

export default Counter;