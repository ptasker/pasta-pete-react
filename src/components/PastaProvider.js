import React, { Component } from 'react';
import { PastaContext } from './PastaContext'
import SpiceButton from './SpiceButton';

class PastaProvider extends Component {

    render() {
        return (
            <PastaContext.Provider value={this.props.spicyness}>
                <SpiceButton changeSpice={this.props.toggleSpicyness} />
            </ PastaContext.Provider>
        );
    }
}

export default PastaProvider;