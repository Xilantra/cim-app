import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
    render() {
        return (
        <div className="c-header">
            <h1>
                Customer Information Management
            </h1>
            <h4>{this.props.subheader}</h4>
        </div>
        );
    }
}

Header.propTypes = {
    subheader: PropTypes.string.isRequired
  };

export default Header;
