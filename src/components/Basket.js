import React, { Component } from 'react'
import BasketItem from './BasketItem'

export class Basket extends Component {
  render() {
    console.log(this.props)
    return (
        <div className='shop-cart'>
            {this.props.items.map(el => (
                <BasketItem key={el.id} item={el} />
            ))}
        </div>
    )
  }
}

export default Basket