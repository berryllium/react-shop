import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      basket: [],
      items: [
        {
          id: 1,
          title: 'Chair gray',
          img: './img/chair.jpeg',
          desc: 'Coll chair',
          category: 'chairs',
          price: 99.99,
        },
        {
          id: 2,
          title: 'Chair white',
          img: './img/chair-white.jpeg',
          desc: 'Chair for children',
          category: 'chairs',
          price: 59.99,
        },
        {
          id: 3,
          title: 'Table for dinner',
          img: './img/table.jpeg',
          desc: 'dinner table',
          category: 'tables',
          price: 59.99,
        }
      ]
    }

    const addToBasket = function(item) {
      let basket = [...this.state.basket]
      let isFound = false
      basket.forEach((el, i) => {
        if(el.id === item.id) {
          isFound = true
          basket[i].quantity ++
        }
      })
      if(!isFound) {
        item.quantity = 1
        basket.push(item)
      }
      this.setState({basket: basket})
    }
    this.addToBasket = addToBasket.bind(this)
  }

  render() {
     return (
    <div className="wrapper">
      <Header basket={this.state.basket} />
      <Items items={this.state.items} onAdd={this.addToBasket} />
      <Footer />
    </div>
  )}
}

export default App;