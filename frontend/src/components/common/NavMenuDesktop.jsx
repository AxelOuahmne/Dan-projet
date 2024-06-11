import { useState } from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import MegaMenuAll from "../home/MegaMenuAll";
import Bars from "../../assets/images/bars.png";
import { useUserStateContext } from "../../context/ContextProvider";

const NavMenuDesktop = () => {
  const { userToken } = useUserStateContext();
  const [SideNavState, setSideNavState] = useState("sideNavClose");
  const [ContentOverState, setContentOverState] = useState(
    "ContentOverlayClose"
  );

  const MenuBarClickHandler = () => {
    SideNavOpenClose();
  };

  const ContentOverlayClickHandler = () => {
    SideNavOpenClose();
  };

  const SideNavOpenClose = () => {
    if (SideNavState === "sideNavOpen") {
      setSideNavState("sideNavClose");
      setContentOverState("ContentOverlayClose");
    } else {
      setSideNavState("sideNavOpen");
      setContentOverState("ContentOverlayOpen");
    }
  };

  return (
    <>
      <div className="TopSectionDown">
        <Navbar fixed={"top"} className="navbar" bg="light">
          <Container
            fluid={"true"}
            className="fixed-top shadow-sm p-2 mb-0 bg-white"
          >
            <Row>
              <Col lg={4} md={4} sm={12} xs={12}>
                <img
                  onClick={MenuBarClickHandler}
                  className="bar-img"
                  src={Bars}
                  alt="Menu Bar"
                />
                <Link to="/">
                 <h3>Notre Logo</h3>
                  {/* <img className="nav-logo" src={Logo} alt="Logo" />{" "} */}
                </Link>
              </Col>
              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                <div className="input-group w-100">
                  <input type="text" className="form-control" />
                  <Button type="button" className="btn site-btn">
                    <i className="fa fa-search"> </i>
                  </Button>
                </div>
              </Col>
              <Col className="p-1 mt-1" lg={4} md={4} sm={12} xs={12}>
                {userToken ? (
                  <>
                    <Link to="/favourite" className="btn">
                      <i className="fa h4 fa-heart"></i>
                      <sup>
                        <span className="badge text-white bg-danger">3</span>
                      </sup>
                    </Link>
                    <Link to="/notification" className="btn">
                      <i className="fa h4 fa-bell"></i>
                      <sup>
                        <span className="badge text-white bg-danger">5</span>
                      </sup>
                    </Link>
                    <a className="btn">
                      <i className="fa h4 fa-mobile-alt"></i>
                    </a>

                    <Link to="/cart" className="cart-btn">
                      <i className="fa fa-shopping-cart"></i> 3 Items{" "}
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="h4 btn">
                      LOGIN
                    </Link>
                    <Link to="/register" className="h4 btn">
                      Register
                    </Link>
                  </>
                )}
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
      <div className={SideNavState}>
        <MegaMenuAll />
      </div>
      <div
        onClick={ContentOverlayClickHandler}
        className={ContentOverState}
      ></div>
    </>
  );
};

export default NavMenuDesktop;
