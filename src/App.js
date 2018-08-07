import React, { Component } from 'react';
import './App.css';
import Logo from './logo.svg';
import PastaItem from './components/PastaItem';
import Header from './components/Header';
import samplePasta from './sample-pasta';

class Wat extends Component {
    render() {
      return (
          <>
          <p>Bugs: Ehhhhh, what's up doc?</p>
          <p>Fudd: Quiet WABBIT!?!</p>
          --hilarity ensues--
          </>
      );
    }
  }

class App extends Component {

    constructor() {
        super();
        this.state = {
            pastadishes: samplePasta,
            orders: {}
        };

        this.addToOrder = this.addToOrder.bind(this);
    };

    addToOrder(key) {
        const orders = { ...this.state.orders };
        //update or add
        orders[key] = orders[key] + 1 || 1;

        this.setState({ orders });
    }

    render() {
        return (
            <div className="petes-pasta" >
            <div><Wat /></div>
                <img src={Logo} className="logo" alt="Pete's Pasta" />
                <Header tagline="The best sauce in the Ottawa Valley!" />
                <ul className="pasta-list">
                    {
                        Object.keys(this.state.pastadishes).map(key =>
                            <PastaItem index={key} key={key} details={this.state.pastadishes[key]} addToOrder={this.addToOrder} orders={this.state.orders[key]} />
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default App;