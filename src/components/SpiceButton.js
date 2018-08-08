import React from "react";
import { PastaContext } from './PastaContext';

function SpiceButton(props) {
    return (
        <PastaContext.Consumer>
            {spice => (
                <button onClick={props.changeSpice} style={{ backgroundColor: spice.background }}>
                    Change Spicyness
                 </button>
            )}
        </PastaContext.Consumer>
    );
}

export default SpiceButton;