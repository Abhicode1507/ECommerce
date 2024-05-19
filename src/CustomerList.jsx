import React, { Component } from "react";

export default class CustomerList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "John Doe",
        phone: "1-23-23-23-2",
        address: { city: "New York" },
        photos: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Jane Smith",
        phone: "1277812812",
        address: { city: "Berlin" },
        photos: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Emily Johnson",
        phone: null,
        address: { city: "tokyo" },
        photos: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "Michael Rodriguez",
        phone: "176178188",
        address: { city: "bangkok" },
        photos: "https://picsum.photos/id/1013/60",
      },
      {
        id: 5,
        name: "Lauren Williams",
        phone: "",
        address: { city: "jaipur" },
        photos: "https://picsum.photos/id/1014/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}

          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  //Executes when the user click refresh button
  //this keyword context stick to the component class while making below function as arrow function
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  getPhonetoRender = (phone) => {
    return phone ? (
      phone
    ) : (
      <div className="bg-warning p-2 text-center">No phone</div>
    );
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photos} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhonetoRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  onChangePictureClick = (cust, index) => {
    // console.log(cust);
    // console.log(index);
    var custArr = this.state.customers;
    custArr[index].photos = "https://picsum.photos/id/10"+Math.floor(Math.random() * 9)+"/60"
    this.setState({ customers: custArr})
  };
}
