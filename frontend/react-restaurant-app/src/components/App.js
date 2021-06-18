import { Component } from 'react';
import Cookies from 'js-cookie';
import './App.css';
import MenuList from './MenuList';
import Order from './Order';
import ViewOrders from './ViewOrders';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      order: [],
      filterItems: [],
    };

    this.addItemToOrder = this.addItemToOrder.bind(this);
    this.removeItemFromOrder = this.removeItemFromOrder.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount(e) {
    fetch('/api/v1/menu/')
      .then(response => response.json())
      .then(data => this.setState({ items: data }));

  }

  handleClick(e) {
    fetch('/api/v1/menu/')
      .then(response => response.json())
      .then(data => this.setState({ items: data }));
  }

  addItemToOrder(item){
    const order = [...this.state.order];
    order.push(item);
    this.setState({order});
  }

  removeItemFromOrder(itemName) {
    const order = [...this.state.order];
    const index = order.findIndex(item => item.name === itemName);
    order.splice(index, 1);
    this.setState({order});
  }

  submitOrder(customer) {

    const subtotal = this.state.order.reduce((acc, i) => acc + i.price , 0);

    const order = {
      customer: customer,
      items: this.state.order,
      subtotal,
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

    return(
      <>
        <button onClick={this.handleClick}>MENU</button>
        <ViewOrders orders={this.state.orders} />
        <h1>Vic's Pizza</h1>
        <MenuList items={this.state.items} addItemToOrder={this.addItemToOrder}/>
        <Order order={this.state.order} removeItemFromOrder={this.removeItemFromOrder} submitOrder={this.submitOrder} className="order"/>
      </>
    )
  }
}




export default App;
