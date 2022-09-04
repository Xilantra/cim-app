import React from "react";
import Header from "./Header";
import RegisterCustomer from "./RegisterCustomer";
import sampleCustomers from "../sample-customers";
import Customer from "./Customer";

class App extends React.Component {
  state = {
    customers: {}
  };

  addCustomer = customer => {
    const customers = { ...this.state.customers };
    customers[`customer${Date.now()}`] = customer;
    this.setState({ customers });
  };

  updateCustomer = (key, updatedCustomer) => {
    const customers = { ...this.state.customers };
    customers[key] = updatedCustomer;
    this.setState({ customers });
  };

  deleteCustomer = key => {
    const customers = { ...this.state.customers };
    customers[key] = null;
    this.setState({ customers });
  };


  loadSampleCustomers = () => {
    this.setState({ customers: sampleCustomers});
  };

  render() {
    return (
      <React.Fragment>
          <Header subheader="Customers List" />
          <div className="row">
            <div className="col-md-8">
              <ul className="c-customers row list-unstyled">
                {Object.keys(this.state.customers).map(key => (
                  <Customer
                    key={key}
                    index={key}
                    details={this.state.customers[key]}
                  />
                ))}
              </ul>
            </div>
            <div className="col-md-4">
              <RegisterCustomer
                addCustomer={this.addCustomer}
                updateCustomer={this.updateCustomer}
                deleteCustomer={this.deleteCustomer}
                loadSampleCustomers={this.loadSampleCustomers}
                customers={this.state.customers}
              />
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default App;