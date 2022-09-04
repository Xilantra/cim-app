import React from "react";

class Customer extends React.Component {
  render() { 
    const { image, name, age, title, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="col-md-4 c-customer__item mb-5 animate__animated animate__fadeInLeft">
        <div className="card">
            <img className="card-img-top" src={image} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{title}<br/>{age}</p>
                <button className="btn btn-outline-secondary w-100" disabled={!isAvailable} onClick={() => alert('tel:123456789')} >
                    {isAvailable ? "Contactable" : "Unable to contact"}
                </button>
            </div>
        </div>
        
        
      </li>
    );
  }
}

export default Customer;