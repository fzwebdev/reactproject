import React, { Component } from 'react'

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Contactform extends Component{

  constructor(props) {
    super(props);

    this.state = {
      fullname: null,
      mobile: null,
      email: null,
      message: null,
      formErrors: {
        fullname: "",
        mobile: "",
        email: "",
        message: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.fullname}
        Last Name: ${this.state.mobile}
        Email: ${this.state.email}
        message: ${this.state.message}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "fullname":
        formErrors.fullname =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "mobile":
        formErrors.mobile =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "message":
        formErrors.message =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  // handleChangeAll = (e) => {
  //   // console.log(e);
  //   this.setState({[e.target.name]: e.target.value})
  // }


  render(){

    const { formErrors } = this.state;

    return(
      <div className="gt_form_map">
        <div className="gt_hdg_1">
          <h3>Send Us a Message</h3>
        </div>
        <form className="gt_contact_form" id="contact-form" onSubmit={this.handleSubmit} method="post">
          <div className="col-md-4">
            <div className="gt_contact_us_field">
              <input className={formErrors.fullname.length > 0 ? "error" : null} type="text" placeholder="Your Name" id="name" value={this.state.fullname}
                onChange={this.handleChange} name="fullname" required /> 
            </div>
            {formErrors.fullname.length > 0 && (
              <span className="errorMessage">{formErrors.fullname}</span>
            )} 
          </div>
          <div className="col-md-4">
            <div className="gt_contact_us_field">
              <input className="c_ph" type="text" placeholder="Email Adress:" id="email" name="email" required 
              onChange={this.handleChange} value={this.state.email} />
            </div>
            {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
          </div>
          <div className="col-md-4">
            <div className="gt_contact_us_field">
              <input className="c_ph" type="text" placeholder="Phone Number" id="subject" value={this.state.mobile} 
              onChange={this.handleChange} name="mobile" required />
            </div>
            {formErrors.mobile.length > 0 && (
              <span className="errorMessage">{formErrors.mobile}</span>
            )}
          </div>
          <div className="col-md-12">
            <div className="gt_contact_us_field">
              <textarea className="gt_c_bg" name="message" id="message" value={this.state.message} placeholder="Message" 
              onChange={this.handleChange} required></textarea>
            </div>
            {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
          </div>
          <div className="col-md-12">
            <div className="gt_contact_us_field">
              <input id="submit-message" type="submit" value="Send Now" name="submit_msg" />
            </div>
            <div id="contact-result"></div>
          </div>
        </form>
      </div>
    )
  }
}

export default Contactform;