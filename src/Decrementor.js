import React, {Component} from 'react';

// This is a different way of doing a component.
// It's a function and not a class.
// This is the only component in this project done this way.
const Decrementor = (props) => {
        const {decrease} = props;
        return(
            <button onClick={decrease}>
                -1
            </button>
        );
}

export default Decrementor;