import React from 'react'

class ViewOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    }

  this.handleClick = this.handleClick.bind(this)

  }

  handleClick(event) {
    fetch('/api/v1/order/')
      .then(response => response.json())
      .then(data => this.setState({ orders: data }));

  }
  render() {
    const orders = this.state.orders.map(order => (
      <li key={order.id}>
        <p>{order.id}</p>
        <p>{order.customer}</p>
        <p>{JSON.stringify(order.items)}</p>
        <p>${order.subtotal}</p>
        <p>{order.isComplete}</p>
      </li>
    ))

    return(
      <>
      <button onClick={this.handleClick}>VIEW ORDERS</button>
        {orders}
      </>
    )
  }
}

export default ViewOrders;
