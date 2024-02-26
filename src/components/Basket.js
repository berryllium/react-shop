import React, { Component } from 'react'
import BasketItem from './BasketItem'

export class Basket extends Component {
  render() {
    return (
        <div className='shop-cart'>
            {this.props.items.map(item => (
                <BasketItem key={item.id} item={item} onDelete={this.props.onDelete}/>
            ))}
        </div>
    )
  }
}

export default Basket