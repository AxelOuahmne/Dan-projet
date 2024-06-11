import FeaturedProducts from "../components/home/FeaturedProducts";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NewArrival from "../components/home/NewArrival";
import Collection from "../components/home/Collection";
import Categories from "../components/home/Categories";
import HomeTop from "../components/home/HomeTop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import HomeTopMobile from "../components/home/HomeTopMobile";
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import { Component } from "react";
import axios from 'axios'
import AppURL from "../api/AppURL";
export class HomePage extends Component{
  componentDidMount(){
    window.scroll(0,0);
    this.GetVisitorDetails();
}
GetVisitorDetails=()=>{
axios.get(AppURL.VisitorDetails).then().catch()
}
render() { 
  return (
    <>
      <div className="Desktop">
        <NavMenuDesktop />
      
        <HomeTop />
      </div>

      <div className="Mobile">
        <NavMenuMobile />
        <HomeTopMobile />
      </div>

      <FeaturedProducts />
      <Collection/>
      <NewArrival />
      <Categories />
     
      <div className="Desktop">
                    <FooterDesktop/>
                    </div>
      <div className="Mobile">
                    <FooterMobile/>
                    </div>

    </>
  );
}
}

export default HomePage;
