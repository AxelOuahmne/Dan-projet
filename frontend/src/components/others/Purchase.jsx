import { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AppURL from "../../api/AppURL";
import parse from "html-react-parser";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Purchase extends Component {
  constructor() {
    super();
    this.state = {
      purchase: "",
      loaderDiv: "",
      mainDiv: "d-none",
    };
  }
  componentDidMount() {
    let SiteInfoPurchase = sessionStorage.getItem("AllSiteInfo");

    if (SiteInfoPurchase == null) {
      axios
        .get(AppURL.AllSiteInfo)
        .then((response) => {
          if (response.status == 200) {
            console.log(response.data);
            let JsonData = response.data[0]["parchase_guide"];
            this.setState({
              purchase: JsonData,
              loaderDiv: "d-none",
              mainDiv: "",
            });

            sessionStorage.setItem("SiteInfoPurchase", JsonData);
          } else {
            toast.error("Somthing Went Wrong", {
              position: "bottom-center",
            });
          }
        })
        .catch((error) => {
          toast.error("Somthing Went Wrong", {
            position: "bottom-center",
          });
        });
    } else {
      this.setState({ purchase: SiteInfoPurchase });
    }
  }
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
              <div className={this.state.loaderDiv}>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
                <div className="ph-item">
                  <div className="ph-col-12">
                    <div className="ph-row">
                      <div className="ph-col-4"></div>
                      <div className="ph-col-8 empty"></div>
                      <div className="ph-col-6"></div>
                      <div className="ph-col-6 empty"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                      <div className="ph-col-12"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={this.state.mainDiv}>
                {parse(this.state.purchase)}
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer />
      </Fragment>
    );
  }
}

export default Purchase;
