import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
  //executes when component is mounted
  constructor(props) {
    super(props); //calling super class constructor
    //initialization of state
    console.log("Constructor of shoppingCart-->", props);
    this.state = {
      products: []
    };
  }
  render() {
    console.log("Render of shoppingCart");
    return (
      <div>
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  //render ends here

  //execute after contuctor and render method
  componentDidMount = async() => {
    console.log("componentDidMount of shoppingCart");
    var response = await fetch("http://localhost:5000/products",{method: "GET"}); //fetching data from server
    var prods = await response.json(); //converting response to JSON
    this.setState({products:prods})
    console.log(prods);

    // var promise = fetch("http://localhost:5000/products",{method: "GET"});
    // promise.then((response) => {
    //     console.log("response--",response);
    //     var promise2 = response.json();
    //     promise2.then((prods)=>{
    //         console.log(prods);
    //         this.setState( {products: prods} );

    //     })
    // });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate of shoppingCart",
      prevProps,
      prevState,
      this.props,
      this.state
    );
  }

  componentWillUnmount(){
    console.log("Component will unmount for shoppingCart");
  }

  componentDidCatch(error, info){
    console.log("Error in Shopping Cart");
    console.log(error,info);

    localStorage.lastError = `${error}\n${JSON.stringify(info)}`
  }

  handleIncrement = (product, maxValue) => {
    console.log("handle increment", product);
    //code to increase quantity
    let allProducts = this.state.products;
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity >= maxValue) {
      alert(`Only ${maxValue} allowed for this item`);
    } else {
      allProducts[index].quantity++;
      this.setState({ products: allProducts });
    }
  };
  handleDecrement = (product, minValue) => {
    console.log("handle decrement", product);
    let allProducts = this.state.products;
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity <= minValue) {
    } else {
      allProducts[index].quantity--;
      this.setState({ products: allProducts });
    }
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure to delete?")) {
      allProducts.splice(index, 1);
      this.setState({ products: allProducts });
    }
  };
}
