import React from "react";

class PastaButton extends React.Component {

    handleClick(props) {
        props.onClick(props.index);
    }

    render() {
        return (
            <>
                <button onClick={() => this.handleClick(this.props)} className="btn btn-primary">Add to order</button> <mark>{this.props.orders}</mark>
            </>
        );
    }
}

export default PastaButton;