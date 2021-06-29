import React from 'react';

import './App.css'

class Order extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      customer: "",
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitOrder(this.state.customer);
    this.setState({customer: ''});
  }

  render() {
    const orderItems = this.props.order.map((item, index) => (
      <li>
        <p>{item.name}</p>
        <p>${item.price}</p>
        <button onClick={() => this.props.removeItemFromOrder(item.name)}>Remove</button>
      </li>
    ));


    const subtotal = this.props.order.reduce((acc, i) => acc + i.price , 0);

    return(
      <>
        <h2>Order</h2>
        <ul>{orderItems}</ul>
        <p>Subtotal: ${subtotal}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Please enter your name" name="customer" value={this.state.customer} onChange={this.handleInput}/>
          <button type="submit">Submit Order</button>
        </form>
      </>
    )
  }
}


export default Order;
