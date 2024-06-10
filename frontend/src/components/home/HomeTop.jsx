import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeSlider from './HomeSlider';
import MegaMenu from './MegaMenu';
import axios from 'axios';
import AppURL from '../../api/AppURL';

const HomeTop = () => {
  const [menuData, setMenuData] = useState([]);

  const getData = async () => {
    try {
      const { data } = await axios.get(AppURL.AllCategoryDetails);
      setMenuData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container className="p-0 m-0 overflow-hidden" fluid={true}>
        <Row>
          <Col lg={3} md={3} sm={12}>
            <MegaMenu data={menuData} />
          </Col>
          <Col lg={9} md={9} sm={12}>
            <HomeSlider />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeTop;
