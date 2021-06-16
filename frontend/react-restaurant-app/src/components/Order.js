import React from 'react';
import Cookies from 'js-cookie';


class Order extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
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
      <button onClick ={() => {const { order } = props; localStorage.setItem('orderItems', orderItems);}}>Save Order</button>
    </>
  )
}


export default Order;
