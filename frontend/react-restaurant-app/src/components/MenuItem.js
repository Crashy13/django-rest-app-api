import { Component } from 'react';


class MenuItem extends Component {

  render() {
    const item = this.props.item;

    return(
      <li key={item.name} className="order">
        <h2 className="itemname">{item.name}</h2>
        <p className="itemdesc">{item.description}</p>
        <p className="itemprice">${item.price}</p>
        <button onClick={() => this.props.addItemToOrder(item)}>Add to order</button>
      </li>
    )
  }
}




export default MenuItem
