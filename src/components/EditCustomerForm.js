import React from "react";

class EditCustomerForm extends React.Component {
  handleChange = event => {
    console.log(event.currentTarget.value);
    const updatedCustomer = {
      ...this.props.customer,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateCustomer(this.props.index, updatedCustomer);
  };
  render() {
    return (
      <div className="c-customer-edit animate__animated animate__fadeInUp">
        <div className="row mb-5">
          <div className="col-md-12">
            <div className="form-floating mb-3">
              <input className="form-control" name="name" type="text" onChange={this.handleChange} value={this.props.customer.name} />
              <label htmlFor="floatingInput">Name</label>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-floating mb-3">
              <input className="form-control" name="title" type="text" onChange={this.handleChange} value={this.props.customer.title} />
              <label htmlFor="floatingInput">Title</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating mb-3">
              <input className="form-control" name="age" type="text" onChange={this.handleChange} value={this.props.customer.age} />
              <label htmlFor="floatingInput">Age</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating mb-3">
              <select className="form-select" aria-label="Select status" name="status" onChange={this.handleChange} value={this.props.customer.status}>
                <option value="available">Available</option>
                <option value="unavailable">Unable to contact</option>
              </select>
              <label htmlFor="floatingSelect">Status</label>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-floating mb-3">
              <input className="form-control" name="image" type="text" onChange={this.handleChange} value={this.props.customer.image} />
              <label htmlFor="floatingInput">Image URL</label>
            </div>
          </div>
          <div className="col-md-12 d-flex justify-content-end">
            <button className="btn btn-outline-warning" onClick={() => this.props.deleteCustomer(this.props.index)}>
              Remove Customer
            </button>
          </div>
        </div>
        
      </div>
    );
  }
}

export default EditCustomerForm;