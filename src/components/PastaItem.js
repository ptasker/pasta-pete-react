import React from "react";
import PastaButton from './PastaButton'
  
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
                        <PastaButton index={index} onClick={this.props.addToOrder} toggle={this.props.toggle} orders={this.props.orders || 0} />
                    </div>
                </div>
            </li>
        );
    }
}

export default PastaItem;