import React, {Component} from 'react';
import './Main.css';
import CounterContainer from './CounterContainer';

class Main extends Component {
    render() {
        return(
            <main>
                <CounterContainer />
            </main>
        )
    }
}

export default Main;