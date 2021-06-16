import { Component } from 'react'
import MenuItem from './MenuItem'

class MenuList extends Component {

  render(){
  const categories = this.props.items.map(item => item.category);
  const uniqueCategories = [...new Set(categories)];

  const menu = uniqueCategories.map((category, index) => {

    const items = this.props.items
      .filter(item => item.category === category)
      .map((item, index) => (
        <MenuItem key={item.name} item={item} addItemToOrder={this.props.addItemToOrder}/>
      ));

      return (
        <>
          <h2 className="category">{category}</h2>
          <ul>{items}</ul>
        </>
      );
  });

  return (
    <>
      {menu}
    </>
  )
}
}

export default MenuList
