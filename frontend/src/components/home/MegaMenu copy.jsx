import { Link } from "react-router-dom";


const MegaMenu = ({ data }) => {
  const MenuItemClick = (event) => {
    event.target.classList.toggle('active');
    const panel = event.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  };

  const renderSousFamilles = (sousFamilles) => {
    if (!sousFamilles || sousFamilles.length === 0) {
      return null;
    }
    return (
      <ul>
        {sousFamilles.map((sousFamille, k) => (
          <li key={`sousFamille-${k}`} className=""><Link>{sousFamille.sous_famille_name}</Link></li>
        ))}
      </ul>
    );
  };

  const renderFamilles = (familles) => {
    if (!familles || familles.length === 0) {
      return null;
    }
    return (
      <ul>
        {familles.map((famille, j) => (
          <li key={`famille-${j}`}>
            <Link href="#" className="accordionItem">
              {famille.name}
            </Link>
            {renderSousFamilles(famille.sous_familles)}
          </li>
        ))}
      </ul>
    );
  };

  const CatList = Array.isArray(data) ? data : [];
  const MyView = CatList.map((cat, i) => (
    <div key={i.toString()}>
      <button className="accordion" onClick={MenuItemClick}>
        <img className="accordionMenuIcon" src={cat.image} alt="icon" />
        &nbsp; {cat.rayon}
      </button>
      <div className="panel">{renderFamilles(cat.familles)}</div>
    </div>
  ));

  return (
    <div className="accordionMenuDiv">
      <div className="accordionMenuDivInside">{MyView}</div>
    </div>
  );
};

export default MegaMenu;
