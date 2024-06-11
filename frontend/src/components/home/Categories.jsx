import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AppURL from "../../api/AppURL";

const Categories = () => {
  const [menuData,setMenuData]=useState([]);
  const getData = async ()=>{
    try {
      const { data } = await axios.get(AppURL.AllCategoryDetails);
      console.log(data)
      setMenuData(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getData()
    console.log("menuData : ", menuData)
  },[]);
  const CatList = Array.isArray(menuData) ? menuData : [];
  const MyView = CatList.map((CatList,i)=>{
    return <Col key={i.toString()} className="p-0" key={1} xl={2} lg={2} md={2} sm={6} xs={6}>
    <Card className="h-100 w-100 text-center">          
    <Card.Body> 
    <img className="center" src={CatList.image} />  
    <h5 className="category-name">{CatList.rayon}</h5>  
    </Card.Body>
    </Card> 
    </Col> 
})
  return (
    <>
      <Container className="text-center" fluid={true}>
        <div className="section-title text-center mb-55">
          <h2> CATEGORIES</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
        <Row> 
               {MyView}
          </Row>
      </Container>
    </>
  );
};

export default Categories;
