import React from "react";

class AddCustomerForm extends React.Component {
  nameRef = React.createRef();
  ageRef = React.createRef();
  statusRef = React.createRef();
  titleRef = React.createRef();
  imageRef = React.createRef();

  createCustomer = event => {
    event.preventDefault();
    const customer = {
      name: this.nameRef.current.value,
      age: parseFloat(this.ageRef.current.value),
      status: this.statusRef.current.value,
      title: this.titleRef.current.value,
      image: this.imageRef.current.value
    };
    
    this.props.addCustomer(customer);
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="c-form" onSubmit={this.createCustomer}>
        <div className="row">
          <div className="col-md-12">
            <div className="form-floating mb-3 animate__animated animate__fadeInUp">
              <input className="form-control" name="name" ref={this.nameRef} type="text" placeholder="Name" />
              <label htmlFor="floatingInput">Name</label>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-floating mb-3 animate__animated animate__fadeInUp animate__delay-250ms">
              <input className="form-control" name="title" ref={this.titleRef} type="text" placeholder="Title" />
              <label htmlFor="floatingInput">Title</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating mb-3 animate__animated animate__fadeInUp animate__delay-350ms">
              <input className="form-control" name="age" ref={this.ageRef} type="text" placeholder="Age" />
              <label htmlFor="floatingInput">Age</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating mb-3 animate__animated animate__fadeInUp animate__delay-450ms">
              <select className="form-select" aria-label="Select status" name="status" ref={this.statusRef}>
                <option value="available" defaultValue>Available</option>
                <option value="unavailable">Unable to contact</option>
              </select>
              <label htmlFor="floatingSelect">Status</label>
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-floating mb-3 animate__animated animate__fadeInUp animate__delay-550ms">
              <input className="form-control" name="image" ref={this.imageRef} type="text" placeholder="Image" />
              <label htmlFor="floatingInput">Image URL</label>
            </div>
          </div>

        </div>

        <div className="d-grid gap-2 animate__animated animate__fadeInDown animate__delay">
          <button type="submit" className="btn btn-primary btn-lg">Add Customer</button>
        </div>
      </form>
    );
  }
}

export default AddCustomerForm;