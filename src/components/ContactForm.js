import React, { Component } from 'react'
import axios from 'axios';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const mobileRegex = /(7|8|9)\d{9}/;

// const mobileRegex = /^((\+){0,1}91(\s){0,1}(\-){0,1}(\s){0,1}){0,1}98(\s){0,1}(\-){0,1}(\s){0,1}[1-9]{1}[0-9]{7}$;

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  // console.log(Object.values(rest));
  
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
      fullname: '',
      mobile: '',
      email: '',
      message: '',
      formErrors: {
        fullname: "",
        mobile: "",
        email: "",
        message: ""
      },
      responseData : [],
      responseLoader : false,
      responseM : false
      // responseMessage: null,
    };
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    // this.setState({
    //   responseData : [],
    // })
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
      this.setState({
        responseLoader : true
      });
      const postData = {
        fullname : this.state.fullname,
        email : this.state.email,
        mobile : this.state.mobile,
        message : this.state.message,
      };
      // const options = {
      //   headers: {'Access-Control-Allow-Origin': 'http://localhost/swaabackend/'}
      // };
      axios.post('https://swabackend.foreverbooks.co.in/index.php/api/saveFeedback', postData)
      .then((response) => {
        this.setState({
          responseData: response.data,
          responseLoader : false,
          responseM : true
          // responseMessage : response.data.result  
        });
        console.log(response.data.result);
        // console.log(this.state.responseMessage);

        console.log(this.state.responseData);
        console.log(this.state.responseData.length);
        
        
        this.setState({
          fullname: '',
          mobile: '',
          email: '',
          message: '',
        });
      }, (error) => {
        this.setState({

          responseLoader : false,
          responseM : true
        });
        console.log(error);
      });
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  render(){
    const { formErrors } = this.state;
    return(
      <div className="contact-form">
        <div className="row">
          <div className="col-md-12 text-center Cheading">
            <h3>Send Us a Message</h3>
          </div>
        <div className="col-md-4">
          <div className="contact1-pic js-tilt cphoto text-center" data-tilt="">
            <img src="./assets/images/img-01.png" alt="" className='img-thumbnail'/>
          </div>
        </div>
        <div className="col-md-8">
        
        {this.state.responseM &&
          <div className="alert alert-success">
          <strong>{this.state.responseData.message}</strong>
        </div>
        }
        
        <form id="contact-form" onSubmit={this.handleSubmit} method="post">
          <div className="col-md-4">
            <div className="form-group">
              <label>Full name</label>
              <input type="text" className={`form-control ${formErrors.fullname.length > 0 ? "invalid" : ''}`} value={this.state.fullname}
                onChange={this.handleChange} name="fullname" required />
              {formErrors.fullname.length > 0 && (
                <small className="form-text invalid">{formErrors.fullname}</small> 
              )}
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className={`form-control ${formErrors.email.length > 0 ? "invalid" : ''}`} value={this.state.email}
                onChange={this.handleChange} name="email" required />
              {formErrors.email.length > 0 && (
                <small className="form-text invalid">{formErrors.email}</small> 
              )}
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Phone number</label>
              <input type="text" className={`form-control  ${formErrors.mobile.length > 0 ? "invalid" : ''}`} value={this.state.mobile}
                onChange={this.handleChange} name="mobile" required />
              {formErrors.mobile.length > 0 && (
                <small className="form-text invalid">{formErrors.mobile}</small> 
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label>Message</label>
              <textarea className={`form-control ${formErrors.message.length > 0 ? "invalid" : ''}`} value={this.state.message}
                onChange={this.handleChange} name="message" required rows="3"></textarea>
              {formErrors.message.length > 0 && (
                <small className="form-text invalid">{formErrors.message}</small> 
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="gt_contact_us_field">
              {
                this.state.responseLoader == true ? (
                  <div>
                    <img alt="loader" src="./assets/images/images/spinner.gif"/>
                  </div>
                ) :
                  <button id="submit-message" type="submit" name="submit_msg">Submit</button>
              }

            </div>
            <div id="contact-result"></div>
          </div>
        </form>
        </div>
        </div>
      </div>
    )
  }
}

export default Contactform;