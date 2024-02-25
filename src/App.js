import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
  }

  render() {
     return (
    <div className="wrapper">
      <Header />
      <Items items={this.state.items} />
      <Footer />
    </div>
  )}
}

export default App;