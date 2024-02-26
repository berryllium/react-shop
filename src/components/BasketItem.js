import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class BasketItem extends Component {
  render() {
    return (
      <div className='basketItem'>
        <img src={this.props.item.img} alt='' />
        <div>
            <div>{this.props.item.title}</div>
            <div>
                <span>$ {this.props.item.price}</span>
                <span> - {this.props.item.quantity}</span>
                <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item)} />
            </div>
        </div>
      </div>
    )
  }
}

export default BasketItem