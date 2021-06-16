import React from 'react';
import Cookies from 'js-cookie';
import './App.css'

class Order extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      name: '',
      price: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount() {
    fetch('/api/v1/order')
      .then(response => response.json())
      .then(data => this.setState({ orders: data }))
  }

  handleSubmit(e) {
    e.preventDefault();

    const order = {
      name: this.state.name,
      price: this.state.price,
    };

    const options = {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(order),
    }

    fetch('/api/v1/order/', options)
      .then(response => response.json())
      .then(data => console.log(data));
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
        <button onSubmit={this.handleSubmit} type="submit">Submit Order</button>
      </>
    )
  }
}


export default Order;
