import { Component, Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import validation from "../../validation/validation";
import axios from 'axios' 
import AppURL from "../../api/AppURL";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  nameOnChange = (e) => {
    let name = e.target.value;
    this.setState({ name: name });
  };
  emailOnChange = (e) => {
    let email = e.target.value;
    this.setState({ email: email });
  };
  messageOnChange = (e) => {
    let message = e.target.value;
    this.setState({ message: message });
  };

  OnFormSubmit = (event) => {
    let name = this.state.name;
    let email = this.state.email;
    let message = this.state.message;
    let contactForm = document.getElementById('contactForm');
    let sendBtn = document.getElementById('sendBtn');
    if (message.length == 0) {
      toast.error("Please write your message");
    } else if (name.length == 0) {
      toast.error("Please write down our name");
    } else if (email.length == 0) {
      toast.error("Please write down our Email");
    } else if (!validation.NameRegx.test(name)) {
      toast.error("Invaid Name");
    } else {
      sendBtn.innerHTML='Sending...'
      let MyFormData = new FormData();
      MyFormData.append("name", name);
      MyFormData.append("email", email);
      MyFormData.append("message", message);

      axios
        .post(AppURL.PostContact, MyFormData)
        .then(function (response) {
          if (response.status == 200 && response.data == 1) {
            toast.success("Message Send Successfully");
            sendBtn.innerHTML="Send"
            contactForm.reset();
          } else {
            toast.error("Error");
            sendBtn.innerHTML="Send"
          }
        })
        .catch(function (error) {
          toast.error(error);
          sendBtn.innerHTML="Send"
        });
    }

    event.preventDefault();
  };
  render() {
    return (
      <Fragment>
        <Container>
          <Row className="p-2">
            <Col
              className="shadow-sm bg-white mt-2"
              md={12}
              lg={12}
              sm={12}
              xs={12}
            >
              <Row className="text-center">
                <Col
                  className="d-flex justify-content-center"
                  md={6}
                  lg={6}
                  sm={12}
                  xs={12}
                >
                  <Form id="contactForm"  className="onboardForm" onSubmit={this.OnFormSubmit}>
                    <h4 className="section-title-login">CONTACT WITH US </h4>
                    <h6 className="section-sub-title">
                      Please Contact With Us{" "}
                    </h6>
                    <input
                      className="form-control m-2"
                      type="text"
                      placeholder="Enter Your Name"
                      onChange={this.nameOnChange}
                    />

                    <input
                      className="form-control m-2"
                      type="email"
                      placeholder="Enter Email"
                      onChange={this.emailOnChange}
                    />

                    <Form.Control
                      as={"textarea"}
                      rows={3}
                      className="form-control m-2"
                      placeholder="Message"
                      onChange={this.messageOnChange}
                    />
                    <Button
                    id="sendBtn"
                      className="btn btn-block m-2 site-btn-login"
                      type="submit"
                    >
                      {" "}
                      Send{" "}
                    </Button>
                  </Form>
                </Col>

                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                  <br></br>
                  <br></br>
                  <p className="section-title-contact">
                    <b>Buisson Sas</b> 13 Av. de Franche Comté, 94150 Rungis
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5260.389981981757!2d2.3537730768625456!3d48.75907250769008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e676a1217a8283%3A0xded05f8dca84b518!2sBuisson%20Sas!5e0!3m2!1sfr!2sfr!4v1715933240584!5m2!1sfr!2sfr"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default Contact;
