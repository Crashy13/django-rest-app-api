import React from 'react';
import Cookies from 'js-cookie';
import './App.css'

class Order extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      customer: '',
      name: '',
      price: '',
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    fetch('/api/v1/order')
      .then(response => response.json())
      .then(data => this.setState({ orders: data }))
  }

  handleInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const order = {
      customer: this.state.customer,
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
        <form onSubmit={this.handleSubmit}>
        <input type="text" name="customer" value={this.state.customer} onChange={this.handleInput}/>
        <button type="submit">Submit Order</button>
        </form>
      </>
    )
  }
}


export default Order;
