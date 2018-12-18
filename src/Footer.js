import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        // This is a prop, pulling logic down from App.js
        const {year} = this.props;
        return(
            <footer>
                &copy; {year} Steele/McFly Productions
            </footer>
        )
    }
}

export default Footer;