import React, { Component } from "react";

export default class Product extends Component {

    constructor(props){
        console.log("Product constructor");
        super(props);
        this.state = {
            product:this.props.product
        };
    }
  state = {
    product: this.props.product,
  };
  render() {
    // console.log(this.props);
    console.log("render of product");
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div style={{ position: "relative" }}>
              <div className="text-muted"># {this.state.product.id}</div>
              <span
                className="hand-icon"
                style={{ position: "absolute", top: 0, right: 0 }}
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
              <h5 className="pt-5 border-top">
                {this.state.product.productName}
              </h5>
            </div>

            <div>$ {this.state.product.price}</div>
          </div>
          {/* card body ends here*/}
          <div className="card-footer text-end">
            <div className="float-start">
              <span className="badge text-black">
                {this.state.product.quantity}
              </span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 10);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className="float-right"></div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log("Product componentDidMount");
  }

  componentDidUpdate(){
    console.log("Product componentDidUpdate");
  }

  //executes when current instance of current component is being deleted from memory
  componentWillUnmount(){
    console.log("Component will unmount for Product");
  }
}
