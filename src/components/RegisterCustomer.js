import React from "react";
import AddCustomerForm from "./AddCustomerForm";
import EditCustomerForm from "./EditCustomerForm";

class RegisterCustomer extends React.Component {
  render() {
    return (
      <div className="c-reg">
        <h4>Register Customer</h4>
        <AddCustomerForm addCustomer={this.props.addCustomer} />
        <hr className="animate__animated animate__fadeIn animate__delay-450ms"/>
        {Object.keys(this.props.customers).map(key => (
          <EditCustomerForm
            key={key}
            index={key}
            customer={this.props.customers[key]}
            updateCustomer={this.props.updateCustomer}
            deleteCustomer={this.props.deleteCustomer}
          />
        ))}

        <div className="d-grid gap-2 animate__animated animate__fadeInDown animate__delay-250ms">
            <button className="btn btn-outline-secondary btn-lg" onClick={this.props.loadSampleCustomers}>
                Load Sample
            </button>
        </div>
        
        
      </div>
    );
  }
}

export default RegisterCustomer;