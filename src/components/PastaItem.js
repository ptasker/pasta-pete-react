import React from "react";

class PastaItem extends React.Component {

    render() {
        const { details, index } = this.props;

        return (
            <li className="pasta-dish list-unstyled">
                <div className="row">
                    <div className="col-md-3">
                        <img src={details.image} alt={details.name} />
                    </div>
                    <div className="col-md-9 text-left">
                        <h3>{details.name}</h3>
                        <p>
                            {details.desc}
                        </p>
                        <button onClick={() => this.props.addToOrder(index)} className="btn btn-primary">Add to order</button> <mark>{this.props.orders || 0}</mark>
                    </div>
                </div>
            </li>
        );
    }
}

export default PastaItem;