import axios from "axios";
import { useEffect, useState } from "react";
import AppURL from "../../api/AppURL";


const MegaMenuAll = () => {

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

  const MenuItemClick = (event) => {
    event.target.classList.toggle("active");
    var panel = event.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
  const CatList = Array.isArray(menuData) ? menuData : [];
  const MyView = CatList.map((cat, i) => (
    <div key={i.toString()}>
      <button className="accordionAll" onClick={MenuItemClick}>
        <img className="accordionMenuIconAll" src={cat.image} alt="icon" />
        &nbsp; {cat.rayon}
      </button>
      <div className="panelAll">
        <ul>
          {Array.isArray(cat.familles) &&
            cat.familles.map((famille, j) => (
              <li key={`${i}-${j}`}>
                <a href="#" className="accordionItemAll">
                  {famille.name}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  ));

  return (
    <div className="accordionMenuDivAll">
      <div className="accordionMenuDivInsideAll">{MyView}</div>
    </div>
  );
};

export default MegaMenuAll;
