import React, { Component } from 'react'
import axios from 'axios';
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const mobileRegex = /(7|8|9)\d{9}/;

// const mobileRegex = /^((\+){0,1}91(\s){0,1}(\-){0,1}(\s){0,1}){0,1}98(\s){0,1}(\-){0,1}(\s){0,1}[1-9]{1}[0-9]{7}$;

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
      },
      responseData : [],
    };
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "fullname":
        formErrors.fullname =
          value.length < 3 ? "Please fill the full name" : "";
        break;
      case "mobile":
        formErrors.mobile = mobileRegex.test(value) ? "" : "Invalid mobile number";
          // value.length < 3 ? "Enter your mobile number" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "message":
        formErrors.message =
          value.length < 10 ? "minimum 100 characaters required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  // handleChangeAll = (e) => {
  //   // console.log(e);
  //   this.setState({[e.target.name]: e.target.value})
  // }

  handleSubmit = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      // console.log(JSON.stringify(this.state));
      const postData = {
        fullname : this.state.fullname,
        email : this.state.email,
        mobile : this.state.mobile,
        message : this.state.message,
      };
      const options = {
        headers: {'Access-Control-Allow-Origin': 'swaadhyayan.net/swaadhyayan/'}
      };
      axios.post('http://localhost/swabackend/index.php/functions/saveFeedback', postData)
      .then((response) => {
        this.setState({responseData: response.data});
        console.log(response.data[0].result);
      }, (error) => {
        console.log(error);
      });
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  


  render(){
    const { formErrors } = this.state;
    return(
      <div className="gt_form_map">
        <div className="gt_hdg_1">
          <h3>Send Us a Message</h3>
          <p>{this.responseData}</p>
        </div>

        <form className="gt_contact_form" id="contact-form" onSubmit={this.handleSubmit} method="post">
          <div className="col-md-4">
            <div className="form-group">
              <label>Full name</label>
              <input type="text" className={`form-control ${formErrors.fullname.length > 0 ? "invalid" : ''}`} value={this.state.fullname}
                onChange={this.handleChange} name="fullname" required />
              {formErrors.fullname.length > 0 && (
                <small class="form-text invalid">{formErrors.fullname}</small> 
              )}
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className={`form-control ${formErrors.email.length > 0 ? "invalid" : ''}`} value={this.state.email}
                onChange={this.handleChange} name="email" required />
              {formErrors.email.length > 0 && (
                <small class="form-text invalid">{formErrors.email}</small> 
              )}
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Phone number</label>
              <input type="text" className={`form-control  ${formErrors.mobile.length > 0 ? "invalid" : ''}`} value={this.state.mobile}
                onChange={this.handleChange} name="mobile" required />
              {formErrors.mobile.length > 0 && (
                <small class="form-text invalid">{formErrors.mobile}</small> 
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>Message</label>
              <textarea className={`form-control ${formErrors.message.length > 0 ? "invalid" : ''}`} value={this.state.message}
                onChange={this.handleChange} name="message" required rows="3"></textarea>
              {formErrors.message.length > 0 && (
                <small class="form-text invalid">{formErrors.message}</small> 
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="gt_contact_us_field">
              <button id="submit-message" type="submit" name="submit_msg">Submit</button>
            </div>
            <div id="contact-result"></div>
          </div>
        </form>
      </div>
    )
  }
}

export default Contactform;