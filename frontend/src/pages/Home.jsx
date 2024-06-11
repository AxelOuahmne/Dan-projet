
import "../assets/css/Home.css"
import image from '../assets/images/ch.svg'
const Home = () => {
  return <>

        <div className="app">
        <h1>Votre Plateforme <br/>de Connexion pour <br /><span>Téléprospecteurs, Commerciaux et Régies</span></h1>
        <div className="cat-home">
      <div className="container m-auto grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4">
        <div className="box shadow-2xl ">
          <img src={image} alt="" />
          <h2>Change mon <br></br> chauffage</h2>
        </div>
        <div className="box shadow-2xl ">
          <img src={image} alt="" />
          <h2>Change mon <br></br> chauffage</h2>
        </div>
        <div className="box shadow-2xl ">
          <img src={image} alt="" />
          <h2>Change mon <br></br> chauffage</h2>
        </div>
        <div className="box shadow-2xl ">
          <img src={image} alt="" />
          <h2>Change mon <br></br> chauffage</h2>
        </div>
        <div className="box shadow-2xl ">
          <img src={image} alt="" />
          <h2>Change mon <br></br> chauffage</h2>
        </div>
        
    </div>
      </div>
        </div>
     
  </>;
};
export default Home;